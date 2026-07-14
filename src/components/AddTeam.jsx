import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const AddTeam = () => {
    const[input,setinput]=useState({
         teamid : "",
        teamName : "",
        teamLeaderName : "",
        leaderEmail : "",
        leaderPhone : "",
        collegeName : "",
        numberOfMembers : ""

    })

    const inputHandler=(event)=>{
    setinput({...input,[event.target.name]:event.target.value})
 }

 const dataHandler=()=>{
        console.log(input);
        axios.post("http://localhost:3000/add-team",input).then(
            (res)=>{
                setinput(res.data)
                alert("data added")
            }
        ).catch(
            (error)=>{
                console.log(error.res.data);
                console.log(error.res.status);
                
            }
        )
        
 }
  return (
    <div>
<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 className="text-center">ADD TEAM</h1>
                   <div className="row g-5">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label" >Team ID</label>
                        <input type="text"
                         className="form-control" required
                         name='teamid'
                         value={input.teamid}
                         onChange={inputHandler}

                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Team name </label>
                        <input type="text"
                         className="form-control" required
                         name='teamName'
                         value={input.teamName}
                         onChange={inputHandler}

                        />
                        
                    </div>
                     <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Team Leader Name</label>
                        <input type="text"
                         className="form-control"
                          required
                          name='teamLeaderName'
                          value={input.teamLeaderName}
                          onChange={inputHandler}
                          />
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Leader email</label>
                         <input type="text"
                         className="form-control"
                          required
                          name='leaderEmail'
                          value={input.leaderEmail}
                          onChange={inputHandler}
                          />
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">LeaderPhone</label>
                        <input type="text"
                         className="form-control"
                          required
                          name='LeaderPhone'
                          value={input.LeaderPhone}
                          onChange={inputHandler}
                          />
                       
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">college Name</label>
                        <input name="text" id=""
                         className="form-control"
                         name='collegeName'
                         value={input.loginTime}
                         onChange={inputHandler}
                         ></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Number of Members</label>
                        <input type="text" className="form-control"
                        name='numberofMembers'
                         value={input.numberofMembers}
                            onChange={inputHandler}
                        />
                    </div>
                    
                    
                    
                    
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-5 ">
                        <button className="btn btn-success" onClick={dataHandler}>submit</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default AddTeam