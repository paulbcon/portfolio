const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];
if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];    
        //console.log(el);
    });
}