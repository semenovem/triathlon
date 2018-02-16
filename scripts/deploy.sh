#!/bin/bash

# chmod ug+x scripts/deploy.sh
# запускать из корня проекта todo приделать проверку места запуска

BRANCH='gh-test'
COMMIT=$(git rev-parse HEAD)

### сборка проекта
# npm run-script build

cat .gitignore | grep -v ".gitignore" > tmp_gitignore
echo "scripts" >> tmp_gitignore 


### переключиться на ветку gh-pages
if git checkout "$BRANCH" ; then
  echo ok
else
  echo "Не удалось переключиться на ветку: $BRANCH"
  exit 1;
fi


### сбросить изменения к состоянию удаленной ветки, что бы не было конфликтов
# git reset --hard origin/$BRANCH


git checkout -

### отчистить директорию, кроме скрытых и _dist
# find * -not -path "_dist/*" -not -path "node_modules/*" -not -path "scripts/*" -delete


### 


### перенести  файлы из _dist в ./
###
# mv -r ./_dist/* ./


# git add .
# git commit -m номер коммита в ветке master

### обратно в ветку master
