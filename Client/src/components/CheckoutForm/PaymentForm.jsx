/* eslint-disable react/prop-types */
import { Typography, Button, Divider } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Review from "./Review";
const PaymentForm = ({ cart, backStep, next, handleEmptyCart }) => {
  let subtotal = cart.reduce((a, b) => {
    return a + b.quantity * b.price;
  }, 0);
  const handleOnClick = () => {
    handleEmptyCart();
    next();
  };

  return (
    <>
      <Review cart={cart} />
      <Divider />
      <Typography variant="h6" style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <PaymentIcon sx={{ marginTop: "-2em" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1em",
        }}
      >
        <Button onClick={backStep} variant="outlined">
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleOnClick}>
          Pay
          <CurrencyRupeeIcon sx={{ height: "1rem" }} />
          {subtotal}
        </Button>
      </div>
    </>
  );
};
export default PaymentForm;
