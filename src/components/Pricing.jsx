import Line70 from "../assets/Line 70.png"
import checkCircle from "../assets/check-circle.png"
import checkCircleDark from "../assets/check-circle (1).png"

function Pricing() {
  return (
    <section className="price-perfect" id="Pricing">
      <div className="price-perfect-header">
        <img src={Line70} alt="" />
        <h1>
          A <span>price perfect</span> for your needs.
        </h1>
        <p>
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>

      <div className="price-perfect-main">
        <div className="Basic">
          <h3>Basic</h3>
          <h1>Free</h1>
          <h3>Free plan for all users</h3>
          <ul>
            <li>
              <img src={checkCircle} alt="" />
              Unlimited Url Shortening
            </li>
            <li>
              <img src={checkCircle} alt="" />
              Basic Link Analytics
            </li>
            <li>
              <img src={checkCircle} alt="" />
              Customizable Short LInks
            </li>
            <li>
              <img src={checkCircle} alt="" />
              Standard Support
            </li>
            <li>
              <img src={checkCircle} alt="" />
              Ad-supported
            </li>
          </ul>
        </div>
        <div className="Professional">
          <h3>Professional</h3>
          <h1>$15/month</h1>
          <h3>ideal for business creators</h3>
          <ul>
            <li>
              <img src={checkCircleDark} alt="" />
              Enhanced Link Analytics
            </li>
            <li>
              <img src={checkCircleDark} alt="" />
              Custom Branded Domains
            </li>
            <li>
              <img src={checkCircleDark} alt="" />
              Advanced Link Customization
            </li>
            <li>
              <img src={checkCircleDark} alt="" />
              Priority Support
            </li>
            <li>
              <img src={checkCircleDark} alt="" />
              Ad-free Experience
            </li>
          </ul>
        </div>
        <div className="Teams">
          <h3>Teams</h3>
          <h1>$25/month</h1>
          <h3>Share with up to 10 users</h3>
          <ul>
            <li>
              <img src={checkCircle} alt="" />
              Team Collaboration
            </li>
            <li>
              <img src={checkCircle} alt="" />
              User Roles and Permissions
            </li>
            <li>
              <img src={checkCircle} alt="" />
              Enhanced Security
            </li>
            <li>
              <img src={checkCircle} alt="" />
              API Access
            </li>
            <li>
              <img src={checkCircle} alt="" />
              Dedicated Account Manager
            </li>
          </ul>
        </div>
      </div>

      <div className="price-perfect-buttons">
        <button className="custom">Get Custom Pricing</button>
        <button className="select">Select Pricing</button>
      </div>
    </section>
  );
}

export default Pricing;
