import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import tasks, { removeItemsFromTasks } from "./redux/tasks";
import {v4 as uuidv4} from 'uuid'
import { addtocompletion } from "./redux/completion";
uuidv4()

function Completed() {
  const taskitems = useSelector((state) => state.taskReducer);


  const [tasksfrom , settasksfrom] = useState()
  const dispatch = useDispatch()


  const handleCompete = (item)=>{
    dispatch(addtocompletion(item))
    dispatch(removeItemsFromTasks(item.id))

  }





 

 
  return (
    <>
      <div style={{ backgroundColor: "#795757" }} className="pb-2">
        <div className=" mt-5">
          <h5
            className="fw-bold fs-4 text-warning text-center"
            style={{ backgroundColor: "#795757" }}
          >
            <u style={{ backgroundColor: "#795757" }}>ALL TASKS</u>
          </h5>
        </div>

        {taskitems?.length > 0 ? (
          taskitems.map((items) => (
            <div
              className="container mt-5 mb-5  rounded p-3"
              style={{ backgroundColor: "#664343" }}
            >
              <div className="" style={{ backgroundColor: "#664343" }}>
                <h3
                  style={{ backgroundColor: "#664343" }}
                  className="text-light fw-bold"
                >
                  {items.title}
                </h3>
              </div>
              <hr className="text-light" />

              <div className="d-flex" style={{ backgroundColor: "#664343" }}>
                <h6
                  style={{ backgroundColor: "#664343" }}
                  className="text-light"
                >
                  {items.decription}
                </h6>
                <div
                  style={{ backgroundColor: "#664343" }}
                  className="ms-auto d-flex"
                >
                  <Link style={{ backgroundColor: "#664343" }} onClick={()=>handleCompete(items)} >
                    <FontAwesomeIcon
                      style={{ backgroundColor: "#664343" }}
                      className="text-success fs-3 ms-5"
                      icon={faCheck}
                    />
                  </Link>

                  <Link style={{ backgroundColor: "#664343" }} onClick={()=>dispatch(removeItemsFromTasks(items.id))}>
                    <FontAwesomeIcon
                      style={{ backgroundColor: "#664343" }}
                      className="text-danger fs-3 ms-5 me-5"
                      icon={faTrash}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{ backgroundColor: "#664343" }}
            className="d-flex alin-items-center justify-content-center mt-5 p-5"
          >
            <img
              src="https://img.freepik.com/premium-vector/no-pending-task_585024-51.jpg"
              width={250}
              height={200}
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Completed;
