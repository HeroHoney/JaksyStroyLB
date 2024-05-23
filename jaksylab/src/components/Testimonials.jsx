import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Анна Иванова',
      feedback: 'Очень довольны качеством работы, которую выполнила команда ремонтников в нашей квартире. Они работали быстро и точно, не пропуская ни одной детали. Результат высокого качества, все выглядит очень красиво и удобно. Мы высоко оцениваем профессионализм, с которым работают эти ребята и готовы рекомендовать эту компанию для выполнения ремонта квартиры. ',
      image: './assets/anna.jpg'
    },
    {
      name: 'Дмитрий Смирнов',
      feedback: 'Очень довольны качеством работы, которую выполнила команда ремонтников в нашей квартире. Они работали быстро и точно, не пропуская ни одной детали. Результат высокого качества, все выглядит очень красиво и удобно. Мы высоко оцениваем профессионализм, с которым работают эти ребята и готовы рекомендовать эту компанию для выполнения ремонта квартиры. ',
      image: './assets/dmitry.jpg'
    },
    {
      name: 'Елена Кузнецова',
      feedback: 'Очень довольны качеством работы, которую выполнила команда ремонтников в нашей квартире. Они работали быстро и точно, не пропуская ни одной детали. Результат высокого качества, все выглядит очень красиво и удобно. Мы высоко оцениваем профессионализм, с которым работают эти ребята и готовы рекомендовать эту компанию для выполнения ремонта квартиры. ',
      image: './assets/elena.jpg'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-semibold text-center mb-8" style={{ color: '#A1A1C1' }}>Отзывы клиентов</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-sm w-full lg:w-1/3 p-4">
              <div className=" p-6 rounded-lg shadow-lg" style={{backgroundColor:'#D9D9D9'}}>
                <div className="text-6xl text-center mb-4" style={{color:'#67582E'}}>“</div>
                <p className="text-gray-600 text-center mb-4"  style={{color:'#67582E'}}>{testimonial.feedback}</p>
                <h3 className="text-xl font-semibold text-center"  style={{color:'#67582E'}}>{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
