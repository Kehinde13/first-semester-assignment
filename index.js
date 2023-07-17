const button = document.getElementsByClassName("accordion");
const copyButton = document.querySelector(".copyButton");
const alert = document.querySelector("#alert");
const shortUrl = document.querySelector("#shortUrl");
const trimButton = document.querySelector("#trimButton")

/* Accordion */
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    if (button[i].classList.contains("active")) {
      button[i].classList.remove("active");
    } else {
      document.querySelector(".accordion.active")?.classList.remove("active");
      button[i].classList.add("active");
    }
  });
}

/* Trimbutton */
trimButton.addEventListener('click', (e) => {
    e.preventDefault(e)
    UrlShortener()
})


/* URL Shortener */
async function UrlShortener() {
  let longUrl = document.getElementById("Url").value;

  const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
  const data = await result.json();
  shortUrl.value = data.result.short_link2;
}

/* Copy Button */
copyButton.addEventListener("click", () => {
  shortUrl.select();
  shortUrl.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(shortUrl.value);
  alert.innerText = `copied the link: ${shortUrl.value}`;
});
