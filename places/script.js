---
---

const places = {
  _elCntMapId: 'map',
  _map: null,
  _sports: {
    run: 'бег',
    bike: 'вело',
    swim: 'плавание',
  },

  _items: `{{site.data.places | replace: '=>',':'}}`,
  _coaches: `{%capture coaches%}{%include_relative get_is_enabled_coaches.html%}{%endcapture%}{{coaches | delAllSpace}}`,

  init() {
    // if (!window.ymaps) {
    //   return;
    // }
    const wait = () => ymaps.ready(this._init.bind(this));

    if (document.readyState === 'complete') {
      wait();
    } else {
      document.addEventListener('DOMContentLoaded', wait);
    }
  },

  createMap() {
    this._map = new ymaps.Map(this._elCntMapId, {
      center: [55.751574, 37.573856],
      zoom: 10,
      controls: [
        'fullscreenControl',
        'geolocationControl',
        'routeEditor',
        'rulerControl',
        'trafficControl',
        'zoomControl'
      ]
    });

    this._map.behaviors.disable('scrollZoom');
  },

  _init() {
    this._items = this._prepareItems(this._items);

    this.createMap();

    Object.keys(this._items)
      .map(place_id => this._items[place_id])
      .filter(place => place.is_enabled)
      .map(this._createPlacemark, this)
      .forEach(this._addPlacemark, this);
  },

  _createPlacemark(placemark) {
    const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold; font-size: 8px; width: 48px;">$[properties.iconContent]</div>'
    );

    return new ymaps.Placemark(placemark.coords, {
        hintContent: placemark.name,
        balloonContent: this._createBaloonContent(placemark),
        iconContent: placemark.sign
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: `/triathlon/${placemark.icon}`,
        iconImageSize: [50, 50],
        iconImageOffset: [0, -50],
        iconContentOffset: [0, 21],
        iconContentLayout: MyIconContentLayout,
        hideIconOnBalloonOpen: false,
      });
  },

  _addPlacemark(placemark) {
    this._map.geoObjects.add(placemark);
  },

  _prepareItems(rawItems) {
    const items = JSON.parse(rawItems);
    const coaches = this._prepareCoaches(this._coaches);

    Object.keys(items)
      .forEach(place_id => {

        items[place_id].coaches = coaches[place_id] || [];
      });

    return items;
  },

  _prepareCoaches(coaches) {
    const res = {};

    coaches.replace(/\[.*?\]/g, (a) => {
      const [ coach_id, places ] = a.slice(1, -1).split(':');

      places.split(',').forEach(place_id => {
        if (!res[place_id]) {
          res[place_id] = [coach_id];
        } else {
          if (!res[place_id].includes(coach_id)) {
            res[place_id].push(coach_id);
          }
        }
      })
    });

    return res;
  },

  _createBaloonContent(p) {
    const sports = p.sports.map(s => this._sports[s]).join(',');
    const coaches = p.coaches
      .map(c => {
        const fio = c.split('_').slice(0, 2);

        fio[1] = `${fio[1][0]}.`;
        return `<a href="coaches/" class="typography-link-inside-text">${fio.join(' ')}</a>`;
      })
      .join(', ');

    return `
      <div>${p.name}</div>
      <div>Виды спорта: ${sports}</div>
      <br>
      <div>Тренеры: ${coaches}</div>

    `.trim();
  },
};

places.init();
