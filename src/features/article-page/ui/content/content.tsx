import clsx from 'clsx';
import styles from './content.module.css';
import { ContentProps } from './content.props';

export const Content = ({ className, ...props }: ContentProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<div className={styles.flex}>
				<p>
					Em uma pequena cidade, localizada em uma região pitoresca,
					havia uma antiga igreja católica. A igreja era famosa por
					seus belos vitrais e pela atmosfera acolhedora, que atraía
					peregrinos e turistas de todo o mundo. Mas um tipo único de
					vela, produzido pelos mestres locais, se destacou pela sua
					popularidade. Essas velas eram chamadas de "velas da
					esperança". Sua característica especial era que cada vela
					tinha uma cor e um aroma únicos, refletindo várias virtudes:
					velas vermelhas simbolizavam amor, amarelas — alegria, azuis
					— paz, e verdes — esperança. Cada cor era cuidadosamente
					escolhida e feita de cera natural e óleos essenciais,
					tornando cada vela não apenas bonita, mas também cheia de
					significado
				</p>
				<img src="/images/article-page/candle.png" alt="" />
			</div>
			<p>
				Essas velas eram chamadas de "velas da esperança". Sua
				característica especial era que cada vela tinha uma cor e um
				aroma únicos, refletindo várias virtudes: velas vermelhas
				simbolizavam amor, amarelas — alegria, azuis — paz, e verdes —
				esperança. Cada cor era cuidadosamente escolhida e feita de cera
				natural e óleos essenciais, tornando cada vela não apenas
				bonita, mas também cheia de significado
			</p>
			<div className={styles.flex}>
				<img src="/images/article-page/sky.png" alt="" />
				<p>
					As pessoas iam à igreja para acender uma "vela da esperança"
					em memória de seus entes queridos ou para pedir ajuda. Cada
					vela se tornava um símbolo de suas esperanças e orações. À
					noite, quando as luzes da igreja se apagavam, as brilhantes
					chamas das velas criavam uma atmosfera mágica, imergindo
					todos em tranquilidade e paz. Certa vez, uma jovem chamada
					Maria chegou à cidade. Ela estava em busca de paz interior
					após um período difícil em sua vida. Ao entrar na igreja,
					sentiu-se envolvida por um calor e uma calma. Ao se
					aproximar da mesa com as velas, ela parou diante de uma vela
					verde — símbolo da esperança. Pegando-a nas mãos, refletiu
					sobre seus sonhos e desejos. Maria acendeu a vela e fez uma
					oração silenciosa, pedindo por uma nova oportunidade e luz
					em sua vida. Depois, ela permaneceu na igreja, observando a
					dança das chamas, e sentiu o peso das preocupações e
					ansiedades começar a se dissipar
				</p>
			</div>
			<p>
				Algumas semanas depois, quando Maria retornou à cidade, percebeu
				mudanças em si mesma. Sua vida estava se preenchendo com novas
				oportunidades, e ela começou a seguir suas aspirações. Ela
				entendeu que a vela acesa naquela noite se tornara não apenas um
				símbolo de esperança, mas também o começo de seu novo caminho.
				Com o tempo, a história das "velas da esperança" se espalhou
				muito além da cidade. As pessoas começaram a vir para acender
				suas velas e deixar suas orações. Cada vela acesa se tornava
				parte de uma grande história, conectando corações e almas,
				inspirando as pessoas a novos começos e ajudando-as a encontrar
				esperança mesmo nos tempos mais sombrios
			</p>
		</div>
	);
};
