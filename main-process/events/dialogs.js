const { ipcMain, dialog } = require("electron")
const context = require("../context")
const analyzer = require("../script_analyzer")

ipcMain.on("open-starter-dialog", event => {
    dialog.showOpenDialog(context.getContext().browserWindow, {
        properties: ["openFile"],
        filters: [{ name: "JS Files", extensions: ["js"] }]
    }, files => {
        if (files) {
            event.sender.send("selected-starter", files[0])
            context.setStarterPath(files[0])

            if (context.canGenerateGraph()) {
                analyzer.analyzeProject()
            }
        }
    })
})