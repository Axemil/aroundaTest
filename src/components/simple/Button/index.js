import React from 'react';
import { Link } from "react-router-dom";

import s from "./style.scss";

const Button = ({ children, href, size="md" }) => (
	href ? (
		<Link 
			to={href}
			className={`
				stopCursor
				${s.button}
				${size === "sm" ? s.sm : ""}
				${size === "md" ? s.md : ""}
			`}
		> 
			<span> { children } </span>
		</Link>
	) : (
		<button 
			type="button"
			className={`
				stopCursor
				${s.button}
				${size === "sm" ? s.sm : ""}
				${size === "md" ? s.md : ""}
			`}
		>
			<span> { children } </span>
		</button>
	)	
);

export default Button;