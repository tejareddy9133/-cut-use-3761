import React, { useCallback, useState } from "react";
import useRazorpay from "react-razorpay";
import "../css/Subsccription.css";
const Subscription = () => {
  const [year, setYear] = useState(false);
  const [month, setMonnth] = useState(false);
  const [three, setthree] = useState(false);
  const [price, setPrice] = useState(100);
  const yearly = () => {
    setYear(true);
    setMonnth(false);
    setthree(false);
    setPrice(329);
  };
  const theemonths = () => {
    setYear(false);
    setMonnth(false);
    setthree(true);
    setPrice(129);
  };
  const monthly = () => {
    setYear(false);
    setMonnth(true);
    setthree(false);
    setPrice(49);
  };
  console.log(year, month, three, price);
  const Razorpay = useRazorpay();
  const params = {
    price: parseFloat(price) * 100,
    name: "teja",
  };
  const createOrder = (params) => {
    // ...
    return params;
  };

  const handlePayment = useCallback(async () => {
    const order = await createOrder(params);
    console.log(order);
    const options = {
      key: "rzp_test_Sd88VoR9NHci1p",
      amount: order.price,
      currency: "INR",
      name: order.name,
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);
  return (
    <>
      <div className="container">
        <div className="first">
          <h1 style={{ color: "white" }}>Vibe Tunes</h1>
        </div>
        <div className="second">
          <div className="modal">
            <h2
              style={{
                color: "red",
                fontFamily: "Stencil, fantasy",
              }}
            >
              Go Premium
            </h2>
            <p style={{ color: "white" }}>Get the best music and pod casts</p>
            <div className="subscibemethods">
              <div
                className="child"
                onClick={yearly}
                style={{ border: year ? "3px solid red" : "0px solid black" }}
              >
                <h4 style={{ color: "white" }}>
                  Yearly <br />{" "}
                  <span
                    style={{ color: "grey", textDecoration: " line-through" }}
                  >
                    ₹999
                  </span>{" "}
                  ₹399 <br /> Save 60%
                </h4>
              </div>
              <div
                className="child"
                onClick={theemonths}
                style={{ border: three ? "2px solid red" : "0px solid" }}
              >
                <h4 style={{ color: "white" }}>
                  threemonths <br />{" "}
                  <span
                    style={{ color: "grey", textDecoration: " line-through" }}
                  >
                    ₹299
                  </span>{" "}
                  ₹129 <br /> Save 55%
                </h4>
              </div>
              <div
                className="child"
                onClick={monthly}
                style={{ border: month ? "3px solid red" : "0px solid black" }}
              >
                <h4 style={{ color: "white" }}>
                  monthly <br />{" "}
                  <span
                    style={{ color: "grey", textDecoration: " line-through" }}
                  >
                    ₹99
                  </span>{" "}
                  ₹49 <br /> Save 50%
                </h4>
              </div>
            </div>
            <div style={{ color: "white" }}>
              <ul>
                <li>All amounts are inclusive of 18% GST</li>
                <li>
                  <p>
                    By clicking on Continue button, you agree to Wynk’s Terms of
                    service and Privacy policy.
                  </p>
                </li>
              </ul>
            </div>
            <div
              style={{
                color: "white",
                backgroundColor: "#292626",
                display: "flex",
                justifyContent: "space-between",
                padding: "4px",
              }}
            >
              <div>
                Amount to be paid <br /> ₹{price}
              </div>
              <div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "teal",
                    height: "30px",
                    width: "100px",
                    marginTop: "7px",
                  }}
                  onClick={handlePayment}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
