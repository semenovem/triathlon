#!/bin/bash

# chmod ug+x scripts/deploy.sh
# запускать из корня проекта todo приделать проверку места запуска


### сборка проекта
# npm run-script build


### переключиться на ветку gh-pages
if git checkout ggggg ; then
  echo ok
else
  echo "Не удалось переключиться на ветку "
  exit 1;
fi



### сбросить изменения к состоянию удаленной ветки, что бы не было конфликтов
# git reset --hard origin/gh-pages


### отчистить директорию, кроме скрытых и _dist
###
# find * -not -path "_dist/*" -delete


### перенести  файлы из _dist в ./
###
# mv -r ./_dist/* ./


# git add .
# git commit -m номер коммита в ветке master

### обратно в ветку master
