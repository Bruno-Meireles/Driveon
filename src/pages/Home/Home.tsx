import Commitment from "../../components/Commitment/Commitment";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import DriveOnAbout from "../../components/DriveOnAbout/DriveOnAbout";
import Hero from "../../components/Hero/Hero";
import Steps from "../../components/Steps/Steps";

const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <DriveOnAbout />
      <Commitment />
      <DownloadApp />
    </div>
  );
};

export default Home;
