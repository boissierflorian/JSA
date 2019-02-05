const path = require("path")
const glob = require("glob")
const { app, BrowserWindow } = require("electron")

const debug = /--debug/.test(process.argv[2])
const context = require("./main-process/context")

let mainWindow = null

function initialize() {

    loadScripts()

    function createWindow() {
        const windowOptions = {
            width: 1080,
            minWidth: 680,
            height: 840,
            title: app.getName(),
            webPreferences: {
                nodeIntegration: true
            }
        }

        mainWindow = new BrowserWindow(windowOptions)
        context.setWindow(mainWindow)
        mainWindow.loadURL(path.join("file://", __dirname, "/index.html"))

        if (debug) {
            mainWindow.webContents.openDevTools()
            mainWindow.maximize()
            require("devtron").install()
        }

        mainWindow.on("closed", () => {
            mainWindow = null
        })
    }

    app.on("ready", () => {
        createWindow()
    })

    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit()
        }
    })

    app.on("activate", () => {
        if (mainWindow === null) {
            createWindow()
        }
    })
}

// Require main process scripts
function loadScripts() {
    const files = glob.sync(path.join(__dirname, "main-process/**/*.js"))
    files.forEach(file => require(file))
}

initialize()