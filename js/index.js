const homeText = document.querySelector("#home img:nth-child(2)")
const falcon = document.querySelector("#home img:nth-child(1)")
const ours = document.querySelector("#home img:nth-child(4)")
const allImageInArticle = document.querySelectorAll(".menu .articles")



const transValue = 80
function putImage(n=0){
    if(n<3){
        allImageInArticle[n].style.transform = "translateY(0)"
        setTimeout(()=>{
            putImage(n+1)
        },300)
    }
}

gsap.to(homeText, {
    scrollTrigger : {
        scrub : 1
    },
    scale : 1.2,
    y : '100%'
})

gsap.to(falcon, {
    scrollTrigger : {
        scrub : 1
    },
    x : -transValue
})
gsap.to(ours, {
    scrollTrigger : {
        scrub : 1
    },
    x : transValue
})

gsap.to(allImageInArticle, {
    scrollTrigger : {
        scrub : true,
        // once : true,
        onEnter : ()=>{
            console.log("Entrer...")
            putImage()
        },
        start : "center 80%",
        // end : "center center"
    },
    
    // onComplete : ()=>{
    //     console.log("Animation completed")
    // },
})