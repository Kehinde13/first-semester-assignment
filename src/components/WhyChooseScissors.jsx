import imageLine70 from "../assets/Line 70.png"
import Group6 from "../assets/Group 6.png"
import customURL from "../assets/Frame 1000001695.png"
import QRCodes from "../assets/Frame 1000001695 (1).png"
import dataAnalytics from "../assets/Frame 1000001718.png"

function WhyChooseScissors(params) {
  return (
    <section className="why-choose-scissors" id="Features">
      <div className="why-choose-scissors-header">
        <img src={imageLine70} alt="" />
        <h1>
          Why choose <span>Scissor</span>
        </h1>

        <p>
          Scissors is the hub of everything that has to do with your link
          management. We shorten your URLs, allow you creating custom ones for
          your personal, business, event usage. Our swift QR code creation,
          management and usage tracking with advance analytics for all of these
          is second to none.
        </p>
      </div>

      <div className="why-choose-scissors-main">
        <div>
          <img src={Group6} alt="" />
          <h1>URL Shortening</h1>
          <p>
            Scissor allows you to shorten URLs of your business, events. Shorten
            your URL at scale, URL redirects.
          </p>
        </div>
        <div>
          <img src={customURL} alt="" />
          <h1>Custom URLs</h1>
          <p>
            With Scissor, you can create custom URLs, with the length you want!
            A solution for socials and businesses.
          </p>
        </div>
        <div>
          <img src={QRCodes} alt="" />
          <h1>QR Codes</h1>
          <p>
            Generate QR codes to your business, events. Bring your audience and
            customers to your doorstep with this scan and go solution.
          </p>
        </div>
        <div>
          <img src={dataAnalytics} alt="" />
          <h1>Data Analytics</h1>
          <p>
            Receive data on the usage of either your shortened URL, custom URLs
            or generated QR codes. Embedded to monitor progress.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseScissors;
