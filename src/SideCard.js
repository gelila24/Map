import React, { useState, useEffect, useContext } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./sidecard.css";
import useGeoLocation from "./useGeoLocation";

const SideCard = ({ pharmacy }) => {
  //   const [pharmacyData , setPharmacyData] =useState{
  // pharmacy
  //   }

  return (
    <Card style={{ width: "25vw", height: "100vh" }}>
      <CardBody>
        <CardTitle>
          <h2>{pharmacy.pharmacyName}</h2>{" "}
        </CardTitle>

        <div className="sidecard">
          <h4> Pharmacy Description :-{pharmacy.pharmacyName}</h4>
          <h4> Pharmacy Location :-{pharmacy.location}</h4>
          <h4> Pharmacy Phone No. :-{pharmacy.phoneNumber}</h4>
          <h4> Pharmacy Type :-{pharmacy.pharmacyType}</h4>
          <h4> Pharmacy Email :-{pharmacy.email}</h4>
        </div>
      </CardBody>
    </Card>
  );
};

export default SideCard;
