import styles from './style.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/tema.module.scss';

export default function StandardPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_text}>
                    <p>The code house is the dough</p>
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet />
            </div>
        </>
    );
}