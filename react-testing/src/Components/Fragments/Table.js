import React from "react";
import Columns from "./Columns";

function Table() {
  return (
    <div className="container">
      <table className="table table-dark">
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
