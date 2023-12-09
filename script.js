submitTryit();
function submitTryit() {
  var text = document.getElementById("textareaCode").value;
  var ifr = document.createElement("iframe");
  // ifr.setAttribute("frameborder", "0");
  document.getElementById("iframewrapper").innerHTML = "";
  document.getElementById("iframewrapper").appendChild(ifr);
  var ifrw = ifr.contentWindow
    ? ifr.contentWindow
    : ifr.contentDocument.document
    ? ifr.contentDocument.document
    : ifr.contentDocument;
  ifrw.document.write(text);
  document.getElementById("iframecontainer").style.display = "block";
  document.getElementById("textareacontainer").style.display = "none";

}

function showCode() {
  document.getElementById("iframecontainer").style.display = "none";
  document.getElementById("textareacontainer").style.display = "block";
}

function resetCode() {
    if (document.getElementById("textareaCode").value != "") {
        var userConfirmation = confirm("Anda yakin untuk menghapus? \nCode akan hilang permanen!!");
        document.getElementById("iframecontainer").style.display = "none";
        document.getElementById("textareacontainer").style.display = "block";
    } else{
        alert("Tidak ada kode yang dapat dihapus!!");
    }
    if (userConfirmation) {
        document.getElementById("textareaCode").value = "";
    }

}

function htmlCode() {
    document.getElementById("iframecontainer").style.display = "none";
    document.getElementById("textareacontainer").style.display = "block";
    document.getElementById("textareaCode").value = `
                            <!DOCTYPE html>
                            <html lang=" en">
        
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Document</title>
                                <style>
                                    /* === Style html in here === */
                                </style>
                            </head>
        
                            <body>
                                <!-- === write html in here === -->
                                <p>Create By: <a href="https://github.com/MuhamadAfghan">Afgan Al Zena</a></p>

                                <script>
                                    /* === write js in here === */
                                    
                                </script>
                            </body>
        
                            </html>`;
}