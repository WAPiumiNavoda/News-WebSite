import React from 'react'
import '../component/CSS/Home.css'
import RecentNewsCard from './Cards/RecentNewsCard'

function Home() {
  return (
    <div>
      <div className='home_div'>
             <h1 className="home_header">WE GIVE YOU TO THE BEST PRODÜCT</h1>
             <h3 className="home2_header">WE GIVE YOU TO THE BEST PRODÜCT</h3>
             <button className='home_button' >Let's get start </button>
        </div>

        <div className="lates_div">
          <h1 className="latest_h1">Recent News</h1>
        </div>

        
      <div className='contact_div'>
        <div class="row_card" >
          <RecentNewsCard />
          <RecentNewsCard />
          <RecentNewsCard />
        </div>
        </div>

        <div className="lates_div">
          <h1 className="latest_h1">Latest News</h1>
        </div>

        {/* Latest news */}
        <div className='all_news'>
          <div className='all_row'>
           <div className="all_col">

           </div>

           <div className="all_col2">
           <h2 className="all_h4">Top 10 phone application and 2025 mobile design awards</h2>
           <h2 className="all_h3">Jacqueline Fernandez has been named as an accused in a case involving conman Sukesh Chandrashekar 
           by the Enforcement Directorate or ED.</h2>
           <h5>2022 July 23</h5>
           <button className="all_btn">Read More</button>
           </div>
          </div>
        </div>
        
        
        {/* Latest news */}
        <div className='all_news'>
          <div className='all_row'>
           <div className="all_col">

           </div>

           <div className="all_col2">
           <h2 className="all_h4">Top 10 phone application and 2025 mobile design awards</h2>
           <h2 className="all_h3">Jacqueline Fernandez has been named as an accused in a case involving conman Sukesh Chandrashekar 
           by the Enforcement Directorate or ED.</h2>
           <h5>2022 July 23</h5>
           <button className="all_btn">Read More</button>
           </div>
          </div>
        </div>

        
        {/* Latest news */}
        <div className='all_news'>
          <div className='all_row'>
           <div className="all_col">

           </div>

           <div className="all_col2">
           <h2 className="all_h4">Top 10 phone application and 2025 mobile design awards</h2>
           <h2 className="all_h3">Jacqueline Fernandez has been named as an accused in a case involving conman Sukesh Chandrashekar 
           by the Enforcement Directorate or ED.</h2>
           <h5>2022 July 23</h5>
           <button className="all_btn">Read More</button>
           </div>
          </div>
        </div>
       
    </div>
  )
}

export default Home