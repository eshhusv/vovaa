import { useEffect, useState } from 'react';
import styles from './Games.module.scss'

function Games({ data }) {
    const [selected, setSelected] = useState(null);

    return (
        <div className={styles}>
            <div className={styles.games}>
                {
                    data.map(game =>
                        <div key={game.name} className={styles.game}>
                            <img onClick={() => setSelected(game)} src={game.frontimg} alt="" />
                            <p onClick={() => setSelected(game)} >{game.name}</p>
                        </div>
                    )
                }
                {
                    selected == null ? null : (
                        <div className={selected == null ? styles.hidden : styles.card}>
                            <div className={styles.content}>
                                <p className={styles.close} onClick={() => setSelected(null)}>x</p>
                                <div className={styles.card_main}>
                                    <div className={styles.card_left}>
                                        <p className={styles.name}>{selected == null ? null : selected.name}</p>
                                        <img src={selected == null ? null : selected.cardimg} alt="" />
                                        <iframe
                                            width="853"
                                            height="480"
                                            src={`https://www.youtube.com/embed/${selected == null ? null : selected.yt}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Embedded youtube"
                                        />
                                    </div>
                                    <div className={styles.card_right}>
                                        <div className={styles.prices}>
                                            <p>{selected.desc == "" ? "" : selected.desc}</p>
                                            <p className={styles.store_list}>
                                                <a href={selected.steamlink == "" ? "#" : selected.steamlink}>Steam: {selected.steamprice == "" ? "#" : selected.steamprice}</a>
                                                <a href={selected.gabestorelink == "" ? "#" : selected.gabestorelink}>Gabestore: {selected.gabestoreprice == "" ? "#" : selected.gabestoreprice}</a>
                                                <a href={selected.steambuylink == "" ? "#" : selected.steambuylink}>Steambuy: {selected.steambuyprice == "" ? "#" : selected.steambuyprice}</a>
                                                <a href={selected.zakazakalink == "" ? "#" : selected.zakazakalink}>Zakazaka: {selected.zakazakaprice == "" ? "#" : selected.zakazakaprice}</a>
                                            </p>
                                        </div>
                                        <div className={styles.info}>
                                            <p>Release Date: {selected.release}</p>
                                            <p>Developer: {selected.dev}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
}

export default Games;