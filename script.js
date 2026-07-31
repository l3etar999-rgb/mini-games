function createRoom() {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let roomCode = "";

  for (let i = 0; i < 5; i++) {
    roomCode += characters[Math.floor(Math.random() * characters.length)];
  }

  document.getElementById("roomCode").textContent = roomCode;

  document.getElementById("roomBox").style.display = "block";
}

function copyCode() {
  const code = document.getElementById("roomCode").textContent;

  navigator.clipboard.writeText(code);

  alert("تكوپى الكود: " + code);
}

function joinRoom() {
  const code = prompt("دخل كود الروم:");

  if (code) {
    alert("غادي تدخل للروم: " + code.toUpperCase());
  }
}
