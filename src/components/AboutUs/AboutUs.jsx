
import "./AboutUs.css"
import AnimatedItem from '../AnimatedItem'

function AboutUs() {
  return (
    <main className='about-main'>
      <AnimatedItem>
        <section className='main-image'>
        
        </section>
      </AnimatedItem>
        <section className='home-left-section   '>
      <AnimatedItem>
            <h1 className='about-header'>About us</h1>
      </AnimatedItem>
      <AnimatedItem>

            <p className='about-home-paragraph'>At our therapy center in Beirut, we believe in the power of human connection and empathy. Our team is dedicated to helping you discover your path to well-being.</p>
      </AnimatedItem>
      <AnimatedItem>
            <p  className='about-home-paragraph'>Through personalized sessions, we work together to break down barriers and uncover your true potential. Join us on this journey to a more fulfilling life.</p>
      </AnimatedItem>

        </section>

    </main>
  )
}

export default AboutUs