const { app, BrowserWindow, ipcMain } = require("electron");
const fetch = require('node-fetch')
const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

const createMainWindow = () => {
    mainWindow = new BrowserWindow(
        {
            width: 500,
            height: 900,
            titleBarStyle: 'hidden',
            // frame:false,
            webPreferences: {
                devTools: true,
                webSecurity: false,

            }
        })
    console.log("일렉트론 쉬작!");
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createMainWindow);

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });

app.on('activate', () => {
    if (mainWindow === null)
        createMainWindow();
})

ipcMain.on('requestFetch', (event, arg) => {
    console.log('request start');
    let cookie;
    fetch(arg.url, arg.data)
        .then(res => {
            cookie = res.headers.get('set-cookie');
            console.log(cookie);
            return res.json()
        }).then(data => {
            console.log('data', { cookie, data });
            return event.sender.send('responseFetch', { cookie, data })
        })
        .catch(err => {
            console.log('err ==', err);
            return event.sender.send('responseFetch', { 'data':{
                'DETAIL':"FAIL",
                "ERROR":err
            } });
        });
})