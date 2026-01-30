let userGems = 22;

function loginDiscord() {
  alert("Login with Discord functionality goes here.");
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
  alert(You opened ${crate} Crate and got: ${reward}!);
}

function buyRole(role, cost) {
  if(userGems >= cost) {
    userGems -= cost;
    alert(You bought ${role} role! Remaining gems: ${userGems});
  } else {
    alert("Not enough gems!");
  }
}

function addGemFromAd() {
  userGems += 1;
  alert("You got +1 gem for watching an ad!");
}
