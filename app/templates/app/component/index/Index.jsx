import React from 'react'
import '../../public/css/common.pcss'
import style from '../../public/css/common.pcss.json'
import titleContentImg from '../../public/img/titleContent.png'
import {HashRouter, NavLink, Route} from "react-router-dom";
import HeadLeft from "../common/HeadLeft";
import Weater from "../common/Weater";
import ExcelDown from "../excelDown/ExcelDown";

class Index extends React.Component {
    render() {
        return (
                <HashRouter>
                    <div className={style.allHeight}>
                        <header>
                                    <HeadLeft key="HeadLeft"></HeadLeft>
                                    <img src={titleContentImg} alt="" key=""/>
                                    <NavLink to="/" className="headMenuList" activeClassName="selected" exact>
                                        <span className="name">客流分析</span>
                                        <span className="number">01</span>
                                    </NavLink>
                                    <NavLink to="/demo2" className="headMenuList" activeClassName="selected" exact>
                                        <span className="name">属性分析</span>
                                        <span className="number">02</span>
                                    </NavLink>
                                    <Weater></Weater>
                        </header>
                        <Route exact path="/" component={ExcelDown}/>
                        <Route exact path="/demo2" component={HeadLeft}/>
                    </div>
                </HashRouter>
        )
    }
}

export default Index