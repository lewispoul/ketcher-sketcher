let jsmeApplet;

function jsmeOnLoad() {
  // Called automatically by JSME when ready
  jsmeApplet = new JSApplet.JSME("jsmediv", "800px", "500px");
}

function exportMol() {
  if (jsmeApplet) {
    document.getElementById('output').value = jsmeApplet.getMolfile();
  }
}

function exportSmiles() {
  if (jsmeApplet) {
    document.getElementById('output').value = jsmeApplet.getSmiles();
  }
}
