import styles from './style.module.scss';
import stylesTema from 'styles/tema.module.scss';
import house from 'assets/about/house.png';
import dough1 from 'assets/about/dough1.png';
import dough2 from 'assets/about/dough2.png';

const images = [dough1, dough2];

export default function About() {


    return (
        <section>
            <h3 className={stylesTema.title}>About</h3>
            <div className={styles.aboutUs}>
                <img src={house} alt='Aluroni House'/>
                <div className={styles.aboutUs__text}>
                <p>
                   Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                </p>
                <p>
                  Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                </p>
                <p>
                  Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
                </p>
                </div>
            </div>
            <div className={styles.images}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.images__image}>
                            <img src={image} alt="dough image" />
                        </div>
                    ))}
                </div>
        </section>
    );
}