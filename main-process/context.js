let context

function setWindow(win) {
    if (!context) {
        context = {}
    }

    context.browserWindow = win
}

function setStarterPath(starterPath) {
    if (!context) {
        context = {}
    }

    context.starterPath = starterPath
}

function canGenerateGraph() {
    if (!context) {
        return false
    }

    return context.hasOwnProperty("starterPath")
}

function getContext() {
    return context
}

module.exports = {
    setWindow,
    setStarterPath,
    canGenerateGraph,
    getContext
}