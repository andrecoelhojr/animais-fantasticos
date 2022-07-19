export default function initScrollSoft() {
  const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#'");

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    
      // forma alternativa
      // const top = section.offsetTop;
      // window.scrollTo({
      //   top: top,
      //   behavior: "smooth"
      // });
    }
    
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}