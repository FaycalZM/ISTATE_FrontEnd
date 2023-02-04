import FilterSearch from "./FilterSearch";
import HousesGrid from "./HousesGrid";
import { houses } from "../../utils/houses";

export default function SearchOffer({annonces}) {
  return (
    <section className="section-layout space-y-8">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="title-lg">Search for an offer</h2>
        <p className="title-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <FilterSearch />
      <HousesGrid houses={annonces} />
    </section>
  );
}
