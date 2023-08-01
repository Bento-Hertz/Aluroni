import { useState } from 'react';
import Searcher from './Searcher';
import styles from './style.module.scss';
import logo from 'assets/logo.svg';
import Filters from './Filters';

export default function Menu() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);

    return (
        <main>
            <nav className={styles.menuNav}>
                <img src={logo} alt='aluroni logo'/>
            </nav>
            <header className={styles.header}>
                <div className={styles.header_text}>
                    <p>The code house is the dough</p>
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu_title}>Menu</h3>
                <Searcher search={search} setSearch={setSearch}/>
                <div className={styles.menu_filter}>
                    <Filters filter={filter} setFilter={setFilter}/>
                </div>
            </section>
        </main>
    )
}