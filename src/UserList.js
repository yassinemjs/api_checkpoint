import React from 'react'
import {useState ,useEffect} from 'react'
import axios from 'axios';
import './App.css';

const UserList = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])

  const displayUser = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.street}</td> 
          <td>{user.company.name}</td>
        </tr>
      )
    })
  }

  return (
    <div className="users">
      <h1 className="title">API User's List</h1>
      <table > 
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{displayUser()}</tbody>
      </table>
    </div>
      )
 }
 
export default UserList;
