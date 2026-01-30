const sections = document.querySelectorAll('.section');
function showSection(id) {
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// CRATES
const crates = [
  { name: "Common Crate", price: 7, color: "gray" },
  { name: "Meme Crate", price: 13, color: "pink" },
  { name: "Gamer Crate", price: 13, color: "red" },
  { name: "Aesthetic Crate", price: 13, color: "purple" },
  { name: "Rich Crate", price: 29, color: "gold" },
  { name: "Legendary Crate", price: 73, color: "rainbow" },
];

const crateGrid = document.getElementById('crateGrid');
crates.forEach(c => {
  const div = document.createElement('div');
  div.className = crate ${c.color};
  div.innerHTML = <h3>${c.name}</h3><p>${c.price} GEMS</p><button onclick="openCrate('${c.name}', ${c.price})">OPEN</button>;
  crateGrid.appendChild(div);
});

// GEM COUNT
let gemCount = 22;
function openCrate(name, price) {
  if (gemCount < price) return alert("Not enough gems!");
  gemCount -= price;
  document.getElementById('gemCount').innerText = gemCount;

  const reward = Math.floor(Math.random() * 100); // placeholder losowania
  alert(You opened ${name} and won a reward! 🎉);
}
