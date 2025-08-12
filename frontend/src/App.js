import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">Hello, Bootstrap!</h1>
      <p className="lead text-center">
        This is a simple Bootstrap template inside a React App.
      </p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success me-2">Primary Action</button>
        <button className="btn btn-outline-secondary">Secondary Action</button>
      </div>
    </div>
  );
}

export default App;
