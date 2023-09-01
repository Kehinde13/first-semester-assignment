import Group3 from "../assets/Group 3 (1).png";
import Group2 from "../assets/Group 2 (1).png";
import Copy from "../assets/copy-regular.svg";
import magicWand from "../assets/magic wand.png";
import { useState, useEffect } from "react";

function Form() {
  const [input, setInput] = useState("");
  const [accessButton, setAcessButton] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [copyShortUrl, setCopyShortUrl] = useState(false)

  // check if a valid url function
  const isUrl = (string) => {
    try {
      return Boolean(new URL(string));
    } catch (e) {
      return false;
    }
  };

  // toggle the button availabilty
  const toggleAccesibility = () => {
    // check if a valid url
    if (!isUrl(input)) {
      setAcessButton((current) => !current);
    }
  };

  // function to shorten the URL
  const getShortUrl = async () => {
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
    const data = await result.json();
    setShortUrl(data?.result?.short_link2)
  };

  //Copy Button
  const copyButtton = () => {
    navigator.clipboard.writeText(shortUrl)
    setCopyShortUrl(current => !current)
  };

  function handleSearch(e){
    e.preventDefault()
    getShortUrl()
  }

  useEffect(() => {
    getShortUrl();
  }, [input]);

  return (
    <section className="form" id="form">
      <img src={Group3} alt="" />
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="Url"
          id="Url"
          placeholder="Paste URL here"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onInput={toggleAccesibility}
        />
        <div>
          <p>{shortUrl ? shortUrl : " "}</p>
          <img className="copyButton" src={Copy} alt="" onClick={copyButtton} />
        </div>
        <p id="alert" style={{ color: "blue", marginLeft: "10px" }}>
          {copyShortUrl ? "your short URL has been copied to the clipboard" : "" }
        </p>

        <button
          type="submit"
          className={accessButton ? " " : "disabled"}
          disabled={accessButton ? false : true}
          id="trimButton"  
        >
          Trim URL
          <img src={magicWand} alt="" />
        </button>
        <p>
          By clicking TrimURL, I agree to the
          <strong>Terms of Service,</strong>
          <strong>Privacy Policy </strong> and Use of Cookies.
        </p>
      </form>
      <img className="bottom-img" src={Group2} alt="" />
    </section>
  );
}

export default Form;
