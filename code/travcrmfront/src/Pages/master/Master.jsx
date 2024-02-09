import React from "react";
import "./master.css";
import MasterData from "./MasterData";
import { masterList } from "../../data";

const Master = () => {
  return (
    <>
      <div className="master container-fluid">
        <div className="row px-2 py-4 bg-light">
          <MasterData/>
        </div>
      </div>
    </>
  );
};

export default Master;
