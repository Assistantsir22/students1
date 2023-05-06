import React, { useState } from 'react'

const AddStudents = () => {
    const [students,setstudents]=useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:""
    });
    const handleChange=(e)=>{
         const value=e.target.value;
         setstudents({...students,[e.target.name]:value})
    }
    const saveStudents=(e)=>{
        e.preventDefault(e)
    }
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Students</h1>

            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'> First Name</label>
                <input name='firstName' value={students.firstName} onChange={(e)=>handleChange(e)} type='text'className='h-10 w-96 border mt-2 px-2 py-2'></input>
               
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'> Last Name</label>
                <input name='lastName' value={students.lastName} onChange={(e)=>handleChange(e)} type='text'className='h-10 w-96 border mt-2 px-2 py-2'></input>
               
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'> Email</label>
                <input  name='emailId' value={students.emailId} onChange={(e)=>handleChange(e)} type='email'className='h-10 w-96 border mt-2 px-2 py-2'></input>
             
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
               <button onClick={saveStudents} className='rounded text-white font-semibold hover:bg-green-700 bg-green-400 py-2 px-6'>Save</button>
               <button className='rounded text-white font-semibold hover:bg-red-700 bg-red-400 py-2 px-6'>clear</button>
            </div>

        </div>

    </div>
  )
}

export default AddStudents;