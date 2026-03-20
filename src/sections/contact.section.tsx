import { FormEvent, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [status, setStatus] = useState<
		'idle' | 'loading' | 'success' | 'error'
	>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validation
		if (
			!formData.name.trim() ||
			!formData.email.trim() ||
			!formData.message.trim()
		) {
			setErrorMessage('Veuillez remplir tous les champs obligatoires');
			setStatus('error');
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			setErrorMessage('Veuillez entrer une adresse email valide');
			setStatus('error');
			return;
		}

		setStatus('loading');
		setErrorMessage('');

		try {
			const response = await fetch(`${API_URL}/api/contact`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setStatus('success');
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: '',
				});

				// Réinitialiser le message de succès après 5 secondes
				setTimeout(() => setStatus('idle'), 5000);
			} else {
				throw new Error(data.error || "Erreur lors de l'envoi du message");
			}
		} catch (error) {
			setStatus('error');
			setErrorMessage(
				error instanceof Error
					? error.message
					: "Une erreur est survenue lors de l'envoi",
			);
		}
	};

	return (
		<section
			className='contact-section container'
			id='contact'
		>
			<div>
				<SectionTitle
					title='Contact'
					subTitle='Me'
				/>
			</div>

			<div className='contact-wrapper'>
				{/* Formulaire de contact */}
				<div className='contact-form-wrapper'>
					<h3 className='form-title'>Envoie-moi un Message</h3>

					<form
						onSubmit={handleSubmit}
						className='contact-form'
					>
						<div className='form-group'>
							<label htmlFor='name'>Nom *</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								placeholder='Votre nom'
								required
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='email'>Email *</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='votre.email@exemple.com'
								required
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='subject'>Sujet</label>
							<input
								type='text'
								id='subject'
								name='subject'
								value={formData.subject}
								onChange={handleChange}
								placeholder='Sujet de votre message'
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='message'>Message *</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								placeholder='Votre message ici...'
								rows={5}
								required
							/>
						</div>

						<button
							type='submit'
							className='submit-btn'
							disabled={status === 'loading'}
						>
							{status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
						</button>

						{status === 'success' && (
							<div className='success-message'>
								✓ Message envoyé avec succès! Merci! 🎉
							</div>
						)}

						{status === 'error' && (
							<div className='error-message'>{errorMessage}</div>
						)}
					</form>
				</div>

				{/* Liens sociaux avec GlowBox */}
				<div className='contact-links-wrapper'>
					<h3 className='links-title'>Ou Contacte-moi Directement</h3>

					<div className='contact-links-grid'>
						<GlowBox
							color='rgb(234, 67, 53, 0.7)'
							icon={
								<SiGmail
									size={48}
									color='rgb(234, 67, 53)'
								/>
							}
							title='Email'
						/>
						<GlowBox
							color='rgb(255, 255, 255, 0.7)'
							icon={
								<FaGithub
									size={48}
									color='rgb(255, 255, 255)'
								/>
							}
							title='GitHub'
						/>
						<GlowBox
							color='rgb(10, 102, 194, 0.7)'
							icon={
								<FaLinkedin
									size={48}
									color='rgb(10, 102, 194)'
								/>
							}
							title='LinkedIn'
						/>
					</div>

					<div className='contact-links-direct'>
						<a
							href='mailto:votre.email@exemple.com'
							className='direct-link'
						>
							geoffroy@parcevaux.fr
						</a>
						<a
							href='https://github.com/geoffroy-sdp'
							target='_blank'
							rel='noopener noreferrer'
							className='direct-link'
						>
							github.com/geoffroy-sdp
						</a>
						<a
							href='https://www.linkedin.com/in/geoffroy-simon-de-parcevaux'
							target='_blank'
							rel='noopener noreferrer'
							className='direct-link'
						>
							https://www.linkedin.com/in/geoffroy-simon-de-parcevaux
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
