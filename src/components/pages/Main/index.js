import React from 'react';
import { TimelineLite } from 'gsap';

import Hero from "./Hero";
import WorkSection from '@sections/WorkSection';
import OurExpertise from "./OurExpertise";
import HowSection from '@sections/HowSection';
import BlogSection from '@sections/BlogSection';
import StartSection from '@sections/StartSection';
import BackgroundAnimate from '@simple/BackgroundAnimate';
import data from '@/data/Works';
import Footer from '@sections/Footer';
import MetaTags from 'react-meta-tags';




import style from './style.scss';



class Main extends React.Component {
	get tl() {
		const tl = new TimelineLite();
		const bgTl = new TimelineLite();

		bgTl.add(this.bg.tween);

		tl.add(bgTl, 'start');

		return tl;
	}
	render() {
		return (
			<>
				<Hero />
				<BackgroundAnimate ref={el => (this.bg = el)} />
				<section className={style.wrapWorkSection}>
					<WorkSection worksData={data} title={"Recent work"} />
				</section>
				<OurExpertise />
				<HowSection />
				<BlogSection />
				<section className={style.wrapStartSection}>
					<StartSection />
				</section>
				<Footer />
				<MetaTags>
					<title>Arounda. Digital Product Agency</title>
					<meta name="description" content="Arounda is a Digital Product Agency that create and evolve innovative, mobile and web apps, marketing websites and brand identities for startups and enterprises through strategy, UX/UI design, development & branding." />
				</MetaTags>
			</>
		);
	}
}
export default Main;
