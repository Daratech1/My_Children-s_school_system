import React, { useState } from "react";

export const usePagination=(data, itemsPerPage)=> {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

 export const  usePagination1=(data, itemsPerPage)=> {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);
  
    function currentData1() {
      const begin = (currentPage - 1) * itemsPerPage;
      const end = begin + itemsPerPage;
      return data.slice(begin, end);
    }
  
    function next1() {
      setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
    }
  
    function prev1() {
      setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    }
  
    function jump1(page) {
      const pageNumber = Math.max(1, page);
      setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
    }
  
    return { next1, prev1, jump1, currentData1, currentPage, maxPage };
  }





