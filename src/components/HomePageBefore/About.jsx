export default function About() {
  return (
    <div
      id="About"
      className="flex md:flex-row flex-col justify-center h-[950px] items-center w-screen gap-24"
    >
      <img
        src="https://files.fm/thumb_show.php?i=y6shd7976"
        alt=""
        className=" w-[500px] md:w-[60%] lg:w-[45%] mr-9 md:mr-0"
      />
      <div className="md:items-start text-center md:text-left">
        <h1 className="font-bold text-[48px] lg:text-[64px] text-[#091638] pb-4 ">
          About us
        </h1>
        <p className="text-[16px] lg:text-[21px] text-[#091638] text-justify w-[380px] md:w-[250px] lg:w-[450px]">
          We are a company that connects the world of real estate and finance.
          We provide a complete service for the sale, purchase or rental of real
          estate. Our advantage is more than 15 years of experience and soil in
          attractive locations in Slovakia with branches in Bratislava and
          Košice.
          <br />
          <br />
          We have a connection to all banks on the Slovak market, so we can
          solve everything under one roof. By constantly innovating our business
          activities, we move forward and we are able to offer truly
          above-standard services that set us apart from the competition.
        </p>
      </div>
    </div>
  );
}
