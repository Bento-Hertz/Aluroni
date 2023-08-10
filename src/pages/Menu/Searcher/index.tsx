import styles from './style.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Searcher({search, setSearch}: Props) {
	return <div className={styles.searcher}>
		<input 
			value={search} 
			onChange={event => setSearch(event.target.value)} 
			placeholder='Search'
		/>

		<CgSearch
			size={20}
			color="#4c4d5e"
		/>
        
	</div>;
}