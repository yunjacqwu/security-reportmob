import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImagePlus, Shield } from 'lucide-react';

const CreateReport = () => {
  const navigate = useNavigate();
  const [jenis, setJenis] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    // Tambahkan logic untuk submit report
    alert('Report posted!');
    navigate('/'); // Redirect setelah post
  };

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-purple-600">SECURITY</div>
            <div className="text-sm text-purple-500 font-bold">REPORT</div>
          </div>
        </div>

        <div className="space-x-2">
          <button
            className="border border-black px-4 py-1 rounded-full text-sm"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      </div>

      {/* Form */}
      <h2 className="text-sm font-semibold mb-2">New Report</h2>

      {/* Jenis */}
      <select
        value={jenis}
        onChange={(e) => setJenis(e.target.value)}
        className="w-full border px-3 py-2 rounded-md mb-4 text-sm"
      >
        <option value="">Jenis</option>
        <option value="pencurian">Pencurian</option>
        <option value="kerusakan">Kerusakan</option>
        <option value="lainnya">Lainnya</option>
      </select>

      {/* Message */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Report.."
        className="w-full border px-3 py-2 rounded-md mb-4 text-sm h-24 resize-none"
      />

      {/* Gambar */}
      <label
        htmlFor="image-upload"
        className="w-full border border-dashed px-3 py-6 rounded-md flex flex-col items-center justify-center cursor-pointer text-gray-400 text-sm"
      >
        {image ? (
          <img src={image} alt="Uploaded" className="max-h-40 object-contain" />
        ) : (
          <>
            <ImagePlus className="w-6 h-6 mb-1" />
            Add Picture
          </>
        )}
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
};

export default CreateReport;
