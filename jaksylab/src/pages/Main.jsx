import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import Summary from "../components/Summary";

function Main() {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <section style={{ backgroundImage: 'url(./assets/back.png)', backgroundSize: 'cover', position: 'relative' }} className="py-48 mt-8">
                <div className="container flex flex-col lg:flex-row items-center">
                    <div className="bg-yellow-200 bg-opacity-25 py-6 px-8 rounded-lg lg:w-1/2 text-center lg:text-left mt-18 ml-32">
                        <h1 className="text-4xl text-white font-bold">Мы предлагаем лучший  сервис по лучшей цене!</h1>
                        <p className="mt-6 text-1xl text-white text-opacity-60">Профессиональный <br />ремонт коммерческой недвижимости, <br />квартир и частных домов</p>
                    </div>
                </div>
                <div className="container flex flex-col lg:flex-row items-center" style={{ position: 'absolute', top: '70%', left: '43%', transform: 'translate(-50%, -50%)' }}>
                    <div className="text-center lg:text-left ml-48 ">
                        <Link to={`/`} className="inline-block text-white font-bold border px-14 py-2 rounded-full hover:text-white transition" style={{ background: '#A1A1C1', borderColor: '#A1A1C1' }}>Подробнее</Link>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-semibold lg:text-left text-center mb-4" style={{ color: '#A1A1C1' }}>Почему выбирают нас?</h2>
                    <h4 className="text-1xl text-center lg:text-left mb-8" style={{ color: '#313155' }}>МЫ ПРЕДЛАГАЕМ ЛУЧШИЕ СЕРВИСЫ <br /> ПО ЛУЧШЕЙ ЦЕНЕ</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#D9D9D9' }}>
                            <div class="text-4xl font-bold  mb-4" style={{color:'#67582E'}}>01</div>
                            <h3 className="text-xl mb-4 py-2 rounded-full" style={{ backgroundColor: '#AD5532', color: 'white' }}>Любые изощренные запросы</h3>
                            <p className="text-gray-600">Мы готовы выполнить самые нестандартные задачи и удовлетворить самые изысканные потребности наших клиентов.</p>
                        </div>
                        <div className="p-6  rounded-lg shadow-md" style={{ backgroundColor: '#D9D9D9' }}>
                            <div class="text-4xl font-bold  mb-4" style={{color:'#67582E'}}>02</div>
                            <h3 className="text-xl mb-4 py-2 rounded-full" style={{ backgroundColor: '#AD5532', color: 'white' }}>Более 3 лет опыта работы</h3>
                            <p className="text-gray-600">Мы обладаем более чем тремя годами успешного опыта в сфере ремонта и строительства.</p>
                        </div>
                        <div className="p-6 rounded-lg shadow-md" style={{ backgroundColor: '#D9D9D9' }}>
                            <div class="text-4xl font-bold  mb-4" style={{color:'#67582E'}}>03</div>
                            <h3 className="text-xl mb-4 py-2 rounded-full" style={{ backgroundColor: '#AD5532', color: 'white' }}>Более 2000 довольных клиентов</h3>
                            <p className="text-gray-600">Наши услуги уже оценили более двух тысяч клиентов, которые остались довольны результатами нашей работы.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center lg:flex-row py-12">
                <img src="./assets/form.jpeg" alt="" className="w-full lg:w-1/2 max-w-md rounded-lg" />
                <div className="lg:w-1/3 lg:ml-12">
                    <h1 className="text-4xl  lg:text-left text-center mb-4" style={{color:'#67582E'}}>НАШИ УСЛУГИ</h1>
                    <p className="text-center lg:text-left"style={{color:'#92804F'}}>Заполните небольшую форму, и мы поможем вам рассчитать стоимость проекта</p>
                    <div className="text-center lg:text-left mt-4">
                        <button onClick={openPopup} className="inline-block text-white font-bold border px-14 py-2 rounded-full hover:text-white transition" style={{ background: '#A1A1C1', borderColor: '#A1A1C1' }}>Рассчитать стоимость</button>
                    </div>
                </div>
            </section>
            
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-5xl  text-center mb-8" style={{ color: '#A1A1C1' }}>Этапы ремонта</h2>
                    <div className="relative">
                    <div className="absolute top-1/2 w-full h-1 bg-gray-300"></div>
                    <div className="flex justify-between items-center relative">
                        <div className="flex flex-col items-center relative mb-24">
                        <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center">1</div>
                        <h4 className=" text-center mt-4 ">Подробная смета объекта</h4>
                        </div>
                        <div className="flex flex-col items-center relative mt-24">
                        <h4 className=" text-center mb-4">Составление и подпись договора</h4>
                        <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center">2</div>
                        </div>
                        <div className="flex flex-col items-center relative mb-24">
                        <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center">3</div>
                        <h4 className=" text-center mt-4">Закупка материалов и инструментов</h4>
                        </div>
                        <div className="flex flex-col items-center relative mt-24">
                        <h4 className=" text-center mb-4">Ремонтные работы</h4>
                        <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center">4</div>
                        </div>
                        <div className="flex flex-col items-center relative mb-24">
                        <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center">5</div>
                        <h4 className=" text-center mt-4">Сдача работы и оплата услуг</h4>
                        </div>
                        <div className="flex flex-col items-center relative mt-24">
                        <h4 className="text-center mb-4">Свяжитесь с нами и оставьте заявку</h4>
                        <div className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center">6</div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <Testimonials/>
            {isOpen && <Summary handleClose={closePopup} />}

            <div style={{ position: 'fixed', bottom: '30px', right: '30px' }}>
                <a href="https://api.whatsapp.com/send?phone=87788338640" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/whatsapp.png" alt="WhatsApp" style={{ width: '50px', height: '50px' }} />
                </a>
            </div>
        </div>
    );
};

export default Main;
