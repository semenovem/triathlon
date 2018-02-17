#!/bin/bash

# chmod ug+x scripts/deploy.sh
# запускать из корня проекта todo приделать проверку места запуска

BRANCH='gh-pages'
COMMIT=$(git rev-parse HEAD)

### сборка проекта
npm run-script build


### переключиться на ветку gh-pages
if git checkout "$BRANCH" ; then
  echo ok
else
  echo "Не удалось переключиться на ветку: $BRANCH"
  exit 1;
fi


### сбросить изменения к состоянию удаленной ветки, что бы не было конфликтов
git reset --hard origin/$BRANCH


### отчистить директорию, кроме скрытых и _dist
find * -not -path "_dist/*" -not -path "_site/*" -not -path "node_modules/*" -delete


### перенести  файлы из _dist в ./
mv -f ./_dist/* ./


git add .
git commit -m $COMMIT
git push 


### обратно в ветку master
git checkout -
