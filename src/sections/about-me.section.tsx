import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Certifications',
		items: [
			{
				title: '#',
				place: '#',
				timePeriod: '1-2',
				description: (
					<ul>
						<li>a</li>
						<li>b</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Éducation',
		items: [
			{
				title: 'Licence en Informatique et Projet Numérique',
				place: 'ISEP',
				timePeriod: '2025 - Présent',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='Me'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						Bonjour, je suis Geoffroy SIMON de PARCEVAUX, étudiant à l'ISEP.
					</p>
					<p>
						Je travaille avec <strong>différentes technologies </strong>
						depuis <strong>3 ans</strong>, en développant des projets et en
						acquérant de nouvelles compétences au fil du temps.
					</p>
					<p>
						J'aime résoudre des problèmes, apprendre de nouvelles choses et
						expérimenter avec différentes technologies. Quand je ne développe
						pas, je travaille probablement sur un projet personnel ou j'explore
						quelque chose de nouveau.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
