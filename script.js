(function () {
  function changeClass() {
    const elements = document.querySelectorAll(".item-img.blur15");
    elements.forEach((element) => {
      element.classList.remove("blur15");
    });
  }

  if (window.location.href.startsWith("https://archive.org/")) {
    changeClass();
	
    const observer = new MutationObserver(() => {
      changeClass();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
})();
