import TopImg from "../assets/footer2.png"
import FooterLogo from "../assets/Logo (1).png"
import twitterPng from "../assets/i.fi-social-twitter.png"
import featherPng from "../assets/svg.feather.png"
import linkedinPng from "../assets/i.fi-social-linkedin.png"
import facebookPng from "../assets/i.fi-social-facebook.png"
import bottomImg from "../assets/footer1.png"

function Footer() {
  return (
    <div className="footerContainer">
      <img className="top-img" src={TopImg} alt="" />
      <div className="footer">
        <div className="logo">
          <img src={FooterLogo} alt="" />
          <div className="contacts">
            <img src={twitterPng} alt="" />
            <img src={featherPng} alt="" />
            <img src={linkedinPng} alt="" />
            <img src={facebookPng} alt="" />
          </div>
        </div>
        <div className="lists">
          <div className="why-scissors">
            <h1 className="footer-list-header">Why Scissor</h1>
            <ul className="footer-lists">
              <li>Scissor 101</li>
              <li>Integrations & API</li>Name
              <li>Pricing</li>
            </ul>
          </div>

          <div className="solutions">
            <h1 className="footer-list-header">Solution</h1>
            <ul className="footer-lists">
              <li>Social Media</li>
              <li>Digital Marketing</li>
              <li>Customer Service</li>
              <li>For Developers</li>
            </ul>
          </div>

          <div className="products">
            <h1 className="footer-list-header">Products</h1>
            <ul className="footer-lists">
              <li>Link Management</li>
              <li>QR Codes</li>
              <li>Link-in-bio</li>
            </ul>
          </div>

          <div className="company">
            <h1 className="footer-list-header">Company</h1>
            <ul className="footer-lists">
              <li>About Scissor</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Press</li>
              <li>Contact</li>
              <li>Reviews</li>
            </ul>
          </div>

          <div className="resources">
            <h1 className="footer-list-header">Resources</h1>
            <ul className="footer-lists">
              <li>Blog</li>
              <li>Resource Library</li>
              <li>Developers</li>
              <li>App Connectors</li>
              <li>Support</li>
              <li>Trust Center</li>
              <li>Browser Extension</li>
              <li>Mobile App</li>
            </ul>
          </div>

          <div className="features">
            <h1 className="footer-list-header">Features</h1>
            <ul className="footer-lists">
              <li>Branded Links</li>
              <li>Mobile Links</li>
              <li>Campaign</li>
              <li>Management &</li>
              <li>Analytics</li>
              <li>QR Code generation</li>
            </ul>
          </div>

          <div className="legal">
            <h1 className="footer-list-header">Legal</h1>
            <ul className="footer-lists">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Service</li>
              <li>Acceptable Use Policy</li>
              <li>Code of Conduct</li>
            </ul>
          </div>
        </div>

        <p>Term of Service | Security | ⓒ Scissor 2023</p>
      </div>
      <img className="bottom-img" src={bottomImg} alt="" />
    </div>
  );
}

export default Footer;
