import React from "react";
import PricingTable from "./components/PricingTable";

function App() {
  const plans = [
    {
      plan: "FREE",
      price: 0,
      features: [
        { text: "Single User", included: true },
        { text: "50GB Storage", included: true },
        { text: "Unlimited Public Projects", included: true },
        { text: "Community Access", included: true },
        { text: "Unlimited Private Projects", included: false },
        { text: "Dedicated Phone Support", included: false },
        { text: "Free Subdomain", included: false },
        { text: "Monthly Status Reports", included: false },
      ],
    },
    {
      plan: "PLUS",
      price: 9,
      features: [
        { text: "5 Users", included: true },
        { text: "50GB Storage", included: true },
        { text: "Unlimited Public Projects", included: true },
        { text: "Community Access", included: true },
        { text: "Unlimited Private Projects", included: true },
        { text: "Dedicated Phone Support", included: true },
        { text: "Free Subdomain", included: true },
        { text: "Monthly Status Reports", included: false },
      ],
    },
    {
      plan: "PRO",
      price: 49,
      features: [
        { text: "Unlimited Users", included: true },
        { text: "50GB Storage", included: true },
        { text: "Unlimited Public Projects", included: true },
        { text: "Community Access", included: true },
        { text: "Unlimited Private Projects", included: true },
        { text: "Dedicated Phone Support", included: true },
        { text: "Free Subdomain", included: true },
        { text: "Monthly Status Reports", included: true },
      ],
    },
  ];

  return (
    <section className="price py-5">
      <div className="container">
        <div className="row">
          <PricingTable plans={plans} />
        </div>
      </div>
    </section>
  );
}

export default App;