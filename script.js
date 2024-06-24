document.getElementById('file').addEventListener('change',(e)=>{
    const imageContainer = document.getElementById('image-container')
    const uploadImage = document.getElementById('upload-image')
    const downloadbtn = document.getElementById('downloadbtn')
    const file = e.target.files[0]
    if(file){
        const reader = new FileReader()
        reader.onload = function (e) {
            downloadbtn.style.display="none"
            uploadImage.src = e.target.result
            imageContainer.style.border = "0"
            uploadImage.style.display = "unset"
            uploadImage.style.width = 'unset'
            uploadImage.style.height = 'unset'
            imageContainer.style.width = "600px"
            imageContainer.style.height = "300px"
        }
        reader.readAsDataURL(file)
    }
})

const resizeImage = (width,height) => {
    const uploadImage = document.getElementById('upload-image')
    const imageContainer = document.getElementById('image-container')
    const downloadbtn = document.getElementById('downloadbtn')
    uploadImage.style.width = `${width}px`
    uploadImage.style.height = `${height}px`
    imageContainer.style.width = 'unset'
    imageContainer.style.height = 'unset'
    downloadbtn.style.display="block"

}

document.getElementById('resize-button-instagram').addEventListener('click',()=>{
    resizeImage(1080,1080)
})
document.getElementById('resize-button-facebook').addEventListener('click',()=>{
    resizeImage(1200,630)
})
document.getElementById('resize-button-twitter').addEventListener('click',()=>{
    resizeImage(1200,675)
})
document.getElementById('resize-button-website').addEventListener('click',()=>{
    resizeImage(600,300)
})

document.getElementById('downloadbtn').addEventListener('click',()=>{
    const uploadImage = document.getElementById('upload-image')
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = uploadImage.width;
    canvas.height = uploadImage.height;
    ctx.drawImage(uploadImage, 0, 0, canvas.width, canvas.height);

    let dataURL = canvas.toDataURL('image/jpeg');

    let a = document.createElement('a');
    a.href = dataURL;

    a.download = 'resized-image.jpg';

    a.click();
})
