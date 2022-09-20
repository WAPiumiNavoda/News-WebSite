import React from 'react'

function NewsAdd() {
  return (
    <div>
           
    <div className='container border bodrder-secondary mt-5 bg-light pb-5'>
      <h1 className='d-flex justify-content-center pt-4'>ADD NEWS</h1>
    <form >
        <div className="row pt-5">
            <div className="col">
                <input type="text" 
                className="form-control" 
                placeholder="Place name"
               />
            
            </div>
             
            <div className="col">
                 <input type="text" 
                 className="form-control" 
                 placeholder="Hotel name" 
                />
            </div>
        </div>

        <div className="row pt-5">
            <div className="col">
                <input 
                type="text"
                className="form-control" 
                placeholder="No of persons" 
               />
            </div>
          <div className="col">
                 <input 
                 type="text" 
                 className="form-control" 
                 placeholder="No of rooms" 
                 />
          </div>
        </div>

        <div className="row pt-5 pb-5">
            <div className="col">
                <input type="text" 
                className="form-control" 
                placeholder="Place name"
               />
            
            </div>
             
            <div className="col">
                 <input type="text" 
                 className="form-control" 
                 placeholder="Hotel name" 
                />
            </div>
        </div>
        
        <button type="button" className="btn btn-primary mb-3">Submit</button>
    </form>
</div>

    </div>
  )
}

export default NewsAdd