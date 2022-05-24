//현재 시각 가져오기 > effect hook / toLocaleTimeString()사용 

import { useState,useEffect } from 'react';

const TimeClock = () => {
    //시계 기본값 (이대로 두면 고정된 시간만 나타남)
    //1. useState를 사용하여 date함수로 시간을 나타내는 동적성 부여 
    const [date, setDate] = useState(new Date());


    //2. useEffect로 1초뒤 다시 시간을 셋팅(setDate)하도록 간격을 둔다
    useEffect(()=>{
        setInterval(()=>tic(), 1000)
    });

    // 3. tic이라는 함수에 시간을 셋팅하는 함수(setDate)를 담아서 실행 > 시간이 계속 움직임
    const tic = () => {
        setDate(new Date());
    };



    return (
        <div>
            {/* 1-1. date 함수에 현재 한국(위치) 시간출력 */}
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default TimeClock; 