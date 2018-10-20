# dev guide

Liquid:

### Переменные страницы: 
 
- `includesCss` - массив с `css` файлами, которые добавятся в файл `css` страницы. Добавлять с помощью фильтра `includesCss` {{ '' | includesCss }}. Только для компонентов из `_includes/` 

- title - название страницы
- cssMain - css класс, добавить на <body><main class="... {{ cssMain }}">  

- yandexMetrika  @default true метрика YA на странице


подключение файла стилей и скриптов.
- cssUrls: Array<String>
- jsUrls: Array<String>

пример добавления: 
{{ '/css/a_base.css' | makeUrl | addVarToPage:'cssUrls' | void }}
{{ '/js/a_base.js' | makeUrl | addVarToPage:'jsUrls' | void }}


### _includes
директороия с компонентами  
сокращенные названия файлов: `c.ccs, h.html, j.js`


### --
img

data-src="путь "

в директории картинки для xs sm md lg xl
разные "базовые" разрешения

<img src=""
     class="col-12 col-lg-6 order-lg-last mb-3 about-triathlon-content-img"
     data-src="imgs/about_triathlon/bike.jpg xs-100 sm-300 md-500 lg-700"
     data-src="imgs/about_triathlon/bike.jpg md=800 ls=600"
>

для одного использования, где, например, xs - начинается с 500px;
bike-orig-xs-w100-.jpg


bike-w500-xs.jpg     w-500px
bike-100.jpg     w-700px
bike-200.jpg     w-900px
bike-300.jpg     w-
bike-400.jpg



---

позиция дочернего компонента:
выравнивание
отступы
положение, если расположен не в потоке

---
размеры дочернего компонента:
задается контейнером, в котором располагается компонент, или передав css


---
css общие назание стилей
description описание, рядом с картинкой
figure картинка
sign подпись под картинкой /





