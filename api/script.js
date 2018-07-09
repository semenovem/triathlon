function requestAPI() {
  fetch('http://ip-api.com/json')
    .then(function(res) {
      return res.json();
    })
    .then(responseAPI)
}


function responseAPI(data) {
  console.log(data);
  var el = document.getElementById('root');

  if (data && typeof data === 'object') {
    el.appendChild(createTableFromObject(data));
  } else {
    el.innerText = data;
  }
}

/**
 * @param obj {Object}
 * @returns {HTMLElement};
 */
function createTableFromObject(obj) {
  var key;
  var elTab = document.createElement('TABLE');

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      elTab.appendChild(createRow(key, obj[key]));
    }
  }
  return elTab;
}


/**
 * @param key {*}
 * @param val {*}
 * @return {HTMLElement}
 */
function createRow(key, val) {
  var el = document.createElement('TR');
  el.appendChild(createCol(key));
  el.appendChild(createCol(val));

  return el;
}

/**
 * @param val {*}
 * @return {HTMLElement}
 */
function createCol(val) {
  var el = document.createElement('TD');
  el.appendChild(
    document.createTextNode(val)
  );

  return el;
}


requestAPI();