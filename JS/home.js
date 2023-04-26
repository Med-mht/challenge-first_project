document.addEventListener("DOMContentLoaded", init);

function init() {
  const iconeBar = document.querySelector(".icon_menu");
  const menuContent = document.querySelector(".menu_content");
  const backgdrop = document.querySelector(".backgdrop");

  iconeBar.addEventListener("click", () => {
    menuContent.classList.toggle("menu_content_active");

    backgdrop.classList.toggle("backgdrop_active");

    iconeBar.classList.toggle("icon_menu_active");
  });

  document.addEventListener("click", (event) => {
    if (
      !menuContent.contains(event.target) &&
      !iconeBar.contains(event.target)
    ) {
      menuContent.classList.remove("menu_content_active");
      iconeBar.classList.remove("icon_menu_active");
      backgdrop.classList.remove("backgdrop_active");
    }
  });
}
