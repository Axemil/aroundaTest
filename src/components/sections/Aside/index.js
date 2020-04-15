import React, { Component } from "react"
import { TimelineLite, Power0 } from "gsap"
import { Link } from "react-router-dom"
import style from "./style.scss"
import parse from "html-react-parser"

import MediaQuery from "react-responsive"

class Aside extends Component {
	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.openMenu) {
			this.timeline()
		} else {
			this.clearStyles()
		}
	}

	timeline = () => {
		const tl = new TimelineLite()

		tl.staggerTo(
			this.menu.childNodes,
			0.3,
			{ y: 0, autoAlpha: 1, ease: Power0.easeNone },
			0.1,
			"+=.2"
		).staggerTo(
			this.socials.childNodes,
			0.3,
			{ y: 0, autoAlpha: 1, ease: Power0.easeNone },
			0.1,
			"-=1"
		)
	}

	clearStyles = () => {
		const tl = new TimelineLite()

		tl.set(this.menu.childNodes, { clearProps: "all" }).set(
			this.socials.childNodes,
			{ clearProps: "all" }
		)
	}

	render() {
		const menu = [
			{
				title: "Works",
				desc: "Our amazing works",
				link: "/works",
				disable: false
			},
			{
				title: "Methods",
				desc: "Our process",
				link: "/",
				disable: true
			},
			{
				title: "Services",
				desc: "Our capabilities",
				link: "/services",
				disable: false
			},
			{
				title: "Blog",
				desc: "Our thoughts",
				link: "/blog",
				disable: false
			},
			{
				title: "Contact",
				desc: "Let`s chat",
				link: "/contact",
				disable: false
			}
		]
		const socials = [
			{
				name: "dribbble",
				link: "https://dribbble.com/arounda",
				image:
					'<svg height="15" viewBox="0 0 15 15" width="15"><g fill="none" transform="translate(-8 -8)"><path d="m15.39212 0c-8.48718 0-15.39212 6.90494-15.39212 15.39212 0 8.48656 6.90494 15.39212 15.39212 15.39212 8.48656 0 15.39212-6.90556 15.39212-15.39212 0-8.48718-6.90432-15.39212-15.39212-15.39212z" fill="#111212" opacity=".053781"/><path d="m14.28073 7.77452441c.0175746-.20532816.0269623-.4121845.0269623-.6205691 0-1.91093796-.7441371-3.70747728-2.0953076-5.05864773-1.3511704-1.35117048-3.14770974-2.09530758-5.05853855-2.09530758-1.9108288 0-3.70736812.7441371-5.05853857 2.09530758-1.35117048 1.35117045-2.09530758 3.14770977-2.09530758 5.05864773 0 1.9108288.7441371 3.70725899 2.09530758 5.05842939 1.35117045 1.3511705 3.14770977 2.0953076 5.05853857 2.0953076 1.91082881 0 3.70736815-.7441371 5.05853855-2.0953076 1.1927808-1.1927807 1.9121387-2.73279628 2.0645248-4.39201353.002074-.01528223.0034931-.03056452.0038205-.04584676zm-.812034-.57363071c-.8603915-.24309716-1.75102-.36644688-2.6551842-.36644688-.6098715 0-1.2112286.05698103-1.79774009.166795-.09223937-.21493413-.18698941-.42888582-.28468675-.64163676-.13153662-.28610581-.26842203-.56970099-.40967383-.8512221 1.35477272-.58531073 2.62680287-1.34112785 3.79545947-2.25588052.8467466 1.07477979 1.3524804 2.4300983 1.3524804 3.90145287 0 .0157189-.0005458.03121949-.000655.04693839zm-1.9147585-4.57278091c-1.1157145.86574027-2.3353483 1.57985863-3.62375233 2.12980183-.70112845-1.29549936-1.50694039-2.53543678-2.40815734-3.70540327.52079774-.13939608 1.06768446-.21417 1.63181832-.21417 1.70932125 0 3.26189015.68289888 4.40009135 1.78977144zm-6.86894111-1.28698494c.92424948 1.17433282 1.74632614 2.42289379 2.45847965 3.7291999-1.81127577.66587008-3.73935171 1.01550646-5.69209758 1.01550646-.17356288 0-.34756235-.0029473-.52090689-.00829609.36841173-2.13635137 1.81345895-3.90887567 3.75452482-4.73641027zm-3.84665504 5.81282746c0-.08066851.00196485-.16079125.00502133-.24069566.20216249.00698618.40541662.01091591.60790662.01091591 2.04094637 0 4.0391024-.35160123 5.93912448-1.04487023.04966736-.01812039.09922555-.03667744.14867458-.05523449.2275966.45115429.44231239.90853061.64392912 1.37147408-2.32650638.65146108-4.35566358 2.15392594-5.65683921 4.25108928-1.04672595-1.1275037-1.68781692-2.6365181-1.68781692-4.29267889zm2.31166076 4.88039109c1.20260502-2.0232626 3.13668471-3.46394353 5.35828928-4.05853277.6242805 1.56708706 1.09977723 3.19290167 1.4155743 4.85266467-.83681311.4101105-1.77699985.6408727-2.77001954.6408727-1.51851126 0-2.91334533-.538809-4.00384404-1.4350046zm7.54103319.3489814c-.3151421-1.5658863-.76706046-3.10197218-1.3496422-4.58817234.48171879-.08055938.9738077-.12236729 1.4721187-.12236729.8844064 0 1.7544039.12880768 2.591217.38282072-.2579428 1.79632099-1.2743225 3.35107301-2.7136935 4.32771891z" fill="#000" transform="translate(8.346154 8.346154)"/></g></svg>'
			},
			{
				name: "instagram",
				link: "https://www.instagram.com/arounda.agency/",
				image:
					'<svg height="15" viewBox="0 0 15 15" width="15"><g fill="none"><path d="m15.39212 0c-8.48718 0-15.39212 6.90494-15.39212 15.39212 0 8.48656 6.90494 15.39212 15.39212 15.39212 8.48656 0 15.39212-6.90556 15.39212-15.39212 0-8.48718-6.90432-15.39212-15.39212-15.39212z" fill="#111212" opacity=".053781" transform="translate(-8 -8)"/><g fill="#000" transform="translate(.346154 .346154)"><path d="m7.15384615 3.36733774c-2.08788476 0-3.78650841 1.69862365-3.78650841 3.78650841 0 2.08788477 1.69862365 3.78650845 3.78650841 3.78650845 2.08788477 0 3.78650845-1.69862368 3.78650845-3.78650845 0-2.08788476-1.69862368-3.78650841-3.78650845-3.78650841zm0 6.73467546c-1.62559626 0-2.94816706-1.32257078-2.94816706-2.94816705 0-1.62559626 1.3225708-2.94816706 2.94816706-2.94816706 1.62570542 0 2.94816705 1.3225708 2.94816705 2.94816706 0 1.62559627-1.32246163 2.94816705-2.94816705 2.94816705z"/><path d="m12.866029 1.44166331c-.9295983-.92970748-2.1610213-1.44166331-3.46721823-1.44166331h-4.48992923c-1.30619693 0-2.53761994.51195583-3.46721823 1.44166331-.92970748.92959829-1.44166331 2.1610213-1.44166331 3.46721823v4.48982005c0 1.30630611.51195583 2.53772911 1.44166331 3.46732741.92959829.9297075 2.1610213 1.4416633 3.46721823 1.4416633h4.48992923c1.30619693 0 2.53761993-.5119558 3.46721823-1.4416633.9297075-.9295983 1.4416633-2.1610213 1.4416633-3.46732741v-4.48982005c0-1.30619693-.5119558-2.53761994-1.4416633-3.46721823zm.603322 7.95703828c0 2.24452801-1.8261214 4.07064941-4.07054023 4.07064941h-4.48992923c-2.2444188 0-4.07054019-1.8261214-4.07054019-4.07064941v-4.48982005c0-2.2444188 1.82612139-4.07054019 4.07054019-4.07054019h4.48992923c2.24441883 0 4.07054023 1.82612139 4.07054023 4.07054019z"/><path d="m11.0524609 2.83606074c-.1104689 0-.2185364.04497352-.2965851.12302223-.0779395.07793956-.1225856.18611614-.1225856.29614844 0 .11035979.0446461.21853639.1225856.29647592.0780487.07804872.1861162.12269475.2965851.12269475.1100323 0 .2182089-.04464603.2961484-.12269475.0779396-.07793953.1230223-.18611613.1230223-.29647592 0-.1100323-.0450827-.21820888-.1230223-.29614844-.0779395-.07793956-.1861161-.12302223-.2961484-.12302223z"/></g></g></svg>'
			},
			{
				name: "behance",
				link: "https://www.behance.net/arounda",
				image:
					'<svg height="11" viewBox="0 0 16 11" width="16"><path d="m10.6347225 1.542035h3.7977713v1.13394125h-3.7977713zm-1.920295 5.946265c0 2.8094138-2.9247725 2.7177313-2.9247725 2.7177313h-2.6789425-.078585-2.0321275v-9.2060313h2.0321275.078585 2.6789425c1.45634125 0 2.605395.80448875 2.605395 2.45175125 0 1.64675875-1.404455 1.75153875-1.404455 1.75153875 1.85128125-.00050375 1.7238325 2.28501 1.7238325 2.28501zm7.1053938-.151125h-4.7710163c0 1.710735 1.6205638 1.6029325 1.6205638 1.6029325 1.529385 0 1.4759875-.9903725 1.4759875-.9903725h1.6215712c0 2.6285675-3.1504525 2.4477213-3.1504525 2.4477213-3.77963625 0-3.53682875-3.5186938-3.53682875-3.5186938s-.00352625-3.5373325 3.53682875-3.5373325c3.725735 0 3.2023388 3.995745 3.2033463 3.995745zm-9.37881755-3.74437375c0-.957125-.65134875-.957125-.65134875-.957125h-.34506875-2.3343775-.0010075v2.0542925h2.51421625c.43473625 0 .81758625-.13853125.81758625-1.0971675zm-.65134875 2.5157275-2.6789425-.00000212v2.46132462h2.37316625c.0403 0 .0997425.002015.17077125 0 .38133875-.00957125 1.106235-.11838125 1.106235-1.1959025 0-1.27751-.97123-1.26542-.97123-1.26542zm6.861075-1.41856c-1.4210788 0-1.6195563 1.41755304-1.6195563 1.41755304h3.0235197c-.0000122.00100696.0186266-1.41755304-1.4039634-1.41755304z" fill="#111212" transform="translate(-.357725 -.173512)"/></svg>'
			},
			{
				name: "facebook",
				link: "https://www.facebook.com/arounda.agency/",
				image:
					'<svg height="14" viewBox="0 0 7 14" width="7"><g fill="#111212" transform="translate(-12 -9)"><path d="m15.39212 0c-8.48718 0-15.39212 6.90494-15.39212 15.39212 0 8.48656 6.90494 15.39212 15.39212 15.39212 8.48656 0 15.39212-6.90556 15.39212-15.39212 0-8.48718-6.90432-15.39212-15.39212-15.39212z" opacity=".053781"/><path d="m18.1208191 15.7511296h-1.7849849v6.3621297h-2.6449948s0-3.476279 0-6.3621297h-1.2573117v-2.2485771h1.2573117v-1.4544157c0-1.0416463.4949698-2.66930142 2.6693014-2.66930142l1.959992.00751294v2.18272848s-1.1910211 0-1.4225962 0c-.2315752 0-.5608185.1157875-.5608185.6125251v1.3213926h2.0152342z"/></g></svg>'
			}
		]

		const { openMenu, handleCloseMenu } = this.props
		return (
			<aside className={`${style.aside} ${openMenu ? style.active : ""}`}>
				<div className={style.wrapper}>
					<div className={style.grid}>
						<div className={style.menu}>
							<ul ref={(el) => (this.menu = el)}>
								{menu.map((el, i) => {
									return (
										<li key={i} className={`${el.disable ? style.disable : ""}`}>
											<Link
												className={`${style.link} menu-link stopCursor`}
												onClick={handleCloseMenu}
												to={el.link}
											>
												{el.title}
											</Link>
											<div className={style.desc}>{el.desc}</div>
										</li>
									)
								})}
							</ul>
						</div>
						<MediaQuery maxDeviceWidth={767}>
							{(matches) => {
								if (matches) {
									return (
										<div className={style.socialsMobile}>
											<p className={style.socialText}>We are social!</p>
											<ul ref={(el) => (this.socials = el)}>
												{socials.map((el, i) => {
													return (
														<li key={i}>
															<a target="_blank" href={el.link}>
																{parse(el.image)}
															</a>
														</li>
													)
												})}
											</ul>
										</div>
									)
								} else {
									return (
										<div className={style.socials}>
											<ul ref={(el) => (this.socials = el)}>
												{socials.map((el, i) => {
													return (
														<li key={i}>
															<a
																target="_blank"
																className="stopCursor"
																href={el.link}
															>
																{el.name}
															</a>
														</li>
													)
												})}
											</ul>
										</div>
									)
								}
							}}
						</MediaQuery>
					</div>
				</div>
			</aside>
		)
	}
}
export default Aside
