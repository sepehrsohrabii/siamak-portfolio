export default function Home() {
  return (
    <div className="w-full flex items-center justify-between h-screen overflow-hidden">
      <div className="flex-initial ms-40 h-40">
        <h1 className="absolute font-thin whitespace-pre text-8xl text-blue-700 whitespace-pre-line z-50">
          <span className="bg-white">Explore Old</span>
          <br></br>
          <span className="bg-white">Classic Buildings</span>
        </h1>
        <div>
          <h3>
            <span className="text-2xl text-gray-500">
              Explore the most beautiful buildings in the world
            </span>
          </h3>
        </div>
      </div>
      <div className="flex-initial w-3/5 bg-[url('/images/2.jpg')] bg-cover h-screen bg-center saturate-0 hover:saturate-100 duration-500">
        <div className="absolute bottom-20 left-20 z-50 w-80 border-l-2 border-b-2 pb-5 pl-5">
          <h3 className="font-bold">felan</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur
            <br></br>
            adipisicing elit Quisquamvoluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
}
