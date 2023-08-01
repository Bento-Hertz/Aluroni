import classNames from 'classnames';
import filters from './filters.json';
import styles from './style.module.scss';

interface IOption {
    id: number;
    label: string;
}

interface Props {
    filter: number | null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({filter, setFilter}: Props) {

    function selectFilter(option: IOption) {
        if(filter === option.id) return setFilter(null)
        return setFilter(option.id);
    }

    return (
    <div className={styles.filters}>
        {filters.map((option) => (
            <button 
                className={classNames({
                    [styles.filters_filter]: true,
                    [styles['filters_filter--active']]: filter === option.id
                })} 
                key={option.id} 
                onClick={() => selectFilter(option)}
            >
                {option.label}
            </button>
        ))}
    </div>
    );
}