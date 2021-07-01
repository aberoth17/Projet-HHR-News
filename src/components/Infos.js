import React from 'react';

const Infos = ({title,image,desc,contenu,url,auteur,date}) => {
    return (
        <React.Fragment>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div><img src={image} alt={title} /></div>
            <div>
                <p>{contenu}</p>
                <a href={url}>Voir la suite de l'article</a>
            </div>
            <div>
                <p>{auteur}</p>
                <p>{date}</p>
            </div>
        </React.Fragment> 
    )
}

export default Infos