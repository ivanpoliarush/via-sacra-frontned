export const REVIEWS = (
	translate: { text: string; auhtor: { name: string; age: string } }[],
) => [
	{
		text: translate[0].text,
		author: {
			name: translate[0].auhtor.name,
			age: translate[0].auhtor.age,
			photo: '/images/home-page/reviews-section/people/maria.png',
		},
	},
	{
		text: translate[1].text,
		author: {
			name: translate[1].auhtor.name,
			age: translate[1].auhtor.age,
			photo: '/images/home-page/reviews-section/people/joao.png',
		},
	},
	{
		text: translate[2].text,
		author: {
			name: translate[2].auhtor.name,
			age: translate[2].auhtor.age,
			photo: '/images/home-page/reviews-section/people/leticia.png',
		},
	},
	{
		text: translate[3].text,
		author: {
			name: translate[3].auhtor.name,
			age: translate[3].auhtor.age,
			photo: '/images/home-page/reviews-section/people/ana.png',
		},
	},
	{
		text: translate[4].text,
		author: {
			name: translate[4].auhtor.name,
			age: translate[4].auhtor.age,
			photo: '/images/home-page/reviews-section/people/sergio.png',
		},
	},
];
