import React, { useState, useEffect } from "react";

const initialData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

const Table = () => {
  const [rows, setRows] = useState([]);
  const [dateAsc, setDateAsc] = useState(true);
  const [viewsAsc, setViewsAsc] = useState(true);

  useEffect(() => {
    setRows(initialData);
  }, []);

  const handleDateSort = () => {
    const sorted = [...rows].sort((a, b) =>
      dateAsc ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
    );
    setRows(sorted);
    setDateAsc(!dateAsc);
  };

  const handleViewsSort = () => {
    const sorted = [...rows].sort((a, b) =>
      viewsAsc ? a.views - b.views : b.views - a.views
    );
    setRows(sorted);
    setViewsAsc(!viewsAsc);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={handleDateSort}>
          Sort by Date
        </button>
        <button onClick={handleViewsSort} style={{ marginLeft: 8 }}>
          Sort by Views
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((item, index) => (
            <tr key={index} className="dataRow">
              <td className="tableData">{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
