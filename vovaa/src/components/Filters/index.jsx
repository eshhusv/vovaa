import styles from './Filters.module.scss';

function Filters(){
    return(
        <div className={styles.filters}>
            <div className="filter__content">
                <div>
                    <p>Release date</p>
                    <div>
                        <input type="text" className={styles.input_lil} placeholder="from"/>
                        <input type="text" className={styles.input_lil} placeholder="to"/>
                    </div>
                </div>
                <div>
                        <p>Developer</p>
                        <input type="text" class="input_common" placeholder="Activision"/>
                    </div>
                    <div>
                        <p>Publisher</p>
                        <input type="text" class="input_common" placeholder="Activision"/>
                    </div>
                    <div>
                        <p>Tags</p>
                        <input type="text" class="input_lil" placeholder="Action"/>
                    </div>
                    <div>
                        <p>Price</p>
                        <div>
                            <input type="text" class="input_lil" placeholder="from"/>
                            <input type="text" class="input_lil" placeholder="to"/>
                        </div>
                    </div>
                    <div>
                        <p>OS</p>
                        <input type="text" class="input_lil" placeholder="Windows"/>
                    </div>
                    <div>
                        <p>Languages</p>
                        <input type="text" class="input_lil" placeholder="English"/>
                    </div>
            </div>
        </div>
    );
}

export default Filters;