const {ipcRenderer} = require("electron")
const starterButton = document.querySelector("#starter-select")

starterButton.addEventListener("click", event => {
    ipcRenderer.send("open-starter-dialog")
})

ipcRenderer.on("selected-starter", (event, path) => {
    document.getElementById("starter").value = path;
})