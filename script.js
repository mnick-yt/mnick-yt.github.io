const selectionArea=document.querySelector('#select-area'),

fileInput=document.querySelector('.file-input');

let preview=document.getElementById('file-preview');

let removeImage=document.getElementById('remove-img');

removeImage.style.display="none";

removeImage.addEventListener("click",()=>{
            fileInput.value=null;
            preview.src=null;
            preview.style.display="none";
            removeImage.style.display="none";
            selectionArea.style.display=null;
        })

selectionArea.addEventListener("click",()=>{
            fileInput.click();
        });
fileInput.onchange=({
            target
        })=>{
            let file=target.files[0];
            let image_url=URL.createObjectURL(file);
                preview.src=image_url;
                selectionArea.style.display='none';
                removeImage.style.display=null;
                preview.style.display=null;
/*
            if(file.type=='image/jpeg'){
                let image_url=URL.createObjectURL(file);
                preview.src=image_url;
                selectionArea.style.display='none';
                removeImage.style.display=null;
                preview.style.display=null;
            }
            
            else{
                alert('select jpg');
                fileInput.value=null;
            }
            */
        }


        