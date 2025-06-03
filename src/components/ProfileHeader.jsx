import { User, Mail, Phone, MapPin, Calendar, LogOut } from 'lucide-react';

const ProfileHeader = () => {
  const userInfo = {
    name: 'Security',
    email: 'Security@company.com',
    phone: '+08360928573',
    location: 'Jakarta Utara',
    joinDate: 'January 2022',
    role: 'Security Administrator',
    department: 'IT Security'
  };

  const handleLogout = () => {
    // Tambahkan logika logout (clear token, redirect, dsb)
    alert('Logged out!');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden relative">
      {/* Cover Background */}
      <div className="h-24 bg-gradient-to-r from-purple-600 to-blue-600"></div>
      
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 text-white hover:text-gray-100 flex items-center gap-1 text-sm"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>

      {/* Profile Content */}
      <div className="px-6 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-12">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <User className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-900">{userInfo.name}</h1>
              <p className="text-gray-600 font-medium">{userInfo.role}</p>
              <p className="text-sm text-gray-500">{userInfo.department}</p>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
              <p className="text-sm font-medium text-gray-900">{userInfo.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
              <p className="text-sm font-medium text-gray-900">{userInfo.phone}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Cabang</p>
              <p className="text-sm font-medium text-gray-900">{userInfo.location}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Joined</p>
              <p className="text-sm font-medium text-gray-900">{userInfo.joinDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
