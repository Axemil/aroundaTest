import React, {useEffect} from 'react';
import { useLocation } from "react-router-dom";

import s from "./style.scss";

const Layout = ({ children }) => {
	const pathname = useLocation();

	useEffect(() => {
		window.scrollTo(0,0);
	}, [pathname]);

	return (
		<div className={s.grid}>
			{ children }
		</div>	
	)
};

export default Layout;