const share_button_open = document.querySelector(".btn-open");
const share_button_close = document.querySelector(".btn-close");
const share_button_desktop = document.querySelector(".btn-desktop");
const user_info = document.querySelector(".user-wrapper");
const share_panel = document.querySelector(".share-wrapper");

//adding event listeners to buttons
share_button_open.addEventListener("click", shareOpen);
share_button_close.addEventListener("click", shareClose);
share_button_desktop.addEventListener("click", shareDesktop);
//hideing and showing correct wrappers
function shareDesktop() {
  if (share_panel.classList.contains("hide")) {
    share_panel.classList.remove("hide");
  } else {
    share_panel.classList.add("hide");
  }
}

function shareOpen() {
  share_panel.classList.remove("hide");
  user_info.classList.add("hide");
}
function shareClose() {
  share_panel.classList.add("hide");
  user_info.classList.remove("hide");
}
