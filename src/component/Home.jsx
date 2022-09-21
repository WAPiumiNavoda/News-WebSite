import React from 'react'
import '../component/CSS/Home.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Home() {

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
    <div>
      <div className='home_div'>
             <h1 className="home_header">WE GIVE YOU TO THE BEST PRODÜCT</h1>
             <h3 className="home2_header">WE GIVE YOU TO THE BEST PRODÜCT</h3>
             <button className='home_button' >Let's get start </button>
        </div>

        {/* <div className="lates_div">
          <h1 className="latest_h1">Recent News</h1>
        </div> */}
       
      <div className="row mt-3 mb-4">
        <div className="col d-flex justify-content-center">
          <button type="button" data-filter="*" className="btn-primary mx-1 text-dark">
            All
          </button>
          <button type="button" data-filter="*" className="btn-primary mx-1 text-dark">
           Sport News
          </button>
          <button type="button" data-filter="*" className="btn-primary mx-1 text-dark">
            Tech News
          </button>
        </div>
      </div>
        
        
        {/* Latest news */}
        <div className='all_news'>
          {
           news && news.map((news)=>{
              return(
                <>
                <div className='all_row'>
                <div className="all_col">

                </div>
     
                <div className="all_col2">
                <h2 className="all_h4">Top 10 phone application and 2025 mobile design awards</h2>
                <h2 className="all_h3">Jacqueline Fernandez has been named as an accused in a case involving conman Sukesh Chandrashekar 
                by the Enforcement Directorate or ED.</h2>
                <h5>{news.date}</h5>
                <button className="all_btn">Read More</button>
                </div>
               </div>
               </>
              )
            })
          }
        
        </div>
     
      

       
    </div>
  )
}

export default Home