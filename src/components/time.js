import React from 'react'
const Time = ({ time }) => {
    const duraHour = Math.floor(time / 3600);
    const duraMin = Math.floor(time % 3600 / 60);
    const duraSec = time % 60;
    return (<div className="estimate">
        <div className="Title">
            <p>Estimated using time </p>
        </ div>
        <div className="timeNum">
            <p>{duraHour + ":" + duraMin + ":" + duraSec}</p>
        </div>
    </div>
    )
}

export default Time