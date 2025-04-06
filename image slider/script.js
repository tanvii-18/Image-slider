
const slider = document.querySelectorAll(".slide");
let count = 0;


slider.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%` //gap between the images
})


// logic behind slide images

const prev = () =>{
    count--;
    if (count < 0) {
        count = slider.length - 1;
      }
      imageSlide();
}

const next = () =>{
    count++;
    if(count >= slider.length)
    {
        count = 0;
    }

    imageSlide();
}

const imageSlide = () =>{

    slider.forEach((slide)=>{
        slide.style.transform = `translateX(-${count * 100}%)`
    })
}