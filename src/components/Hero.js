const Hero = () => {
  return (
    <section className="dark:bg-white-100 dark:text-gray-800 body-font padding-x py-20 w-full mt-15 md:mt-25 sm:pt-20" style={{ paddingTop: '100px' }}>
      {/* Same margin-top value for medium and small devices */}
      <div className="flex py-0 md:flex-row flex-col items-center w-full">
        <div className="lg:flex-grow md:w-full lg:pr-0 md:pr-0 flex flex-col md:items-start md:text-left sm:items-start text-left"> {/* Changed alignment classes */}
          {/* Conditionally render the image only on medium and larger screens */}
          <img src="https://edxplor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.93e8b017.png&w=256&q=75" alt="logo" className="h-20 w-auto mb-4 hidden md:block mt-15 md:mt-8" /> {/* Added margin-top class */}
          <h1 className="title-font text-2xl sm:text-5xl  mb-4 font-montserrat font-bold text-blue-500 sm:pl-0"> {/* Removed mb-4 and added sm:pl-0 */}
            Find the Best College for Your Future.
          </h1>
          <p className="mb-8 leading-relaxed text-blue-500 sm:pl-0"> {/* Removed mb-8 and added sm:pl-0 */}
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Explore Colleges</button>
          </div>
        </div>
        <div className="flex justify-end md:mr-0 w-full">
          <img className="object-center rounded h-750 w-full" alt="hero" src="https://edxplor.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBeautiful%20girl.6328817d.png&w=1080&q=75" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
