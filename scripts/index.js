const cP = document.querySelector(".contenedorPag");
const btnCI = document.querySelector(".cambiarIdioma");
const spanI = document.querySelector(".idioma");

const btnA = document.querySelector(".AU");
const btnS = document.querySelector(".S");
const btnCU = document.querySelector(".CU");
const btnSM = document.querySelector(".SM");


let contador = 0

btnCI.addEventListener("click", () => {
    contador++;

    if (contador === 1) {
        btnA.innerText = "服務";
        btnS.innerText = "改變語言";
        btnCU.innerText = "聯繫我們";
        btnSM.innerText = "社交媒體";
        spanI.innerText = "ENG";

        cP.innerHTML = `
        <main>
        <div class="CtituloPrincipal">
            <h1 class="tituloPrincipal">阿斯特科貿易 | 上海美洲貿易有限公司, 有限公司</h1>
        </div>

        <section class="seccionMain">

            <div class="aboutUs" id="abus">

                <div class="contenedorSubT">
                    <h2 id="subT">關於我們</h2>
                </div>

                <div class="contenedorP">
                    <p>ASTCO Trading 是一家總部位於香港的領先貿易和採購公司。憑藉我們豐富的行業經驗和專業知識，我們為您提供量身定制的解決方案
                    滿足全球客戶的獨特需求。</p>
                    <p>我們的使命是連接全球企業，縮小供應商和買家之間的差距。我們努力
                    提供卓越的產品，促進順利高效的交易，推動客戶的增長和成功。</p>
                    <p>我們了解您在選擇來自中國的產品時可能面臨的挑戰，因為
                    涉及的距離以及對潛在詐騙或尋找優質產品困難的擔憂。這就是為什麼我們的服務旨在通過保證產品質量和與我們合作了二十多年的工廠的誠信來讓您安心。</p>
                    <p>通過選擇我們作為您的貿易和採購合作夥伴，您可以訪問我們廣泛的信譽良好的供應商網絡。多年來，我們建立了這些關係，驗證了他們的信譽和提供優質產品的記錄。您可以相信，我們已經做好了識別值得信賴的製造商的基礎工作，讓您省去了自己尋找製造商的耗時且危險的過程。</p>
                    <p>選擇ASTCO 貿易。讓我們減輕您的後顧之憂，為您提供無縫體驗，確保您所需產品的質量和可靠性。今天聯繫我們討論您的要求，我們一起
                    可以充滿信心地實現您的業務目標。</p>
                </div>

            </div>
        </section>

        <section class="seccionMain">

            <div class="services" id="serv">

                <div class="contenedorSubTS">
                    <h2>服務</h2>
                </div>

                <div class="contenedorPS">
                    <p>
                    貿易</p>
                    <p>
                    倉儲</p>
                    <p>
                    產品質量保證</p>
                    <p>
                    物流及運輸 </p>
                    <p>
                    定制產品</p>
                    <p>
                    發展</p>
                    <p>
                    市場研究與分析</p>
                </div>

            </div>

        </section>

        <section class="seccionForm">
            <div class="contenedorFormulario">
                <h2 id="contact">
                我們該怎樣幫助你？</h2>
                <form class="formulario" action="https://formsubmit.co/commercial@astcotrading.com" method="post">
                    <input class="input" type="text" name="name" placeholder="全名">

                    <input class="input" type="text" name="email" placeholder="電子郵件">

                    <input class="input" type="text" name="subject" placeholder="主題">

                    <textarea class="casillaM" name="comments" cols="30" rows="10"
                        placeholder="您的留言..."></textarea>

                    <input class="enviar" type="submit" value="發送">

                    <input type="hidden" name="_next" value="http://127.0.0.1:5500/">
                    <input type="hidden" name="_captcha" value="false">
                </form>
            </div>

        </section>
        </main>
        <footer id="pie">
            <div class="contenedorFooter">
                <div class="wwu">
                    <div>
                        <h2>跟我們工作</h2>
                    </div>

                    <p>將您的簡歷發送至 info@astcotrading.com。</p>
                </div>

                <div class="rights">
                    <img src="./images/americas logo.png" alt="">
                    <p>ASTCO 貿易 |上海美洲貿易有限公司 - 版權所有。</p>
                </div>

                <div class="redes">
                    <h2>社會的</h2>
                    <div class="logosS">
                        <div>
                            <a href="https://www.facebook.com/" target="_blank"><img src="./images/logofacebook.svg"
                                    alt="logo facebook blanco y negro"></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/" target="_blank"><img src="./images/logoinstagram.svg"
                                    alt="logo instagram blanco y negro"></a>
                        </div>
                    </div>

                </div>

            </div>

            <div class="direccion">
                <p>香港中環德輔道中308號富衛金融中心15樓1501-5室</p>
            </div>

        </footer>
        `;
    } else if (contador === 2) {

        btnA.innerText = "About us";
        btnS.innerText = "Services";
        btnCU.innerText = "Contact us";
        btnSM.innerText = "Social Media";
        spanI.innerText = "CHN";

        cP.innerHTML = `
        <div class="contenedorPag">
        <div class="CtituloPrincipal">
            <h1 class="tituloPrincipal">ASTCO Trading | Americas Shanghai Trading Co., Ltd</h1>
        </div>

        <section class="seccionMain">

            <div class="aboutUs" id="abus">

                <div class="contenedorSubT">
                    <h2 id="subT">ABOUT US</h2>
                </div>

                <div class="contenedorP">
                    <p>At ASTCO Trading, we are a leading trading and sourcing company based in Hong
                        Kong. With our extensive experience and expertise in the industry, we provide tailored solutions
                        to
                        meet
                        the
                        unique needs of our clients worldwide.</p>
                    <p>Our mission is to connect businesses globally, bridging the gap between suppliers and buyers. We
                        strive
                        to
                        deliver exceptional products, facilitating smooth and efficient transactions that drive growth
                        and
                        success
                        for our clients.</p>
                    <p>We understand the challenges you may face when it comes to selecting products from China due to
                        the
                        distance
                        involved and concerns about potential scams or difficulties in finding top quality products.
                        That's
                        why
                        our
                        service is designed to provide peace of mind by guaranteeing product quality and the integrity
                        of
                        the
                        factories we have been working with for over twenty years.</p>
                    <p>By choosing us as your trading and sourcing partner, you gain access to our extensive network of
                        reputable
                        suppliers. We have built these relationships over the years, verifying their credibility and
                        track
                        record of
                        delivering superior products. You can trust that we have done the groundwork to identify
                        trustworthy
                        manufacturers, sparing you the time-consuming and risky process of finding them yourself.</p>
                    <p>Choose ASTCO Trading. Let us alleviate your worries and provide you with a seamless experience,
                        ensuring
                        the
                        quality
                        and reliability of the products you need. Contact us today to discuss your requirements, and
                        together,
                        we
                        can achieve your business goals with confidence.</p>
                </div>

            </div>
        </section>

        <section class="seccionMain">

            <div class="services" id="serv">

                <div class="contenedorSubTS">
                    <h2>SERVICES</h2>
                </div>

                <div class="contenedorPS">
                    <p>Trading</p>
                    <p>Warehousing</p>
                    <p>Product Quality Assurance</p>
                    <p>Logistics and shipping </p>
                    <p>Customized products</p>
                    <p>Development</p>
                    <p>Market research and Analysis</p>
                </div>

            </div>

        </section>

        <section class="seccionForm">
            <div class="contenedorFormulario">
                <h2 id="contact">How can we help you?</h2>
                <form class="formulario" action="https://formsubmit.co/commercial@astcotrading.com" method="post">
                    <input class="input" type="text" name="name" placeholder="Full Name">

                    <input class="input" type="text" name="email" placeholder="Email">

                    <input class="input" type="text" name="subject" placeholder="Subject">

                    <textarea class="casillaM" name="comments" cols="30" rows="10"
                        placeholder="Your message..."></textarea>

                    <input class="enviar" type="submit" value="Send">

                    <input type="hidden" name="_next" value="http://127.0.0.1:5500/">
                    <input type="hidden" name="_captcha" value="false">
                </form>
            </div>

        </section>
    <div/>

        <footer id="pie">
            <div class="contenedorFooter">
                <div class="wwu">
                    <div>
                        <h2>Work with us</h2>
                    </div>

                    <p>Send us your resume/CV to info@astcotrading.com.</p>
                </div>

                <div class="rights">
                    <img src="./images/americas logo.png" alt="">
                    <p>ASTCO Trading | Americas Shanghai Trading Co., Ltd - All rights reserved.</p>
                </div>

                <div class="redes">
                    <h2>Social</h2>
                    <div class="logosS">
                        <div>
                            <a href="https://www.facebook.com/" target="_blank"><img src="./images/logofacebook.svg"
                                    alt="logo facebook blanco y negro"></a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/" target="_blank"><img src="./images/logoinstagram.svg"
                                    alt="logo instagram blanco y negro"></a>
                        </div>
                    </div>

                </div>

            </div>

            <div class="direccion">
                <p>Unit 1501-5, 15/F, FWD Financial Centre, 308 DES VOEUX Road Central - Hong Kong.</p>
            </div>

        </footer>

    `;
        contador = 0;
    }
})
