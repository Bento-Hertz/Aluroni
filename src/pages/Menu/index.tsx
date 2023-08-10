import { useState } from 'react';
import Searcher from './Searcher';
import styles from './style.module.scss';
import Filters from './Filters';
import Ordenator from './Ordenator';
import Items from './Items';
import stylesTema from 'styles/tema.module.scss';

export default function Menu() {

	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [ordenator, setOrdenator] = useState('');

	return (
		<section className={styles.menu}>
			<h3 className={stylesTema.title}>Menu</h3>
			<Searcher search={search} setSearch={setSearch}/>
			<div className={styles.menu_filters}>
				<Filters filter={filter} setFilter={setFilter}/>
				<Ordenator ordenator={ordenator} setOrdenator={setOrdenator}/>
			</div>
			<Items search={search} filter={filter} ordenator={ordenator}/>
		</section>
	);
}