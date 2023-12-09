import vector3 from "../assets/vector 3.png";
import vector2 from "../assets/vector 2 (1).png";
import Frame from "../assets/Frame 1000001716.png";
import Group3 from "../assets/Group 3.png"

function Hero() {
  return (
    <div>
      <section className="Optimize-online-experience">
        <h1>
          Optimize Your Online Experience with Our Advanced
          <span> URL Shortening</span> Solution
        </h1>
        <img src={vector3} alt="" />
        <p>
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <div>
          <button>Sign Up</button>
          <a href="#">Learn more</a>
        </div>
      </section>

      <section className="Seamlessly">
        <img src={vector2} alt="" />
        <div>
          <img src={Frame} alt="" />
          <p>
            Seamlessly transform your long URLs into concise and shareable links
            with just few clicks.
          </p>
        </div>
      </section>

      <section className="One-stop">
      <img src={Group3} alt="" />
      <div>
        <h1>
          One Stop. <br />
          Four <span>Possibilities</span>.
        </h1>

        <ul>
          <li>
            <h1>3M</h1>
            <p>Active Users</p>
          </li>
          <li>
            <h1>60M</h1>
            <p>Link and QR <br /> codes created</p>
          </li>
          <li>
            <h1>1B</h1>
            <p>Clicked and <br /> Scanned connections</p>
          </li>
          <li>
            <h1>300k</h1>
            <p>App integrations</p>
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
}

export default Hero;
