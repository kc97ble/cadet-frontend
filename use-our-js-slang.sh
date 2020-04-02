DIR="../js-slang"

if test -d "node_modules/js-slang.old"
then
  echo 'node_modules/js-slang.old does exist'
  echo 'It means that our js-slang is being used'
  readlink -f "node_modules/js-slang"
else
  if test ! -d "$DIR"
  then
    echo "$DIR does not exist"
    exit 1
  fi
  mv "node_modules/js-slang" "node_modules/js-slang.old"
  ln -rs "$DIR" "node_modules/js-slang"
fi
