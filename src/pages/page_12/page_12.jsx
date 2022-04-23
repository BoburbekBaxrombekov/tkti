import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import Image from '../../images/2a366e578f_1525352911.jpg'

function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
  return (
        <>
        <div className="wrapped">
        <Header />
            <div className='page_main'>
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
                    <p>Ushbu bo‘lim O‘zbekiston Respublikasi Vazirlar Mahkamasining 2017 yil   21 noyabrdagi 930-sonli “Oliy ta’lim muassasasida sirtqi (maxsus sirtqi) va kechki (smenali) ta’limni tashkil etish tartibi to‘g‘risidagi nizomlarni tasdiqlash haqida”gi qaroriga binoan TKTI tarkibida dastlab 2018-2019 o‘quv yilidan “Sirtqi bo‘lim” nomi bilan tashkil etilgan. </p>
                </div>

                <div id="Functions" ref={tabTwo} class="tabcontent">
                <h3>Bizning maqsadimiz</h3>
                    <p>Sirtqi ta’lim talabasi uchun o‘qishga qabul qilingan o‘quv yili boshida (odatda, sentyabr-oktyabr oylarida) bevosita oliy ta’lim muassasasida 10 kunlik o‘quv jarayoni bilan dastlabki tanishtiruv hamda semestr davomida o‘qitiladigan fanlar bo‘yicha qisqacha (ishchi o‘quv rejasida belgilangan hajmda) ma’ruza, amaliy, laboratoriya va seminar mashg‘ulotlari o‘tkaziladi. Talabalarga mavzular bo‘yicha topshiriqlar va ularni bajarish yuzasidan metodik ko‘rsatmalar beriladi. O‘quv sessiyasigacha bo‘lgan muddatda sirtqi (maxsus sirtqi) ta’limda o‘qish mustaqil, jumladan, masofadan turib ta’lim olish shaklida amalga oshiriladi. Sirtqi ta’lim talabasi har bir semestr davomida bir marta oliy ta’lim muassasasiga o‘quv sessiyasiga chaqiriladi..</p>
                </div>
                

                <div id="Management" ref={tabThree} class="tabcontent">
                <h3>Bizning vazifamiz</h3>
                <h3>Bizning vazifamiz</h3>
                    <p>“Oliy ta’lim muassasasida sirtqi (maxsus sirtqi) va kechki (smenali) ta’limni tashkil etish tartibi to‘g‘risidagi nizomlarni tasdiqlash haqida”gi qaroriga binoan TKTI tarkibida dastlab 2018-2019 o‘quv yilidan “Sirtqi bo‘lim” nomi bilan tashkil etilgan. Bo‘limda talabalar quyidagi yo’nalishlarda tahsil olishadi:
<br/>
                        1. 5310900-Metrologiya, standartlashtirish va mahsulot sifat menejmenti (kimyo va oziq-ovqat)
                        <br/>  
                        2. 5320300 – Texnologik mashinalar va jihozlar (oziq-ovqat sanoati)
                        <br/>  
                        3. 5320400 – Kimyoviy texnologiya (ishlab chiqarish turlari bo‘yicha)
                        <br/> 
                        4. 5321000 – Oziq-ovqat  texnologiyasi ( mahsulot turlari bo‘yicha)
                        <br/>  
                        5. 5321300 – Neft va neft-gazni qayta ishlash texnologiyasi
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
                                    <span class="degree">Bo'lim boshlig'i</span>
                                    <span class="info">Buxorov Shuxrat Burievich

                                        Kimyo fanlari nomzodi, dotsent.
                                        
                                        Tel: 71 244-79-34
                                        
                                        Elektron pochta: Buxorov_shuxrat@mail.ru
                                        
                                        Qabul kunlari: Har kuni 14:00-17:00.</span>
                                </div>
                            </div>
                        </div>
                        <h6 class="fullname-personal">Buxorov Shuxrat Burievich</h6>
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
