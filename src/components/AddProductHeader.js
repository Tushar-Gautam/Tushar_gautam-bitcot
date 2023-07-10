function AddProductHeader({ headingText }) {
  return (
    <th scope="col" className="th_didivder">
      {headingText}
      <span className="filter-order-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="13"
          viewBox="0 0 11 13"
        >
          <g
            id="Group_22146"
            data-name="Group 22146"
            transform="translate(-501 -126.5)"
          >
            <path
              id="Icon_ionic-md-arrow-dropdown"
              data-name="Icon ionic-md-arrow-dropdown"
              d="M9,13.5,14.5,19,20,13.5Z"
              transform="translate(492 120.5)"
              fill="rgba(69,85,96,0.2)"
            ></path>
            <path
              id="Icon_ionic-md-arrow-dropdown-2"
              data-name="Icon ionic-md-arrow-dropdown"
              d="M9,19l5.5-5.5L20,19Z"
              transform="translate(492 113)"
              fill="rgba(69,85,96,0.2)"
            ></path>
          </g>
        </svg>
      </span>
    </th>
  );
}

export default AddProductHeader;
