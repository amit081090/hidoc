import { RxHamburgerMenu } from "react-icons/rx";
import { CiTrophy } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
const navbar = () => {
  return (
    <div className="container mx-auto ">
      <nav className="py-4 bg-[#EDF5F5] border-b border-zinc-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img className="w-20 h-10" src="./Logo.jpg" alt="Logo" />
            <div className="hidden md:flex space-x-2 text-sm justify-center items-center">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Drugs|
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Calculators|
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Articles|
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                News|
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Quizzes|
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Surveys|
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Webinars|
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Guidelines
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <RxHamburgerMenu />
            </div>
            <button className="flex items-center rounded-l-full rounded-r-full bg-zinc-200 text-zinc-800">
              <div className="flex-shrink-0">
                <CiTrophy />
              </div>

              <span className="p-1 text-red-500 font-bold ml-auto">274</span>
            </button>
            <button className="w-8 h-8  rounded-full bg-zinc-200 text-zinc-500 flex items-center justify-center">
              <span className="material-icons">A</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="text-center ">
        <h1 className="  bg-[#C6D9F0] text-xl font-bold text-zinc-700 ">
          Your one-stop Solution for <span className="text-[#16D1EF]">MEDICAL LEARNING & UPDATES</span>
        </h1>
        <div className=" bg-[#EDF5F5] flex items-center space-x-4">
          <p className="text-lg text-black-600 font-semibold">
            Get knowledge of the <span className="text-[#16D1EF]">APPROVED DRUGS</span>
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter drug type"
              className="p-2 border border-zinc-300 rounded-l-full rounded-r-full"
            />
            <span>
              <IoMdSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
