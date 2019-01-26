const preview = ()=>{ 
var file = document.getElementById('fileInput');
var pic = document.getElementById('pic');
pic.src = window.URL.createObjectURL(file.files[0]);
}