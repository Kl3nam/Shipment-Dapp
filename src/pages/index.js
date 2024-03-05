

import React, { useState, useEffect, useContext } from "react";
import { Table, Form, Services, Profile, GetShipment, StartShipment,CompleteShipment } from "../../Components/index";
import { TrackingContext } from "../../Context/Tracking";

export const Index = () => {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment, 
    getShipment,
    startShipment,
    getShipmentsCount,
  } = useContext(TrackingContext);

  // State variables
  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModel, setGetModel] = useState(false);
  const [allShipmentsData, setAllShipmentsData] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllShipment();
      setAllShipmentsData(data);
    };

    fetchData(); 

    
  }, [getAllShipment]); 

  return (
    <>
      <Services 
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel}
        setStartModal={setStartModal}
      /> 

      <Table
        setCreateShipmentModel={setCreateShipmentModel}
        allShipmentsData={allShipmentsData} // Corrected variable name
      />

      <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
      />
      
      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
      />

      <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment} 
      />

      <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
      />

      <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
      />
    </>
  );
}; 

export default Index;
``

