function loader() {
  const loader = document.querySelector("#loader");

  window.addEventListener("load", ()=> {
    setTimeout(() => {
      loader.classList.add("loader-wrapper--hidden");
    }, 300);
  })
}

export default loader;