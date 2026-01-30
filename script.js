let userGems = 22;

function loginDiscord() {
  alert("✨ Magical Discord login coming soon! ✨");
}

function openCrate(crate) {
  const rewards = {
    "Common": ["🙂 Chill Human 🙂", "😎 Cool Dude 😎", "✨ Casual Vibe ✨"],
    "Meme": ["🤡 Certified Clown 🤡", "💀 Dead Inside 💀", "🗿 Stone Face 🗿"],
    "Gamer": ["🎮 Game Addict 🎮", "🔫 Trigger Happy 🔫", "🏆 Rank Grinder 🏆"],
    "Aesthetic": ["🌸 Soft Bloom 🌸", "🌙 Moon Drifter 🌙", "🦋 Blue Butterfly 🦋"],
    "Rich": ["💎 Diamond Touch 💎", "👑 Crowned One 👑", "💰 Money Talks 💰"],
    "Legendary": ["👑🔥 Chosen Monarch 🔥👑", "💎✨ Diamond Legend ✨💎"]
  };
  const rewardList = rewards[crate];
  const reward = rewardList[Math.floor(Math.random()*rewardList.length)];

  // Floating alert effect
  const alertBox = document.createElement("div");
  alertBox.classList.add("crate-alert");
  alertBox.innerText =🎁 You got: ${reward}!`;
  document.body.appendChild(alertBox);
  setTimeout(() => { alertBox.remove(); }, 3000);
}

function buyRole(role, cost) {
  if(userGems >= cost) {
    userGems -= cost;
    alert💎 You bought ${role}! Remaining gems: ${userGems}`);
  } else {
    alert("❌ Not enough gems!");
  }
}

function addGemFromAd() {
  userGems += 1;
  alert("💎 +1 gem for watching ad!");
}
