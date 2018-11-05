cls
cd AngularSimple
rmdir dist /s /q
call ng build --prod --build-optimizer 
copy dist\AngularSimple\*.* dist\
rmdir dist\AngularSimple /s /q
node node_modules\angular-cli-ghpages\bin\angular-cli-ghpages
echo now goto https://ignatandrei.github.io/AngNetCoreDemo/
cd..