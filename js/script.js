// Seleciona todos os botões que ativam menus dropdown
const selectButtons = document.querySelectorAll(".select-btn");

selectButtons.forEach(selectBtn => {
  const optionMenu = selectBtn.closest(".select-menu");
  const options = optionMenu.querySelectorAll(".option");
  const sBtn_text = optionMenu.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

  options.forEach(option => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerHTML;
      sBtn_text.innerHTML = selectedOption;

      optionMenu.classList.remove("active");
    });
  });
});