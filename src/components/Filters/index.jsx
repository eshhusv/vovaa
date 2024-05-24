import styles from './Filters.module.scss';

function Filters() {
    return (
        <div className={styles.filter}>
            <div className={styles.filter__content}>
                <div>
                    <p>Release date</p>
                    <div>
                        <input type="text" className={styles.input_lil} placeholder="from" />
                        <input type="text" className={styles.input_lil} placeholder="to" />
                    </div>
                </div>
                <div>
                    <p>Developer</p>
                    <input type="text" className={styles.input_common} placeholder="Activision" />
                </div>
                <div>
                    <p>Publisher</p>
                    <input type="text" className={styles.input_common} placeholder="Activision" />
                </div>
                <div>
                    <p>Tags</p>
                    <input type="text" className={styles.input_common} placeholder="Action" />
                </div>
                <div>
                    <p>Price</p>
                    <div>
                        <input type="text" className={styles.input_lil} placeholder="from" />
                        <input type="text" className={styles.input_lil} placeholder="to" />
                    </div>
                </div>
                <div>
                    <p>OS</p>
                    <input type="text" className={styles.input_common} placeholder="Windows" />
                </div>
                <div>
                    <p>Languages</p>
                    <input type="text" className={styles.input_common} placeholder="English" />
                </div>
            </div>
        </div>
    );
}

export default Filters;