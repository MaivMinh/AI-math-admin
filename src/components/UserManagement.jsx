import React, { useEffect, useRef } from "react";
import userServices from "../services/userService.js";
import { data } from "react-router-dom";

const UserManagement = () => {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const fetched = useRef(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      userServices
        .get()
        .then((response) => {
          console.log(response.data);
          setUsers(response.data.results);
          setLoading(false);
          fetched.current = true;
        })
        .catch((error) => {
          setError(error);
        });
    };
    if (!fetched.current) {
      fetchUsers();
    }
  }, []);

  return <div>
    
  </div>;
};

export default UserManagement;
