const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Eu sempre soube que tu gostava dela. Kuromi também te ama💋";
  gif.src = "https://media.giphy.com/media/Y1eRcnAP3dvgeKhhx6/giphy.gif?cid=790b7611aain90dqrw4t3zzhnh7icec6u7uz0zxihwhzjtht&ep=v1_gifs_search&rid=giphy.gif&ct=g";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const btnGroup = document.querySelector(".btn-group");
  const btnGroupRect = btnGroup.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the button group
  const maxX = btnGroupRect.width - noBtnRect.width;
  const maxY = btnGroupRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
