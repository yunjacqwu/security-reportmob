import ReportCard from '../components/ReportCard';
import FloatingCreateButton from '../components/FloatingCreateButton';

const Dashboard = () => {
  return (
    <main className="px-4">
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />

      <FloatingCreateButton />
    </main>
  );
};

export default Dashboard;