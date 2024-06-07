const myFaqs = document.querySelectorAll(".faq");

myFaqs.forEach((e, i) => {
  const header = e.querySelector(".faq__header");
  header.addEventListener("click", () => {
      e.classList.toggle("open");
      let desc = e.querySelector('.faq__desc');
      let icon = e.querySelector('.icon');
      if (e.classList.contains('open')) {
          desc.style.height = `${desc.scrollHeight}px`
        icon.src = '/assets/images/icon-minus.svg'
        } else {
              icon.src = '/assets/images/icon-plus.svg'
          desc.style.height = '0'
      }
  });
});
