export default function HouseCard({ house }) {
  const { image, title, price, location } = house;
  return (
    <div className="w-[95%] md:w-80 rounded-md overflow-hidden shadow-md">
      <img className="object-cover h-52 w-full" src={image} alt={title} />
      <div className="bg-white p-4 space-y-4">
        <h3 className="title-sm">{title}</h3>
        <div>
            <h4 className="text-sm font-bold text-blue">{price} DZD</h4>
            <h5>{location}</h5>
        </div>
      </div>
    </div>
  );
}
