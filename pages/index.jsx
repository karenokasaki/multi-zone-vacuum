import { ReactLenis } from "@studio-freight/react-lenis";

import CustomizeYourClean from "../components/CustomizeYourClean/CustomizeYourClean";
import Hero from "../components/Hero/Hero";
import Thinq from "../components/Thinq/Thinq";
import FlexCards from "../components/FlexCards/FlexCards";
import Battery from "../components/Battery/Battery";
import VacuumTypes from "../components/VacuumTypes/VacuumTypes";
import SystemVideo from "../components/SystemVideo/SystemVideo";
import Chart from "../components/Chart/Chart";
import Accessories from "../components/Accessories/Accessories";
import AutoEmpty from "../components/AutoEmpty/AutoEmpty";
import TwoCol from "../components/TwoCol/TwoCol";
import AllInOne from "../components/AllInOne/AllInOne";
import Review from "../components/Review/Review";
import Suction from "../components/Suction/Suction";
import DualBatteryVideo from "../components/DualBatteryVideo/DualBatteryVideo";
import CrModule from "../components/CrModule";

const Home = () => {
  return (
    <ReactLenis root>
      <div className="section vacuum-discovery">
        {/************** Components **************/}
        <Hero />
        <VacuumTypes />
        <Chart />
        <CrModule />
        <AutoEmpty />
        <TwoCol />
        <Battery />
        <DualBatteryVideo />
        <Suction />
        <Accessories />
        <SystemVideo />
        {/* <FlexCards /> */}
        <AllInOne />
        <CustomizeYourClean />
        <Thinq />
        <Review />
        {/****************************************/}
      </div>
    </ReactLenis>
  );
};

export default Home;
