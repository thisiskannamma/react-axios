import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Edit() {
    const { id } = useParams();
    const[values,setValues]=useState({
        id:id,
        name:'',
        UserName:"",
        email:'',
        Address:"",
        Phone:"",
        Website:"",
        Company:"",
    })
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setValues({...values,name:res.data.name,
                                    UserName:res.data.username,
                                    email:res.data.email,
                                    Address:res.data.address.city,
                                    Phone:res.data.phone,
                                    Website:res.data.website,
                                    Company:res.data.company.name,
                                    })
            })
            .catch(err => console.log(err))
    }, [])

    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,values)
        .then(res => {
            console.log(res);
           navigate('/');
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
            <div className='w-50 border bg-primary text-white p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name="name" className='form-control' placeholder='Enter name' value={values.name} onChange={e=>setValues({...values,name:e.target.value})}></input>
                    </div>
                    <div>
                        <lable htmlFor="username">UserName:</lable>
                        <input type='text' name="username" className='form-control' placeholder='Enter UserName'value={values.UserName} onChange={e=>setValues({...values,UserName:e.target.value})} ></input>

                    </div>
                    <div>
                        <lable htmlFor="email">Email:</lable>
                        <input type='email' name="email" className='form-control' placeholder='Enter email' value={values.email} onChange={e=>setValues({...values,email:e.target.value})}></input>

                    </div>
                    <div>
                        <lable htmlFor="Address">Address:</lable>
                        <input type='text' name="Address" className='form-control' placeholder='Enter Address' value={values.Address} onChange={e=>setValues({...values,Address:e.target.value})}></input>

                    </div>
                    <div>
                        <lable htmlFor="Phone">phone:</lable>
                        <input type='text' name="phone" className='form-control' placeholder='Enter phone number' value={values.Phone} onChange={e=>setValues({...values,Phone:e.target.value})}></input>

                    </div>
                    <div>
                        <lable htmlFor="website">Website:</lable>
                        <input type='text' name="website" className='form-control' placeholder='Enter Website' value={values.Website} onChange={e=>setValues({...values,Website:e.target.value})}></input>

                    </div>
                    <div>
                        <lable htmlFor="company">Company:</lable>
                        <input type='text' name="company" className='form-control' placeholder='Enter company name'value={values.Company} onChange={e=>setValues({...values,Company:e.target.value})}></input>

                    </div>
                    <br />
                    <button className='btn btn-warning'>Edit</button>
                </form>
            </div>

        </div>
    )
}

export default Edit