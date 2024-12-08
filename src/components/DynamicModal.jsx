
import Row from './Row'

const DynamicModal = (
    isOpen, 
    toggleSidebar, 
    title, 
    actualSize, setActualSize,
    maxSize, setMaxSize,
    parentProgress, setParentProgress,
    data,
    ) => {
  return (
    <div className="relative">
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 
              ${
                isOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
          onClick={() => toggleSidebar()}
        ></div>
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-[#26236b] shadow-lg transform text-white transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center font-semibold">
            <h1 className="text-3xl pt-5">{title}</h1>

            {/* Barra Pai */}
            <h1 className="mt-6 mb-2">
              ( {actualSize} / {maxSize} )
            </h1>
            <div className="mb-6 w-full flex justify-center">
              <div className="w-1/3 bg-gray-300 rounded-full">
                <div
                  className={`bg-[#28ca99] h-3 rounded-full transition-all duration-300`}
                  style={{
                    width: parentProgress > 0 ? `${parentProgress}%` : "0",
                  }}
                ></div>
              </div>
            </div>

            <h1>pre requisites</h1>

            <div className="w-[90%]">
              <div className="flex flex-row mt-10 justify-around w-full border-b-2 pb-2 border-gray-500 ">
                <div className="w-[43px]">
                  <h1>Status</h1>
                </div>

                <div className="flex gap-52 w-[780px]">
                  <div className="w-[30px] justify-center">
                    <h1>Star</h1>
                  </div>
                  <h1 className="w-64">Problem</h1>
                  <h1 className="w-[65px]">Difficulty</h1>
                </div>

                <div className="w-[60px]">
                  <h1>Solution</h1>
                </div>
              </div>

            {data && data.content.length > 0 &&
                data.content.map((item, index) => (
                  <Row
                    key={index}
                    problem={item}
                    parentProgress={parentProgress}
                    setParentProgress={setParentProgress}
                    actualSize={actualSize}
                    setActualSize={setActualSize}
                    maxSize={maxSize}
                    setMaxSize={setMaxSize}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default DynamicModal