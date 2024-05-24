import style from './Main.module.scss';
import data from '../../data.json';
import Games from '../Games';
import Filters from '../Filters';

function Main() {

    const gamesList = data;

    return (
        <main className={style}>
            <div className={style.content}>
                <Games data={data} />
                <Filters />
            </div>
        </main>
    )
}

export default Main