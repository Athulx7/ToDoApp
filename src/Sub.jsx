import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import TaskComplete from "./TaskComplete";

function Sub(comlpte) {
  const complete = comlpte ? true : false;
  return (
    <div>
     
        <Routes>
          <Route
            path="/complete"
            element={<TaskComplete  />}
          />
        </Routes>
     
    </div>
  );
}

export default Sub;
