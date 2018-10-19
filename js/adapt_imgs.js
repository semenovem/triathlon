/**
 *
 */
const adaptImgs = {

  init() {
    this._findImgs();
  },

  _findImgs() {
    const imgs = document.querySelectorAll('[data-src]');

    // [].forEach.call(imgs, console.log);

    console.log(imgs.length);
  },

  _observe(el) {
    // console.log(el);
    //data-anims="fade-before >=md"
    const val = this.parse(el.getAttribute(this._attrName));

  },


  _parse() {

  },

  // получить все узлы с установленной анимацией

  // добавить observer
};

app.domContentLoaded.then(adaptImgs.init.bind(adaptImgs));
