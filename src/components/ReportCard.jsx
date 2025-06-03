import { useState, useRef, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';

const ReportCard = ({
  name = 'Secure',
  nik = '3123948392',
  location = 'Jakarta Utara',
  message,
  time = '09.45',
  date = '20/04/2025',
  onDelete = () => alert('Deleted!'),
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Tutup menu jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex gap-4 py-4 border-b relative">
      {/* Avatar */}
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M5.121 17.804A9 9 0 1118.88 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold text-black">{name}</span>
              <span className="text-gray-400">{nik}</span>
              <span className="text-gray-400">• {location}</span>
            </div>
            <p className="text-sm text-black mt-1 leading-snug">
              {message ||
                `Lorem Ipsum Dolor Sit Amet. Qui Exercitationem Numquam Sed Dolores Omnis Sed Architecto Incidunt. Rem Voluptas Omnis 33 Quisquam Recusandae Aut Nulla Quaerat Ad Aliquid Nulla Vel Aperiam Esse. Aut Deleniti Doloribus Aut Voluptate Iste Est Voluptatum Amet Et Voluptatem Quasi Est Omnis Iusto Cum Atque Cupiditate.`}
            </p>
          </div>

          {/* More menu */}
          <div className="relative" ref={menuRef}>
            <button onClick={() => setShowMenu(!showMenu)}>
              <MoreVertical className="w-4 h-4 text-gray-500" />
            </button>

            {showMenu && (
              <div className="absolute right-0 top-6 bg-white border border-gray-200 rounded shadow-md z-10 text-sm">
                <button
                  className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                  onClick={() => {
                    onDelete();
                    setShowMenu(false);
                  }}
                >
                  Hapus
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="text-xs text-gray-500 text-right mt-2">
          {time} • {date}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
