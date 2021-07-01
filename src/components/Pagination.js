import React from 'react';
import '../styles/Pagination.css'

const Pagination = ({nbrPages, pageActive, updatePageActive}) => {

    const goTo = (i) => {
        updatePageActive(i) ;
        window.scrollTo(0,document.querySelector('section').offsetTop)
    }

    let t = [] ;

    for (let i = 1 ; i <= nbrPages ; i++) {
        if ( i === pageActive) {
            t.push( <input disabled key={i} type="button" value={i} /> )
        } else {
            t.push( <input key={i} type="button" value={i} onClick={() => goTo(i)} /> )
        }
    }
    return (
        <div>
            {t}
        </div>
    )
    
}

export default Pagination