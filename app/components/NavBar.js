const template = document.createElement("template");

template.innerHTML = /*html*/ `<nav>
    <div class="nav-wrapper">
        <div class="nav-button ">
            <img alt="Menu Button" src="./app/assets/icons/bx-menu.svg"/>
        </div>
        <div class="nav-list">
            <ul>
                <li><a class="link home  link--elara" href="./" id="nav-home"><span>Home</span></a></li>
                <li><a class="link about  link--elara" href="./about.html" id="nav-about"><span>About</span></a></li>
            </ul>
        </div>
    </div>

    <div style="display: none;opacity: 0;" class="menu">
        <div class="menu-header">
        <div class="close-btn"><img alt="Close" src="./app/assets/icons/bx-x-light.svg"></div>
         <h3>Dieter Rams</h3>
          <span></span>
        </div>
       
        <div class="menu-list">
            <ul>
                <li><a class="link home  link--elara" href="./" ><span>Home</span></a></li>
                <li><a class="link about  link--elara" href="./about.html"><span>About</span></a></li>
            </ul>
        </div>
    </div>

</nav>

<style>
    @import url('./app/components/NavBar.css')
</style>`;

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.drawerOpened = false
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.addNavBtnClickedEvent()
        this.addDelayAnimation()
        this.setCurrentLink()
    }

    setCurrentLink() {
        if (this.getAttribute("active") === "home") {
            this.shadowRoot.querySelector(".about").classList.add("link-inactive")
        } else if (this.getAttribute("active") === "about") {
            this.shadowRoot.querySelector(".home").classList.add("link-inactive")
        }
    }

    addNavBtnClickedEvent() {
        this.shadowRoot.querySelector('.nav-button').addEventListener('click', () => {
            this.drawerOpened = !this.drawerOpened
            this.shadowRoot.querySelector(".menu").style.display = "block";
            this.shadowRoot.querySelector(".menu").style.opacity = "1";
        })
        this.shadowRoot.querySelector(".close-btn").addEventListener("click",()=> {
            this.drawerOpened = !this.drawerOpened
            this.shadowRoot.querySelector(".menu").style.opacity = "0";
            setTimeout(()=> {
                this.shadowRoot.querySelector(".menu").style.display = "none";
            },400)
        })
    }

    addDelayAnimation() {
        this.shadowRoot.querySelectorAll('.link').forEach((link, index) => {
            link.firstChild.style.animationDelay = `${(index + 1) * 0.2}s`
            setTimeout(() => {
                link.classList.add("nav-link-animated")
            }, 0)

        })
    }

}

window.customElements.define("nav-bar", NavBar);
