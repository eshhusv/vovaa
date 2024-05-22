import style from './Main.module.scss';
import Games from '../Games';
import Filters from '../Filters';

function Main(){
    return(
        <main className={style}>
            <div className={style.content}>
                <Games/>
                <Filters/>
            </div>
        </main>
    )
}

export default Main