// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  
  // Open the DevTools.
   mainWindow.webContents.openDevTools();
  startNetCore();
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}
function startNetCore() {
  try {
    const path = require('path');
    //  Run target web api server
    var locPath = path.join(__dirname, "dist\\NetCoreSimple.exe");
    
    console.log("!!!!!!Start " + locPath);
    
    var proc = require('child_process').execFile;
    targetWebApiProcess = proc(locPath,  {maxBuffer: 1024 * 1024 * 1000}, function(err, data) {
      if(err){
        console.log("!!!!Error in launching! " + err);
         return;
      }
   
      console.log("!!!!!!start ok");
    });  
  } 
  catch (error) {
    console.log('!!!!');
    console.log('!!!!!!error' + JSON.stringify(error));
  }
  
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
