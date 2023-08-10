import classNames from 'classnames';
import styles from './style.module.scss';
import { IDish } from 'interfaces/IDish';

export default function DishTags(props: IDish) {

    const {category, size, serving, price} = props;

    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.type]: true,
                [styles[`tags__type__${category.label.toLowerCase()}`]]: true})}
            >{category.label}</div>
            <div className={styles.tags__portion}>{size}</div>
            <div className={styles.tags__qttpersons}>Serves {serving} person{serving === 1 ? '' : 's'}</div>
            <div className={styles.tags__value}>${price.toFixed(2)}</div>
        </div>
    );
}