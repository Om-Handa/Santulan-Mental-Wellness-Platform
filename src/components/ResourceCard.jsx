export default function Card({ item, activeTab }) {
  return (
    <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition bg-white">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-600">
          {item.category}
        </span>
        <span className="text-yellow-500 font-medium">⭐ {item.rating}</span>
      </div>
      <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
      <p className="text-gray-500 text-sm mb-4">{item.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>⏱ {item.time}</span>
        <span className="bg-gray-100 px-2 py-1 rounded-md">{item.level}</span>
      </div>
      <button className="mt-4 w-full py-2 border rounded-lg hover:bg-blue-50 transition">
        {item.Action}
      </button>
    </div>
  );
}
