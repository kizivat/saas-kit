export const blogInfo = {
	name: 'SaaS Kit Blog',
	description: 'A sample blog',
};

type BlogPost = {
	title: string;
	description: string;
	link: string;
	date: Date;
};

export const sortedBlogPosts: Array<BlogPost> = [];
