cls
cd NETcore
cd NetCoreSimple
dotnet publish -c release -r win10-x64
echo run the site 
explorer /select, bin\release\netcoreapp2.1\win10-x64\publish\NetCoreSimple.exe
pause 
cd ..
cd ..
cd AngularSimple
call ng build --prod --build-optimizer 
copy dist\AngularSimple\*.*  ..\NETcore\NetCoreSimple\bin\release\netcoreapp2.1\win10-x64\publish\wwwroot\
echo close previous application
cd..