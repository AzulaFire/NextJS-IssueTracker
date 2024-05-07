import IssueFormSkeleton from '@/components/IssueFormSkeleton';
import dynamic from 'next/dynamic';

const IssueForm = dynamic(() => import('@/components/IssueForm'), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};
export default NewIssuePage;
