import React from 'react'
import './dashboard.css'
import AdminNav from './AdminNav'

const Dashboard = () => {
  return (
    <section>
      <>
        <AdminNav />
      </>
        <div className='dashboard_items'>
            <div className="revenue_box">
              <h5>Total Sales</h5>
              <span>$7890</span>
            </div>
            
            <div className="order_box">
              <h5>Orders</h5>
              <span>789</span>
            </div>
            
            <div className="products_box">
              <h5>Total Products</h5>
              <span>4</span>
            </div>
            
            <div className="users_box">
              <h5>Total Users</h5>
              <span>1</span>
            </div>

        </div>
            
    </section>
  )
}

export default Dashboard