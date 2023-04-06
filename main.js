const images = ["https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_17.gif?26a74f4f0ef5a787894adc441abd042e",
  "https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_7.gif?26a74f4f0ef5a787894adc441abd042e",
  "https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_10.gif?26a74f4f0ef5a787894adc441abd042e",
  "https://media.tenor.com/JK3PUlvXIt8AAAAM/math-lady.gif",
  "https://media.tenor.com/HnJpjRirG5UAAAAC/jackie-chan-meme.gif",
  "https://media.tenor.com/9wHj0SnxEb8AAAAC/lost-confused.gif"
]

const memes = []


const body = document.querySelector('body');
const gif = document.createElement('img');
gif.src = images[Math.floor(Math.random() * 6)];
body.appendChild(gif);
gif.style.position = 'fixed';
gif.style.width = "10%"
gif.style.top = '20%';



function increment() {
  const old = Number(gif.style.width.replace('%', '')) + 0.2;
  gif.style.width = `${old}%`;
  if (gif.style.width !== '40%') { setTimeout(increment.bind(this), 100); }
}

function replaceEveryThreeLinks() {
  const pLinks = document.querySelectorAll("p > a");
  for (let i = 0; i < pLinks.length; i++) {
    if (i % 3 === 0 || i === 1) {
      pLinks[i].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }
}

increment();
replaceEveryThreeLinks();