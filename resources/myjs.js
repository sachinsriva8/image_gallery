
let gallery=document.getElementById("gallery");
let images_data;
let modal=document.getElementById("modal");
let modal_image=document.getElementById("modal-content");
let close_button=document.getElementById("close");

document.createElement
async function image_data(){
    let response= await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
     images_data= await response.json();
    // console.log(images_data);
    for(let i=0; i<20;i++){
        // let image_url=images_data[i].url;
        console.log(images_data[i].url);
        let img=document.createElement("img");
        img.className="thumbnail";
        img.src=`${images_data[i].url}`;
        gallery.append(img);
        // console.log(img);

        img.addEventListener("click",(e)=>{
            var img_url=e.target.src;
            open_modal(img_url);
        })
    }
    function open_modal(urls){
        modal.style.display="block"
        modal_image.src=urls;
    }
    close_button.addEventListener("click", (e)=>{
        modal.style.display="none";
    })
}

image_data();
// console.log(images_data);

