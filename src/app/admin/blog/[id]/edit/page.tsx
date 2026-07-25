'use client';
import { ArticleForm } from '../../ArticleForm';
import { getAllArticles } from '../../../../../data/insights';

interface EditPageProps {
  params: { id: string };
}

export default function EditArticlePage({ params }: EditPageProps) {
  const article = getAllArticles().find(a => a.id === params.id);
  return <ArticleForm initialData={article} isEdit />;
}
