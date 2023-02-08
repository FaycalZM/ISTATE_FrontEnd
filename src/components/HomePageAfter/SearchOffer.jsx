import HousesGrid from "./HousesGrid";

export default function SearchOffer({ annonces }) {
  return (
    <section className="section-layout space-y-8">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="title-lg">All offers</h2>
        <p className="title-description">

        </p>
      </div>
      <HousesGrid houses={annonces} />
    </section>
  );
}
