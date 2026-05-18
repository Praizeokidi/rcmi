import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () =>
            window.removeEventListener("scroll", toggleVisibility);

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`
        fixed
        bottom-6
        right-6
        z-50
        transition-all
        duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
        >

            <button
                onClick={scrollToTop}
                className="
          bg-green-500
          hover:bg-green-600
          text-white
          p-4
          rounded-full
          shadow-2xl
          border
          border-white/20
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
        "
            >
                <FaArrowUp />
            </button>

        </div>
    );
};

export default BackToTop;