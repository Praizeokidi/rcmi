import About from "../components/About";
import Contact from "../components/Contact";
import Message from "../components/Message";
import Newsletter from "../components/Newsletter";
import Programs from "../components/Programs";
import Strategy from "../components/Strategy";
import Volunteer from "../components/Volunteer";
import Hero from "../components/Hero";
import Needs from "../components/Needs";
import Partners from "../components/Partners";
import Ministries from "../components/Ministries";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Needs />
        <Partners />
        <Ministries />
        {/* <About /> */}
        {/* <Programs /> */}
        {/* <Strategy /> */}
        {/* <Volunteer /> */}

        <Message />
        <Contact />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
