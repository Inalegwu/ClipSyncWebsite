function App() {
  return (
    <>
      <div className="w-[50vh] h-[50vh] bg-orange-400 absolute z-0 rounded-full left-[40%]" />
      <div className="w-full h-40 bg-orange-400 absolute z-0 rounded-full top-[90%]" />
      <nav className="w-full h-[5vh] lg:h-[8vh] md:h-[8vh] absolute z-10 bg-transparent backdrop-blur-3xl flex items-center content-center justify-between p-5">
        <h1 className="font-bold">
          Clip<span className="text-orange-400">Sync</span>
        </h1>
      </nav>
      <div
        className="w-screen h-screen flex flex-col md:flex-row lg:flex-row"
        style={{ backdropFilter: "blur(250px)" }}
      >
        <div className="lg:p-10 md:p-10 w-full h-full md:h-full md:w-full lg:w-full flex flex-col items-center content-center lg:items-start lg:content-start justify-center text-center md:text-start lg:text-start">
          <h1 className="font-bold text-5xl text-orange-400 mb-2">ClipSync</h1>
          <p>Sync your clipboard history across multiple devices</p>
          <p>never worry about typing every word into your phone again</p>
          <button className="p-2 pl-4 pr-5 rounded-full bg-orange-400 mt-3 text-white">
            Waitlist
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
