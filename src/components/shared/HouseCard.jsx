export default function HouseCard({ house }) {
  const { images, title, price, location } = house;

  return (
    <div className="w-[95%] md:w-80 rounded-md overflow-hidden shadow-md hover:shadow-lg duration-300">
      <img className="object-cover h-52 w-full" src={images[0]} alt={title} />
      <div className="bg-white p-4 space-y-2 md:space-y-4">
        <h3 className="title-sm">{title}</h3>
        <div>
          <h4 className="text-sm font-bold text-blue">{price} DZD</h4>
          <h5>{location}</h5>
        </div>
      </div>
    </div>
  );
}
