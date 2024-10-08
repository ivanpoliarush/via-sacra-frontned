import { ArticlePage } from '@/features/article-page/ui/main/main';

const Article = ({ params: { lang } }: { params: { lang: string } }) => {
	return <ArticlePage lang={lang} />;
};

export default Article;
