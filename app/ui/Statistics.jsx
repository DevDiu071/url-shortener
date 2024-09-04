import Image from "next/image";

function Statistics() {
  return (
    <div className="px-5 bg-slate-100 pb-[70px]">
      <h2 className="text-3xl font-bold text-center pt-[150px] mb-4">
        Advanced Statistics
      </h2>
      <p className="text-xl text-center mb-10">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      {/* CARDS */}

      <div className="mt-[80px]">
        <div className="text-center bg-white px-6 pb-4 pt-12 relative">
          <Image
            src="/images/icon-brand-recognition.svg"
            width={80}
            height={80}
            alt="icon"
            className="mb-6 bg-darkgrayblue p-4 rounded-full absolute -top-10 right-0 left-0 m-auto"
          />
          <p className="text-2xl font-bold my-4 text-darkgrayblue">
            Brand Recognition
          </p>
          <p className="text-xl mb-8">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="text-center bg-white px-6 pb-4 pt-12 relative mt-[90px]">
          <Image
            src="/images/icon-detailed-records.svg"
            width={80}
            height={80}
            alt="icon"
            className="mb-6 bg-darkgrayblue p-4 rounded-full absolute -top-10 right-0 left-0 m-auto"
          />
          <p className="text-3xl font-bold text-center  mb-4">
            Detailed Records
          </p>
          <p className="text-xl mb-8 text-center">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="text-center bg-white px-6 pb-4 pt-12 relative mt-[90px]">
          <Image
            src="/images/icon-fully-customizable.svg"
            width={80}
            height={80}
            alt="icon"
            className="mb-6 bg-darkgrayblue p-4 rounded-full absolute -top-10 right-0 left-0 m-auto"
          />
          <p className="text-3xl font-bold text-center  mb-4">
            Fully Customizable
          </p>
          <p className="text-xl pb-6 text-center">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
