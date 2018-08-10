function changeColor(id, clr) {
  //   alert("Got it");
  $("#" + id).css("fill", clr);
}
$(".clr-circle1").click(function() {});

(function(w, d) {
  "use strict";
  // alert("Good");
  var btn = d.querySelector("button");
  var svg = d.querySelector("svg");
  var canvas = d.querySelector("canvas");

  var imageName = "player-icon";

  function triggerDownload(imgURI) {
    // var evt = new MouseEvent("click", {
    //   view: w,
    //   bubbles: false,
    //   cancelable: true
    // });
    // var a = d.createElement("a");
    // a.setAttribute("download", imageName + ".png");
    // a.setAttribute("href", imgURI);
    // a.setAttribute("target", "blank");
    // a.dispatchEvent(evt);
  }

  btn.addEventListener("click", function() {
    var ctx = canvas.getContext("2d");
    var data = new XMLSerializer().serializeToString(svg);
    var DOMURL = w.URL || w.webkitURL || w;

    var img = new Image();
    var svgBlob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
    var url = DOMURL.createObjectURL(svgBlob);

    img.onload = function() {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);

      var imgURI = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      triggerDownload(imgURI);
    };
    img.src = url;
    d.querySelector("h2").classList.remove("hide");
  });
})(window, document);
