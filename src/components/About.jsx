import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
	const tiltRef = useRef(null); // Create a ref for Tilt component

	return (
		<Tilt ref={tiltRef} className='lg:min-w-[250px] min-w-full'>
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
				>
					<img src={icon} alt='' className='w-16 h-16 object-contain' />
					<h3 className='text-white text-[20px] text-center font-bold'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>HASINJATOVO Mika Tommy</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				Je suis un développeur frontend compétent en Sass, Bootstrap et Tailwind pour
				créer une interface utilisateur réactive. Avec une expertise en jQuery, TypeScript, React et
				Redux Toolkit, je crée des applications Web évolutives qui offrent aux utilisateurs des performances exceptionnelles
				expériences. Je donne la priorité au codage propre et je reste au courant des tendances
				pour dépasser les attentes. Travaillons ensemble sur votre prochain projet.
			</motion.p>
			<div className='mt-20 lg:flex-row flex flex-col  gap-10'>
				{services.map((service, index) => {
					return <ServiceCard key={service.title} index={index} {...service} />;
				})}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
