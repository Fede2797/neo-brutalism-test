import { Parallax  } from 'react-scroll-parallax';

function App() {

  return (
    <div className="w-full h-full my-[100vh] min-h-[300px] grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-black">

      {/* Main container 1 */}
      <div className="mt-[2px] flex justify-center items-center bg-[#ffc900] md:my-[2px]">
        <div className="flex items-center h-[80px] w-[400px] bg-white rounded-3xl border-2 border-black text-center">
          <h1 className="w-full text-xl font-[Jost] font-medium text-center">I'm Fede, a Fullstack developer...</h1>
        </div>
      </div>

      {/* Main container 2 */}
      <div className="mb-[2px] bg-[#23a094] flex justify-center items-center gap-4 md:my-[2px]">

        {/* Icon container */}
        <Parallax
        className="Parallax-module__parallax--skrA3"
        translateY={[
          '-20%',
          '20%'
        ]}
        >
          <div className="w-14 h-14 bg-[#ffc900] border-[2px] border-black rounded-xl 
          shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none duration-200 hover:translate-x-[5px] hover:translate-y-[5px]">
            <img className="w-full h-full" src="/assets/icons8-javascript.svg" alt="" />
          </div>
        </Parallax>

        {/* Icon container */}
        <div className="w-14 h-14 flex justify-center items-center bg-[#90a8ed] border-[2px] border-black rounded-xl 
        shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none duration-200 hover:translate-x-[5px] hover:translate-y-[5px]">
          <img className="w-[80%] h-80[%]" src="/assets/icons8-react.svg" alt="" />
        </div>

        <div className="w-14 h-14 flex justify-center items-center bg-[#23a094] border-[2px] border-black rounded-xl 
        shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none duration-200 hover:translate-x-[5px] hover:translate-y-[5px]">
          <img className="w-[80%] h-80[%]" src="/assets/icons8-node-js.svg" alt="" />
        </div>
      </div>

      
      {/* <Parallax
        className="Parallax-module__parallax--skrA3"
        translateY={[
          '50%',
          '-50%'
        ]}
      >
      </Parallax> */}

      
    </div>
  )
}

export default App
