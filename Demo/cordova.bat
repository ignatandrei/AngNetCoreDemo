cls
cd AngularSimple
call ng build --prod --build-optimizer 
copy dist\AngularSimple\*.*  ..\CordovaSimple\dist\
cd..
cd CordovaSimple
cordova run android
cd ..