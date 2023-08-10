import styles from './styles.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/tema.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true
        })}>
            <div className={styles.return}>
                <button onClick={() => navigate(-1)}>
                    {'< Return'}
                </button>
            </div>
            <NotFoundImage />
        </div>
    );
}