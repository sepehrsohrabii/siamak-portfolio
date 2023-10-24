import HomePageSlider from "@/components/homePageSlider";

export default function Home() {
  const slides = [
    {
      src: "string",
      title: "string",
      description: "string",
    },
    {
      src: "string",
      title: "string",
      description: "string",
    },
  ];
  return (
    <div>
      {/* first section */}
      <div className="w-full flex items-center justify-between h-screen overflow-hidden">
        <div className="flex-initial ps-40 h-screen flex items-center">
          <div className="absolute z-50 w-30">
            <h3 className="bg-blue-700 w-fit py-1 px-3">
              <span className="text-2xl text-white">
                Explore the most beautiful
              </span>
            </h3>
            <h1 className="w-fit font-thin text-8xl">
              Explore Old
              <br className="hidden md:inline" />
              Classic Buildings
            </h1>
            <p className="w-1/4 ms-20 mt-10">
              buildings in the world Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Vitae, labore quod veritatis explicabo maiores
              consectetur. Suscipit dolor, ex nemo aperiam reprehenderit ea non
              doloribus velit quidem omnis labore, enim soluta?
            </p>
          </div>
        </div>
        <div className="z-0 flex-initial w-3/5 h-screen saturate-0 hover:saturate-100 duration-500">
          <div className="w-full h-full bg-[url('/images/2.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute bottom-20 left-20 z-2 w-80 border-l-2 border-b-2 pb-5 pl-5">
              <h3 className="font-bold">felan</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur
                <br className="hidden md:inline" />
                adipisicing elit Quisquamvoluptatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="w-full px-40 flex items-center justify-between overflow-hidden mt-20">
        
      </div>
    </div>
  );
}
