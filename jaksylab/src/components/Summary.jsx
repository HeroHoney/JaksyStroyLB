import React, { useState } from 'react';

function Summary({ handleClose }) {
  const [step, setStep] = useState(1); // Шаг 1 - выбор типа помещения, Шаг 2 - выбор типа ремонта, Шаг 3 - выбор стиля ремонта, Шаг 4 - указание размера помещения

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        {step === 1 && (
          <>
            <div className='flex flex-row justify-center items-center'>
              <div className='container flex flex-col lg:flex-row items-center py-4 px-4' style={{backgroundColor:'#CECEEA'}}>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/flat.jpeg" alt="Квартира" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Квартира</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/house.jpg" alt="Жилой дом" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Жилой дом</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/office.jpeg" alt="Коммерческое помещение" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Коммерческое <br />помещение</p>
                </div>
              </div>
              <div className="ml-8 max-w-xs">
                <div>
                  <h2 className="text-3xl mb-2 lg:text-left" style={{color:'#67582E'}}>ТИП ПОМЕЩЕНИЯ</h2>
                  <p className="text-sm lg:text-left" style={{color:'#92804F'}}>Мы внимательно подойдем к выбору материалов и планировке, чтобы создать оптимальные условия для использования пространства</p>
                </div>
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
          <div className='flex flex-row justify-center items-center'>
              <div className='container flex flex-col lg:flex-row items-center py-4 px-4' style={{backgroundColor:'#CECEEA'}}>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/capital.jpeg" alt="Капитальный" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Капитальный</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/cosmetica.jpg" alt="Косметический" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Косметический</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/desinger.jpeg" alt="Дизайнерский" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Дизайнерский</p>
                </div>
              </div>
              <div className="ml-8 max-w-xs">
                <div>
                  <h2 className="text-3xl mb-2 lg:text-left" style={{color:'#67582E'}}>ТИП РЕМОНТА</h2>
                  <p className="text-sm lg:text-left" style={{color:'#92804F'}}>Косметический - оптимальный способ обновить интерьер с минимальными затратами.

<br />Капитальный - выполняется полная замена отделки, коммуникаций и сантехники.

<br />Дизайнерский - возможность преобразить ваш дом создав уникальный интерьер.
 </p>
                </div>
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className='flex flex-row justify-center items-center'>
              <div className='container flex flex-col lg:flex-row items-center py-4 px-4' style={{backgroundColor:'#CECEEA'}}>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/haitec.jpeg" alt="Хай-тек" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Хай-тек</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/neoclassica.jpeg" alt="Неоклассика" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Неоклассика</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/loft.jpg" alt="Лофт" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Лофт</p>
                </div>
                <div className="rounded-lg bg-gray-100 p-4 mr-4">
                  <img src="./assets/minimalism.jpg" alt="Минимализм" className="w-48 h-48 cursor-pointer" onClick={handleNextStep} />
                  <p className="text-center mt-2 text-sm">Минимализм</p>
                </div>
              </div>
              <div className="ml-8 max-w-xs">
                <div>
                  <h2 className="text-3xl mb-2 lg:text-left" style={{color:'#67582E'}}>СТИЛЬ РЕМОНТА</h2>
                  <p className="text-sm lg:text-left" style={{color:'#92804F'}}>Предлагаем палитру стилей по последнему вкусу современности.</p>
                </div>
              </div>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <h2 className="text-3xl mb-2 lg:text-left" style={{color:'#67582E'}}>РАЗМЕР ПОМЕЩЕНИЯ</h2>
            <p className="text-sm lg:text-left" style={{color:'#92804F'}}>Укажите размер площади предполагаемого помещения</p>
            <textarea rows="2" className="w-full border rounded-lg mt-4" placeholder="Введите размер помещения"></textarea>
          </>
        )}
        {step !== 1 && <button onClick={handlePreviousStep} className="inline-block mt-8 text-white font-bold border px-14 py-2 rounded-full hover:text-white transition"  style={{ background: '#A1A1C1', borderColor: '#A1A1C1' }}>Назад</button>}
        <button onClick={handleClose} className="inline-block mt-8 text-white font-bold border px-14 py-2 rounded-full hover:text-white transition"  style={{ background: '#A1A1C1', borderColor: '#A1A1C1' }}>Закрыть</button>
      </div>
    </div>
  );
}

export default Summary;

