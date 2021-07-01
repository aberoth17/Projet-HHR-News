import React, { useEffect, useState } from 'react'
import Article from './Article'
import Pagination from './Pagination'
import Categories from './Categorie'
import Tri from './Tri'
import '../styles/News.css'

const News = () => {

    let [apiUrl,updateApiUrl] = useState(`https://newsapi.org/v2/top-headlines?country=fr&apiKey=ddf3a226630e4c479569ee6db2528bc2`) ;
    let [listeArticles,updateListeArticles] = useState([]) ;
    let [,updateError] = useState('') ;
    let [,upadateNbrArticles] = useState(0) ;
    let [nbrPages,updateNbrPages] = useState(0) ;
    let [pageActive,updatePageActive] = useState(1) ;
    let [source,updateSource] = useState("") ;

    const filtrerSource = (str,f) => {
        return str.toLowerCase().includes(f.toLowerCase())
    }

    useEffect(
        () => fetch(apiUrl).then( x => x.json() ).then( data => {
            console.log(data.articles) ;
            let t = data.articles.filter(a => filtrerSource(a.source.name,source)) ;
            updateListeArticles(t) ;
            upadateNbrArticles(listeArticles.length) ;
            updateNbrPages(Math.ceil(listeArticles.length/4)) ;
            updateSource(data.source.name) ;
        } ).catch( e => updateError(e) )
        ,[apiUrl,source]
    ) ;

    return (
        <React.Fragment>
            <Categories updateApiUrl={updateApiUrl} />
            <Tri 
                source={source} 
                updateSource={updateSource} 
                listeArticles={listeArticles} 
                updateListeArticles={updateListeArticles}
                upadateNbrArticles={upadateNbrArticles}
                updateNbrPages={updateNbrPages}
                updatePageActive={updatePageActive}
            />
            <section>
                {listeArticles.slice((pageActive-1)*4,pageActive*4).map(
                    ( article , i ) => {
                        if (article) {
                            return (
                                <article key={i}>
                                    <Article
                                        auteur={article.author}
                                        titre={article.title}
                                        desc={article.description}
                                        urlNews={article.url}
                                        image={article.urlToImage}
                                        date={article.publishedAt}
                                    />
                                </article>
                            )
                        } else {
                            return <React.Fragment></React.Fragment>
                        }
                    })
                }
            </section>
            <Pagination nbrPages={nbrPages} pageActive={pageActive} updatePageActive={updatePageActive} />
        </React.Fragment>
    )
}

export default News