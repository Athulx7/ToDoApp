import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemsFromTasks } from "./redux/tasks";

function TaskComplete() {
  const completetaskitems = useSelector((state) => state.completeReducer);

  const dispatch = useDispatch();

  return (
    <>
      <div style={{ backgroundColor: "#795757" }} className="pb-2">
        <div className=" mt-5">
          <h5
            className="fw-bold fs-4 text-warning text-center"
            style={{ backgroundColor: "#795757" }}
          >
            <u style={{ backgroundColor: "#795757" }}>COMPLETED TASKS</u>
          </h5>
        </div>

        {completetaskitems?.length > 0 ? (
          completetaskitems.map((items) => (
            <div
              className="container mt-5 mb-5 rounded p-3"
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
                  <Link style={{ backgroundColor: "#664343" }}>
                    <FontAwesomeIcon
                      style={{ backgroundColor: "#664343" }}
                      className="text-success fs-3 me-5"
                      icon={faCheck}
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
              width={250}
              height={200}
              src="https://img-cdn.inc.com/image/upload/w_600,ar_16:9,c_fill,g_auto,q_auto:best/images/panoramic/GettyImages-1480935329_531635_j4uido.webp"
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
}

export default TaskComplete;
