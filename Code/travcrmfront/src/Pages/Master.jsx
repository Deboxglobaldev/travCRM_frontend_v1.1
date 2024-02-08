import React from "react";
import "./master.css";
import MasterData from "./MasterData";
import { masterList } from "../data";

const Master = () => {
  return (
    <>
      <div className="master container-fluid">
        <div className="row px-2 py-4 bg-light">
          <MasterData 
            masterList = {masterList.GenralList}
          />
          <MasterData 
            masterList = {masterList.HotelList}
          />
          <MasterData 
            masterList = {masterList.MonumentList}
          />
          <MasterData 
            masterList = {masterList.TransferlList}
          />
          <MasterData 
            masterList = {masterList.AdditionList}
          />
          <MasterData 
            masterList = {masterList.AdditionList}
          />
         
        </div>
      </div>
    </>
  );
};

export default Master;
