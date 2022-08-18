import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://localhost:3002/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="container">
      <ToastContainer />
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51LXKGqLY1lcoZ2dLdcjL5oinpuzpcHIDENtZgbyA2mFjctWxxOq8pa2iKhBUL93UPE2LHfaVfdozezERvlL05x4q00npo2LjCr"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

export default App;
