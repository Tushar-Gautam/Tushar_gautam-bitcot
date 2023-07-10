import { useState } from "react";
import productListIcon from "../assets/images/icons/Path.svg";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

function Sidebar() {
  const { isSidebarOpen } = useGlobalContext();
  const [isSidebarListVisibile, setIsSidebarListVisibile] = useState(false);
  return (
    <>
      <aside
        className={`sidebar-wrapper custom-scrollbar wow fadeInLeft ${
          isSidebarOpen ? "open" : null
        }`}
      >
        <div className="sidebar-content-wrapper">
          <ul className="sidebar-list">
            <li
              className={`sidebar-list-item has-subnav active ${
                isSidebarListVisibile ? "open" : null
              }`}
              id="listTem"
            >
              <button
                type="button"
                className="sidebar-link"
                id="pro_toggle"
                onClick={() => setIsSidebarListVisibile(!isSidebarListVisibile)}
              >
                <img src={productListIcon} alt="Product List" />
                <span className="item-text">Ecommerce</span>
              </button>
              <ul>
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) => {
                      return isActive ? "sidebar-link active" : "sidebar-link";
                    }}
                  >
                    Product List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/add-product"}
                    className={({ isActive }) => {
                      return isActive ? "sidebar-link active" : "sidebar-link";
                    }}
                  >
                    Add Product
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
