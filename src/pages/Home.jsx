import React from 'react'
import doctorsImage from '../../public/img/doctors.jpg'
import './css/home.css'
function Home() {
	return (
		<div className='home-container'>
			<div className='home-container-content'>
				<img src={doctorsImage} alt='Doctors' />
			</div>
			<div className='home-container-content'>
				<h1 style={{ color: 'blue' }}>Ma'lumotlar</h1>
				<h3 style={{ color: 'blue' }}>
					O‘zbekistonning meditsina sohasi əsasen davlat tomonidan ta'minlangan
					va rivojlangan davlat dasturlariga asoslanadi. Bu sohada bir nechta
					davlat tashkilotlari, yuqori o‘quv yurtlari, tibbiyot institutlari va
					klinikalar faoliyat ko‘rsatishadi. Quyidagi bo‘limlarda
					O‘zbekistonning meditsina sohasi boyicha malumotni taqdim etaman:
					Davlat Tashkilotlari: O‘zbekiston Respublikasi Davlat Davlat
					Toshkiloti (Davlat DTM), O‘zbekiston Respublikasi Davlat Davlat Davlat
					Davlat Davlat Tashkiloti (Davlat DTM), va boshqalar o‘zbekistonning
					meditsina sohasida muhim rollarni o‘ynaydi. Ular tibbiyot xizmatlarini
					ta’minlash, shifoxonalar va klinikalar o‘rnini boshqarish, nufuzli
					ta'lim markazlarini amalga oshirish va tibbiyotning rivojlanishini
					ta'minlash bilan shug‘ullanadilar. Tibbiyot O‘quv Yurtlari:
					O‘zbekiston Respublikasi boshqa mamlakatlar va shaharlarida bir nechta
					yuqori o‘quv yurtlari mavjud. O‘zbekiston Tibbiyot Instituti, Toshkent
					Tibbiyot Akademiyasi, Samarqand Tibbiyot Instituti va boshqalar
					meditsina sohasida yuqori darajada ta’lim beradilar. Tibbiyot
					Instituti va Klinikalar: O‘zbekiston tibbiyot institutlari va
					klinikalari yuqori standartlarga ega bo'lib, xalqaro standartlarga mos
					holda tibbiyot xizmatlarini taqdim etish uchun rivojlanganlar. Ular
					shifoxonalar, poliklinikalar, diagnostika markazlari va boshqa
					tibbiyot xizmatlarini taqdim etadilar. Tashqi Hamkorlik: O‘zbekiston,
					boshqa mamlakatlar va tashqi mablag‘lar bilan tibbiyot sohasida
					hamkorlik qiladi. Bu hamkorlik oliy malakalarni almashish, yangi
					texnologiyalarni joriy etish va shifoxonalarni rivojlantirish uchun
					juda muhimdir. O‘zbekistonning meditsina sohasi yuqori standartlarda
					tibbiyot xizmatlarini taqdim etish, yuqori sifatli ta'lim berish va
					tibbiyotning rivojlanishini ta’minlashda o‘z ta'assurini ko‘rsatadi.
				</h3>
			</div>
		</div>
	)
}

export default Home
