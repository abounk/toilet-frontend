
import './Card.css'


const Card = ({ index, status, timeStamp, duration }) => {

    const arrivalHour = Math.floor(timeStamp / 3600);
    const arrivalMin = Math.floor(timeStamp % 3600 / 60);
    const duraHour = Math.floor(duration / 3600);
    const duraMin = Math.floor(duration % 3600 / 60);
    const duraSec = duration % 60;
    return (
        <div className="Card">
            < div className='Card-body' >
                <div className='header'>
                    <h3>Toilet {index} </h3>
                </div>
                <img src="https://images-ext-1.discordapp.net/external/mZr6OjPU6NtL5JSwbb34xK8ou7aoiuId3z3DMCXSWQE/%3Ftoken%3Dexp%3D1644650500~hmac%3D3f4621200b00c58abc59042fc565bb3a/https/cdn-icons.flaticon.com/png/512/1760/premium/1760409.png" alt="Toilet" />
                <div className={`${status ? 'statusBarRed' : 'statusBarGreen'}`}>
                    {status ? 'Occupied' : 'Ready To Use'}
                </div>
                <div className={`${status ? 'cardText' : 'empty'}`}>
                    <div className='in'>in
                        <br></br>
                        <p>{arrivalHour + ":" + arrivalMin}</p>
                    </div>
                    <div className='time'>time
                        <br></br>
                        <p>{duraHour + ":" + duraMin + ":" + duraSec}</p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Card