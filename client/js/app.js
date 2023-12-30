/* eslint-disable */
export class App {
    init() {
        this.cacheDom()
        this.initEvents()
        this.checked = false;
    }

    cacheDom() {
        this.checkbox = document.querySelector('.checkbox');
    }
    initEvents() {
        this.checkbox.addEventListener('click', this.toggleCheck);
    }

   toggleCheck() {
        if (!(this.checkbox.classList.contains('checked'))) {
            this.checkbox.classList.add('checked');
        } else {
            this.checkbox.classList.remove('checked');
        }
    }
}