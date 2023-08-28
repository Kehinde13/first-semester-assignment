const button = document.getElementsByClassName('accordion');
const copyButton = document.querySelector('.copyButton');
const alert = document.querySelector('#alert');
const shortUrl = document.querySelector('#shortUrl');
const trimButton = document.querySelector('#trimButton');
const input = document.getElementById('Url')



/* Accordion */
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    if (button[i].classList.contains('active')) {
      button[i].classList.remove('active');
    } else {
      document.querySelector('.accordion.active')?.classList.remove('active');
      button[i].classList.add('active');
    }
  });
}
// TODO: disable Trimbutton by default and enable it when input#Url has content more than 0
input.onchange = function(event) {
  let value = event.target.value;
  if (value.length > 0) {
    trimButton.setAttribute('disable', false)
  }
}

/* Trimbutton */
trimButton.addEventListener('click', async (e) => {
  e.preventDefault(e);
  // get the input value
  let longUrl = input?.value;

  let shortenedUrl = await urlShortener(longUrl);
  shortUrl.value = shortenedUrl;
});

/* URL Shortener */
async function urlShortener(value) {
  if (!value) {
    alert('Please pass in a valid url')
    // TODO: Add a validation to check the value if it is a valid URL. Options (Regex or URL)
    // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  }
  const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`);
  const data = await result.json();
  return data?.result?.short_link2;
}

/* Copy Button */
copyButton.addEventListener('click', () => {
  shortUrl.select();
  shortUrl.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(shortUrl.value);
  alert.innerText = `copied the link: ${shortUrl.value}`;
});
