import React from "react";

function Heading2() {
  return (
    <div className="listcontent mt-5 ">
      <div className="d-flex pt-3 pb-1 px-4 mt-3  gap-2 headings border-bottom pb-2">
        <p className="col-2 m-0 ">Book Title</p>
        <p className="col-2 m-0 text-start">Auther</p>
        <p className="col-2 m-0 text-start">Issue Date</p>
        <p className="col-2 m-0  text-start">Due Date</p>
        <p className="col-2 m-0 text-start">Return Date</p>
        <p className="col-2 m-0 text-start">
          Fine<br></br>(Rs.10 per day)
        </p>
      </div>
    </div>
  );
}

export default Heading2;
