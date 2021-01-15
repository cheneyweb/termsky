const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true
    },
    backgroundColor: '#292B3C',
    darkTheme: true,
    frame: false
  })

  win.loadURL('http://localhost:8080')
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('window-close', () => {
  app.hide()
})