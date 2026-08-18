/* =========================================================================
   1220X ROBOREDUX — SITE SCRIPT
   Right now this only handles the mobile navigation menu (the hamburger
   button that appears on small screens). If you later want to add more
   interactivity, this is the file to add it to.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.querySelector(".nav-list");

  if (!toggle || !navList) return;

  toggle.addEventListener("click", function () {
    var isOpen = navList.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the mobile menu after a link is tapped
  navList.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navList.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
