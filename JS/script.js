var alertcontainer = document.getElementById("alertcontainer");
var alertsend = document.getElementById("alertsend");
var submithide = document.getElementById("submithide");

function alertpost() {
  alertcontainer.style.animation = "alertanim 0.3s ease";
  alertcontainer.style.display = "flex";

  setTimeout(function () {
    alertcontainer.style.animation = "alertanimreverse 0.3s ease";
    setTimeout(function () {
      alertcontainer.style.display = "none";
    }, 280);
    setTimeout(function () {
      submithide.click();
    }, 700);
  }, 3000);
}
