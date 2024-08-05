<script lang="ts">
	import * as Testimonials from '$lib/components/landing/testimonials';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import UserIcon from '~icons/lucide/user';

	const testimonials = [
		{
			author: {
				avatarUrl: '#',
				name: 'David Kizivat',
				sub: '@kizivat',
			},
			quote: 'We had this once said about us.',
		},
		{
			author: {
				avatarUrl: '#',
				name: 'David Kizivat',
				sub: '@kizivat',
			},
			quote:
				'As one of the first users, I can say that this is a great. I love it. My team loves it. We are going to use this.',
		},
		{
			author: {
				avatarUrl: '#',
				name: 'David Kizivat',
				sub: '@kizivat',
			},
			quote:
				"No way this is free. It is too good to be free. I would pay for this at least $100. It is that good. I'm going to use this for my next project. Thank you so much for making this. I'm looking for a way to pay you back.",
		},
		{
			author: {
				avatarUrl: '#',
				name: 'David Kizivat',
				sub: '@kizivat',
			},
			quote:
				'Would totally use this again. It is very nice. Nice job! Keep it up! 🚀',
		},
		{
			author: {
				avatarUrl: '#',
				name: 'David Kizivat',
				sub: '@kizivat',
			},
			quote: 'Great job! I love it! I would recommend this to anyone.',
		},
	];
</script>

<Testimonials.Root class="hidden md:grid lg:block">
	{#each testimonials as { author: { avatarUrl, name, sub }, quote }}
		<Testimonials.Figure>
			<Card.Root>
				<Testimonials.Author>
					<Card.Header class="flex flex-row items-center gap-4">
						<Avatar.Root>
							<Avatar.Image src={avatarUrl} alt={name} />
							<Avatar.Fallback>
								<UserIcon />
							</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<Card.Title>{name}</Card.Title>
							<Card.Description>{sub}</Card.Description>
						</div>
					</Card.Header>
				</Testimonials.Author>
				<Card.Content>
					<Testimonials.Quote>{quote}</Testimonials.Quote>
				</Card.Content>
			</Card.Root>
		</Testimonials.Figure>
	{/each}
</Testimonials.Root>

<Carousel.Root
	class="md:hidden"
	opts={{ loop: true }}
	plugins={[
		Autoplay({
			delay: 5000,
		}),
	]}
>
	<Testimonials.Root variant="carousel">
		<Carousel.Content>
			{#each testimonials as { author: { avatarUrl, name, sub }, quote }, i (i)}
				<Carousel.Item>
					<Testimonials.Figure>
						<Card.Root>
							<Testimonials.Author>
								<Card.Header class="flex flex-row items-center gap-4">
									<Avatar.Root>
										<Avatar.Image src={avatarUrl} alt={name} />
										<Avatar.Fallback>
											<UserIcon />
										</Avatar.Fallback>
									</Avatar.Root>
									<div>
										<Card.Title>{name}</Card.Title>
										<Card.Description>{sub}</Card.Description>
									</div>
								</Card.Header>
							</Testimonials.Author>
							<Card.Content>
								<Testimonials.Quote>{quote}</Testimonials.Quote>
							</Card.Content>
						</Card.Root>
					</Testimonials.Figure>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Testimonials.Root>
	<Carousel.Previous class="translate-x-full" />
	<Carousel.Next class="-translate-x-full" />
</Carousel.Root>
