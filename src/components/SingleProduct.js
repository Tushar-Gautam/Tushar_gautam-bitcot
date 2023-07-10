import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../context";

function SingleProducts({ id, category, variation, productName, status }) {
  const { deleteProduct } = useGlobalContext();
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <>
      <tr>
        <td>
          <label className="checkbox_container text-uppercase">{id}</label>
        </td>
        <td>
          <div className="media align-items-center">
            <div className="product_thumb">
              <img src={variation[0]?.productImage ?? null} alt="Images" />
            </div>
            <div className="media-body product_des">
              <h6 className="product_name">{productName}</h6>
            </div>
          </div>
        </td>
        <td className="text_primary">{category}</td>
        <td>{variation[0]?.price}</td>
        <td>{variation[0]?.stock}</td>
        <td>{status}</td>
        <td className="actions">
          <div className="dropdown dropdown_wrapper ">
            <button
              className="dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                alt="Donts"
              />
            </button>
            <div
              className={`dropdown-menu dropdown-menu-right ${
                openDropdown ? "show" : null
              }`}
            >
              <NavLink className="dropdown-item" to={`/edit-product/${id}`}>
                View Details{" "}
              </NavLink>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => deleteProduct(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default SingleProducts;
