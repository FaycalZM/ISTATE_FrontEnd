import HouseCard from "../shared/HouseCard";

export default function HousesGrid({ houses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {houses &&
        houses.map((house, index) => (
          <div className="flex justify-center col-span-1">
            <HouseCard key={index} house={house} />
          </div>
        ))}
    </div>
  );
}
