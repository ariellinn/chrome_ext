const images = ["https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_17.gif?26a74f4f0ef5a787894adc441abd042e",
  "https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_7.gif?26a74f4f0ef5a787894adc441abd042e",
  "https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_10.gif?26a74f4f0ef5a787894adc441abd042e",
  "https://media.tenor.com/JK3PUlvXIt8AAAAM/math-lady.gif",
  "https://media.tenor.com/HnJpjRirG5UAAAAC/jackie-chan-meme.gif",
  "https://media.tenor.com/9wHj0SnxEb8AAAAC/lost-confused.gif"
]
const body = document.querySelector('body');
const gif = document.createElement('img');
gif.src = images[Math.floor(Math.random() * 6)];
body.appendChild(gif);
gif.style.position = 'fixed';
gif.style.width = "150px"
gif.style.top = '20%';

function incrementGif() {
  const old = Number(gif.style.width.replace('px', '')) + 1;
  gif.style.width = `${old}px`;
  if (gif.style.width !== '600px') { setTimeout(incrementGif.bind(this), 100); }
}

incrementGif();
