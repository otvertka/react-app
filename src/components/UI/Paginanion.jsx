import React from "react";
import ReactPaginate from "react-paginate";

const Paginanion = () => {
  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      <ReactPaginate breakLabel="..." nextLabel="next >" onPageChange={(event) => console.log(event)} pageRangeDisplayed={5} pageCount={3} previousLabel="< previous" renderOnZeroPageCount={null} />
    </>
  );
};

export default Paginanion;
