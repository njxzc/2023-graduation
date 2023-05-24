export default function handler(req, res) {
	const quotes = [
		{
			'quote': '真正的离别没有长亭古道，也没有劝君更尽一杯酒，只有在一个和往常一样的清晨，有人留在昨天了。',
			'source': '佚名《离别》'
		},
		{
			'quote': '书上说，天下没有不散的宴席，书上还说了，人生何处不相逢。',
			'source': '《雪中悍刀行》'
		},
		{
			'quote': '故事的开头总是这样，适逢其会，猝不及防。故事的结局总是这样，花开两朵，天各一方。',
			'source': '张嘉佳《从你的全世界路过》'
		},
		{
			'quote': '你没有如期归来，而这正是离别的意义。',
			'source': '北岛《白日梦》'
		},
		{
			'quote': '渡口旁找不到一朵可以相送的花，就把祝福别在襟上吧，而明日，明日又隔天涯。',
			'source': '席慕容《渡口》'
		},
		{
			'quote': '告别就是，先离开的人，影子拖在地上，很长很长',
			'source': '韩今谅《一颗苹果宣布成为星球》'
		},
		{
			'quote': '宿舍的门再次推开，又是谁的青春',
			'source': '网友'
		}
	]
	const quote = quotes[Math.floor(Math.random() * quotes.length)]
	res.status(200).json(quote)
}
  