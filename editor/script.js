(function(document) {
  app.loaded.then(stickFooter).then(manage)

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


  function manage() {
    const ID = 'x5edit';
    const elMain = document.body.querySelector('main');

    CKEDITOR.config.height = elMain.offsetHeight - 130;
    CKEDITOR.replace('editor');

    const str = localStorage.getItem(ID);

    if (str) {
      CKEDITOR.instances.editor.setData(str);
    }

    CKEDITOR.instances.editor.on('change', function(evt) {
      const data = evt.editor.getData();

      localStorage.setItem(ID, data);
    });
  }
})(document);
