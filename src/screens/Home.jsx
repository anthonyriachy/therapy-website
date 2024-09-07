import '../../public/Home.css'
import AboutUs from '../components/AboutUs/AboutUs'
import FirstPart from '../components/FirstPart/FirstPart'
import Therapists from '../components/Therapists/Therapists'
import ContactUs from '../components/ContactUs/ContactUs'
import Packages from '../components/Packages/Packages'
import Time from '../components/Time/Time'

function Home() {
  return (
    <>
      <FirstPart/>
      <AboutUs/>
      <Therapists/>
      <Packages/>
      <Time/>
      <ContactUs/>
      
    </>
  )
}

export default Home