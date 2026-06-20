-- AgriBloom Backend Database Schema

-- 1. Create custom types
CREATE TYPE crop_status AS ENUM ('Growing', 'Harvesting', 'Completed');
CREATE TYPE item_category AS ENUM ('Seed', 'Fertilizer', 'Chemical', 'Tool');
CREATE TYPE transaction_type AS ENUM ('Income', 'Expense');

-- 2. Create the Farms table
CREATE TABLE public.farms (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    owner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    farm_name VARCHAR(255) NOT NULL,
    size_acres DECIMAL(10, 2),
    location VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS) for farms
ALTER TABLE public.farms ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can only view their own farms" ON public.farms FOR SELECT USING (auth.uid() = owner_id);
CREATE POLICY "Users can only insert their own farms" ON public.farms FOR INSERT WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "Users can only update their own farms" ON public.farms FOR UPDATE USING (auth.uid() = owner_id);
CREATE POLICY "Users can only delete their own farms" ON public.farms FOR DELETE USING (auth.uid() = owner_id);

-- 3. Create the Crops table
CREATE TABLE public.crops (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    farm_id UUID REFERENCES public.farms(id) ON DELETE CASCADE,
    crop_name VARCHAR(100) NOT NULL,
    variety VARCHAR(100),
    planted_date DATE,
    expected_harvest_date DATE,
    status crop_status DEFAULT 'Growing',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for crops
ALTER TABLE public.crops ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage crops for their farms" ON public.crops 
    FOR ALL USING (farm_id IN (SELECT id FROM public.farms WHERE owner_id = auth.uid()));

-- 4. Create the Inventory table
CREATE TABLE public.inventory (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    farm_id UUID REFERENCES public.farms(id) ON DELETE CASCADE,
    item_name VARCHAR(255) NOT NULL,
    category item_category NOT NULL,
    quantity DECIMAL(10, 2) DEFAULT 0,
    unit VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for inventory
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage inventory for their farms" ON public.inventory 
    FOR ALL USING (farm_id IN (SELECT id FROM public.farms WHERE owner_id = auth.uid()));

-- 5. Create the Transactions table
CREATE TABLE public.transactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    farm_id UUID REFERENCES public.farms(id) ON DELETE CASCADE,
    type transaction_type NOT NULL,
    amount DECIMAL(12, 2) NOT NULL,
    category VARCHAR(100),
    transaction_date DATE DEFAULT CURRENT_DATE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for transactions
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage transactions for their farms" ON public.transactions 
    FOR ALL USING (farm_id IN (SELECT id FROM public.farms WHERE owner_id = auth.uid()));
