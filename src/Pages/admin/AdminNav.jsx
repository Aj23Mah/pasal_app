import React from "react";
// import "../styles/admin-nav.css";
import { Container, Col } from "reactstrap";

// import useAuth from "../custom-hooks/useAuth";
import { Link } from "react-router-dom";
// import Dashboard from "./Dashboard";

import './adminNav.css'


const admin_nav = [
  {
    display: "Profile",
    path: "/profile",
  },
  {
    display: "Dashboard",
    path: "/profile/dashboard",
  },
  {
    display: "Add-Products",
    path: "/profile/dashboard/add-products",
  },
  {
    display: "All-Products",
    path: "/profile/dashboard/all-products",
  },
  // {
  //   display: "Orders",
  //   path: "/dashboard/orders",
  // },
  // {
  //   display: "Users",
  //   path: "/dashboard/users",
  // },
];

const AdminNav = () => {

  return (
    <>

      <section className="admin_menu p-0 mt-4">
        <Container>
          <Col className="flex justify-center backdrop-brightness-50">
            <div className="admin_navigation">
                {admin_nav.map((item, index) => (
                  <div className="admin_menu-item" key={index}>
                    <Link
                      to={item.path}
                      activeClassName="active_admin-menu"
                      // className={(navClass) =>
                      //   navClass.isActive ? "active_admin-menu" : ""
                      // }
                    >
                      {item.display}
                    </Link>
                  </div>
                ))}
            </div>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default AdminNav; 
