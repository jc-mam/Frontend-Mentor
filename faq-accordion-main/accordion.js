const acc = document.getElementsByClassName('question');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
        this.classList.toggle('active');

        /* Toggle between hiding and showing the active panel */
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        if (
            this.firstElementChild.getAttribute('src') ===
            './assets/images/icon-minus.svg'
        ) {
            this.firstElementChild.setAttribute(
                'src',
                './assets/images/icon-plus.svg'
            );
            this.firstElementChild.setAttribute('alt', 'expand icon');
        } else {
            this.firstElementChild.setAttribute(
                'src',
                './assets/images/icon-minus.svg'
            );
            this.firstElementChild.setAttribute('alt', 'collapse icon');
        }
    });
}
