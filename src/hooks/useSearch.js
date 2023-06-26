import { useEffect, useState } from "react";

export function useSearch({ customers }) {
  const [search, setSearch] = useState("");
  const [searchedCustomers, setSearchedCustomers] = useState(customers);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const filteredCustomers = customers.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().split(" ")[0].startsWith(search)
      )
    );
    setSearchedCustomers(filteredCustomers);
  }, [search]);

  return { search, searchedCustomers, handleSearch };
}
