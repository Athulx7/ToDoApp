import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import TaskComplete from "./TaskComplete";
import { useDispatch } from "react-redux";
import { addTotask } from "./redux/tasks";
import Sub from "./Sub";
import Completed from "./Completed";
import {v4 as uuidv4} from 'uuid'
import {toast, ToastContainer } from "react-toastify";

function App() {
 
  const getDate = () => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();
    return `${day}-${month}-${year}`;
  };
  const [date, getdates] = useState(getDate());

 

  const [tasks,settasks] = useState({
    title:'',
    description:'',
    id:uuidv4()

  })

  

  const dispatch = useDispatch()
  
   

  const addTask = async()=>{
    

    if(!tasks.title || !tasks.description){
     alert("please fill the form completely")
    }
    else{
      const newTask = {
        title:tasks.title,
        decription:tasks.description,
        id:uuidv4()
      }
      dispatch(addTotask(newTask))
      settasks({
        title:'',
    description:'', 
      })
      

   
    }




const [completdCompo,setcompleted] = useState(false)
   

    

  }
  





  return (
    <>
      <div className="container">
        <div className="  container d-flex align-items-center justify-content-center mt-5 ">
          <h2 className="fw-bold fs-1 text-white">DAILY TASKS</h2>
        </div>
        <hr className="text-light" />

        <div
          className="container  mt-5 rounded-3  ms-auto me-auto w-75  "
          style={{ backgroundColor: "#795757" }}
        >
          <h6
            className="text-white p-4 text-center "
            style={{ backgroundColor: "#795757" }}
          >
            {date}
          </h6>
          <div className="  d-flex" style={{ backgroundColor: "#795757" }}>
            <input
              value={tasks.title}
              onChange={(e) =>
                settasks({...tasks,title: e.target.value })
              }
              type="text"
              className="bg-white form-control ms-5 me-5 me-auto w-50"
              placeholder=" TASK TITLE"
            />
            <input
              value={tasks.description}
              onChange={(e) =>
                settasks({...tasks,description: e.target.value })
              }
              type="text"
              className="bg-white form-control ms-5 me-5 w-50 "
              placeholder="DISCRIPTION"
            />
          </div>

          <div
            className=" d-flex align-items-center justify-content-center mt-4"
            style={{ backgroundColor: "#795757" }}
          >
            <button className="btn btn-info w-50 fw-bold" onClick={addTask}>
              ADD <FontAwesomeIcon className="bg-info ms-2 " icon={faPlus} />
            </button>
          </div>

          <div
            className="d-flex align-items-center justify-content-center "
            style={{ backgroundColor: "#795757", marginTop: "5rem" }}
          >
            <Link to={'/'}
              className="bg-info rounded"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="bg-info rounded" style={{ backgroundColor: "" }}>
                <h5
                  className="bg-info fw-bold mt-2 ms-2 me-2"
                  style={{ backgroundColor: "#795757" }}
                >
                  TASKS
                </h5>
              </div>
            </Link>

            <Link to={'/complete'} 
              style={{ textDecoration: "none", color: "white" }}
              className="bg-success rounded ms-5"
            >
              <h5 className="bg-success  fw-bold mt-2 ms-2 me-2  rounded">
                COMPLETED
              </h5>
            </Link>
          </div>

         
          <Routes>
            <Route path="/" element={<Completed />} />
          </Routes>
           {/* <Completed /> */}
           <Sub  />

           
            
          
             
           
        </div>
      </div>
     
    
    </>
  );
}

export default App;
