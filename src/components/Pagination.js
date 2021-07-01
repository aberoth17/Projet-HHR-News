import React from 'react';

const Pagination = ({nbrPages, pageActive, updatePageActive}) => {

    const start = () => {updatePageActive(1);console.log(pageActive)} ;

    const end = () => {updatePageActive(nbrPages);console.log(pageActive)} ;

    const next = () => {updatePageActive(pageActive+1);console.log(pageActive)} ;

    const prev = () => {updatePageActive(pageActive-1);console.log(pageActive)} ;

    
    if (nbrPages < 4) {
        let t = new Array(nbrPages) ;
        return (
            <div>
                {t.map( (e,i) => {i === pageActive ? 
                    <input key={i} disabled type="button" value={i+1} /> : 
                    <input key={i} type="button" value={i+1} /> } )}
            </div>
        )
    } else {
        if (pageActive%4 === 1) {
            return (
                <React.Fragment>
                    <input disabled type="button" value="<" />
                    <input disabled type="button" value="1" />
                    <input type="button" value="2" onClick={next} />
                    <p>...</p>
                    <input type="button" value={nbrPages} onClick={end} />
                    <input type="button" value=">" onClick={next} />
                </React.Fragment>
            )
        } else if (pageActive%4 === 2) { 
            return (
                <React.Fragment>
                    <input type="button" value="<" onClick={prev} />
                    <input type="button" value="1" onClick={prev} />
                    <input disabled type="button" value="2" />
                    <input type="button" value="3" onClick={next} />
                    <p>...</p>
                    <input type="button" value={nbrPages} onClick={end} />
                    <input type="button" value=">" onClick={next} />
                </React.Fragment>
            )
        } else if (pageActive%4 === nbrPages-1) {
            return (
                <React.Fragment>
                    <input type="button" value="<" onClick={prev} />
                    <input type="button" value="1" onClick={start} />
                    <p>...</p>
                    <input type="button" value={nbrPages-2} onClick={prev} />
                    <input disabled type="button" value={nbrPages-1} />
                    <input type="button" value={nbrPages} onClick={next} />
                    <input type="button" value=">" onClick={next} />
                </React.Fragment>
            )
        } else if (pageActive%4 === nbrPages-1) {
            return (
                <React.Fragment>
                    <input type="button" value="<" onClick={prev} />
                    <input type="button" value="1" onClick={start} />
                    <p>...</p>
                    <input type="button" value={nbrPages-1} onClick={next} />
                    <input disabled type="button" value={nbrPages} />
                    <input disabled disabled type="button" value=">" />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <input type="button" value="<" onClick={prev} />
                    <input type="button" value="1" onClick={start} />
                    <p>...</p>
                    <input type="button" value={pageActive-1} onClick={prev} />
                    <input disabled type="button" value={pageActive} />
                    <input type="button" value={pageActive+1} onClick={next} />
                    <p>...</p>
                    <input type="button" value={nbrPages} onClick={end} />
                    <input type="button" value=">" onClick={next} />
                </React.Fragment>
            )
        }
    }
}

export default Pagination