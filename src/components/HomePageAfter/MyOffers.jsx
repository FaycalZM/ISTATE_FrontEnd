import HousesGrid from "./HousesGrid";

export default function MyOffers({ annonces }) {
  return (
    <section className="section-layout space-y-8 bg-white-blue">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="title-lg">My offers</h2>
        {
          annonces.length == 0 && <p className="title-description">
            pas d'offres actuellement.
          </p>
        }
      </div>
      <HousesGrid houses={annonces} />
    </section>
  );
}
