"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){var s=[],r=!0,i=!1,n=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(s.push(a.value),!t||s.length!==t);r=!0);}catch(e){i=!0,n=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw n}}return s}function _arrayWithHoles(e){if(Array.isArray(e))return e}var places={_elCntMapId:"map",_srcScriptApiMap:"https://api-maps.yandex.ru/2.1/?lang=ru_RU",_map:null,_sports:{run:"бег",bike:"вело",swim:"плавание"},_items:'{"arens_tssk":{"place_id":"arens_tssk", "is_enabled":true, "addr":"Ленинградский просп., 39, стр. 1", "coords":[55.791056, 37.538859], "sign":"ЦСКА", "name":"Легкоатлетическо-футбольный комплекс ЦСКА", "imgs":["/imgs/places/arena_tssk/00.jpg"], "sports":["run"], "describe":"круг 200м", "icon":"/icons/map_placemark_place_blue.svg"}, "tekstilshchiki":{"place_id":"tekstilshchiki", "is_enabled":true, "addr":"Волгоградский просп., 46/15с16", "coords":[55.707954, 37.735735], "sign":"Москвич", "name":"ГБУ Спортивная школа олимпийского резерва Москвич", "imgs":["/imgs/places/tekstilshchiki/00.jpg"], "sports":["run"], "describe":"круг 200м", "site":"http://www.sport-moskvich.ru/", "icon":"/icons/map_placemark_place_yellow.svg"}, "krylatskoe":{"place_id":"krylatskoe", "is_enabled":true, "addr":"Крылатская ул., 10", "coords":[55.762996, 37.432978], "sign":"Крылатское", "name":"Велотрек Крылатское", "imgs":["/imgs/places/krylatskoe/00.jpg"], "sports":["bike", "run"], "describe":"круг 200м и 400м", "site":"www.velotrek.msk.ru", "icon":"/icons/map_placemark_place_pink.svg"}, "park_meshcherskii":{"place_id":"park_meshcherskii", "is_enabled":true, "addr":"Россия, Московская область, Одинцовский район, микрорайон Сколков Бор, Мещерский парк", "coords":[55.676845, 37.369597], "sign":"Мещерский", "name":"Парк Мещерский", "imgs":["/imgs/places/park_meshcherskii/00.jpg"], "sports":["run"], "describe":"круг 200м и 400м", "site":"www.park-meshersky.ru", "icon":"/icons/map_placemark_place_pink.svg"}, "sambo70":{"place_id":"sambo70", "is_enabled":true, "addr":"ул. Академика Бакулева, 5", "coords":[55.640718, 37.483549], "sign":"Самбо70", "name":"Центр спорта и образования Самбо 70, отделение Юность", "imgs":["/imgs/places/sambo70/00.jpg"], "sports":["swim", "run"], "describe":"круг 200м и 400м", "site":"www.самбо-70.рф", "icon":"/icons/map_placemark_place_pink.svg"}}',_coaches:"[Голдовский_Кирилл_Михайлович:arens_tssk,tekstilshchiki,krylatskoe][Калистратов_Алексей:arens_tssk,tekstilshchiki,krylatskoe][Никульшин_Александр_Викторович:arens_tssk,tekstilshchiki,krylatskoe][Обухов_Никита_Юрьевич:arens_tssk,tekstilshchiki,krylatskoe][Пахомова_Марина_Сергеевна:arens_tssk,tekstilshchiki,krylatskoe][Пыльский_Юрий:arens_tssk,tekstilshchiki,krylatskoe]",init:function(){var e=this;new Promise(function(t,s){var r=document.createElement("SCRIPT");r.src=e._srcScriptApiMap,r.type="text/javascript",r.onload=t,r.onerror=s,document.querySelector("head").appendChild(r)}).catch(function(e){throw e}).then(function(){var t=function(){return window.ymaps.ready(e._init.bind(e))};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()}).catch(function(e){console.error(e)})},createMap:function(){this._map=new ymaps.Map(this._elCntMapId,{center:[55.751574,37.573856],zoom:10,controls:["fullscreenControl","geolocationControl","routeEditor","rulerControl","trafficControl","zoomControl"]}),this._map.behaviors.disable("scrollZoom")},_init:function(){var e=this;this._items=this._prepareItems(this._items),this.createMap(),Object.keys(this._items).map(function(t){return e._items[t]}).filter(function(e){return e.is_enabled}).map(this._createPlacemark,this).forEach(this._addPlacemark,this)},_createPlacemark:function(e){var t=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold; font-size: 8px; width: 48px;">$[properties.iconContent]</div>');return new ymaps.Placemark(e.coords,{hintContent:e.name,balloonContent:this._createBaloonContent(e),iconContent:e.sign},{iconLayout:"default#imageWithContent",iconImageHref:"../".concat(e.icon),iconImageSize:[50,50],iconImageOffset:[0,-50],iconContentOffset:[0,21],iconContentLayout:t,hideIconOnBalloonOpen:!1})},_addPlacemark:function(e){this._map.geoObjects.add(e)},_prepareItems:function(e){var t=JSON.parse(e),s=this._prepareCoaches(this._coaches);return Object.keys(t).forEach(function(e){t[e].coaches=s[e]||[]}),t},_prepareCoaches:function(e){var t={};return e.replace(/\[.*?\]/g,function(e){var s=_slicedToArray(e.slice(1,-1).split(":"),2),r=s[0];s[1].split(",").forEach(function(e){t[e]?t[e].includes(r)||t[e].push(r):t[e]=[r]})}),t},_createBaloonContent:function(e){var t=this,s=e.sports.map(function(e){return t._sports[e]}).join(",");return"\n      <div>".concat(e.name,"</div>\n      <div>Виды спорта: ").concat(s,"</div>\n    ").trim()}};places.init();