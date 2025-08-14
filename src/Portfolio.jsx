import HeroSection from './HeroSection';
import NavBar from './NavBar';
import Skills from './Skills';
import About from './About';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from './Education';
import Form from './Form';
import Project from './Project';
import Achievements from './Achievement';
import Footer from './Footer';
import Chat from './ChatNotification';
import ChatNotification from './ChatNotification';

export default function Portfolio(){
    return(
         <div>
      <NavBar />
      <HeroSection />
      <About />
      <Skills />
      <Education />
      <Project />
      <ChatNotification/>
      <Achievements />
      <Form />
      <Footer />
      
    </div>
    )
}