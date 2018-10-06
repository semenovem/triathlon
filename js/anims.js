/**
 *
 */
const anim = {
  _attrName: 'data-anims',
  _querySel: '[data-anims]',

  init() {
    // [].forEach.call(document.body.querySelectorAll(this._querySel), this._observe, this);
  },

  _observe(el) {
    // console.log(el);
    //data-anims="fade-before >=md"
    const val = this.parse(el.getAttribute(this._attrName));

  },


  _parse() {

  }

  // получить все узлы с установленной анимацией

  // добавить observer
};


(function() {
  if (document.readyState !== 'complete') {
    document.addEventListener('readystatechange', handleReadyStateChange);
  } else {
    anim.init();
  }

  function handleReadyStateChange() {
    if (document.readyState === 'complete') {
      document.removeEventListener('readystatechange', handleReadyStateChange);
      anim.init();
    }
  }
})();

