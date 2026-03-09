import PropTypes from "prop-types";

const DonateButton = ({ amount }) => {

  const handleDonate = () => {
    // Redirect to Paystack payment link
    window.location.href = "https://paystack.shop/pay/rcmi";
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