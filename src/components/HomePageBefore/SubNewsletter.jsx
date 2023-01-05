export default function SubNewsletter() {
  return (
    <div className="section-layout bg-white-blue flex justify-center gap-x-28">
      <img
        src="https://i.ibb.co/tb4cYG2/Group-189.png"
        alt=""
        className="hidden md:block"
      />
      <div>
        <h1 className="title-lg">Subscribe to newsletter</h1>
        <p className="title-description my-4">
          Get the latest news and interesting offers and real estate
        </p>
        <div className="flex gap-4">
          <input type="text" className="input-text w-full" />
          <button className="primary-btn-sm">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
