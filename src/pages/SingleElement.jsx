import PreviewSection from "../components/SingleElement/PreviewSection";
import { houses } from "../utils/houses";

export default function SingleElement() {
  const { title, images } = houses[0];
  return (
    <section className="section-layout grid grid-cols-3 gap-8">
      <h2 className="title-lg col-span-3">{title}</h2>
      <div className="col-span-3 md:col-span-2">
        <PreviewSection images={images} />
      </div>
      <div className="col-span-3 md:col-span-1 bg-white-blue rounded-md"></div>
    </section>
  );
}
