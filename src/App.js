// import logo from './logo.svg';
import './App.css';
import AboutSection from './Components/AboutSection';
import BenefitCard from './Components/BenefitCard';
import FeaturesCard from './Components/FeaturesCard';
import Form from './Components/Form';
import HeroImage from './Components/HeroImage';
import Navbar from './Components/Footer';
import VideoSection from './Components/VideoSection';
import Footer from './Components/Footer';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

function App() {
  return (
    <div className="App bg-white ">
      {/* <Navbar/> */}
      <HeroImage/>

      <div className="benefitsSection mt-12 lg:flex bg-white">
        <div className="benefits lg:w-1/2 ">
          <BenefitCard
          >
          </BenefitCard>
          <BenefitCard
          >  
          </BenefitCard>
          <BenefitCard
          >
          </BenefitCard>
        </div>
        <div className="form lg:w-1/2 mt-4">
          <Form></Form>
        </div>
      </div>

    <VideoSection></VideoSection>

    <div className="reviews lg:flex">
      <BenefitCard
      >
      </BenefitCard>
      <BenefitCard
      >
      </BenefitCard>
    </div>
    <div className="features lg:mt-12 mt-8 lg:px-16 lg:flex">
      <FeaturesCard></FeaturesCard>
      <FeaturesCard></FeaturesCard>
      <FeaturesCard></FeaturesCard>

    </div>

    <div className="aboutsection">
      <AboutSection></AboutSection>
    </div>
    <div className="bookNow hidden z-9 lg:block bg-secondary drop-shadow-2xl text-2xl p-6 rounded-full text-white shadow-lg fixed bottom-4 right-4 ">
      <a href="/bookAppointment" className=''>
        <AddIcCallOutlinedIcon fontSize='large' ></AddIcCallOutlinedIcon>

      </a>
    </div>
    <div className="footer  ">
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
