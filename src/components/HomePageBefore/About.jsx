export default function About() {
  return (
    <section
      id="About"
      className="section-layout grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <img
        src="https://ychef.files.bbci.co.uk/976x549/p0982k70.jpg"
        className="my-auto rounded-xl"
      />
      <div className="my-auto">
        <h1 className="title-xl">About us</h1>
        <p className="title-description-lg my-4">
          We are a real estate company dedicated to making the home search
          easier for our clients. We believe that everyone deserves to live in a
          home that fits their needs and dreams.
        </p>
        <p className="title-description-lg my-4">
          We help you every step of the way. We are proud of our commitment to
          quality service and our in-depth knowledge of the local real estate
          market. Choose us for personal guidance and effective assistance in
          your search for the perfect home.
        </p>
      </div>
    </section>
  );
}
