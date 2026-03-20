import { BiLogoTypescript } from 'react-icons/bi';
import { DiJavascript1, DiMongodb, DiMsqlServer } from 'react-icons/di';
import { FaDocker, FaLinux, FaNodeJs, FaReact, FaRust } from 'react-icons/fa';
import {
	SiGit,
	SiMysql,
	SiTailwindcss,
	SiVite,
	SiVmware,
	SiWireshark,
} from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Stack I Work With',
		items: [
			{
				title: 'React',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Vite js',
				icon: <SiVite color='rgb(236, 70, 173)' />,
				color: 'rgb(236, 70, 173, 0.6)',
			},
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
			{
				title: 'JavaScript',
				icon: <DiJavascript1 color='rgb(241, 224, 90)' />,
				color: 'rgba(241, 224, 90, 0.6)',
			},
			{
				title: 'Rust',
				icon: <FaRust color='rgb(222, 165, 132)' />,
				color: 'rgba(222, 165, 132, 0.6)',
			},
		],
	},
	{
		heading: 'UI & Styling',
		items: [
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgb(6, 182, 212, 0.7)',
			},
		],
	},
	{
		heading: 'Databases',
		items: [
			{
				title: 'MongoDB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgb(0, 237, 100, 0.7)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgb(0, 122, 158, 0.75)',
			},
			{
				title: 'PostgreSQL',
				icon: <DiMsqlServer color='rgb(0, 122, 204)' />,
				color: 'rgb(0, 122, 204, 0.7)',
			},
		],
	},
	{
		heading: 'Other Tools',
		items: [
			{
				title: 'Git',
				icon: <SiGit color='rgb(212, 136, 3)' />,
				color: 'rgb(212, 136, 3, 0.7)',
			},
			{
				title: 'Docker',
				icon: <FaDocker color='rgb(3, 102, 214)' />,
				color: 'rgb(3, 102, 214, 0.7)',
			},
			{
				title: 'Linux',
				icon: <FaLinux color='rgb(243, 243, 243)' />,
				color: 'rgb(243, 243, 243, 0.7)',
			},
			{
				title: 'VmWare',
				icon: <SiVmware color='rgb(0, 122, 204)' />,
				color: 'rgb(0, 122, 204, 0.7)',
			},
			{
				title: 'WireShark',
				icon: <SiWireshark color='rgb(0, 122, 204)' />,
				color: 'rgb(0, 122, 204, 0.7)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='STACK'
				/>
			</div>
		</section>
	);
};
