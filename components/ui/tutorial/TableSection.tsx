interface TableSectionProps {
  title: string;
  headers: string[];
  rows: string[][];
}

export default function TableSection({ title, headers, rows }: TableSectionProps) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold">{title}</h2>

      <div className="mt-6 overflow-x-auto rounded-xl border">
        <table className="w-full border-collapse">
          <thead className="bg-muted">
            <tr>
              {headers.map((header) => (
                <th key={header} className="border p-3 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} className="border p-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
