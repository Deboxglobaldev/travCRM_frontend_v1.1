import React from "react";
import { NavLink } from "react-router-dom";

const MasterData = ({ masterList }) => {
  return (
    <>
      <ul class="col-lg-2 col-md-4 my-1 col-sm-6">
        {masterList.map((v) => {
          return (
            <NavLink to={`/master/${v.Path}`} style={{ color: "red" }}>
              {
                <li class="list-group-item">
                  <i class="fa-solid fa-flag"></i>
                  {v.MasterName}
                </li>
              }
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default MasterData;
