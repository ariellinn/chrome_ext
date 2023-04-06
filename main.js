const images = ["https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_17.gif?26a74f4f0ef5a787894adc441abd042e",
  "https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_7.gif?26a74f4f0ef5a787894adc441abd042e",
  "https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_10.gif?26a74f4f0ef5a787894adc441abd042e",
  "https://media.tenor.com/JK3PUlvXIt8AAAAM/math-lady.gif",
  "https://media.tenor.com/HnJpjRirG5UAAAAC/jackie-chan-meme.gif",
  "https://media.tenor.com/9wHj0SnxEb8AAAAC/lost-confused.gif",
  "https://media.tenor.com/3bks2iIGpGoAAAAM/pepe-why-under256kb.gif",
  "https://s3.getstickerpack.com/storage/uploads/sticker-pack/twitch-pepe-meme-gif/sticker_12.gif?26a74f4f0ef5a787894adc441abd042e"
];

const memes = ["https://res.cloudinary.com/practicaldev/image/fetch/s--JcyEpOBL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/au3f7tzbla8hydecno6q.jpg",
  "https://res.cloudinary.com/practicaldev/image/fetch/s--nJjfteXn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yyvpwe28d4cqv76rjjpz.gif",
  "https://res.cloudinary.com/practicaldev/image/fetch/s--oUchtkYq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ade5cd9bl7wz7bnsqbkn.gif",
  "https://res.cloudinary.com/practicaldev/image/fetch/s--pwQ9FFbx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6a413tyi7awhnisccl62.jpg",
  "https://res.cloudinary.com/practicaldev/image/fetch/s--CU-rIdFU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bq3roea252k0h783ugeo.png",
  "https://ih1.redbubble.net/image.3046220789.1503/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  "https://testbytes.technoallianceindia.com/wp-content/uploads/2019/06/Untitled-8-1.png",
  "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png"
];

const usedMemes = new Set();

const body = document.querySelector('body');
const gif = document.createElement('img');
gif.src = images[Math.floor(Math.random() * images.length)];
body.appendChild(gif);
gif.style.position = 'fixed';
let decGif = false;
resetGif();

function resetGif() {
  gif.src = images[Math.floor(Math.random() * images.length)];
  gif.style.width = "10%"
  gif.style.opacity = "0.0";
  gif.style.top = `${(Math.random() * (75 - 15) + 15)}%`;
  gif.style.right = `${Math.random() * (80 - 10) + 10}%`;
  decGif = false;
}

function incrementGif() {
  if (gif.style.width !== '20%' && !decGif) {
    const old = Number(gif.style.width.replace('%', '')) + 0.2;
    const thickness = Number(gif.style.opacity);
    gif.style.opacity = `${thickness + 0.02}`;
    gif.style.width = `${old}%`;
  } else if (decGif) {
    const old = Number(gif.style.width.replace('%', '')) - 0.2;
    const thickness = Number(gif.style.opacity) - 0.02;
    if (thickness <= 0) {
      resetGif();
    } else {
      gif.style.opacity = `${thickness}`;
      gif.style.width = `${old}%`;
    }
  } else if (gif.style.opacity === "1") { 
    decGif = true;
  } 
   setTimeout(incrementGif.bind(this), 60);
}

function replaceEveryThreeLinks() {
  const pLinks = document.querySelectorAll("p > a");
  for (let i = 0; i < pLinks.length; i++) {
    if (i % 3 === 0 || i === 1) {
      pLinks[i].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }
}

function replaceParagraph() {
  const divParagraphs = document.querySelectorAll("div.section-content > p");
  if (divParagraphs.length !== 0) {
    let randomMeme = Math.floor(Math.random() * memes.length);
    let randomP = Math.floor(Math.random() * divParagraphs.length);
    const newImage = document.createElement('img');
    if (usedMemes.size !== memes.length) {
      do {
        randomMeme = Math.floor(Math.random() * memes.length);
      } while (usedMemes.has(randomMeme))
    }
    newImage.src = memes[randomMeme];
    newImage.style.width = "50%";
    usedMemes.add(randomMeme);
    divParagraphs[randomP].parentNode.replaceChild(newImage, divParagraphs[randomP]);

    setTimeout(replaceParagraph.bind(this), 5000);
  }



}

incrementGif();
replaceEveryThreeLinks();
setTimeout(replaceParagraph, 5000);