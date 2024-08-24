import React from "react";
import Card from "./Card";

function PricingTable({ plans }) {
  return (
    <>
      {plans.map((plan, index) => (
        <Card key={index} data={plan} />
      ))}
    </>
  );
}

export default PricingTable;