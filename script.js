const privateLinks = document.querySelectorAll(".project__link--private");
const toast = document.querySelector("#toast");

privateLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    toast.classList.add("toast--visible");

    setTimeout(() => {
      toast.classList.remove("toast--visible");
    }, 3000);
  });
});
