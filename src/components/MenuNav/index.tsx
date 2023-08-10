import styles from './style.module.scss';
import logo from 'assets/logo.svg';
import { Link } from 'react-router-dom';

export default function MenuNav() {

    const routes = [{
        label: 'Start',
        to: '/'
    }, {
        label: 'Menu',
        to: '/menu',
    }, {
        label: 'About',
        to: '/about'
    }];

    return (
        <nav className={styles.menuNav}>
			<img src={logo} alt='aluroni logo'/>
            <ul className={styles.menuNav__list}>
                {routes.map((route, index) => (
                    <li key={index} className={styles.menuNav__link}>
                        <Link to={route.to}>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
		</nav>
    );
}