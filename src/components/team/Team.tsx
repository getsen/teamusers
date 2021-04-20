import React, { useEffect, useState } from "react";
import { useApiHook } from "../../hooks/useApiHook";
import { TeamTableHead } from '../../constants/const';
import { fetchUsers } from "../../api/Team";
const styles = require("./Team.scss");

const Team = () => {
  const [searchVal, setSearchVal] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  // get data, loading status and error from hook
  const { data, loading, error } = useApiHook({
    retrieve: fetchUsers,
  });

  useEffect(() => {
    if (data.length) setFilteredData(data);
  }, [data]);

  /**
   * 
   * @param filter 
   * returns query object to filter from records
   */
  const buildFilter = (filter: any) => {
    let query: any = {};
    for (let keys in filter) {
      if (filter[keys] && filter[keys].length > 0) {
        query[keys] = filter[keys];
      }
    }
    return query;
  };

  /**
   * @param query
   * returns filter data by query object 
   */
  const filterData = (query: any) => {
    const filterData = data.filter((item: any) => {
      for (let key in query) {
        if (
          item[key] === undefined ||
          !item[key].toLowerCase().includes(query[key].toLowerCase())
        ) {
          return false;
        }
      }
      return true;
    });
    return filterData;
  };

  useEffect(() => {
    const query = buildFilter(searchVal);
    if (Object.keys(query).length) setFilteredData(filterData(query));
    else setFilteredData(data);
  }, [searchVal]);

  // On filter input changes update state and filter the results
  const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal({ ...searchVal, [event?.target.id]: event?.target.value });
  };

  // Render filter row with input fields
  const filterHeadeRow = () => {
    return Object.keys(TeamTableHead).map((key, index) => (
      <th key={index}>
        <input data-testid={key} type="text" id={key} onChange={(e) => onFilterChange(e)} />
      </th>
    ));
  };

  // Render table head with names
  const headRow = () => {
    return Object.values(TeamTableHead).map((title, index) => (
      <th key={index}>{title}</th>
    ));
  };

  return (
    <>
      {error && <div className={styles.error}>Error:  Unable to load team users!!!</div>}
      <div className={styles.tableDiv}>
        <table>
          <thead>
            <tr>{filterHeadeRow()}</tr>
            <tr>{headRow()}</tr>
          </thead>
          <tbody data-testid={'tableBody'} className="trhover">
            {loading ? (
              <tr>
                <td colSpan={8}>
                  <div className={styles.empty}>Loading....</div>
                </td>
              </tr>
            ) : filteredData.length ? (
              filteredData.map((user: any, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                      <a href={"mailto:" + user.email}>{user.email}</a>
                    </td>
                    <td>{user.address}</td>
                    <td>
                      <a href={"tel:" + user.phone.split("x")[0]}>
                        {user.phone.split("x")[0]}
                      </a>{" "}
                      <span>Ext: {user.phone.split("x")[1]}</span>
                    </td>
                    <td>{user.website}</td>
                    <td>{user.company}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={8}>
                  <div className={styles.empty}>No Records</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Team;
