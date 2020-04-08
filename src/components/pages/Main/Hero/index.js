import React from 'react';

import s from "./style.scss";

const Hero = () => (
	<section className={s.hero}>
		<div className={s.container}>
			<div className={s.heroContent}>
				<h1 className={s.heroTitle}>
					Digital product design agency for startups and enterprise innovators
				</h1>
				<p className={s.heroDesc}>We create and evolve web and mobile apps, marketing websites, two-sided platforms through branding, web design, UX/UI design & app development.</p>
			</div>
		</div>
	</section>
);

export default Hero;