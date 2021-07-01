const VoirPlus = ({n,f}) => {

    const g = () => {
        f(n+4) ;
        console.log(n)
    }

    return (
        <div>
            <input type="button" value="Voir plus" onClick={() => g()} />
        </div>
    )
}

export default VoirPlus