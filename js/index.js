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
        trigger : falcon,
        scrub : 1,
        onLeave : ()=>{
            putImage()

        }
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
        trigger : allImageInArticle,
        scrub : true,
        // once : true,
        onEnter : ()=>{
            console.log("Element visible...")
            // putImage()
        },
        start : "top 80%",
        // end : "center center"
    },
    
    // onComplete : ()=>{
    //     console.log("Animation completed")
    // },
})


// La partie pour chaque personnage qui se regarde

const allConvContain = document.querySelectorAll(".conv-img")
allConvContain.forEach((convContain)=>{
    const allChild = convContain.children
    for(let i=1;i<allChild.length;i++){
        gsap.to(allChild[i], {
            scrollTrigger : {
                scrub : 1,
            },
            x : 0
        })
    }
})


// Ce fonction prend en parametre le nombre de paire d'image
function LoadImage(n=6){
    const elemet = document.querySelector("#conversations")
    for(let i=0;i<n;i++){
        elemet.innerHTML+=`
        <div class="conv-img">
            <img src="./assets/images/${i}-1.png">
            <img src="./assets/images/${i}-2.png">
        </div>
        `
    }
}
LoadImage(21)