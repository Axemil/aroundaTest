import React from 'react';
import { Link } from "react-router-dom";

import Arrow from "@svg/buttonSecondary/icon_arrow.svg";
import Plus from "@svg/buttonSecondary/icon_plus.svg";

import s from "./style.scss";

const ButtonSecondary = ({ children, href, icon="arrow" }) => (
	href ? (
		<Link 
			to={href}
			className={`
				stopCursor
				${s.button}
			`}
		> 
			<span> 
				{ children } 
				<i className={s.icon}>
					{ icon === "arrow" ? <Arrow /> : <Plus /> }
				</i>
			</span> 
		</Link>
	) : (
		<button 
			type="button"
			className={`
				stopCursor
				${s.button}
			`}
		>
			<span> 
				{ children } 
				<i className={s.icon}>
					{ icon === "arrow" ? <Arrow /> : <Plus /> }
				</i>
			</span>
		</button>
	)	
);

export default ButtonSecondary;