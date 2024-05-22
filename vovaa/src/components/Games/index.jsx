import data from '../../data.json';
import styleGame from './Games.module.scss'

function Games(){
    return(
        <div className={styleGame}>
            <div className={styleGame.games}>
                {
                    data.map(game=><div key={game.name} className={game.name}><img src={game.frontimg} alt="" /><p>{game.name}</p></div>)
                }
            </div>
        </div>
    );
}

export default Games;