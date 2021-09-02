import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import "./sidecard.css"
const SideCard = ({ pharmacy }) => {
    return (
        <Card style={{ width: '25vw', height: '100vh' }}>
            <CardBody>
                <CardTitle>
                    <h2>{pharmacy.properties.pharmacyName}</h2>  </CardTitle>

                <div className="sidecard">
                    <h4> Pharmacy Description :-{pharmacy.properties.description}</h4>
                    <h4> Pharmacy Location :-{pharmacy.properties.location}</h4>
                    <h4> Pharmacy Phone No. :-{pharmacy.properties.phoneMumber}</h4>
                    <h4> Pharmacy Type :-{pharmacy.properties.pharmacyType}</h4>
                    <h4> Pharmacy Email :-{pharmacy.properties.email}</h4>

                </div>
            </CardBody>
        </Card>
    )
}

export default SideCard
