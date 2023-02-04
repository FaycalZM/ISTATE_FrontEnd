export default function MessageCard({ content }) {
  return (
    <div className="w-[95%] md:w-80 rounded-md overflow-hidden shadow-md hover:shadow-lg duration-300 flex justify-center col-span-1">
      <p className="bg-white p-4 w-full space-y-2 md:space-y-4 h-32">{content}</p>
    </div>
  );
}
