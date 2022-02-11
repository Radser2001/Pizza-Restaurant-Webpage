saladsTab = document.querySelector("#salads");
saladMenu = document.querySelector(".salads");
pizzaTab = document.querySelector("#pizza");
pizzaMenu = document.querySelector(".pizza");
starterTab = document.querySelector("#starter");
starterMenu = document.querySelector(".starter");

saladsTab.addEventListener("click", function () {
  saladMenu.style.display = "block";
  pizzaMenu.style.display = "none";
  starterMenu.style.display = "none";
});

pizzaTab.addEventListener("click", function () {
  pizzaMenu.style.display = "block";
  saladMenu.style.display = "none";
  starterMenu.style.display = "none";
});

starterTab.addEventListener("click", function () {
  starterMenu.style.display = "block";
  saladMenu.style.display = "none";
  pizzaMenu.style.display = "none";
});
