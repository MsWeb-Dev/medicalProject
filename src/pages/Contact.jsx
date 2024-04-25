import React, { useState } from 'react'
import './css/contact.css'

function Contact() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [gender, setGender] = useState('')
	const [location, setLocation] = useState('')
const [problems,setProblms]=useState('')
	const handleSubmit = e => {
		e.preventDefault()
		// Ma'lumotlarni yuborish uchun funksiya
	}

	return (
		<div className='contact'>
			<div className='contact-form'>
				<form onSubmit={handleSubmit}>
					<h3>Malumotnoma</h3>
					<label>
						Ismingiz:
						<input
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Elektron pochta manzilingiz:
						<input
							type='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Viloyatni tanlang:
						<select
							value={location}
							onChange={e => setLocation(e.target.value)}
						>
							<option value=''>Tanlang...</option>
							<option value='toshkent'>Toshkent</option>
							<option value='farg`ona'>Farg'ona</option>
							<option value='andijon'>Andijon</option>
							<option value='namangan'>Namangan</option>
							<option value='buxoro'>Buxoro</option>
							<option value='xorazm'>Xorazm</option>{' '}
							<option value='toshkent'>Toshkent</option>
							<option value='jizzah'>Jizzah</option>
							<option value='qoqon'>Qo'qon</option>
						</select>
					</label>
					<br />
					<label>
						Jinsingiz:
						<select value={gender} onChange={e => setGender(e.target.value)}>
							<option value=''>Tanlang...</option>
							<option value='male'>Erkak</option>
							<option value='female'>Ayol</option>
							<option value='other'>Boshqa</option>
						</select>
					</label>
					<br />
          <label>
            Xabar:
            <textarea
              value={problems}
              onChange={e => setProblms(e.target.value)}
            ></textarea>
          </label>

					<button type='submit'>Jo'natish</button>
				</form>
			</div>
    
		</div>
	)
}

export default Contact
