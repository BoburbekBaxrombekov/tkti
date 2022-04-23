import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import { useParams, NavLink, Link } from 'react-router-dom'
import Logo from '../../images/logo.png'

function PageOpened() {
    const { lang, setLang } = useContext(LanguageContext);
    const { id } = useParams()
    const [page, setPage] = useState([])
    const [sideBarData, setSideBarData] = useState()
    useEffect(() => {
        fetch(`http://localhost:3001/sub_categories/get/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPage(data)
            });
    }, [])
    useEffect(() => {
        setSideBarData(JSON.parse(window.localStorage.getItem('category')))
        
    }, [])
    return (
        <>
            <div class="container-fluid mt-5">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="sn-container">
                            {page.map(item => (
                                <div class="sn-content">
                                    <h1 class="sn-title">{item[`section_title_${lang}`]}</h1>
                                    <div class="mainBody" dangerouslySetInnerHTML={{ __html: item[`section_main_${lang}`] }}></div>
                                </div>
                            ))}
                        </div>
                        <div className="category_overbar">
                            <ul>
                                <li className='sidebar_header d-flex'>
                                    <img src={Logo} alt="" />
                                    <h3>TKTI</h3>
                                </li>
                                {sideBarData && sideBarData[0].menu_id == 2 ? <>
                                    <li className='my-2 d-flex'>
                                    <svg data-v-04fe8649="" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle data-v-04fe8649="" cx="3" cy="3" r="3" fill="#BDBFC1"></circle></svg><NavLink onClick={() => {
                                        window.localStorage.setItem('category', JSON.stringify(sideBarData))
                                        
                                        }} className="dropdown-item all_sc" to={`/page/static/get/1`}>{context[lang].underCategory.first}</NavLink></li>
                                            <li className='my-2 d-flex'>
                                            <svg data-v-04fe8649="" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle data-v-04fe8649="" cx="3" cy="3" r="3" fill="#BDBFC1"></circle></svg><NavLink onClick={() => {
                                                window.localStorage.setItem('category', JSON.stringify(sideBarData))
                                                
                                            }} className="dropdown-item all_sc" to={`/page/static/get/2`}>{context[lang].underCategory.second}</NavLink></li>
                                            <li className='my-2 d-flex'>
                                            <svg data-v-04fe8649="" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle data-v-04fe8649="" cx="3" cy="3" r="3" fill="#BDBFC1"></circle></svg>
                                                <NavLink onClick={() => {
                                                window.localStorage.setItem('category', JSON.stringify(sideBarData))
                                                
                                            }} className="dropdown-item all_sc" to={`/page/static/get/3`}>{context[lang].underCategory.third}</NavLink></li>
                                    {sideBarData.map(item => (
                                        <li className='my-2 d-flex'>
                                            <svg data-v-04fe8649="" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle data-v-04fe8649="" cx="3" cy="3" r="3" fill="#BDBFC1"></circle></svg><NavLink onClick={() => {
                                            window.localStorage.setItem('category', JSON.stringify(sideBarData))
                                        }} className="dropdown-item all_sc" to={`/page/get/${item.id}`}>{item[`section_name_${lang}`]}</NavLink></li>
                                    ))}        
                                </> : sideBarData ? sideBarData.map(item => (
                                        <li className='my-2 d-flex'>
                                            <svg data-v-04fe8649="" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle data-v-04fe8649="" cx="3" cy="3" r="3" fill="#BDBFC1"></circle></svg>
                                            <NavLink onClick={() => {
                                            window.localStorage.setItem('category', JSON.stringify(sideBarData))
                                            
                                        }} className={({ isActive }) => (isActive ? "link-active dropdown-item all_sc" : "link dropdown-item all_sc")}
                                         to={`/page/get/${item.id}`}>{item[`section_name_${lang}`]}</NavLink></li>
                                    )) : ''}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

{/* <svg data-v-04fe8649="" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle data-v-04fe8649="" cx="3" cy="3" r="3" fill="#BDBFC1"></circle></svg> */}

export default PageOpened;
