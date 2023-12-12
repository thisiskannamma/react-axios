import React from 'react'
import axios from 'axios';
import './Style.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [user, setUser] = useState([]);
    //Mount, UnMount, Update
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                // Extract only the common names of the countries
                setUser(res.data);
                console.log("Use data:", res.data);
            })
    }, []);

    const handleDelete=(id)=>{
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log('deleted',res);
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='container mt-4'>
            <h2>CRUD using React AXIOS</h2>
            <table className='table table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>WebSite</th>
                        <th>Company</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {user.map((item, index) => (
                        <tr key={index}>
                            <td >{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>

                            <td>{item.email}</td>
                            <td>{`${item.address.street}, ${item.address.suite}, ${item.address.city},${item.address.zipcode}`}</td>
                            <td >{item.phone}</td>
                            <td >{item.website}</td>
                            <td >{`${item.company.name},${item.company.catchPhrase},${item.company.bs}`}</td>
                            <td>
                              <Link to={`/Edit/${item.id}`} className='btn btn-success'>Edit</Link>
                              <button onClick={()=>{handleDelete(item.id)}}className='btn btn-danger'>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Home