import React from 'react';

import TitleH from "@simple/TitleH";
import ButtonSecondary from "@simple/ButtonSecondary";

import list from "@/data/servicesSection";

import s from "./style.scss";

const ServicesSection = (props) => (
	<section className={s.servicesSection}>
		<div className={s.container}>
			<div className={s.titleWrapper}>
				<TitleH size={"h1"}>We extend design & development departments of product teams</TitleH>
				<p>Our capabilities help to make beautiful and easy to use digital products and experiences.</p>	
			</div>
			<ul className={s.servicesWrapper}>
				{
					list.map(item => (
						<li key={item.id} className={s.item}>
							<div className={s.itemIcon}>
								{item.icon}
							</div>
							<TitleH size="h6">{item.title}</TitleH>
						</li>
					))
				}
			</ul>
			<div className={s.btnWrapper}>
				<ButtonSecondary>Our services</ButtonSecondary>
			</div>
		</div>
	</section>
);

export default ServicesSection;