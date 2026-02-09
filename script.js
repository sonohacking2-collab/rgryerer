let viewers = Math.floor(Math.random() * (90000 - 40000)) + 40000;

setInterval(() => {
  let change = Math.floor(Math.random() * 300 - 150);
  viewers += change;
  if (viewers < 1000) viewers = 1000;
  document.getElementById("viewers").innerText = viewers.toLocaleString();
}, 2000);
