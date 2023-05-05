import React, { useEffect, useState } from "react";
import "./AdminUsers.scss";
import axios from "axios";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const users = await axios.get("http://localhost:8000/users");
    setUsers(users.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  //Delete User:
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUsers();
  };

  return (
    <div className="admin-users">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phonenumber</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phonenumber}</td>
                  <td>
                    <button onClick={() => deleteUser(user.id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
