import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const ViewTeam = () => {
    const [data,setdata]=useState([])

        const fetchData=()=>{


          axios.get("http://localhost:3000/view-team  ").then(
            (res)=>{
              setdata(res.data)
            }
          ).catch()

        }

        useEffect(()=>{
          fetchData()
        },[])
  return (
    <div>
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All course</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              
              <th>team ID</th>
              <th>team Name</th>
              <th>team Leader Name</th>
              <th>leader Email</th>
              <th>leader phone</th>
              <th>college Name</th>
              <th>number of members</th>
                
              
              
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.teamid}</td>
                        <td>{value.teamName}</td>
                        <td>{value.teamLeaderName}</td>
                        <td>{value.leaderEmail}</td>
                        <td>{value.leaderPhone}</td>
                        <td>{value.collegeName}</td>
                        <td>{value.numberOfMembers}</td>
                         
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewTeam