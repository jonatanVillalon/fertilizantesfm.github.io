class Slider {
    constructor(slider) {
        this.$slides = slider.querySelectorAll(".woow-slide");
        this.$prev = slider.querySelector(".woow-slide-prev");
        this.$next = slider.querySelector(".woow-slide-next");
        this.$pag = slider.querySelectorAll(".woow-pag");

        // Counter
        this.index = 0;
        this.length = this.$slides.length;

        // Active Slide
        this.$activeSlide = this.$slides[0];
        this.$activePag = this.$pag[0];

        // Events
        this.$prev.addEventListener('click', this.prev.bind(this));
        this.$next.addEventListener('click', this.next.bind(this));

        for (let i = 0; i < this.$pag.length; i++) {
            this.$pag[i].addEventListener('click', () => {
                // Update Index
                this.index = i;

                // Change Slide and Page
                this.pag();
            });
        }

        this.interval = setInterval(this.next.bind(this), 3000);
    }

    prev() {
        // Decrement index
        this.index = this.index - 1;

        // Loop index. If index < 0 then go to last slide
        if (this.index < 0) {
            this.index = this.length - 1;
        }

        // Change Slide and Page
        this.pag();
    }

    next() {
        // Increment
        this.index = this.index + 1;

        // Loop index. If index > length of slides then go to first slide
        if (this.index >= this.length) {
            this.index = 0;
        }

        // Change Slide and Page
        this.pag();
    }

    pag() {
        // Reset Active
        this.$activeSlide.classList.remove('woow-slide-active');
        this.$activePag.classList.remove('woow-pag-active');

        // Change Active
        this.$activeSlide = this.$slides[this.index];
        this.$activePag = this.$pag[this.index];

        // Set Active
        this.$activeSlide.classList.add('woow-slide-active');
        this.$activePag.classList.add('woow-pag-active');

        // Reset Interval
        clearInterval(this.interval);

        // Restart Interval
        this.interval = setInterval(this.next.bind(this), 4000);
    }
}

// Appel de Slider avec le mot-clé 'new'
const $sliders = document.querySelectorAll('.woow-slider');

for (let i = 0; i < $sliders.length; i++) {
    new Slider($sliders[i]);
}