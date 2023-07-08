import React from "react";
import { useState, useEffect } from "react";

const Clock = () => {

    const [days , setDays] = useState()
    const [hours , setHours] = useState()
    const [minitus , setMinitus] = useState()
    const [seconds , setSeconds] = useState()

    let interval;

    const countDown = () =>{
        const desination = new Date('oct 10 , 2022').getTime()
        interval = setInterval(()=>{
            const now = new Date().getTime()
            const different =desination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))

            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000*60*60))

            const minitus = Math.floor(different % (1000 * 60 * 60) / (1000*60))

            const seconds = Math.floor(different % (1000 * 60) / 1000)

            if(desination < 0) clearInterval(interval.current)
            else{
                setDays(days)
                setHours(hours)
                setMinitus(minitus)
                setSeconds(seconds)
            }
        })
    }
    useEffect(()=>{
        countDown()
    })
    return (
        <div className="clock__wrapper d-flex align-items-center gap-5">
        <div className="clock__data d-flex align-items-center gap-5">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{days}</h1>
                    <h5 className="text-white fs-5">Days</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>
            
            
            
            <div className="clock__data d-flex align-items-center gap-5">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{hours}</h1>
                    <h5 className="text-white fs-5">Hours</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>

            <div className="clock__data d-flex align-items-center gap-5">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{minitus}</h1>
                    <h5 className="text-white fs-5">Miniuts</h5>
                </div>
                <span className="text-white fs-3">:</span>
            </div>

            <div className="clock__data d-flex align-items-center gap-5">
                <div className="text-center">
                    <h1 className="text-white fs-3 mb-2">{seconds}</h1>
                    <h5 className="text-white fs-5">Seconds</h5>
                </div>
            </div>
        </div>
    )
}
export default Clock;