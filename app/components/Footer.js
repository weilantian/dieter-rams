const template = document.createElement("template")

template.innerHTML = /*html*/ `<section class="footer">
    <div class="footer__inner">
        <div class="footer__title"><h1>Dieter Rams</h1></div>
        <div class="footer__links">
            <p>Intro</p>
            <div class="footer__link-list">
                <ul>
                    <li><a href="./"><span>Home</span></a></li>
                    <li><a href="./about.html"><span>About</span></a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="footer__copyright"><p>Website designed by Lantian Wei</p></div>
        <div class="footer__icons">
            <a href="#"><img alt="Instagram" src="./app/assets/icons/bxl-instagram-alt.svg" /></a>
            <a href="#"><img alt="Instagram" src="./app/assets/icons/bxl-facebook-circle.svg" /></a>
            <a href="#"><img alt="Instagram" src="./app/assets/icons/bxl-twitter.svg" /></a>
        </div>
    </div>
</section>

<style>
@import url('./app/components/Footer.css')
</style>
`

class Footer extends  HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true
        ))
    }
}

window.customElements.define("cool-footer",Footer)