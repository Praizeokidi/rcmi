import axios from "axios";
import PropTypes from "prop-types";

const DonateButton = ({ amount }) => {
  const handleDonate = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/initialize-donation",
        {
          email: "donor@example.com", // you can replace with dynamic email later
          amount: Number(amount), // send the number typed by the donor
        }
      );

      // Redirect user to Paystack payment page
      window.location.href = response.data.data.authorization_url;
    } catch (err) {
      console.error("Donation initialization failed:", err);
    }
  };

  return (
    <button
      onClick={handleDonate}
      className="text-n-1 text-lg bg-red-600 p-4 rounded-sm text-center hover:bg-red-500 hover:text-black transition-all w-full"
    >
      DONATE NOW
    </button>
  );
};

DonateButton.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DonateButton;