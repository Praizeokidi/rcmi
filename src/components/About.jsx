import Button from "./Button";
import AboutImg from "../assets/about-shot.jpg";
import Section from "./Section";

const About = () => {
  return (
    <div
      id="about"
      className="w-[90%]  grid md:grid-flow-col  m-auto py-20 gap-4"
    >
      <div className="pb-8">
        <div className="py-4">
          <h1 className="py-4 font-bold text-3xl">
            About <span>Us</span>
          </h1>
          <h1 className="text-2xl font-semibold">
            REFUGE AND CONSOLIDATION MINISTRY (RCMI)
          </h1>
        </div>

        <p className="pt-11">
          Refuge and Consolation Ministry International (RCMI), is a non-profit
          making, non-governmental, mission support and emergency response
          Christian ministry established in 2009.
        </p>
        <br></br>
        <p className="pb-11">
          The mandate of RCMI is to set the captives free from bondage, provide
          health care to unreached communities, support vulnerable groups, and
          restore sight to those that are needlessly blind.
        </p>
        <p className="pb-11">
          The Bible in Mark 16:15 & Matthew 28:19-20, says, “And he said unto
          them, go ye into all the world, and preach the gospel to every
          creature. 16He that believeth and is baptized shall be saved; but he
          that believeth not shall be damned (NKJV). In response to the great
          commission, we embark on integral missions, medical missions and
          conduct crusades and outreaches within the communities to reconcile
          men to God, restore sight to individuals suffering from spiritual
          blindness, and provide treatment to those afflicted with sickness
          diseases and visual impairment. We equally support individuals
          affected by disaster to alleviate their suffering.{" "}
        </p>
        <Button href="/about">See More Details</Button>
      </div>
      <div className="content-center py-4">
        <img src={AboutImg} />
      </div>
    </div>
  );
};

export default About;
