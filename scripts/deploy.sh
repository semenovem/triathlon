#!/bin/bash

# chmod ug+x scripts/deploy.sh
# запускать из корня проекта todo приделать проверку места запуска

### сборка проекта
###
# npm run-script build



pwd
echo "1111"

### переключиться на ветку gh-pages
###
if git checkout ggggg ; then
  echo ok
else
  echo "Не удалось переключиться на ветку "
  exit 1;
fi



### сбросить изменения к состоянию удаленной ветки, что бы не было конфликтов
###
# git reset --hard HEAD




# отчистить директорию, кроме скрытых и _dist
# find * -not -path "_dist/*" -delete

# перенести  файлы из _dist в ./   mv -r ./_dist/* ./
# перенести .gitignore   mv ./_dist/.gitignore ./
# git add .
# git commit -m



#---
# ---
# скрипт депдлоя

# ветка мастер, все изменения закомиченны
# получим номер коммита
# yarn build
# checkout gh-pages
# add _site

# удалить все, кроме _site

# git mv _site/* ./
# rm -rf _site

# commit -m 'номер коммита, с которого собрали'
# push origin gh-pages
