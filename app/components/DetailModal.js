const template = document.createElement("template")

template.innerHTML = /*html*/ `
<div class="learn-more-btn">
<a><p>Learn More</p><img src="./app/assets/img/arrow.svg" /></a>
</div>
<div style="display: none;opacity: 0" class="product-modal product-modal--initial">
<div class="product-modal__closeBtn"><img src="./app/assets/icons/bx-x.svg" alt="Close Btn" /></div>
<div class="img__container">
<img class="img product-img" src="">
</div>
<div class="product-modal__info-wrapper">
<div class="product-modal__info">
<h1 class="texts title"><sapn></sapn></h1>
<h2 class="texts type"><span></span></h2>
<p class="texts description"><span></span></p>
</div>
</div>

</div>
<style>
@import url('./app/components/DetailModal.css')
</style>
`

class DetailModal extends HTMLElement {
    constructor() {
        super();
        this.modalOpen = false
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        //this.setRenderSize()

        this.prepareEventListeners()
        this.injectTexts()
    }
    injectTexts(){
        this.shadowRoot.querySelector(".product-img").src = this.getAttribute("imgSrc")
        this.shadowRoot.querySelector(".title").firstChild.innerText = this.getAttribute("title")
        this.shadowRoot.querySelector(".type").firstChild.innerText = this.getAttribute("type")
        this.shadowRoot.querySelector(".description").firstChild.innerText = this.getAttribute("description")
    }
    setRenderSize() {
        const useInset = this.getAttribute("inset")
        const gridRow = this.getAttribute("row")
        const gridColumn = this.getAttribute("col")
        if (useInset) {
            this.shadowRoot.querySelector(".learn-more-btn").style.marginTop = "12px"
        }
        this.shadowRoot.querySelector(".learn-more-btn").style.gridRow = gridRow
        this.shadowRoot.querySelector(".learn-more-btn").style.gridColumn = gridColumn
    }
    prepareEventListeners() {
        const productModal =  this.shadowRoot.querySelector(".product-modal")
        this.shadowRoot.querySelector(".learn-more-btn").addEventListener("click",()=> {
            this.modalOpen = true
            productModal.style.display = "flex"
            productModal.style.opacity = "1";
            this.addDelayAnimation()
            //this.shadowRoot.querySelector(".product-modal").classList.remove("product-modal--initial")

        })
        this.shadowRoot.querySelector(".product-modal__closeBtn").addEventListener("click",()=> {
            console.log("ok")
            this.modalOpen = false
            this.idleAnimation()
            productModal.style.opacity = "0";
            setTimeout(()=> {
                productModal.style.display = "none"
            },400)

            //productModal.classList.add("product-modal--initial")
        })


    }
    addDelayAnimation() {
        //this.shadowRoot.querySelector(".img").classList.add("img-animated")
        this.shadowRoot.querySelectorAll('.texts').forEach((link,index)=> {
            link.firstChild.style.animationDelay = `${(index+1)*0.2}s`
            setTimeout(()=> {
                link.classList.add("text-animated")

            },0)

        })
    }
    idleAnimation() {
        this.shadowRoot.querySelectorAll(".texts").forEach(text=> {
            text.classList.remove("text-animated")
        })
    }
}

window.customElements.define("detail-modal",DetailModal)

