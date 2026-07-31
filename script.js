function createRoom() {
  const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let roomCode = "";

  for (let i = 0; i < 5; i++) {
    roomCode += characters[Math.floor(Math.random() * characters.length)];
  }

  alert("Room created! Your code is: " + roomCode);
}

function joinRoom() {
  const code = prompt("Enter the room code:");

  if (code) {
    alert("Joining room: " + code.toUpperCase());
  }
}
