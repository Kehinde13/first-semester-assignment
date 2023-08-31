import Faq from './components/Faq'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import WhyChooseScissors from './components/WhyChooseScissors'

function App() {

  return (
    <div className='App'>
      <Header />
      <Hero />
      <WhyChooseScissors />
      <Pricing />
      <Form />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
