if test -d "node_modules/js-slang.old"
then
  rm "node_modules/js-slang"
  mv "node_modules/js-slang.old" "node_modules/js-slang"
else
  echo 'node_modules/js-slang.old does not exist'
fi
