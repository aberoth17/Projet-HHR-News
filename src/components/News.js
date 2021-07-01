import React, { useEffect, useState } from 'react'
import Article from './Article'
import Pagination from './Pagination'

const News = () => {

    let [categorie,updateCategorie] = useState('') ;
    let [apiUrl,updateApiUrl] = useState(`https://newsapi.org/v2/top-headlines?country=fr&${categorie}apiKey=ddf3a226630e4c479569ee6db2528bc2`) ;
    let [listeArticles,updateListeArticles] = useState([]) ;
    let [,updateError] = useState('') ;
    let [nbrArticle,upadateNbrArticles] = useState(0) ;
    let [nbrPages,updateNbrPages] = useState(0) ;
    let [pageActive,updatePageActive] = useState(1) ;

    useEffect(
        () => fetch(apiUrl).then( x => x.json() ).then( data => {
            updateListeArticles(data.articles) ;
            upadateNbrArticles(data.totalResults) ;
            updateNbrPages(Math.floor(data.totalResults/4)) ;
            console.log(nbrPages) ;
        } ).catch( e => updateError(e) )
        ,[]
    )

    return (
        <React.Fragment>
            <div>
                {listeArticles.slice((pageActive-1)*4,pageActive*4).map(
                ( { author , title , description , url , urlToImage , publishedAt } , i ) => {
                    console.log(nbrPages)
                    return (
                    <article key={i}>
                        <Article
                            auteur={author}
                            titre={title}
                            desc={description}
                            urlNews={url}
                            image={urlToImage}
                            date={publishedAt}
                        />
                    </article>
                    )
                }
            )}
            </div>
            <Pagination nbrPages={nbrPages} pageActive={pageActive} updatePageActive={updatePageActive} />
        </React.Fragment>
    )
}

export default News