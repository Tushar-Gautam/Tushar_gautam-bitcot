import React from "react";

function AddProductTab({ title, isActive, selectTab }) {
  return (
    <>
      <button
        className={`nav-link ${isActive ? "active" : null}`}
        id="pills-general-tab"
        data-toggle="pill"
        data-target="#pills-general"
        type="button"
        role="tab"
        aria-controls="pills-general"
        aria-selected="true"
        onClick={selectTab}
      >
        {title}
      </button>
    </>
  );
}

export default AddProductTab;
