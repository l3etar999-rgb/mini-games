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
.games-section {
  max-width: 1200px;
  margin: 90px auto 0;
  padding: 50px 20px;
}

.games-section h2 {
  margin-bottom: 12px;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 35px;
}

.game-card {
  position: relative;
  padding: 30px 22px;
  border-radius: 20px;
  background: linear-gradient(
    145deg,
    rgba(42, 20, 55, 0.95),
    rgba(18, 10, 28, 0.95)
  );
  border: 1px solid rgba(180, 60, 220, 0.35);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  transition: 0.3s;
}

.game-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(190, 30, 90, 0.12),
    transparent 45%,
    rgba(130, 40, 220, 0.15)
  );
  pointer-events: none;
}

.game-card:hover {
  transform: translateY(-10px);
  border-color: rgba(230, 40, 90, 0.7);
  box-shadow:
    0 0 20px rgba(190, 30, 90, 0.3),
    0 0 35px rgba(130, 40, 220, 0.25);
}

.game-icon {
  font-size: 55px;
  margin-bottom: 18px;
}

.game-card h3 {
  font-size: 25px;
  margin-bottom: 12px;
}

.game-card p {
  min-height: 48px;
  color: #bdb3c8;
  line-height: 1.6;
  margin-bottom: 22px;
}

.game-card button {
  width: 100%;
}

@media (max-width: 850px) {
  .games-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .games-section {
    margin-top: 50px;
    padding: 30px 12px;
  }

  .games-grid {
    grid-template-columns: 1fr;
  }

  .game-card {
    padding: 25px 18px;
  }
}
