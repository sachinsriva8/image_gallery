
let gallery=document.getElementById("gallery");
let images_data;
let modal=document.getElementById("modal");
let modal_image=document.getElementById("modal-content");
let close_button=document.getElementById("close");

async function image_data(){
    let response= await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
     images_data= await response.json();
    console.log(images_data);
    for(let i=0; i<images_data.length;i++){
        // console.log(images_data[i].url);
        let img=document.createElement("img");
        img.className="thumbnail";
        img.src=`${images_data[i].url}`;
        gallery.append(img);
        // console.log(img);

        // adding click event on each image to to kow with image is clicked.
        img.addEventListener("click",(e)=>{
            var img_url=e.target.src;
            open_modal(img_url);
        })
    }
    //function to open modal
    function open_modal(urls){
        modal.style.display="block"
        modal_image.src=urls;
    }
    //function to close modal
    close_button.addEventListener("click", (e)=>{
        modal.style.display="none";
    })
    //function to close modal when user clicks outside image.
    window.addEventListener("click", (e)=>{
        if (e.target==modal){
            // console.log(e.target);
            modal.style.display="none";
        }
    })

}

image_data();


