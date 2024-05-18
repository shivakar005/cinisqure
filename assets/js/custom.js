const faqItems = document.querySelectorAll('.faq--list--item');

faqItems.forEach(item => {
    item.querySelector('.faq--list--item--head').addEventListener('click', () => {
        // Close all FAQ items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.faq--content').classList.remove('active');
                otherItem.querySelector('.faq--list--item--head').classList.remove('active');
            }
        });

        // Toggle the 'active' class on the clicked FAQ item
        item.querySelector('.faq--content').classList.toggle('active');
        item.querySelector('.faq--list--item--head').classList.toggle('active');
    });
});

// faq end


let tween1 = gsap.to(".testimonial--slider.right--side .testimonial--items", {
    xPercent: -100,
    repeat: -1,
    duration: 10,
    ease: "linear"
  }).totalProgress(0.5);

  let tween2 = gsap.to(".testimonial--slider.left--side .testimonial--items", {
    xPercent: 100,
    repeat: -1,
    duration: 10,
    ease: "linear"
  }).totalProgress(0.5);

  gsap.set(".testimonial--slide", { xPercent: -50 });

  let currentScroll = 0;
  let isScrollingDown = true;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > currentScroll) {
      isScrollingDown = true;
    } else {
      isScrollingDown = false;
    }

    gsap.to([tween1, tween2], {
      timeScale: isScrollingDown ? 1 : -1
    });

    currentScroll = window.pageYOffset;
  });

