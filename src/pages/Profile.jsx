import ProfileHeader from '../components/ProfileHeader';
import ReportCard from '../components/ReportCard';


const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-2">
      <div className="max-w-4xl mx-auto">

        <div className="space-y-6">
          <ProfileHeader />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Recent</h2>
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;