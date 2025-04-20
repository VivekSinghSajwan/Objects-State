function LudoBlock({color,moves,onClick}) {
    return (
        <div className={color}>
            <p>Moves: {moves}</p>
            <button onClick={onClick} style={{ backgroundColor: color}}>
                +1
            </button>
        </div>
    )
}

export default LudoBlock;