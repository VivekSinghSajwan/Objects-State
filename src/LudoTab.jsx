import { useState } from "react";
import LudoBlock from "./LudoBlock";

function LudoTab(){

    let [moves , setMoves] = useState({blue:0,yellow:0,red:0,green:0})

    function incrementMove(color){
        let copyObj = {...moves};
        copyObj[color] += 1
        setMoves(copyObj);
    }

    return (
        <div>
            <p>Game Begins</p>
            <LudoBlock color="blue" moves={moves.blue} onClick={()=>incrementMove("blue")}/>
            <LudoBlock color="orange" moves={moves.yellow} onClick={()=>incrementMove("yellow")}/>
            <LudoBlock color="red" moves={moves.red} onClick={()=>incrementMove("red")}/>
            <LudoBlock color="green" moves={moves.green} onClick={()=>incrementMove("green")}/>
        </div>
    )
}

export default LudoTab;