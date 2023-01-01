export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[860px] items-center justify-evenly pt-20 md:pt-0">
      <div className=" flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="font-bold text-[48px] lg:text-[64px] text-[#091638] w-[350px] lg:w-[450px] pb-3">
          Modern living for everyone
        </h1>
        <p className="text-[16px] lg:text-[21px] text-[#091638] w-[380px] lg:w-[500px] pb-16 text-justify">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </p>
        <button
          type="button"
          className="w-[200px] text-white bg-[#1C3988] hover:bg-[#1C3988]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            class="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Continue with Google
        </button>
      </div>
      <div className=" ">
        <img
          src="/images/Hero/Building0.svg"
          alt="Building"
          className="w-[500px] lg:w-[600px]"
        />
      </div>
    </div>
  );
}
