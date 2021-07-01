
const Tri = ({ source, updateSource }) => {

    const changeSource = (e) => {
        updateSource(e.target.value) ;
        
    }

    return (
        <div>
            <input type="text" value={source} onChange={ e => changeSource(e) } />
        </div>
    )
}

export default Tri