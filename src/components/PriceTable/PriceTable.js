import React from "react";
import { Table } from "react-bootstrap";
import "./PriceTable.css";
const PriceTable = () => {
  return (
    <div className="container pricing">
      <h2 className="mt-5 font-link section-heading">Price List</h2>
      <div className="heading-underline"></div>
      <Table>
        <thead>
          <tr>
            <th>Service Names</th>
            <th>Stage</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-start">Teeth Whitening Service at home</td>
            <td>1 times</td>
            <td>$115.00</td>
          </tr>
          <tr>
            <td className="text-start">
              Teeth Whitening Service at Dental Clinic
            </td>
            <td>1 times</td>
            <td>$100.00</td>
          </tr>
          <tr>
            <td className="text-start">
              Ceramic crowns and fillings Dental porcelain
            </td>
            <td>1 times</td>
            <td>$99.00</td>
          </tr>
          <tr>
            <td className="text-start">Remove crowns, bridges Service</td>
            <td>1 tooth</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td className="text-start">Covering the recession of the gums</td>
            <td>1 times</td>
            <td>$400.00</td>
          </tr>
          <tr>
            <td className="text-start">
              Consultation, impressions and preparation of models
            </td>
            <td>1 times</td>
            <td>$35.00</td>
          </tr>
          <tr>
            <td className="text-start">
              Standard porcelain and zirconium crown on implant
            </td>
            <td>1 tooth</td>
            <td>$499.00</td>
          </tr>
          <tr>
            <td className="text-start">Implantation of an implant </td>
            <td>1 tooth</td>
            <td>$600.00</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PriceTable;
