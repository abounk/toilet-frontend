import React from 'react'
import './Card.css'
const Card = ({ index }) => {
    return (
        <div class="Card">
            <div class='Card-body'>
                <div className='header'>
                    <h3>Toilet {index} </h3>
                </div>
                <img src="https://images-ext-1.discordapp.net/external/mZr6OjPU6NtL5JSwbb34xK8ou7aoiuId3z3DMCXSWQE/%3Ftoken%3Dexp%3D1644650500~hmac%3D3f4621200b00c58abc59042fc565bb3a/https/cdn-icons.flaticon.com/png/512/1760/premium/1760409.png" alt="Toilet" />
                <div className='statusBarGreen'>
                    Occupied
                </div>
                <div className='cardText'>
                    <div className='in'>in
                        <br></br>
                        <p>00:00</p>
                    </div>
                    <div className='time'>time
                        <br></br>
                        <p>00:00:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card