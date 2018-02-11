(function(w) {
    var EL_SLIDER_SELECTOR = '.slider-primary';
    var d = w.document;

    getElSlider()
        .then(function(el) {

        })
        .catch(function(event) {
           console.error(event);
        });


    /**
     * Получить dom елемент слайдера
     * @returns {Promise<>}
     */
    function getElSlider() {
        return new Promise(function(resolve) {
            (function check() {
                var el = d.querySelector(EL_SLIDER_SELECTOR);
                if (el) {
                    resolve(el);
                } else {
                    setTimeout(check, 1000);
                }
            }())
        });
    }
}(window));