import { InfoItem } from '../info-item/info-item';
import styles from './info-section.module.css';

export const InfoSection = () => {
	return (
		<section className={styles.wrapper}>
			<InfoItem
				title="O poder da oração do Papa"
				subtitle="Por que é importante"
				description="Pedir uma oração ao Papa não é apenas um ato religioso; é uma oportunidade de receber uma bênção espiritual de um dos líderes mais reverenciados da Igreja. As orações do Papa ligam os indivíduos a uma tradição secular de fé e sucessão espiritual, fortalecendo o espírito e inspirando esperança. Quando uma oração vem do chefe da Igreja Católica, torna-se um símbolo de apoio que abrange todo o mundo cristão"
				button={{ label: 'Envie uma oração' }}
				image="/home-page/info-section/pope.png"
				imageData={{
					title: 'Jorge Mario Bergoglio',
					subtitle: 'bispo da Igreja Católica Romana',
				}}
			/>
			<InfoItem
				reverse
				title="Luz da Fé"
				subtitle="Por que acender velas no Vaticano é importante"
				description="Acender uma vela no Vaticano não é apenas um ritual religioso, mas um símbolo profundo de fé e oração. No coração do mundo católico, onde milhões de peregrinos rezaram, uma vela acesa representa a sua ligação com Deus e a unidade espiritual com os crentes de todo o mundo. Este ato é de humildade e esperança, quer você esteja buscando ajuda, expressando gratidão ou orando por entes queridos. Como centro da fé católica, o Vaticano confere um significado especial a esta tradição, tornando a sua oração parte de uma herança espiritual secular."
				button={{ label: 'Acenda uma vela' }}
				image="/home-page/info-section/candles.png"
			/>
		</section>
	);
};
