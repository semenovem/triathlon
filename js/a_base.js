(function() {
  if (document.readyState !== 'complete') {
    document.addEventListener('readystatechange', handleReadyStateChange);
  } else {
    stickFooter();
  }

  function handleReadyStateChange() {
    if (document.readyState === 'complete') {
      document.removeEventListener('readystatechange', handleReadyStateChange);
      stickFooter();
    }
  }

  /**
   * Прилепить footer к низу страницы
   */
  function stickFooter() {
    const hPage = document.body.offsetHeight;

    if (hPage < document.body.scrollHeight) {
      return;
    }

    const elMain = document.body.querySelector('main');
    const elFooter = document.body.querySelector('footer');
    const footer = elFooter.getBoundingClientRect();

    if (hPage > footer.bottom) {
      elMain.style.minHeight = `${elMain.offsetHeight + (hPage - footer.bottom)}px`;
    }
  }
})();
