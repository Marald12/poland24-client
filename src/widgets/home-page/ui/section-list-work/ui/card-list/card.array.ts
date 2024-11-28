export interface IWorkCard {
	title: string
	description: string
}

const loremText =
	'Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, ' +
	'не имеет никакого отношения к обитателям водоемов.'

export const HomeSectionListWorkCards: IWorkCard[] = [
	{ title: 'Вы выбираете товар ', description: loremText },
	{ title: 'Предоставляете ссылку', description: loremText },
	{ title: 'Внести предоплату', description: loremText },
	{ title: 'Выкупаем товар и везем в Украину', description: loremText },
	{ title: 'Оплатить остаток', description: loremText },
	{ title: 'Получите товар ', description: loremText }
]
