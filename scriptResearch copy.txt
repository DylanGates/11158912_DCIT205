const slideshows = document.querySelectorAll('.slideshow-container');

        slideshows.forEach(slideshow => {
          const cards = slideshow.getElementsByClassName('project-card');
          let slideIndex = 0;

          function showSlide(n) {
            if (n < 0) {
              slideIndex = cards.length - 1;
            } else if (n >= cards.length) {
              slideIndex = 0;
            }

            for (let i = 0; i < cards.length; i++) {
              cards[i].style.display = 'none';
            }

            cards[slideIndex].style.display = 'block';
          }

          function nextSlide() {
            showSlide(slideIndex + 1);
          }

          function previousSlide() {
            showSlide(slideIndex - 1);
          }

          showSlide(slideIndex);

          const prevButton = document.createElement('div');
          prevButton.className = 'prev';
          prevButton.textContent = '&#10094;';
          slideshow.appendChild(prevButton);
          prevButton.addEventListener('click', previousSlide);

          const nextButton = document.createElement('div');
          nextButton.className = 'next';
          nextButton.textContent = '&#10095;';
          slideshow.appendChild(nextButton);
          nextButton.addEventListener('click', nextSlide);
        });