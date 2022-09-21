import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";


function NewsAdd() {

  
  /*create usestates*/
  const [name,setname] = useState("")
  const [topic,setTopic] = useState("");
  const [date,setDate] = useState("");
  const [newsType,setType] = useState("");
  const [imgURL,setURL] = useState("");
  const [news,setNews] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newNews = {
       name,
       topic,
       date,
       newsType,
       imgURL
    }
    
    // /*Validation*/
    // console.log(!place)
    // if(!place || !hotelName ||!noRooms || !noPerson || !checkDate ||!price ||!description || status){
    //   setError(true);
    //   return false;
    // }

    Swal.fire({
      title:"Going to add new hotel",
      text:"Do you want to add?",
      icon:"warning",
      buttons: true,
      dangerMode: true
      
    }).then(respuesta=>{
       if(respuesta){
      axios.post("http://localhost:8070/news/addNews",newNews).then(()=>{
          Swal.fire({text:"News Details Added",
                icon:"success"
                });
        }).catch((err)=>{
          alert(err)
          console.log(err);
        })
       }
    })

  };

  return (
    <div>
           
           <div className="admin_column" >
       <div className='container border bodrder-secondary mt-5 bg-light pb-5'>
      <h3 className='d-flex justify-content-center pt-4'>ADD NEWS</h3>
    <form onSubmit={onFormSubmit}>
        <div className="row pt-5">
            <div className="col">
                <input type="text" 
                className="form-control" 
                placeholder="Place name"
                onChange={(e)=>{
                  setname(e.target.value)
                }}
               />
            
            </div>
             
            <div className="col">
                 <input type="text" 
                 className="form-control" 
                 placeholder="Hotel name" 
                 onChange={(e)=>{
                  setTopic(e.target.value)
                }}
                />
            </div>
        </div>

        <div className="row pt-5">
            <div className="col">
                <input 
                type="text"
                className="form-control" 
                placeholder="No of persons" 
                onChange={(e)=>{
                  setDate(e.target.value)
                }}
               />
            </div>
          <div className="col">
                 <input 
                 type="text" 
                 className="form-control" 
                 placeholder="No of rooms" 
                 onChange={(e)=>{
                  setType(e.target.value)
                }}
                 />
          </div>
        </div>
        <div className="row pt-5 pb-5`mgn">
            <div className="col">
                <input type="text" 
                className="form-control" 
                placeholder="Place name"
                onChange={(e)=>{
                  setURL(e.target.value)
                }}
               />
            
            </div>
             
        </div>
        
        <button type="submit" className="btn btn-primary mb-3 mt-4">Submit</button>
    </form>
</div>

       </div>


      </div>
  )
}

export default NewsAdd