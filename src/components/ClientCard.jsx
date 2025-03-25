
function ClientCard({ client }) {
  return (
    <div className="w-full sm:w-[250px] md:w-[280px] lg:w-[300px] h-[220px] border border-gray-300 rounded-lg shadow-md bg-white  flex flex-col items-center justify-center text-center hover:shadow-xl transition duration-900 ease-in-out">
      <div className="w-[120px] h-[80px] flex items-center justify-center mb-4">
        <img
          src={`/${client.logo_path}`}
          alt={client.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h2 className="text-base md:text-lg font-medium text-gray-800 drop-shadow-sm">
        {client.name}
      </h2>
    </div>
  );
}

export default ClientCard;



