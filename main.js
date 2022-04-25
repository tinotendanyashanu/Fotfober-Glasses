
function aleet(){
     swal("service not yet availabel");
}
function scrol(){
    document.getElementById('about').scrollIntoView();
}

function  image_enlage(){
    document.querySelectorAll('.gallery-images img').forEach(Image =>{
        document.querySelector('.pop-images').style.display = 'block';
        document.querySelector('.pop-images img').scr = Image.getAttribute('src');
    });
}



