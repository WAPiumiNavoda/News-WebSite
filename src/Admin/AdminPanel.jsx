import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../component/CSS/AdminPanel.css'
import Swal from "sweetalert2";

const AdminPanel = () => {


  /*create usestates*/

  const [news,setNews] = useState([]);

 
  useEffect(()=>{
    axios.get('http://localhost:8070/news/get').then((res)=>{
      setNews(res.data.existingPosts);
      console.log("all data",res);
    }).catch((err)=>{
      alert(err.message);
    })
  },[])


  return (

   
       <table className="table m-5 w-75" style={{boarder:"1px solid black"}}>
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">aCTION</th>
    </tr>
  </thead>
  <tbody>
    {news && news.map((news,index)=>(
          <tr>
            <th>{index+1}</th>
            <td>{news.name}</td>
            <td>{news.topic}</td>
            <td>{news.date}</td>
            <td>{news.newsType}</td>
            <td>{news.imgURL}</td>
            <td className="py-4 px-6 text-right">
                    <Link
                      to="/admin/destinations/new"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
        </tr>
          ))
        } 
  </tbody>
</table>
   
  )
}

export default AdminPanel