var i = 0;
var images = [];
var time = 2800;

images[0]= ('FS1.jpg');
images[1]= ('H-1.jpg');
images[2]= ('PC1.jpg');
images[3]= ('PM1.jpg');
images[4]= ('SB1.jpg');
images[5]= ('TC1.jpg');
images[6]= ('CP1.jpg');

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length-1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;