import React from "react";
import CustomerList from "./CustomerList";
import { useSearch } from "../hooks/useSearch";
import customers from "../List";

function SearchCustomer() {
  const { searchedCustomers, handleSearch, search } = useSearch({ customers });

  return (
    <>
      <div className="layout-row align-items-center justify-content-center mt-30">
        <input
          className="large mx-20 w-20"
          data-testid="search-input"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Enter search term (Eg: Phil)"
        />
      </div>
      <CustomerList customers={searchedCustomers} />
    </>
  );
}

export default SearchCustomer;
