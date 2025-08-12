import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEquipment = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/api/equipment/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setEquipment(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading equipment data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>Failed to fetch equipment data: {error}</p>
          <hr />
          <button className="btn btn-outline-danger" onClick={fetchEquipment}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">Equipment Inventory</h1>
      <p className="lead text-center">Data fetched from Django API</p>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">API Response Data</h5>
            </div>
            <div className="card-body">
              <pre className="bg-light p-3 rounded">
                {JSON.stringify(equipment, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Equipment List</h5>
            </div>
            <div className="card-body">
              {equipment.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {equipment.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="text-muted">
                    <i className="fas fa-box-open fa-3x mb-3"></i>
                    <h5>No Equipment Found</h5>
                    <p className="mb-0">
                      There are no equipment items in the inventory yet.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-success me-2" onClick={fetchEquipment}>
          Refresh Data
        </button>
        <button className="btn btn-outline-secondary">Secondary Action</button>
      </div>
    </div>
  );
}

export default App;
