import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [data, totalPages]);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div>
        <h1>Employee Data Table</h1>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "green" }}>
            <th style={{ textAlign: "left", padding: "8px" }}>ID</th>
            <th style={{ textAlign: "left", padding: "10px" }}>Name</th>
            <th style={{ textAlign: "left", padding: "10px" }}>Email</th>
            <th style={{ textAlign: "left", padding: "10px" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center", padding: "12px" }}>
                No data
              </td>
            </tr>
          ) : (
            paginatedData.map((employee) => (
              <tr key={employee.id}>
                <td style={{ textAlign: "left", padding: "8px" }}>{employee.id}</td>
                <td style={{ textAlign: "left", padding: "10px" }}>{employee.name}</td>
                <td style={{ textAlign: "left", padding: "10px" }}>{employee.email}</td>
                <td style={{ textAlign: "left", padding: "10px" }}>{employee.role}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8 }}>
        <button onClick={() => handlePage(Math.max(1, page - 1))} disabled={page === 1} style={{ background: "#04be5bff"}}>
          Prev
        </button>

        <span
          aria-current="page"
          style={{
            minWidth: 36,
            textAlign: "center",
            padding: "6px 8px",
            borderRadius: 4,
            background: "#04be5bff",
            fontWeight: "bold",
          }}
        >
          {page}
        </span>

        <button onClick={() => handlePage(Math.min(totalPages, page + 1))} disabled={page === totalPages} style={{ background: "#04be5bff"}}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
