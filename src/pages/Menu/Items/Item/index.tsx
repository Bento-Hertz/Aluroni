import styles from './style.module.scss';
import DishTags from 'components/DishTags';
import { IDish } from 'interfaces/IDish';
import { useNavigate } from 'react-router-dom';

export default function Item(props: IDish) {
	const { id, title, description, photo } = props;
	const navigate = useNavigate();
	return (
		<div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
			<div className={styles.item__image}>
				<img src={photo} alt={title}/>
			</div>
			<div className={styles.item__description}>
				<div className={styles.item__title}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
			</div>
			<DishTags {...props}/>
		</div>
	);
}