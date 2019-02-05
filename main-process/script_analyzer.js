const context = require("./context")
const esprima = require("esprima")
const fs = require("fs")
const { ipcMain } = require("electron")

function sendErrorNotification(msg) {
    const ctx = context.getContext()
    const win = ctx.browserWindow
    win.webContents.send("notification-error", msg)
}

function analyzeProject() {
    // First step: read the starter file
    const ctx = context.getContext()
    const starterPath = ctx.starterPath

    fs.readFile(starterPath, "utf8", function (err, contents) {
        if (err) {
            sendErrorNotification(err)
            return;
        } 

        // Empty file
        if (contents.length === 0) {
            sendErrorNotification("Empty File !")
            return;
        }
       
        // Produces a tree
        esprima.parseScript(contents);


    });

}

module.exports = {
    analyzeProject
}