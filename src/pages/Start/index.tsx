import menu from 'data/menu.json';
import styles from './style.module.scss';
import stylesTema from 'styles/tema.module.scss';
import ourHouse from 'assets/our-house.png';
import { useNavigate } from 'react-router-dom';
import { IDish } from 'interfaces/IDish';

export default function Start() {
	let recommendedMeals = [...menu];
	recommendedMeals = recommendedMeals.sort(() => 0.5 - Math.random()).splice(0, 3);
	const navigate = useNavigate();

	function redirectToDetails(dish: IDish) {
		navigate(`/dish/${dish.id}`, { state: {dish}, replace: false});
	}

	return (
		<section>
			<h3 className={stylesTema.title}>
				Kitchen recommendations
			</h3>
			<div className={styles.recommendations}>
                {recommendedMeals.map(item => (
					<div key={item.id} className={styles.recommended}>
						<div className={styles.recommendedd__image}>
							<img src={item.photo} alt={item.title} />
						</div>
						<button className={styles.recommended__button} onClick={() => redirectToDetails(item)}>
							See more
						</button>
					</div>
				))}
			</div>
			<h3 className={stylesTema.title}>Our house</h3>
			<div className={styles.ourHouse}>
					<img src={ourHouse} alt='Aluronis House'/>
					<div className={styles.ourHouse__address}>
						Rua Vergueiro, 3185 <br/><br/>
						Vila Mariana - SP
					</div>
			</div>
		</section>
	);
}