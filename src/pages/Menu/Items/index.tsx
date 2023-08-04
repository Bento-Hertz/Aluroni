import menu from './items.json';
import Item from './Item';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    search: string,
    filter: number | null,
    ordenator: string
}

export default function Items(props: Props) {

    const { search, filter, ordenator } = props;

    const [list, setList] = useState(menu);

    function testSearch(title: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function testFilter(id: number) {
        if(filter !== null) return filter === id;
        return true;
    }

    function sort(newList: typeof menu) {
        switch(ordenator) {
            case 'portion':
                return newList.sort((a, b) => a.size > b.size ? 1 : -1);
            case 'amountOfPersons':
                return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
            case 'price':
                return newList.sort((a, b) => a.price > b.price ? 1 : -1);
            default:
                return newList;
        }
    }

    useEffect(() => {
        const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(sort(newList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, filter, ordenator]);


    return (
        <div className={styles.items}>
            {list.map((item) => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
}