cls
cd AngularSimple
call ng build --prod --build-optimizer
copy dist\AngularSimple\*.*  ..\CordovaSimple\www\dist\
cd..
pause
cd CordovaSimple
cordova run android
cd ..