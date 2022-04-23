import { useState, useEffect, useContext } from 'react';
import { Context as LanguageContext } from '../../Context/Language';
import context from '../../lang/lang';
import {useParams} from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react';

function AnnouncementsOne() {
    const {lang, setLang} = useContext(LanguageContext);
    const { id } = useParams()
    const [found, setFound] = useState([])
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/announcements/one/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setFound(data)
        });
    }, [])
    useEffect(() => {
        fetch('http://localhost:3001/announcements/all')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setNews(data)
        });
    }, [])
    console.log(found);
    return (
        <>
            <div class="container-fluid mt-5 news_item_wrapper">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="sn-container">
                            {found.map(item => (
                                <>
                                    <div class="sn-img">
                                        <img src={`${item.img}`} />
                                    </div>
                                    <div class="sn-content">
                                        <h1 class="sn-title mt-3">{item[`title_${lang}`]}</h1>
                                        <p class="mainBody mt-5" dangerouslySetInnerHTML={{__html: item[`body_${lang}`]}}></p>
                                    </div>
                                </>
                            ))}
                            
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget text-center">
                                <h2 class="sw-title">{context[lang].other.first}</h2>
                                <div class="news-list">
                                    {news.map(news_item => (
                                        <div class="nl-item">
                                            <div class="nl-img">
                                                <a href={`/news/${news_item.id}`}>
                                                <img src={`${news_item.img}`} width="400" height="230"/>
                                                </a>
                                            </div>
                                            <div class="nl-title">
                                                <a href="/page/get/<%= onePage.id %>" class="titleNameArticle"></a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnnouncementsOne;