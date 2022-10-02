var alertcontainer = document.getElementById("alertcontainer");
var alertsend = document.getElementById("alertsend");
var submithide = document.getElementById("submithide");
// getElementsByClassName retourne un tableau avec tous les inputs dedans
var require = document.getElementsByClassName("require");

var test = document.getElementById("test").innerText.length;

// if (document.getElementsById("require").)

function alertpost() {
  for (var i = 0; i < require.length; i++) {
    if (require[i].value == "") {
      console.log(require[i].value);
      require[i].classList.add = "invalid";
      alertsend.innerHTML =
        "<p> Des champs obligatoire ne sont pas remplis </p>";
      alertcontainer.style.animation = "alertanim 0.3s ease";
      alertcontainer.style.display = "flex";

      alertsend.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });

      setTimeout(function () {
        alertcontainer.style.animation = "alertanimreverse 0.3s ease";
        setTimeout(function () {
          alertcontainer.style.display = "none";
        }, 280);
      }, 1500);
    } else if (require[i].value != "") {
      alertcontainer.style.animation = "alertanim 0.3s ease";
      alertcontainer.style.display = "flex";

      alertsend.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });

      setTimeout(function () {
        alertcontainer.style.animation = "alertanimreverse 0.3s ease";
        setTimeout(function () {
          alertcontainer.style.display = "none";
        }, 280);
        setTimeout(function () {
          submithide.click();
        }, 700);
      }, 2000);
    }
  }

  // if (require.item.length == 0) {
  //   alertsend.innerText = "<p> Le formulaire est invalide </p>";
  //   alertcontainer.style.animation = "alertanim 0.3s ease";
  //   alertcontainer.style.display = "flex";

  //   alertsend.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //     inline: "nearest",
  //   });

  //   setTimeout(function () {
  //     alertcontainer.style.animation = "alertanimreverse 0.3s ease";
  //     setTimeout(function () {
  //       alertcontainer.style.display = "none";
  //     }, 280);
  //   }, 1500);
  // } else if (require.item.length >= 1) {
  //   alertcontainer.style.animation = "alertanim 0.3s ease";
  //   alertcontainer.style.display = "flex";

  //   alertsend.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //     inline: "nearest",
  //   });

  //   setTimeout(function () {
  //     alertcontainer.style.animation = "alertanimreverse 0.3s ease";
  //     setTimeout(function () {
  //       alertcontainer.style.display = "none";
  //     }, 280);
  //     setTimeout(function () {
  //       submithide.click();
  //     }, 700);
  //   }, 2000);
  // }
}
