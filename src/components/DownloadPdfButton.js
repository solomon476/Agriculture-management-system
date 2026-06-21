"use client";
import { useEffect, useRef } from "react";

export default function DownloadPdfButton({ transactions, totalIncome, totalExpenses, profit }) {
  const handlePrint = () => {
    // Build a simple printable HTML page
    const rows = transactions.map(t => `
      <tr>
        <td>${new Date(t.transaction_date).toLocaleDateString()}</td>
        <td>${t.description || "—"}</td>
        <td>${t.category || t.type}</td>
        <td style="color:${t.type === "Income" ? "green" : "red"}; text-align:right">
          ${t.type === "Income" ? "+" : "-"}KES ${Number(t.amount).toLocaleString()}
        </td>
      </tr>
    `).join("");

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>AgriBloom Financial Report</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 32px; color: #1e293b; }
          h1 { color: #16a34a; }
          .summary { display: flex; gap: 32px; margin: 24px 0; }
          .summary div { padding: 16px; border-left: 4px solid #16a34a; background: #f8fafc; }
          .summary label { font-size: 12px; text-transform: uppercase; color: #64748b; }
          .summary h3 { margin: 4px 0 0; font-size: 24px; }
          table { width: 100%; border-collapse: collapse; margin-top: 24px; }
          th { background: #f1f5f9; padding: 10px 12px; text-align: left; font-size: 12px; text-transform: uppercase; color: #64748b; }
          td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
          @media print { button { display: none; } }
        </style>
      </head>
      <body>
        <h1>🌱 AgriBloom Financial Report</h1>
        <p style="color:#64748b">Generated on ${new Date().toLocaleDateString()}</p>
        <div class="summary">
          <div><label>Total Income</label><h3 style="color:green">KES ${totalIncome.toLocaleString()}</h3></div>
          <div><label>Total Expenses</label><h3 style="color:red">KES ${totalExpenses.toLocaleString()}</h3></div>
          <div><label>Net Profit</label><h3 style="color:${profit >= 0 ? "green" : "red"}">KES ${profit.toLocaleString()}</h3></div>
        </div>
        <table>
          <thead><tr><th>Date</th><th>Description</th><th>Category</th><th>Amount</th></tr></thead>
          <tbody>${rows || "<tr><td colspan='4' style='text-align:center;color:#64748b'>No transactions recorded yet</td></tr>"}</tbody>
        </table>
        <script>window.onload = () => window.print();</script>
      </body>
      </html>
    `;

    const win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
  };

  return (
    <button
      onClick={handlePrint}
      className="btn btn-primary flex items-center gap-2 text-sm px-3 py-2"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download PDF
    </button>
  );
}
