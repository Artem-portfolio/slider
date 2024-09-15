function mobileNav() {
  const btnOpen = document.querySelector("#modalOpen");
  const btnClose = document.querySelector("#modalClose");

  const navOverlay = document.querySelector("#mobileNavOverlay");
  const nav = document.querySelector("#mobileNav");

  btnOpen.onclick = toggleNav;
  btnClose.onclick = toggleNav;
  navOverlay.onclick = toggleNav;
  
  function toggleNav() {
    navOverlay.classList.toggle("mobile-nav-overlay--open");
    nav.classList.toggle("mobile-nav--open");
    document.body.classList.toggle("no-scroll");
  }
}

export default mobileNav;