
const Categories = ({updateApiUrl}) => {

    const changeCategorie = str => {
        updateApiUrl(`https://newsapi.org/v2/top-headlines?country=fr&${str}apiKey=ddf3a226630e4c479569ee6db2528bc2`) ;
    }

    return (
        <div>
            <input type="button" value="Reset" onClick={() => changeCategorie('')} />
            <input type="button" value="business" onClick={() => changeCategorie("category=business&")} />
            <input type="button" value="entertainment" onClick={() => changeCategorie("category=entertainment&")} />
            <input type="button" value="health" onClick={() => changeCategorie("category=health&")} />
            <input type="button" value="science" onClick={() => changeCategorie("category=science&")} />
            <input type="button" value="sports" onClick={() => changeCategorie("category=sports&")} />
            <input type="button" value="technology" onClick={() => changeCategorie("category=technology&")} />
        </div>
    )
}

export default Categories