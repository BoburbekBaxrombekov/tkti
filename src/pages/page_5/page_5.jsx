import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Image from '../../images/8a1a1d5e0b_1502266379.png'
import Image2 from '../../images/8b8f349796_1528715906.jpg'
import Image3 from '../../images/2501d7a632_1528715906.jpg'
import Image4 from '../../images/4340d59a84_1528715906.jpg'
import Image5 from '../../images/1088dc0af5_1528715906.jpg'
import Image6 from '../../images/fc2470144a_1528715906.jpg'
import Image7 from '../../images/7730940cfe_1528715906.jpg'
import { useRef } from 'react';

function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
  return (
        <>
        <div className="wrapped">
        <Header />
            <div className="page_main">
            <div class="row">
            <div class="col-lg-10 col-md-12">
                <div class="tab">
                <button class="tablinks" onClick={() => {
                        tabTwo.current.classList.remove("opened")
                        tabThree.current.classList.remove("opened")
                        tabOne.current.classList.add("opened")
                    }} id="defaultOpen">Bo'lim haqida</button>
                    <button class="tablinks" onClick={() => {
                        tabOne.current.classList.remove("opened")
                        tabThree.current.classList.remove("opened")
                        tabTwo.current.classList.add("opened")
                    }} id="defaultOpen">Bizning
                        maqsadimiz</button>
                    <button class="tablinks" onClick={() => {
                        tabOne.current.classList.remove("opened")
                        tabTwo.current.classList.remove("opened")
                        tabThree.current.classList.add("opened")
                    }} id="defaultOpen">Bizning
                        vazifamiz</button>
                </div>
                <div id="About" ref={tabOne} class="tabcontent opened">
                    <h3>Bo'lim haqida</h3>
                    <p>Innovasion markazi (IM), 2010 yilda TKTI qoshidagi ilmiy-tadqiqot bo’limi negizida  tashkil etilgan.
                    <br/>
                        Asosiy maqsadi –  Istiqbol ilmiy-tadqiqot ishlanmalarni   yaratish, sinovdan o’tkazish, joriy qilish, o’zlashtirish va kommersializatsiyalash bo’yicha ishlarini muvofiqlashtirish.
                        <br/>        
                        Innovatsion markaz o’zini o’zi mablag’ bilan ta’minlash orqali o’z faoliyatini olib boradi. IMga quyidagi manbalardan mablag’ kelib tushadi:
                        <br/>
                       </p>
                        </div>

                <div id="Functions" ref={tabTwo} class="tabcontent">
                    <h3>Bizning maqsadimiz</h3>
                    <p> Budjet mablag’lariga fundamental, amaliy va innovatsion loyiahalardan olingan  Moliya vazirligi tasdiqlagan xarajatlar smetasiga kiritilgan ustama xarajatlari kiradi.
                        <br/>
                        IM rejasi - institutning innovatsion faoliyatini rivojlanishiga yordam ko’rsatib, sanoat korxonalari bilan samarali xamkorlik qilishiga sharoit yaratib beradi, TKTI xodimlarining ilmiy-tadqiqot ishlari natijalarini litsenziya shartnomalarini tuzib transfer qilish va kichik innovatsion korxonalar yaratish ishlari bo’yicha faoliyat olib boradi, xamda grant va kontraktlarni jalb qilishni ta’minlaydi.</p>
                </div>

                <div id="Management" ref={tabThree} class="tabcontent">
                    <h3>Bizning vazifamiz</h3>
                    <p> - budjet mablag’lari;
                        <br/> 
                        - nobudjet mablag’lar.
                        <br/>
                    </p>
                </div>
            </div>
        </div>
            <div class="row">
            <div class="col-md-10">
                <div class="teachers">
                    <div class="wrapper-personal">
                        <div class="photo-personal">
                            <img class="images-personal" src={Image} alt="About us"/>
                            <div class="photo__large">
                                <div class="bg-text">
                                    <span class="degree">Innovatsion markazi</span>
                                    <span class="info">Mkrtchyan Ripsime Vachaganovna

                                        Direktor o’rinbosari, texnika fanlari nomzodi
                                        
                                        e-mail: mk_hripsime@mail.ru</span>
                                </div>
                            </div>
                        </div>
                        <h6 class="fullname-personal">Mkrtchyan Ripsime Vachaganovna</h6>
                    </div>
                    <div class="wrapper-personal">
                        <div class="photo-personal">
                            <img class="images-personal" src={Image2} alt="About us"/>
                            <div class="photo__large">
                                <div class="bg-text">
                                    <span class="degree">Ilmiy kotib</span>
                                    <span class="info">Kadirova Dilorom Salixovna,

                                        Ilmiy kotib, texnika fanlari nomzodi</span>
                                </div>
                            </div>
                        </div>
                        <h6 class="fullname-personal">Kadirova Dilorom Salixovna</h6>
                    </div>
                    <div class="wrapper-personal">
                        <div class="photo-personal">
                            <img class="images-personal" src={Image3} alt="About us"/>
                            <div class="photo__large">
                                <div class="bg-text">
                                    <span class="degree">Каttа ilmiy xodim</span>
                                    <span class="info">Aripova Barno Xamitovna,

                                        Каttа ilmiy xodim, patentshunos.</span>
                                </div>
                            </div>
                        </div>
                        <h6 class="fullname-personal">Aripova Barno Xamitovna</h6>
                    </div>
                    <div class="wrapper-personal">
                        <div class="photo-personal">
                            <img class="images-personal" src={Image4} alt="About us"/>
                            <div class="photo__large">
                                <div class="bg-text">
                                    <span class="degree">Каttа ilmiy xodim</span>
                                    <span class="info">Tyutkov Vladimir Nikolayevich,

                                        Каttа ilmiy xodim, patentshunos</span>
                                </div>
                            </div>
                        </div>
                        <h6 class="fullname-personal">Tyutkov Vladimir Nikolayevich</h6>
                    </div>
                    <div class="wrapper-personal">
                        <div class="photo-personal">
                            <img class="images-personal" src={Image5} alt="About us"/>
                            <div class="photo__large">
                                <div class="bg-text">
                                    <span class="degree">Kichik ilmiy xodim</span>
                                    <span class="info">Xusnidinova Farida Ilyasovna,

                                        Kichik ilmiy xodim.</span>
                                </div>
                            </div>
                        </div>
                        <h6 class="fullname-personal">Xusnidinova Farida Ilyasovna</h6>
                    </div>
                    <div class="wrapper-personal">
                        <div class="photo-personal">
                            <img class="images-personal" src={Image6} alt="About us"/>
                            <div class="photo__large">
                                <div class="bg-text">
                                    <span class="degree">Yetakci iqtisodchi</span>
                                    <span class="info">Atamatova Surayyo Gayratovna,

                                        Yetakci iqtisodchi.</span>
                                </div>
                            </div>
                        </div>
                        <h6 class="fullname-personal">Atamatova Surayyo Gayratovna</h6>
                    </div>
                    <div class="wrapper-personal">
                        <div class="photo-personal">
                            <img class="images-personal" src={Image7} alt="About us"/>
                            <div class="photo__large">
                                <div class="bg-text">
                                    <span class="degree">Xisobchi</span>
                                    <span class="info">Tashpulatova Dilobar Xamitovna,

                                        Xisobchi.</span>
                                </div>
                            </div>
                        </div>
                        <h6 class="fullname-personal">Tashpulatova Dilobar Xamitovna</h6>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <Footer />
        </div>
            
        </>
  );
}

export default PageStaticOne;
