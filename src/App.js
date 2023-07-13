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
          title="Benefit 1"
          text="Highlight the benefits of signing up for an appointment, online class, or video consultation.online class, or video consultation"
          imagelink="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/13b0f11a-multor-benefit1-icon.svg"
          >
          </BenefitCard>
          <BenefitCard 
          title="Benefit 2"
          text="Highlight the benefits of signing up for an appointment, online class, or video consultation.online class, or video consultation"
          imagelink="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/8ab92ea8-multor-benefit2-icon.svg"
          >  
          </BenefitCard>
          <BenefitCard
          title="Benefit 3"
          text="Highlight the benefits of signing up for an appointment, online class, or video consultation.online class, or video consultation"
           imagelink="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/c32dd90d-multor-benefit3-icon.svg"
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
      title="anna"
      text="Highlight the benefits of signing up for an appointment, online class, or video consultation.online class, or video consultation"
      imagelink="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/52bdc545-multor-testimonial1-headshot_100000000000000000001o.jpg"
      >
      </BenefitCard>
      <BenefitCard
      title="martha"
      text="Highlight the benefits of signing up for an appointment, online class, or video consultation.online class, or video consultation"
      imagelink="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/94045dbc-multor-testimonial2-headshot_100000000000000000001o.jpg"
      >
      </BenefitCard>
    </div>
    <div className="features lg:mt-12 mt-8 lg:px-16 lg:flex">
      <FeaturesCard
      title="feature 1"
      imagelink="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_100000000000000000001o.jpg"
      text="Talk about some of the details of your offer with a focus on the value people get back.focus on the value people get back."
      
      ></FeaturesCard>
      <FeaturesCard
      title="feature 2"
      imagelink="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/adf66a57-multor-feature2-image_100000000000000000001o.jpg"
      text="Talk about some of the details of your offer with a focus on the value people get back.focus on the value people get back.">

      </FeaturesCard>
      <FeaturesCard
      title="feature 3"
      imagelink="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d486c61-multor-feature3-image_100000000000000000001o.jpg"
      text="Talk about some of the details of your offer with a focus on the value people get back.focus on the value people get back.">

      </FeaturesCard>

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
