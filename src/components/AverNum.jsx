//input으로 받아온 숫자를 받아와 추가 버튼을 누르면 
//리스트에 넣어주고 그 숫자들의 평균을 구해 출력

//useState로 기본 동작기능 부여
//useMemo로 이전에 있던 값이랑 같이 계산할 수 있도록 
//useCallback으로 인풋에 값이 들어올때마다 실행함


import { useState, useMemo, useCallback } from 'react'

const AverNum = () => {

    //인풋에서 받아오는 값, 인풋을 가져오는값
    const [ inputnum, setinputNum ] = useState(0);
    
    
    //리스트에 있는 값, 리스트에 인풋값을 넣어주는 인수,?? 
    const [ listnum, setlistNum ] = useState([1,29]);

    //인풋에 값이 들어왔을 때 onChange 이벤트 실행(내용변경감지)
    //콜백함수를 이용해 내용이 변경된다는 이벤트가 발생했을 때 {onChange} 다시 실행시킴
    //인풋에 값이 들어올때마다 실행해야됨 > 콜백함수 사용
    //다시 실행하면 그 변경된 값을 setinputNum의 변수로 사용 ...
    const onChange = useCallback((e)=> {
        setinputNum(e.target.value);
    },[]);


    const allAver = useCallback(()=>{
        setlistNum([...listnum, parseInt(inputnum)]);
        setinputNum(0);
    },[inputnum,listnum]);

    
    
    const allSum = (list) => {
        console.log(list.length); 
        return list.reduce((a,b)=>(a+b))/list.length;
    };



    const aver = useMemo(()=>allSum(listnum), [listnum]);

    return (
        <div>
            <input
            type="number"
            value={inputnum}
            onChange={onChange}
            />
            <button
            onClick={allAver}
            >
                추가</button>

            <h3>모든 수의 평균 : {aver}</h3>
            <ul>
                {listnum.map ( (n,i)=> (<li key={i}>{n}</li>) ) }
            </ul>

            
            <h1></h1>
        </div>
    )
};

export default AverNum;
