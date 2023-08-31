import FAQLeft from "../assets/FAQleft.png"
import FAQright from "../assets/FAQright.png"
import imageLine70 from "../assets/Line 70.png"
import group2 from "../assets/Group2.png"
import group3 from "../assets/Group3.png"
import { useRef } from "react"


function Faq() {
const activeAccordion = useRef(null)

const toggleFaq = (e) => {
 if(e.target.classList.contains("active")){
   e.target.classList.remove("active")
 } else {
  //check if any accordion is opened and close it if opened 
  activeAccordion.current.querySelector('.accordion.active')?.classList.remove('active');
  e.target.classList.add("active")
 }
}

  return (
    <>
      <section className="FAQ" id="FAQ" >
        <img src={FAQLeft} alt="" />
        <div className="faq-header">
          <img src={imageLine70} alt="" />
          <h1>FAQs</h1>
        </div>
        <div className="faq-main" ref={activeAccordion}>
          <div className="accordion" onClick={toggleFaq}>
            <p>How does URL shortening work?</p>
          </div>
          <div className="panel">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </div>
          <hr />
          <div className="accordion" onClick={toggleFaq}>
            <p>
              Is it necessary to create an account to use the URL shortening
              service?
            </p>
          </div>
          <div className="panel">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </div>
          <hr />
          <div className="accordion" onClick={toggleFaq}>
            <p>Are the shortened links permanent? Will they expire?</p>
          </div>
          <div className="panel">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </div>
          <hr />
          <div className="accordion" onClick={toggleFaq}>
            <p>
              Are there any limitations on the number of URLs I can shorten?
            </p>
          </div>
          <div className="panel">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </div>
          <hr />
          <div className="accordion" onClick={toggleFaq}>
            <p>
              Can I customize the shortened URLs to reflect my brand or content?
            </p>
          </div>
          <div className="panel">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </div>
          <hr />
          <div className="accordion" onClick={toggleFaq}>
            <p>Can I track the performance of my shortened URLs?</p>
          </div>
          <div className="panel">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </div>
          <hr />
          <div className="accordion" onClick={toggleFaq}>
            <p>
              How secure is the URL shortening service? Are the shortened links
              protected against spam or malicious activity?
            </p>
          </div>
          <div className="panel">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </div>
          <hr />
          <div className="accordion" onClick={toggleFaq}>
            <p>What is a QR code and what can it do?</p>
          </div>
          <div className="panel">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </div>
          <hr />
          <div className="accordion" onClick={toggleFaq}>
            <p>
              Is there an API available for integrating the URL shortening
              service into my own applications or websites?
            </p>
          </div>
          <div className="panel">
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </div>
          <hr />
        </div>
        <img className="bottom-img" src={FAQright} alt="" />
      </section>

      <section className="revolutional">
        <img src={group3} alt="" />
        <div>
          <h1>Revolutionizing Link Optimization</h1>
          <button>Get Started</button>
        </div>
        <img className="bottom-img" src={group2} alt="" />
      </section>
    </>
  );
}

export default Faq