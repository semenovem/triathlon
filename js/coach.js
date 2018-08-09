const coachAbout = {
  _elCss: 'i-coach-about',
  _elCssShadow: 'i-coach-about-shadow-top',
  _elCssContent: 'i-coach-about-content',
  _elCssJsInit: 'i-coach-about-js-init',
  _elCssHide: 'hide',

  _dataAttrInitName: 'data-i-coach-about-init',
  _dataAttrInitVal: '1',

  init() {
    [...document.body.querySelectorAll('.' + this._elCss)]
      .filter(el => !el.hasAttribute(this._dataAttrInitName), this)
      .forEach(this._init, this);
  },

  _init(el) {
    const elShadow = el.querySelector('.' + this._elCssShadow);
    const elContent = el.querySelector('.' + this._elCssContent);

    this._updateScrollState(elContent, elShadow);
    elContent.addEventListener('scroll', this._handleScroll.bind(this));
    el.setAttribute(this._dataAttrInitName, this._dataAttrInitVal);
  },

  _handleScroll(e) {
    const elContent = e.target;
    const elShadow = elContent.parentNode.querySelector('.' + this._elCssShadow);

    this._updateScrollState(elContent, elShadow);
  },

  _updateScrollState(elContent, elShadow) {
    if (elContent.scrollTop > 1) {
      elShadow.classList.remove(this._elCssHide);
    } else {
      if (!elShadow.classList.contains(this._elCssHide)) {
        elShadow.classList.add(this._elCssHide)
      }
    }
  },
};


coachAbout.init();
