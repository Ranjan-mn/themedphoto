
function downloadImage(id) {
    var x = new String(document.getElementById(id).id);
    var imgName = new String(x + "-1280x720.jpg");
    sessionStorage.setItem("imgName", imgName);
    console.log(imgName);
}


function startDownload() {
    console.log(imgName)
    var link = document.createElement('a');
    var imgName = new String(sessionStorage.getItem('imgName'));
    link.href = "../download/"+imgName;
    link.download = 'Download.jpg';
    document.body.appendChild(link);
    link.click();
}
