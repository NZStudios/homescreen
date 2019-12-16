import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Clock = () => {

    const [time, setTime] = useState('')
    const [date, setDate] = useState('')

    const ClockWidget = styled.div`
        position:fixed;
        color:white;
        top: 2%;
        right:2%;
        padding:2rem;
        text-align:right;
        border-radius:10px;
        background: rgba(0,0,0,.2);
        font-family: 'Orbitron', sans-serif;
        box-shadow:2px 4px 4px rgba(0,0,0,.4);
     `
    //time should be slightly larger than the date...
    const _Time = styled.p`
        margin:0;
        -webkit-text-stroke:1px black;
        font-size: 76px;
    
    `
    const _Date = styled.p`
        margin:0;
        font-size: 1rem;
        
     `

    const updateTime = (today) => {
        today = new Date()
        var hr = today.getHours()
        var min = today.getMinutes()
        var sec = today.getSeconds()
        var ap = (hr < 12) ? 'AM' : 'PM'
        hr = (hr == 0) ? 12 : hr
        hr = (hr > 12) ? hr - 12 : hr
        hr = checkTime(hr)
        min = checkTime(min)
        sec = checkTime(sec)
        setTime(hr + ':' + min + ' ' + ap)

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        var curWeekDay = days[today.getDay()]
        var curDay = today.getDate()
        var curMonth = months[today.getMonth()]
        var curYear = today.getFullYear()
        setDate(curWeekDay + ', ' + curMonth + ' ' + curDay + ', ' + curYear)

        var time = setTimeout(() => { updateTime(today) }, 500)
    }
    function checkTime(i) {
        if (i < 10) {
            i = '0' + i
        }
        return i
    }

    useEffect(() => {
        console.log('updating time..')
        updateTime(time)
    }, [time])
    return (
        <ClockWidget>
            <_Time>{time}</_Time>
            <_Date>{date}</_Date>
        </ClockWidget>

    )
}

export default Clock
