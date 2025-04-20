import { useState } from "react";

function LudoTab(){

    let [moves , setMoves] = useState({blue:0,yellow:0,red:0,green:0})

    function blueIsClicked(){
        let copyObj = {...moves};
        copyObj.blue += 1
        setMoves(copyObj);
    }
    function yellowIsClicked(){
        let copyObj = {...moves};
        copyObj.yellow += 1
        setMoves(copyObj);
    }
    function redIsClicked(){
        let copyObj = {...moves};
        copyObj.red += 1
        setMoves(copyObj);
    }
    function greenIsClicked(){
        let copyObj = {...moves};
        copyObj.green += 1
        setMoves(copyObj);
    }

    return (
        <div>
            <p>Game Begins</p>
            <div className="blue">
                <p>Blue Moves: {moves.blue}</p>
                <button onClick={blueIsClicked} style={{backgroundColor: "blue"}}>+1</button>
            </div>
            <div className="yellow">
                <p>Yellow Moves: {moves.yellow}</p>
                <button onClick={yellowIsClicked} style={{backgroundColor: "orange"}}>+1</button>
            </div>
            <div className="red">
                <p>Red Moves: {moves.red}</p>
                <button onClick={redIsClicked} style={{backgroundColor: "red"}}>+1</button>
            </div>
            <div className="green">
                <p>Green Moves: {moves.green}</p>
                <button onClick={greenIsClicked} style={{backgroundColor: "green"}}>+1</button>
            </div>
        </div>
    )
}

export default LudoTab;