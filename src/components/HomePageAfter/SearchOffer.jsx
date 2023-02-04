import HousesGrid from "./HousesGrid";

export default function SearchOffer({ annonces }) {
  return (
    <section className="section-layout space-y-8 bg-white-blue">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="title-lg">Search for an offer</h2>
        <p className="title-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex justify-center gap-x-4">
        <input
          className="input-text w-full md:w-80"
          type="text"
          placeholder="Enter a keyword"
        />
        <button className="primary-btn-sm">Search</button>
      </div>
      <HousesGrid houses={annonces} />
    </section>
  );
}
