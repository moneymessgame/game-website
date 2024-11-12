import React from 'react';
import { Icons } from '@/components';
import { Orbit } from 'lucide-react';


export const navItems = [
	{ name: 'First Season', link: '/first-season' },
	{ name: 'Donate', link: '/donate' },
	{ name: 'Home', link: '/' },
	{ name: 'About Us', link: '/about' },
	{ name: 'Roadmap', link: '/roadmap' },
	{ name: 'Wiki Eng', link: '/wiki/en' },
	{ name: 'Wiki Ru', link: '/wiki/ru' },
];

export const roadmapData = [
	{
		description:
			'Main Game Launch, Referral System, Mining Updates, Daily Rewards, Community Management, Marketing and PR',
		icon: React.createElement(Orbit),
		date: '4th Quarter 2024',
	},
	{
		description:
			'Special cards, Wallet in-game implementation, LVL ratings, Achievements',
		icon: React.createElement(Orbit),
		date: '1th Quarter 2025',
	},
	{
		description:
			'On-chain infrastructure development, «Partner» blockchain announcements',
		icon: React.createElement(Orbit),
		date: '2th Quarter 2025',
	},
	{
		description: 'And more goodies are yet to be brought to life',
		icon: React.createElement(Orbit),
		date: '',
	},
];

export const perks = [
	{
		icon: Icons.auth,
		title: 'Create and Develop',
		value: 566,
		info: 'Develop and level up your chosen character. Conquer new territories and expand your empire. Master unique abilities and lead your character to greatness',
	},
	{
		icon: Icons.handshake,
		title: 'Form Alliances',
		value: 256,
		info: 'Invite friends and form strategic alliances with them. Combine resources and support each other in achieving common goals. Forming such alliances will help strengthen your position, and working together will lead to greater success than working alone.',
	},
	{
		icon: Icons.launch,
		title: 'Purchase NFTs',
		value: 55430,
		info: "Want to buy a unique planet, star, or even Earth? That's something we have too! You can acquire a special NFT and expand your gaming possibilities.",
	},
];

export const aboutSeason = [
	{
		icon: Icons.auth,
		title: 'Main traits',
		value: 4,
		info: 'The main goal of the player is to level up their character cards by improving one of four traits: Dominion, Attractiveness, Popularity, and Wealth. The player must build the strongest card collection possible while accumulating in-game points',
	},
	{
		icon: Icons.handshake,
		title: 'Lively characters',
		value: 38,
		info: 'The characters in the game are famous personalities in our metaverse. Players develop them by completing text-based quests, where each day, a question with four answer options is presented for each character. Each choice boosts one trait while reducing others.',
	},
	{
		icon: Icons.launch,
		title: 'Cards rarity',
		value: 6,
		info: 'Cards are divided into six rarity levels: from common, frequently found cards with minimal traits, to divine — the rarest and most powerful, capable of drastically changing the balance of the game. The drop rate of cards decreases as their rarity increases.',
	},
	{
		icon: Icons.launch,
		title: 'Fun level in the game',
		value: 99999,
		info: 'Create a unique persona for your character, giving them distinct traits, style, mannerisms, and behavior. Transform your character into a one-of-a-kind hero and turn them into an NFT.',
	},
];

export const firstPageStats = [
	{
		icon: Icons.auth,
		title: 'Total cards',
		value: 228,
		info: '',
	},
	{
		icon: Icons.handshake,
		title: 'mln Telegram users',
		value: 950,
		info: '',
	},
	{
		icon: Icons.launch,
		title: 'Active users on the site',
		value: 1,
		info: '',
	},
	{
		icon: Icons.launch,
		title: 'Cups of coffee drunk',
		value: 577,
		info: '',
	},
];

export const wikiEn = [
	{
		icon: Icons.bolt,
		title: 'NFT games',
		info: 'How do they work and how to earn',
		href: '/wiki/en/nft-games',
	},
	{
		icon: Icons.palette,
		title: 'What is Play2Earn',
		info: 'And how to make money with it',
		href: '/wiki/en/play-to-earn',
	},
	{
		icon: Icons.seo,
		title: 'How to Earn with Crypto Games on Telegram',
		info: 'And what strategies and mechanisms exist.',
		href: '/wiki/en/telegram-ton-games',
	},
	{
		icon: Icons.bolt,
		title: 'TON and Crypto Games:',
		info: 'How to earn with TON tokens',
		href: '/wiki/en/ton-games',
	},
	{
		icon: Icons.palette,
		title: 'How to Choose Your First P2E Game',
		info: 'We will answer these questions and offer strategies for a successful start.',
		href: '/wiki/en/choose-first-game',
	},
	{
		icon: Icons.seo,
		title: 'Passive Income in Games:',
		info: 'Top Strategies for Play2Earn Games',
		href: '/wiki/en/passive-income',
	},
];

export const wikiRu = [
	{
		icon: Icons.bolt,
		title: 'Игры с NFT',
		info: 'Как они работают и как заработать',
		href: '/wiki/ru/nft-games',
	},
	{
		icon: Icons.palette,
		title: 'Что такое Play2Earn',
		info: 'И как на этом заработать',
		href: '/wiki/ru/play-to-earn',
	},
	{
		icon: Icons.seo,
		title: 'Как зарабатывать на криптоиграх в Telegram',
		info: 'И какие существуют стратегии и механизмы.',
		href: '/wiki/ru/telegram-ton-games',
	},
	{
		icon: Icons.bolt,
		title: 'TON и криптоигры:',
		info: 'Как зарабатывать на играх с TON токенами',
		href: '/wiki/ru/ton-games',
	},
	{
		icon: Icons.palette,
		title: 'Как выбрать первую P2E игру',
		info: 'Ответим на эти вопросы и предложим стратегии для успешного старта.',
		href: '/wiki/ru/choose-first-game',
	},
	{
		icon: Icons.seo,
		title: 'Пассивный доход на играх:',
		info: 'Лучшие стратегии для Play2Earn игр',
		href: '/wiki/ru/passive-income',
	},
];

export const features = [
	{
		icon: Icons.bolt,
		title: 'Token Mining',
		info: 'Many NFT games use the Play-to-Earn model. In such games, players can earn in-game tokens by completing tasks, winning battles, or participating in tournaments. These tokens can be sold on cryptocurrency exchanges for real money.',
	},
	{
		icon: Icons.palette,
		title: 'Reselling NFT Items',
		info: 'On NFT game platforms like OpenSea or Rarible, players can buy or sell unique game items, characters, or land plots. The prices of these items can vary significantly depending on demand and rarity, opening up opportunities for profit.',
	},
	{
		icon: Icons.seo,
		title: 'Renting In-Game Items',
		info: 'In metaverse games like Decentraland or The Sandbox, players can buy land or other assets and rent them out. This allows for a steady income from tenants who use these resources for their purposes.',
	},
];

export const clickersEn = [
	{
		icon: Icons.palette,
		title: 'Farmers: An Effective Way to Earn',
		info: 'Farmers are services that are part of crypto games, allowing users to earn digital assets. They offer users the ability to accumulate in-game resources, which can be exchanged for real money or cryptocurrency. Farmers operate on the principle of completing various tasks within the game, for which users are rewarded.',
	},
	{
		icon: Icons.bolt,
		title: 'Clickers: Simplicity and Accessibility',
		info: 'Clickers on Telegram have become an important part of crypto games due to their simplicity and accessibility. They are services that automate the completion of click-based tasks, allowing users to earn digital coins or other resources that can be exchanged for fiat or cryptocurrency.',
	},
	{
		icon: Icons.seo,
		title: 'Miners: A New Earning Format',
		info: "Miners are applications that use the user's computing power to mine cryptocurrency. There are also versions of such applications on Telegram, allowing anyone to earn cryptocurrency using their smartphone. Miners typically require setup and connection to a pool to stabilize income, after which the mining process becomes automated.",
	},
];

export const clickersRu = [
	{
		icon: Icons.palette,
		title: 'Фармилки: Эффективный Способ Заработка',
		info: 'Фармилки — это сервисы, которые являются частью криптоигр и позволяют зарабатывать цифровые активы. Они предлагают пользователям накапливать игровые ресурсы, которые можно обменять на реальные деньги или криптовалюту. Фармилки работают по принципу выполнения различных заданий внутри игры, за что пользователи получают вознаграждение.',
	},
	{
		icon: Icons.bolt,
		title: 'Тапалки: Простота и Доступность',
		info: 'Тапалки в Telegram стали важной частью криптоигр благодаря своей простоте и доступности. Они представляют собой сервисы, которые автоматизируют выполнение кликовых заданий, позволяя пользователям зарабатывать цифровые монеты или другие ресурсы, которые можно обменять на фиат или криптовалюту.',
	},
	{
		icon: Icons.seo,
		title: 'Майнеры: Новый Формат Заработка',
		info: 'Майнеры — это приложения, использующие вычислительные мощности пользователя для добычи криптовалюты. В Telegram также существуют версии таких приложений, которые позволяют каждому пользователю зарабатывать криптовалюту, используя свой смартфон. Майнеры обычно требуют настройки и подключения к пулу, чтобы стабилизировать доход, после чего процесс добычи становится автоматизированным.',
	},
];

export const featuresRu = [
	{
		icon: Icons.bolt,
		title: 'Добыча токенов',
		info: 'Многие NFT-игры используют модель Play-to-Earn (играй, чтобы заработать). В таких играх игроки могут зарабатывать внутриигровые токены за выполнение заданий, победу в битвах или участие в турнирах. Эти токены могут быть проданы на криптовалютных биржах за реальные деньги.',
	},
	{
		icon: Icons.palette,
		title: 'Перепродажа NFT-объектов',
		info: 'На платформах NFT-игр, таких как OpenSea или Rarible, игроки могут купить или продать уникальные игровые предметы, персонажей или земельные участки. Цены на эти объекты могут значительно меняться в зависимости от спроса и редкости, что открывает возможности для прибыли.',
	},
	{
		icon: Icons.seo,
		title: 'Аренда внутриигровых объектов',
		info: 'В играх-метавселенных, таких как Decentraland или The Sandbox, игроки могут покупать землю или другие активы и сдавать их в аренду. Это позволяет получать стабильный доход от арендаторов, которые используют эти ресурсы для своих целей.',
	},
];

export const NFTGames = [
	{
		title: 'CryptoKitties',
		icon: Icons.seo,
		description:
			'This game was one of the first popular NFT games, allowing players to collect, breed, and trade unique digital cats. Each CryptoKitty is a unique NFT with its characteristics.',
	},
	{
		title: 'Axie Infinity',
		icon: Icons.seo,
		description:
			'In this game, players collect and breed creatures called Axie. Players can earn Smooth Love Potion (SLP) tokens, which can be exchanged for cryptocurrency. Axie Infinity has attracted over 2 million active users and significantly impacted the NFT gaming market.',
	},
	{
		title: 'Decentraland',
		icon: Icons.seo,
		description:
			'This is a virtual world where users can buy, develop, and rent virtual land plots. Decentraland offers a rich and diverse gaming experience that includes both social and commercial opportunities.',
	},
];

export const NFTGamesRu = [
	{
		title: 'CryptoKitties',
		description:
			'Эта игра стала одной из первых популярных NFT-игр, позволяя игрокам коллекционировать, разводить и торговать уникальными цифровыми кошками. Каждый CryptoKitty представляет собой уникальный NFT с собственными характеристиками.',
	},
	{
		title: 'Axie Infinity',
		description:
			'В этой игре игроки собирают и разводят существа, называемые Axie. Игроки могут зарабатывать токены Smooth Love Potion (SLP), которые можно обменивать на криптовалюту. Axie Infinity привлекла более 2 миллионов активных пользователей и оказала значительное влияние на рынок NFT-игр.',
	},
	{
		title: 'Decentraland',
		description:
			'Это виртуальный мир, где пользователи могут покупать, развивать и сдавать в аренду виртуальные участки земли. Decentraland предлагает богатый и разнообразный игровой опыт, который включает как социальные, так и коммерческие возможности.',
	},
];

export const TonTokens = [
	{
		title: 'Purchasing in-game assets:',
		description: 'Such as weapons, skins, characters, and other items.',
	},
	{
		title: 'Participating in game events and tournaments:',
		description:
			'Some games allow players to place bets or pay for participation in competitions.',
	},
	{
		title: 'Earning through gameplay:',
		description:
			'By completing quests, winning battles, or obtaining rare items, players can earn tokens that can then be withdrawn or exchanged for real money.',
	},
];

export const TonTokensRu = [
	{
		title: 'Покупки внутриигровых активов:',
		description:
			'Покупки внутриигровых активов: Такие как оружие, скины, персонажи и другие предметы.',
	},
	{
		title: 'Участия в игровых событиях и турнирах:',
		description:
			'Некоторые игры позволяют игрокам делать ставки или платить за участие в соревнованиях.',
	},
	{
		title: 'Заработка через игровой процесс:',
		description:
			'Выполняя задания, побеждая в битвах или добывая редкие предметы, игроки могут получать токены, которые затем можно вывести или обменять на реальные деньги.',
	},
];

export const playToEarnRu = [
	{
		icon: Icons.bolt,
		title: 'NFT (невзаимозаменяемые токены):',
		info: 'В большинстве P2E игр используются NFT для представления уникальных игровых предметов, персонажей или активов. Эти NFT могут быть куплены, проданы или обменяны, что позволяет игрокам зарабатывать деньги.',
	},
	{
		icon: Icons.palette,
		title: 'Криптовалюты:',
		info: 'Игроки зарабатывают криптовалюту, которую можно обменять на фиатные деньги или другие цифровые активы. Часто используются токены, специфичные для конкретной игры, но также могут быть задействованы и более универсальные криптовалюты, такие как биткойн или эфириум.',
	},
	{
		icon: Icons.seo,
		title: 'Игровая экономика:',
		info: 'Игры имеют свои внутренние экономические системы, которые позволяют игрокам зарабатывать деньги за выполнение задач, участие в боях, торговлю и другие активности.',
	},
];

export const playToEarn = [
	{
		icon: Icons.bolt,
		title: 'NFTs (Non-Fungible Tokens):',
		info: 'Most P2E games use NFTs to represent unique in-game items, characters, or assets. These NFTs can be bought, sold, or traded, allowing players to make money.',
	},
	{
		icon: Icons.palette,
		title: 'Cryptocurrencies:',
		info: 'Players earn cryptocurrency, which can be exchanged for fiat money or other digital assets. Often, tokens specific to a particular game are used, but more universal cryptocurrencies like Bitcoin or Ethereum may also be involved.',
	},
	{
		icon: Icons.seo,
		title: 'In-game Economy:',
		info: 'Games have their internal economic systems, allowing players to earn money by completing tasks, participating in battles, trading, and other activities.',
	},
];

export const bentoCards = [
	{
		title: 'Start with Inspiration',
		info: 'Browse our vast library of pre-designed templates or upload your own images.',
		imgSrc: '/assets/bento-1.svg', // Lightbulb or Inspiration icon
		alt: 'Inspiration for website creation',
	},
	{
		title: 'AI Assists Your Vision',
		info: 'Our intelligent AI tailors suggestions and functionalities based on your goals.',
		imgSrc: '/assets/bento1.svg', // AI Assistant icon
		alt: 'AI website building assistant',
	},
	{
		title: 'Drag & Drop Customization',
		info: 'Effortlessly personalize your website with our intuitive drag-and-drop editor.',
		imgSrc: '/assets/bento1.svg', // Drag and Drop icon or hand editing a website
		alt: 'Website customization with drag and drop',
	},
	{
		title: 'Launch & Shine Online',
		info: 'Publish your website with a single click and take your brand to the world.',
		imgSrc: '/assets/bento1.svg', // Rocket launching or website going live
		alt: 'Website launch and publication',
	},
];

export const reviews = [
	{
		name: 'Povel Durev',
		username: '@durev',
		body: "I'm glad the game works on Telegram",
	},
	{
		name: 'Jackie Chwan',
		username: '@chwan',
		body: 'The game is as cool as I am.',
	},
	{
		name: 'Steven Kong',
		username: '@kong',
		body: "Starting to play isn't that scary after all.",
	},
	{
		name: 'Margo Robo',
		username: '@robo',
		body: 'I turned out beautiful and interesting in the game.',
	},
	{
		name: 'Divine Johnzon',
		username: '@johnzon',
		body: "I'm a character in the game? Seriously?",
	},
	{
		name: 'Jeff Besos',
		username: '@besos',
		body: 'Want to go to space? Play this game.',
	},
];

export const projects = [
	{
		title: '1.  Choose a game:',
		description:
			'Explore the games available on the TON platform and select one that interests you and has good player reviews.',
	},
	{
		title: '2. Set up a TON wallet:',
		description:
			"To start playing, you'll need a TON wallet where you can receive tokens and store your in-game assets.",
	},
	{
		title: '3. Learn the game mechanics:',
		description:
			'Before starting, carefully study the game’s rules, its economy, and ways to earn.',
	},
	{
		title: '4. Engage with the community:',
		description:
			'Join gaming communities to exchange experiences, tips, and get up-to-date information on new releases and updates.',
	},
	{
		title: '5. Be cautious and safe:',
		description:
			'Make sure the game you plan to invest your time and money in is secure and free of signs of fraud.',
	},
	{
		imageUrl: '/assets/cat6.png',
	},
];

export const projectsRu = [
	{
		title: '1.  Советы по началу игры:',
		description:
			'Исследуйте доступные на платформе TON игры и выберите ту, которая вам интересна и имеет хорошие отзывы от игроков.',
	},
	{
		title: '2. Настройка кошелька TON:',
		description:
			'Для начала игры вам понадобится кошелек TON, куда вы сможете получать токены и хранить свои игровые активы.',
	},
	{
		title: '3. Изучение игровых механик:',
		description:
			'Перед тем как начать, внимательно изучите правила игры, ее экономику и способы заработка.',
	},
	{
		title: '4. Общение с сообществом:',
		description:
			'Присоединяйтесь к игровым сообществам, чтобы обмениваться опытом, советами и получать актуальную информацию о новинках и обновлениях.',
	},
	{
		title: '5. Осторожность и безопасность:',
		description:
			'Убедитесь, что игра, в которую вы собираетесь инвестировать свое время и деньги, безопасна и не имеет признаков мошенничества.',
	},
	{
		imageUrl: '/assets/cat6.png',
	},
];

export const cards = [
	{
		title: 'Forest Adventure',
		src: '/cards/1card.jpg',
	},
	{
		title: 'Valley of life',
		src: '/cards/card-back.jpg',
	},
	{
		title: 'Sala behta hi jayega',
		src: '/cards/card-back.jpg',
	},
	{
		title: 'Camping is for pros',
		src: '/cards/card-back.jpg',
	},
	{
		title: 'The road not taken',
		src: '/cards/card-back.jpg',
	},
	{
		title: 'The First Rule',
		src: '/cards/card-back.jpg',
	},
];

export const tweets = [
	{
		username: 'Elan',
		handle: 'elan_mosk',
		avatarUrl: '/characters/middle/card01.png',
		replyTo: 'povel_durev',
		text: 'The only way is up—join me in the adventure!',
		time: '7:57 PM',
		date: 'Jan 7, 2024',
		likes: '20K',
		replies: 395,
	},
	{
		username: 'Madronna',
		handle: 'Madronna',
		avatarUrl: '/characters/middle/card15.png',
		replyTo: 'jackie_chwan',
		text: "I'm loving how easy it is to join the fun!",
		time: '10:10 AM',
		date: 'Jan 5, 2024',
		likes: '4.7K',
		replies: 477,
	},
	{
		username: 'Divine',
		handle: 'divine_johnzon',
		avatarUrl: '/characters/middle/card37.png',
		replyTo: 'steven_kong',
		text: "Diving in was the best choice I've made today!",
		time: '1:30 PM',
		date: 'Sep 15, 2024',
		likes: '5.5K',
		replies: 203,
	},
	{
		username: 'Makhomes',
		handle: 'pat_makhomes',
		avatarUrl: '/characters/middle/card14.png',
		replyTo: 'jeff_besos',
		text: 'This game is almost as awesome as my last victory!',
		time: '3:45 PM',
		date: 'Aug 6, 2024',
		likes: '8.1K',
		replies: 308,
	},
	{
		username: 'Ri',
		handle: 'ri_anna',
		avatarUrl: '/characters/middle/card10.png',
		replyTo: 'divine_johnzon',
		text: "Wait, I'm a hero? Let's do this! Shine bright like a diamond. Whoaaa",
		time: '5:00 PM',
		date: 'Nov 7, 2024',
		likes: '7.6K',
		replies: 512,
	},
	{
		username: 'Ursula',
		handle: 'ursula_fonder_line',
		avatarUrl: '/characters/middle/card05.png',
		replyTo: 'margo_robo',
		text: 'Feeling fierce and fabulous in the game!',
		time: '6:15 PM',
		date: 'Jan 23, 2024',
		likes: '2.1K',
		replies: 345,
	},
];
