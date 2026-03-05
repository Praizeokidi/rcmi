import { sliders04 } from "../assets";

const Msc = () => {
  return (
    <div className="md:flex  w-full m-auto py-11">
      <div className=" p-9 text-center">
        <img src={sliders04} />
        <h2 className="p-6 text-2xl font-semibold">RCMI Vision</h2>
        <p>
          At RCMI, we envisage a world free of blindness and anguish, where
          multitudes are transformed and saved with the host of heaven in
          Jubilation as the saints' march into heaven in their numbers
        </p>
      </div>
      <div className="text-black bg-orange-400 p-9 text-center">
        <img src={sliders04} />
        <h2 className="text-2xl font-semibold p-6">RCMI Mission</h2>
        <p>
          Our mission is to restore sight, move people from darkness to light,
          take gospel to unreached people group, and provide solace to people in
          difficult circumstances. We provide support by meeting their
          spiritual/psychological, physiological, and social needs to ameliorate
          sufferings and negative impacts of neglect using medical outreach as
          an in road into the communities.
        </p>
      </div>
      <div className="p-9 text-center ">
        <img src={sliders04} />
        <h2 className="p-6 text-2xl font-semibold">RCMI Core Values</h2>
        <p>
          We strongly believe in love, professionalism, compassion, commitment
          and teamwork. Other values of RCMI include determination,
          sacrifice,self-control, diversity and social inclusion.
        </p>
      </div>
    </div>
  );
};

export default Msc;
