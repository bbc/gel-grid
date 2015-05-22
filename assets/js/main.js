function overlayTextToggle() {
    var overlayToggle = document.getElementById('overlay-toggle');
    overlayToggle.innerHTML === 'Toggle Grid Overlay On' ?
        overlayToggle.innerHTML = 'Toggle Grid Overlay Off' : overlayToggle.innerHTML = 'Toggle Grid Overlay On';
}

function gridOverlay() {
    if (document.getElementsByClassName("gel-grid-overlay").length) {
        document.getElementsByClassName("gel-grid-overlay")[0].remove()
    }
    var e = "<div class=\"gel-grid-overlay__grid\"><div class=\"gel-grid-overlay__margin\" style=\"left: 0;\"></div>";
    for (i = 0; i < 12; i++) {
        e += "<div class=\"gel-grid-overlay__column\"><div class=\"gel-grid-overlay__column-fill\"></div></div>"
    }
    e += "<div class=\"gel-grid-overlay__margin\" style=\"right: 0;\"></div>";
    e += "</div>";
    var t = document.createElement("div");
    t.className = "gel-grid-overlay";
    t.innerHTML = e;
    var n = document.createElement("style");
    n.innerHTML = ".gel-grid-overlay * {-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;);}.gel-grid-overlay {z-index: 2147483647; position: fixed; height: 100%; width: 100%; left: 0; top: 0;}.gel-grid-overlay__grid {position: relative; width: 100%; height: 100%; max-width: 1008px; margin: 0 auto; padding: 0 4px;}.gel-grid-overlay__column {display: inline-block; height: 100%; width: 8.33333%; padding: 0 4px;}.gel-grid-overlay__column-fill {background: rgba(255,0,0,0.1); height: 100%;}.gel-grid-overlay__margin {display: inline-block; height: 100%; width: 8px; position: absolute; top: 0; background: rgba(0,255,0,0.1);}@media screen and (min-width: 400px) {.gel-grid-overlay__grid {padding: 0 12px;}.gel-grid-overlay__margin {width: 16px;}@media screen and (min-width: 600px) {.gel-grid-overlay__grid {padding: 0 8px;}.gel-grid-overlay__column {padding: 0 8px;}}";
    document.getElementsByTagName("head")[0].appendChild(n);
    document.getElementsByTagName("body")[0].appendChild(t);
    t.addEventListener("click", function() {
        document.getElementsByClassName("gel-grid-overlay")[0].remove();
        overlayTextToggle();
    });
}

(function() {
    var overlayToggle = document.getElementById('overlay-toggle');
    overlayToggle.addEventListener('click', function() {
        gridOverlay();
        overlayTextToggle();
    });
}());
