cls
cd NETcore
cd NetCoreSimple
dotnet publish -c release -r win10-x64
xcopy bin\release\netcoreapp2.1\win10-x64\publish\*.*  ..\..\ElectronSimple\dist /E
echo run the site 
pause 
cd ..
cd ..
cd AngularSimple
call ng build --prod --build-optimizer 
copy dist\AngularSimple\*.*  ..\ElectronSimple\
cd..
set ELECTRON_ENABLE_LOGGING=1
cd ElectronSimple
call npm start
cd ..