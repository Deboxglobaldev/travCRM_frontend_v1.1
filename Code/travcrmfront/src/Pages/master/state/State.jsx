import React from "react";
import "./state.css";
import stateData from "../../../data";

const StateMaster = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="stateHead">
            <div className="backState">
              <div className="backButton">
                <button className="backButton">Back</button>
              </div>
              <div class="text">State</div>
            </div>
            <div class="addState">
              <div>
                <input type="text" placeholder="Keyword" className="keyword" />
              </div>

              <div>
                <select className="select">
                  <option>Select Status</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="Search" className="search" />
              </div>
              <div>
                <button className="addButton">+ Add State</button>
              </div>
            </div>
          </div>
        </div>
        <div className="stateTable">
          <table class="table table-hover table-bordered table-light">
            <thead>
              <tr>
                <th scope="col">
                  Sr.
                  <i className="fa-solid fa-up-down ps-4"></i>
                </th>
                <th scope="col">
                  <input type="checkbox" />
                  <i class="fa-solid fa-up-down ps-4"></i>
                </th>
                <th scope="col">Country Name</th>
                <th scope="col">State Name</th>
                <th scope="col">Created By</th>
                <th scope="col">Modified By</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {stateData.DataList.map((v) => {
                console.log(v);
                return (
                  <tr>
                    <th scope="row">{v.Id}</th>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{v.CountryName}</td>
                    <td>{v.Name}</td>
                    <td>{v.UpdatedBy}</td>
                    <td>{v.UpdatedBy}</td>
                    <td>{v.Status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateMaster;
