import React from "react";
import { FiX } from "react-icons/fi";

function App() {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  return (
    <>
      <div className="w-[50vh] h-[50vh] bg-orange-400 absolute z-0 rounded-full left-[40%]" />
      <div className="w-full h-40 bg-orange-400 absolute z-0 rounded-full top-[90%]" />
      <nav className="w-full h-[5vh] lg:h-[8vh] md:h-[8vh] absolute z-20 bg-transparent backdrop-blur-3xl flex items-center content-center justify-between p-5">
        <h1 className="font-bold">
          Clip<span className="text-orange-400">Sync</span>
        </h1>
      </nav>
      <div
        className="w-screen h-screen flex flex-col md:flex-row lg:flex-row absolute z-10"
        style={{ backdropFilter: "blur(250px)" }}
      >
        <div className="lg:p-10 md:p-10 w-full h-full md:h-full md:w-full lg:w-full flex flex-col items-center content-center lg:items-start lg:content-start justify-center text-center md:text-start lg:text-start">
          <h1 className="font-bold text-5xl text-orange-400 mb-2">ClipSync</h1>
          <p>Sync your clipboard history across multiple devices</p>
          <p>never worry about typing every word into your phone again</p>
          <button
            onClick={() => setModalVisible(true)}
            className="p-2 pl-4 pr-5 rounded-full bg-orange-400 mt-3 text-white"
          >
            Waitlist
          </button>
        </div>
      </div>
      {modalVisible === true ? (
        <>
          <div className="w-full transition-opacity duration-100 h-screen bg-black/50 absolute z-30 flex flex-col lg:flex-row md:flex-row items-center content-center justify-center">
            <div className="bg-white rounded-md p-4 w-5/6 h-2/6 lg:w-2/6 lg:h-2/6 md:w-2/6 md:h-4/6 m-auto flex flex-col">
              <div className="flex items-center content-center justify-end h-[10%]">
                <button
                  className="text-orange-400"
                  onClick={() => setModalVisible(false)}
                >
                  <FiX />
                </button>
              </div>
              <form className="flex flex-col justify-center gap-4 h-[90%]">
                <h1 className="font-bold text-lg">Join The Waitlist</h1>
                <input
                  type="email"
                  className="bg-gray-100 p-3 rounded-md border-[0.5px] border-opacity-[0.2] boder-black outline-none"
                  placeholder="Email"
                />
                <button
                  className="w-full rounded-md bg-orange-400 p-2 text-white"
                  type="submit"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
