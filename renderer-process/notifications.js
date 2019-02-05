const { ipcRenderer } = require("electron")

ipcRenderer.on("notification-error", (err) => {
    new window.Notification(
        "Error",
        {
            body: err
        }
    );
})