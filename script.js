const container = document.getElementById("heart");

for(let i = 0; i < 200; i++){

  let t = (Math.PI * 2 * i) / 200;

  let x = 16 * Math.pow(Math.sin(t),3);

  let y =
    13 * Math.cos(t) -
    5 * Math.cos(2*t) -
    2 * Math.cos(3*t) -
    Math.cos(4*t);

  const span = document.createElement("span");

  span.className = "word";
  span.innerText = "I love you";

  span.style.left = `${window.innerWidth/2 + x*20}px`;
  span.style.top = `${window.innerHeight/2 - y*20}px`;

  span.style.animationDelay = `${i*0.03}s`;

  container.appendChild(span);
}
