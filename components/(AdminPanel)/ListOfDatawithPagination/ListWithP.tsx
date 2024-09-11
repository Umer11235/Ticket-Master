"use client";
import Icons from '@/utiles/icons/icons';
import React, { useState } from 'react';
import Modal from '../modals/Modal';
import { TableProps } from './IList';


const ListWithP: React.FC<TableProps> = ({ columns, data, itemsPerPage = 3,bgColor }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
///Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalId, setModalId] = useState("");
  const [userId, setUserId] = useState<string[]>([]);


    const openModal = () =>{ setIsModalOpen(!isModalOpen)};

    const handleCheckboxChange = (eventId: string) => {
    setUserId((prevUserId)=>{
      if(prevUserId.includes(eventId)){
        return prevUserId.filter(id=>id !== eventId);
      }
      else{
        return [...prevUserId,eventId]
      }

    });
    };
    ///Modal

console.log(userId);
const selectedUsers = data.filter(data => userId.includes(data.eventId));
  // Filter the data based on the search term
  const filteredData = data.filter(item =>
    columns.some(column => item[column.key].toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === i ? 'text-blue-600 border-blue-300 bg-blue-50' : 'text-gray-500 bg-white border-gray-300'} hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  };

  return (
    <div className="relative overflow-x-auto  py-2  sm:rounded-lg ">
      <div className="p-4 gap-4 flex flex-col items-end">
     
  {/* Progree Bar */}
       <div className='flex flex-wrap items-center gap-4'>
<div className=" max-w-full w-[400px] bg-gray-200 rounded-full h-1.5  dark:bg-gray-700">
  <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-[45%]"></div>
</div>
       <p className="items-cente text-xs">30 / 200 Events</p>
       </div>
 {/* Progree Bar */}
     
    <div className={`flex justify-between p-3 ${bgColor?bgColor:"bg-slate-100"} w-full rounded-lg`}>
        
       <div className='flex items-end'>
        <ul className='flex gap-4 m-auto'>
          {/* <li> <Icons icon="Add"/></li> */}
          <li> <Icons icon="FunnelSimple"/></li>
          {/* <li> <Icons icon="ArrowsDownUp"/></li> */}
          {/* <li> <Icons icon="threeDots"/></li> */}
          </ul>
       </div>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
          className="w-60 border rounded-lg px-2 py-1"
          />
    </div> 
        
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase border-b-2 bg-gray-50  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input id="checkbox-all-search"  type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                
              </div>
            </th>
            {columns.map(column => (
              <th key={column.key} scope="col" className="px-3 w-32">{column.label}</th>
            ))}
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead> 
        <tbody >
          {currentData.map((item, index) => (
            <tr key={index} className="bg-white border-b text-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-3 p-4">
                <div className="flex items-center">
                  <input id={`checkbox-table-search-${index}`} onClick={()=>handleCheckboxChange(item["eventId"])} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                </div>
              </td>
              {columns.map(column => (
                <td key={column.key} className="px-3">{item[column.key]}</td>
              ))}


              
              {/* <h2>{item["eventId"]}</h2> */}

              <td className="px-6 py-4">
                <a href="#" key={item["eventId"]}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  onClick={()=>{openModal(),setModalId(item["eventId"])}}>Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 
      <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstItem + 1}-{indexOfLastItem}</span> of <span className="font-semibold text-gray-900 dark:text-white">{filteredData.length}</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
           
           <Icons icon="PreviosArrow"/>

            </button>
          </li>
          {renderPaginationButtons()}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <Icons icon="NextArrow"/>

            </button>
          </li>
        </ul>
      </nav>
    
    















{/* /// */}
<div>
      {/* Modal Toggle Button */}
 

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={openModal}
        title="Presale Date"
        content={
          <>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
 {/* {ModalId}  {userId.map((x)=><p>{x}</p>)} it's user Id */}
 {selectedUsers.map((x)=><><p>{x.eventId}</p> <p>{x.event}</p></>)} 
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The content can include text, images, forms, or any other React components.
            </p>
          </>
        }
        footerActions={
          <>
            <button
              onClick={openModal}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              onClick={openModal}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Decline
            </button>
          </>
        }
      />
    </div>

{/* /// */}

    
    </div>
  );
};

export default ListWithP;
