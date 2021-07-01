
const Categories = ({updateApiUrl, listeCategorie}) => {

    const changeCategorie = str => {
        updateApiUrl(`https://newsapi.org/v2/top-headlines?country=fr&category=${str}&apiKey=ddf3a226630e4c479569ee6db2528bc2`) ;
    }

    return (
        <div>
            {listeCategorie.map(
                (cat,i) => <input key={i} type="button" value={cat} onClick={() => changeCategorie(cat)} />
            )}
        </div>
    )
}

export default Categories