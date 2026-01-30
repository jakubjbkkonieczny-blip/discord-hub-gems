const crates = [
  {name:"Common Crate", price:7, color:"#D4D4D4"},
  {name:"Meme Crate", price:13, color:"#FFB6C1"},
  {name:"Gamer Crate", price:13, color:"#FF6347"},
  {name:"Aesthetic Crate", price:13, color:"#9370DB"},
  {name:"Rich Crate", price:29, color:"#FFD700"},
  {name:"Legendary Crate", price:73, color:"#00FFFF"}
];

const shopItems = [
  {name:"💬 Social Star", price:15},
  {name:"🎮 Game Multiverse", price:15},
  {name:"⚽ Matchday Madness", price:15}
];

// Inject crates
const crateGrid = document.getElementById('crate-grid');
if(crateGrid){
  crates.forEach(c=>{
    const div = document.createElement('div');
    div.className='crate';
    div.style.background=c.color;
    div.innerHTML=`<h2>${c.name}</h2><p>${c.price} GEMS</p><button onclick="openCrate('${c.name}')">OPEN</button>`;
    crateGrid.appendChild(div);
  });
}

// Inject shop
const shopGrid = document.getElementById('shop-grid');
if(shopGrid){
  shopItems.forEach(i=>{
    const div = document.createElement('div');
    div.className='shop-item';
    div.innerHTML=`<h2>${i.name}</h2><p>${i.price} GEMS</p><button onclick="buyItem('${i.name}')">BUY</button>`;
    shopGrid.appendChild(div);
  });
}

function openCrate(name){
  alert(🎁 Opening ${name} with animation...);
}

function buyItem(name){
  alert💰 Purchased ${name}!`);
}
