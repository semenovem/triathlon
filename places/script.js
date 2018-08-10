const places = {
  _elCntMapId: 'map',
  _srcScriptApiMap: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU',
  _map: null,
  _sports: {
    run: 'бег',
    bike: 'вело',
    swim: 'плавание',
  },

  _items: `{"arens_tssk":{"place_id":"arens_tssk", "is_enabled":true, "addr":"Ленинградский просп., 39, стр. 1", "coords":[55.791056, 37.538859], "sign":"ЦСКА", "name":"Легкоатлетическо-футбольный комплекс ЦСКА", "imgs":["imgs/places/arena_tssk/63daab.jpg"], "sports":["run"], "describe":"круг 200м", "icon":"icons/map_placemark_place_blue.svg"}, "tekstilshchiki":{"place_id":"tekstilshchiki", "is_enabled":true, "addr":"Волгоградский просп., 46/15с16", "coords":[55.707954, 37.735735], "sign":"Москвич", "name":"ГБУ Спортивная школа олимпийского резерва Москвич", "imgs":["imgs/places/tekstilshchiki/7740561.jpg"], "sports":["run"], "describe":"круг 200м", "site":"http://www.sport-moskvich.ru/", "icon":"icons/map_placemark_place_yellow.svg"}, "krylatskoe":{"place_id":"krylatskoe", "is_enabled":true, "addr":"Крылатская ул., 10", "coords":[55.762996, 37.432978], "sign":"Крылатское", "name":"Велотрек Крылатское", "imgs":["imgs/places/krylatskoe/s1200.jpeg"], "sports":["bike", "run"], "describe":"круг 200м и 400м", "site":"www.velotrek.msk.ru", "icon":"icons/map_placemark_place_pink.svg"}, "park_meshcherskii":{"place_id":"park_meshcherskii", "is_enabled":true, "addr":"Россия, Московская область, Одинцовский район, микрорайон Сколков Бор, Мещерский парк", "coords":[55.676845, 37.369597], "sign":"Мещерский", "name":"Парк Мещерский", "imgs":["imgs/places/park_meshcherskii/345hs.jpg"], "sports":["run"], "describe":"круг 200м и 400м", "site":"www.park-meshersky.ru", "icon":"icons/map_placemark_place_pink.svg"}, "sambo70":{"place_id":"sambo70", "is_enabled":true, "addr":"ул. Академика Бакулева, 5", "coords":[55.640718, 37.483549], "sign":"Самбо70", "name":"Центр спорта и образования Самбо-70, отделение Юность", "imgs":["imgs/places/sambo70/4442.jpg"], "sports":["swim", "run"], "describe":"круг 200м и 400м", "site":"www.самбо-70.рф", "icon":"icons/map_placemark_place_pink.svg"}}`,
  _coaches: `[Голдовский_Кирилл_Михайлович:arens_tssk,tekstilshchiki,krylatskoe][Калистратов_Алексей:arens_tssk,tekstilshchiki,krylatskoe][Никульшин_Александр_Виктрович:arens_tssk,tekstilshchiki,krylatskoe][Обухов_Никита_Юрьевич:arens_tssk,tekstilshchiki,krylatskoe][Пахомова_Марина_Сергеевна:arens_tssk,tekstilshchiki,krylatskoe][Пыльский_Юрий:arens_tssk,tekstilshchiki,krylatskoe]`,

  init() {
    new Promise((resolve, reject) => {
      const el = document.createElement('SCRIPT');

      el.src = this._srcScriptApiMap;
      el.type = 'text/javascript';
      el.onload = resolve;
      el.onerror = reject;

      document.querySelector('head').appendChild(el);
    })
      .catch(e => {
        throw e;
      })
      .then(() => {
        const wait = () => window.ymaps.ready(this._init.bind(this));

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', wait);
        } else {
          wait();
        }
      })
      .catch(e => {
        console.error(e);

        // todo handle error
      })
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
        iconImageHref: `/${placemark.icon}`,
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
