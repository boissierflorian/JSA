// Contient tous les éléments
let graph = new joint.dia.Graph;

// Effectue le rendu du graph
let paper = new joint.dia.Paper({
    el: document.getElementById("graph"),
    model: graph,
    width: 800, 
    height: 600,
    gridSize: 25,
    drawGrid: {
        name: "doubleMesh",
        args: [
            { color: "#363636", thickness: 1 },
            { color: "#1e1e1e", scaleFactor: 5, thickness: 5 }
        ]
    },
    background: {
        color: "#2a2a2a"
    }
});

var rect = new joint.shapes.standard.Rectangle();
rect.position(100, 30);
rect.resize(100, 40);
rect.attr({
    body: {
        fill: "blue"
    },
    label: {
        text: "Hello",
        fill: "White"
    }
})

rect.addTo(graph)

let rect2 = rect.clone()
rect2.translate(300, 0)
rect2.attr("label/text", "World!")
rect2.addTo(graph)

let link = new joint.shapes.standard.Link();
link.source(rect)
link.target(rect2)
link.addTo(graph);