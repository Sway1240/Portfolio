const roles = ["Devlopper", "Gamer", "Tech enthusiast"];
let currentIndex = 0;

function switchrole() {
  const role = document.getElementById("role");
  role.classList.remove("animate__fadeInUp");
  void role.offsetWidth;
  role.textContent = roles[currentIndex];
  role.classList.add("animate__fadeInUp");
  currentIndex = (currentIndex + 1) % roles.length;
}


setInterval(switchrole, 1000);
switchrole();
