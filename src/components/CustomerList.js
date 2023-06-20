import React from "react";

function CustomerList({ customers }) {
  return (
    <div className="layout-column align-items-center justify-content-start">
      {!customers.length && <p data-testid="no-results">No Results Found!</p>}
      <div className="card w-40 pt-30 pb-8 mt-20">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th>Gender</th>
              <th>Income</th>
            </tr>
          </thead>
          {customers.length && (
            <tbody data-testid="searched-customers">
              {customers?.map(
                ({ name, age, location, gender, income }, index) => (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{location}</td>
                    <td>{gender}</td>
                    <td>{income}</td>
                  </tr>
                )
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default CustomerList;
