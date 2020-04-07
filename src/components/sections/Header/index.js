import React, { Component } from "react"
import { TimelineMax, Power4 } from "gsap"
import { Link } from "react-router-dom"

import style from "./style.scss"

export default class Header extends Component {
  state = {
    fixedHeader: false
  }

  get tl() {
    const t = new TimelineMax()

    t.fromTo(
      this.logo,
      0.4,
      { y: 10, autoAlpha: 0, ease: Power4.easeInOut },
      { autoAlpha: 1, y: 0, ease: Power4.easeInOut }
    )
      .staggerFromTo(
        this.menu.childNodes,
        0.4,
        { autoAlpha: 0, y: 10, ease: Power4.easeInOut },
        { autoAlpha: 1, y: 0, ease: Power4.easeInOut },
        0.1
      )
      .fromTo(
        this.burgerWrap,
        0.3,
        { autoAlpha: 0, y: 10, ease: Power4.easeInOut },
        { autoAlpha: 1, y: 0, ease: Power4.easeInOut },
        "+=.1"
      )
      .fromTo(
        this.burger,
        0.3,
        { x: 20, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, ease: Power0.easeNone },
        "-=.2"
      )
      .fromTo(
        this.burger.childNodes[0],
        0.2,
        { y: 4 },
        { y: 0, ease: Power0.easeNone },
        "+=.2"
      )
      .fromTo(
        this.burger.childNodes[1],
        0.2,
        { y: -4 },
        { y: 0, ease: Power0.easeNone },
        "-=.2"
      )

    return t
  }

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener("scroll", this.handleScroll)
    }, 2000)
  }

  handleScroll = (e) => {
    const top = window.pageYOffset
    if (top >= 50) {
      this.setState({
        fixedHeader: true
      })
    } else {
      this.setState({
        fixedHeader: false
      })
    }
  }

  render() {
    const { fixedHeader } = this.state
    const { openMenu, toggleMenu, activeStyle } = this.props
    return (
      <header className={`${style.header} ${fixedHeader ? style.fixed : ""}`}>
        <div className={style.row}>
          <nav className={style.nav}>
            <ul
              ref={(el) => (this.menu = el)}
              className={`${style.menu} ${openMenu ? style.active : ""}`}
            >
              <li>
                <Link className={"stopCursor"} to="/works">
                  Works
                </Link>
              </li>
              <li>
                <Link className={"stopCursor"} to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className={"stopCursor"} to="/blog">
                  Blog
                </Link>
              </li>
              <li className={style.contactBtn}>
                <Link className={"stopCursor"} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.headerFixed}>
          <div className={style.row}>
            <div className={style.logoWrapper} ref={(el) => (this.logo = el)}>
              <Link className={`${style.fixedLogo} stopCursor`} to={"/"}>
                <svg className={style.logo} viewBox="0 0 111 48">
                  <g fill="none" fillRule="evenodd">
                    <path d="m0 0h111v48h-111z" />
                    <g fill="#212121" fillRule="nonzero" transform="translate(1 9)">
                      <path d="m34.9942742 7.54327273c-4.2349699 0-7.6680914 3.40849687-7.6680914 7.61309087s3.4331215 7.6130909 7.6680914 7.6130909c2.034263.0166664 3.9893721-.7816858 5.4231672-2.2145044 1.4337951-1.4328185 2.2251563-3.379066 2.1951124-5.3985865.0235942-2.0176227-.7698494-3.960146-2.2022375-5.39155848-1.432388-1.4314125-3.3837325-2.23180786-5.4160421-2.22153239zm4.4947849 7.83709087c-.0791129 2.5396364-2.0803763 4.2618182-4.661801 4.2007273-1.2202887-.0141428-2.3819576-.5219056-3.2165097-1.4059292-.8345521-.8840235-1.2697559-2.0677944-1.2050226-3.2777072.0075196-1.2234888.5210103-2.3901759 1.4202116-3.2268212.8992012-.8366452 2.105129-1.2697592 3.3353529-1.197906 2.5404032.064 4.3951613 2.272 4.3277688 4.9047272z" />
                      <path d="m12.8690323 7.94181818v1.87345455c-1.6843899-1.76311329-4.13957165-2.58253836-6.55465058-2.18763637-.82393631.12261853-1.61835539.39374137-2.34408602.8-2.46229438 1.35425124-3.98452889 3.93408444-3.9702957 6.72872724.00005966.6454697.08076547 1.2884395.24026882 1.9141819.1973068.7843224.52085055 1.5318783.95814516 2.2138181.44062203.6953576.99178286 1.3152641 1.63206989 1.8356364.70005503.5804275 1.50715055 1.0201086 2.37631721 1.2945455l.16408602.0523636.04981182.0145454c.67868099.196182 1.38231265.2941602 2.08916667.2909091h.24026882.16115591c1.14024645-.0308011 2.25208908-.3599544 3.22311828-.9541818.6485753-.3680245 1.240626-.8265117 1.7580645-1.3614545v1.9025454h3.1762366v-14.41745452zm-.1172043 7.24945452c.0084104 1.2437422-.4921835 2.4375725-1.3870835 3.307955-.8948999.8703824-2.1074015 1.3427142-3.35969074 1.3087723-1.25229559.0324371-2.46406668-.4419644-3.35702905-1.314258-.89296237-.8722935-1.39038151-2.0675207-1.37802471-3.3111965 0-2.6414546 1.98954301-4.6167273 4.68817204-4.637091 2.69862906-.0203636 4.81416666 1.9636364 4.79072576 4.6458182z" />
                      <path d="m105.542473 7.94472727v1.87345455c-1.68439-1.76311329-4.139571-2.58253835-6.5546504-2.18763637-.8239363.12261853-1.6183554.39374137-2.344086.8-2.4613704 1.35374977-3.9834562 3.93221575-3.9702957 6.72581815.0000596.6454697.0807654 1.2884395.2402688 1.9141819.1973068.7843224.5208505 1.5318783.9581451 2.2138181.4415071.6955781.9936688 1.3154975 1.635 1.8356364.7000551.5804275 1.5071506 1.0201086 2.3763172 1.2945455l.1640861.0523636.0498118.0145454c.678681.196182 1.3823126.2941602 2.0891671.2909091h.240268.146506c1.145892-.0228364 2.265171-.3470768 3.243629-.9396363.648575-.3680246 1.240626-.8265118 1.758064-1.3614546v1.9025455h3.173307v-14.42909093zm-.117204 7.24945453c-.063947 2.5531827-2.167026 4.5899018-4.739449 4.5899018-2.5724231 0-4.6755021-2.0367191-4.739449-4.5899018 0-2.6414545 1.989543-4.6167273 4.688172-4.6370909s4.811237 1.9665455 4.790726 4.6370909z" />
                      <path d="m54.4531183 8.94254545c0 2.36509095.0175806 4.73018185-.0293011 7.09236365-.0293011 1.3672727-.4600269 2.6036364-1.8166667 3.3105454-2.6370967 1.3789091-5.2741935-.0261818-5.3591666-2.8741818-.0673925-2.5367272-.0234409-8.52654543-.0234409-8.52654543h-3.2905107v8.17745453c-.0286224.6837368.0324454 1.3682658.1816666 2.0363637.5086156 2.7197086 2.9313054 4.6700954 5.7166398 4.6021818 1.7209966.0034622 3.3828629-.6231652 4.6676613-1.76v1.376h3.1440054c0-4.873697 0-9.683394 0-14.42909094h-3.1908871z" />
                      <path d="m88.1552151 1.21018182v8.608c-1.6843899-1.76311329-4.1395717-2.58253835-6.5546506-2.18763637-.8239363.12261853-1.6183554.39374137-2.344086.8-2.4613704 1.35374977-3.9834561 3.93221575-3.9702957 6.72581815.0000597.6454697.0807655 1.2884395.2402688 1.9141819.1942776.7848031.5148504 1.5333352.9493549 2.2167272.441507.6955781.9936688 1.3154975 1.635 1.8356364.700055.5804274 1.5071505 1.0201086 2.3763172 1.2945454l.164086.0523637.0498118.0145454c.678681.196182 1.3823126.2941602 2.0891667.2909091h.2402688.1465054c1.1521557-.0206305 2.2779183-.3459952 3.2612096-.9425454.6485754-.3680246 1.240626-.8265118 1.7580646-1.3614546v1.9025455h3.1733064v-22.3738182zm-.1172043 13.98109088c-.063947 2.5531828-2.1670259 4.5899018-4.739449 4.5899018-2.572423 0-4.675502-2.036719-4.7394489-4.5899018 0-2.6414545 1.989543-4.6167272 4.688172-4.6370909 2.6986291-.0203636 4.8112366 1.9694546 4.7877957 4.64z" />
                      <path d="m63.5213825 21.5804594c0-2.3650909-.0175807-4.7301819.0293011-7.0923637.029301-1.3672727.4600268-2.6036363 1.8166666-3.3105454 2.6370968-1.37890912 5.2741936.0261818 5.3591667 2.8741818.0673925 2.5367273.0205107 5.0734545.0234409 7.6072727v.9192727h3.2963709v-8.1803636c.0286223-.6837367-.0324454-1.3682658-.1816666-2.0363636-.5087868-2.72082061-2.933139-4.67154592-5.7195699-4.60218184-1.7215302.00045447-3.3824185.63124967-4.6647312 1.77163636 0-.45090909 0-.91927273 0-1.376h-3.1410753v14.42909088h3.187957z" />
                      <path d="m22.0930108 9.47781818v-1.53309091h-3.1469355v14.43200003h3.2231182v-7.8545455c.026371-1.3672727.4600269-2.6007273 1.8166667-3.3105454.6739247-.352 2.0041936-.5236364 2.6370968-.5323637v-3.11563634c-1.497285.20072728-3.4194355.87272728-4.5299462 1.91418182z" />
                    </g>
                  </g>
                </svg>
              </Link>
              <Link className={`${style.scrollLogo} stopCursor`} to={"/"}>
                <svg viewBox="0 0 100 100">
                  <path
                    d="m96.1 76c3.2 6.4.6 14.3-5.8 17.5-1.8.9-3.8 1.4-5.9 1.4-2.4 0-4.7-.6-6.7-1.8-17.2-9.9-38.3-9.9-55.5 0-2 1.2-4.3 1.8-6.6 1.8-7.2 0-13.1-5.9-13.1-13.1 0-2 .5-4 1.4-5.8l30.7-61.4c4.3-8.5 14.6-11.9 23.1-7.7 3.3 1.7 6 4.4 7.7 7.7z"
                    fill="#111212"
                  />
                </svg>
              </Link>
            </div>
            <ul className={`${style.menu} ${openMenu ? style.active : ""}`}>
              <li ref={(el) => (this.burgerWrap = el)} className={style.btnWrapper}>
                <button
                  ref={(el) => (this.burger = el)}
                  className={`${style.btn} stopCursor`}
                  onClick={toggleMenu}
                >
                  <span></span>
                  <span></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
