import React from 'react'
import '../component/CSS/AdminPanel.css'

const AdminPanel = () => {
  return (
    <div>
        <div className="admin_div">
          <div className="row_admin">
            <div className="col_admin">
               <h4>PIUMI NAVODA</h4>
               <button className='add_btn'>Add</button>

            <div className="col1_admin"></div>
            </div>
          </div>
        </div>

        <div className='admin_div1'>
        <table class="table" style={{boarder:"1px solid black"}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
        </div>
    </div>
  )
}

export default AdminPanel