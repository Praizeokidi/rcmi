const Hero = () => {
  return (
    <div>
      <div class="sm:h-screen  md:bg-[url('/images/pexels-jibarofoto-2014773.jpg')]  w-full h-[69rem] md:h-screen lg:h-screen  xl:h-screen bg-center bg-cover bg-no-repeat bg-fixed  overflow-x-hidden  bg-[url('/images/pexels-cottonbro-4630674.jpg')]">
        <div className=" h-full m-auto w-full backdrop-brightness-50 ">
          <div>
            <div className="p-11 sm:px-15 sm:h-2/3 sm:pt-44 flex justify-items-center justify-between flex-col pt-32 h-2/3  md:ml-10 lg:ml-28  antialiased max-w-3xl text-white ">
              <h1 className="text-4xl py-4  leading-relaxed tracking-wide font-bold">
                Release, Rescue, and Restore Girls Trapped in Trafficking
              </h1>
              <p className="font-medium text-lg leading-relaxed tracking-wide mb-9">
                Right now, in the red-light districts of Myanmar, young girls
                are trapped in a nightmare, trafficked into sex work and living
                in constant fear. Our brave outreach teams venture into
                dangerous areas to release these girls, providing them with
                trauma counseling, job training, and a safe place to heal. While
                thousands of lives have already been transformed, tens of
                thousands more are still waiting. On average, it costs $160 to
                rescue one girl. Will you make a compassionate donation today to
                release more girls from trafficking?
              </p>
              <a
                href="/"
                className="buttn text-center max-w-64 bg-green-500 rounded hover:bg-green-600 hover:text-black transition p-4"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
