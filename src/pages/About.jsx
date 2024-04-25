import React from 'react';
import './css/about.css';



function About() {
  return (
    <div className='about'>
      <h1 style={{color: 'blue'}}>Yurak qon tomir kasalliklari</h1>
      <p>
        Yurak qon tomir kasalliklari (CVD), yurakning yuqori rivojlanish darajasi va qon tomirlariga zarar yetkazish orqali belgilangan kasalliklar guruhiga mansub bo'lgan biroq turli shakl va shakllarda yuzaga keladigan bir qator kasalliklarni ifodalaydi. Yurak qon tomir kasalliklari dunyoda eng ko'p o'lan kasalliklar o'ringida joylashgan.
      </p>
      <img src="./img/heart.png" alt='Yurak' className='heart-image' />
      <p>
        Yurak qon tomir kasalliklarining ko'pchilik o'zi natijalar tarkibidagi mukofotlar va o'zgarmagan ovqat tarkibida yuqori miqdorda yashil sabzavot va meva iste'mol qilish, moddalar ro'yxatini kamaytirish, tuzsiz, yog'siz yem ma'lumotlar bilan bog'liq.
      </p>
      <p>
        Bir nechta asosiy faktorlar yurak qon tomir kasalliklarining o'zining rivojlanishini kuchaytiradi. Ulardan biri yuqori kolesterol, yuqori qon bosimi, o'tish davri, ichki tuz va kishilik jinsiga qarab yem ma'lumotlari bilan bog'liq.
      </p>
      <p>
        Yurak qon tomir kasalliklari o'rtacha yoshning yuqori boshlang'ich sabablaridan biridir va ko'pchilik o'zi zamonaviy tibbiyotni o'rganishga majbur bo'lgan tizimning asosiy boshlang'ich sababidir. Shu sababli, CVDni oldindan ko'rib chiqish tibbiy muammoni bartaraf etishga yordam beradi va kasallikning yetishmovchilik darajasi va rivojlanishining to'xtatilishiga imkon beradi.
      </p>
      <p>
        Yurak qon tomir kasalliklari etkazib beradigan o'zgarishlar ko'pchilik bilan bir vaqtning o'zida ro'y beradi va jiddiy jarohatga sabab bo'ladi. Yurak qon tomir kasalliklari yetishmovchilik darajasi yuqori bo'lganda, qon tomirlarida plakaklar paydo bo'lishi mumkin. Bu esa yurak kasalliklarini rivojlantirish uchun oqimni buzish va yurak qon tomirlari kichik chiqib qolishi natijasida yuzaga kelishi mumkin.
      </p>
    </div>
  );
}

export default About;
