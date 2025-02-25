document.addEventListener("DOMContentLoaded", () => {
  const luckyBtn = document.querySelector(".lucky-btn");
  const searchBtn = document.querySelector(".search-btn");
  const advSearch = document.querySelector(".as-butn");
  const noSearch = document.querySelector(".no-search");
  const searchQuery = document.getElementById("searchQuery");

  luckyBtn?.addEventListener("click", () => {
    let query = document.getElementById("searchQuery")?.value;
    if (query?.trim() !== "") {
      setTimeout(function () {
        window.location.href =
          "https://google.com/search?q=" +
          encodeURIComponent(query) +
          "&btnI=I%27m+Feeling+Lucky";
      }, 500);
    } else noSearch.style.display = "block";
  });

  searchBtn?.addEventListener("click", (e) => {
    noSearch.style.display = "none";
    let query = document.getElementById("searchQuery")?.value;
    if (query?.trim() === "") {
      e.preventDefault();
      noSearch.style.display = "block";
    }
  });

  advSearch?.addEventListener("click", (e) => {
    noSearch.style.display = "none";
    const advFields = document.querySelectorAll(".as-field");

    const allEmpty = [...advFields].every((field) => field.value.trim() === "");

    if (allEmpty) {
      e.preventDefault();
      noSearch.style.display = "block";
    }
  });

  searchQuery?.addEventListener("focus", function () {
    this.dataset.placeholder = this.placeholder; // Store placeholder
    this.placeholder = "";
  });

  searchQuery?.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      this.placeholder = this.dataset.placeholder; // Restore placeholder
    }
  });
});
