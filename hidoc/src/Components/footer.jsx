
 import { useData } from '../context/dataContext';
 import { FaInstagram } from "react-icons/fa";
 import { TiSocialFacebook } from "react-icons/ti";
 import { PiYoutubeLogoLight } from "react-icons/pi";
 import { CiLinkedin } from "react-icons/ci";
 import { CiFolderOn } from "react-icons/ci";
 import { MdOutlineVideoCameraFront } from "react-icons/md";
 import { LuFileSpreadsheet } from "react-icons/lu";
 import { AiOutlineCalculator } from "react-icons/ai";
 import { CiTrophy } from "react-icons/ci";
 import { FcSurvey } from "react-icons/fc";
 
 const footer=()=> {
    const data=useData()
    console.log(useData)
  return (
    <>
      <div className="bg-[#0E0B35] text-white p-5 mr-20 ml-20 h-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="flex flex-col space-y-2">
                  <img src="./Logo.jpg" alt="Logo" className="mb-3"/>
                  <p>Fastest Growing Medical Platform for Doctors.</p>
                  <div className="flex space-x-4">
                      <a href="#"><TiSocialFacebook /></a>
                      <a href="#"><FaInstagram /></a>
                      <a href="#"><PiYoutubeLogoLight /></a>
                      <a href="#"><CiLinkedin /></a>
                  </div>
              </div>
              <div className="flex flex-col space-y-2">
                  <h3 className="font-bold">REACH US</h3>
                  <p>Please contact the below details for any other information</p>
                  <p>Email: info@hidoc.co</p>
                  <p>Address: Hidoc Dr. Inc, 2005 Limestone Rd, STE 200-C, Wilmington, DE, 19808, United States.</p>
              </div>
              <div className="col-span-1 lg:col-span-2">
                  <h3 className="font-bold">HIDOC DR. FEATURES</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
                      <div className="flex flex-col items-center">
                          <div className="bg-blue-500 p-4 rounded-lg">
                          <CiFolderOn />
                          </div>
                          <p className="mt-2">Drug Database</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <div className="bg-orange-500 p-4 rounded-lg">
                          <MdOutlineVideoCameraFront />
                          </div>
                          <p className="mt-2">Webinars</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <div className="bg-red-500 p-4 rounded-lg">
                          <LuFileSpreadsheet />
                          </div>
                          <p className="mt-2">Drug Interaction</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <div className="bg-green-500 p-4 rounded-lg">
                          <AiOutlineCalculator />
                          </div>
                          <p className="mt-2">Medical Calculator</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <div className="bg-blue-500 p-4 rounded-lg">
                          <LuFileSpreadsheet />
                          </div>
                          <p className="mt-2">Articles</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <div className="bg-purple-500 p-4 rounded-lg">
                          <CiTrophy />
                          </div>
                          <p className="mt-2">Quizzes</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <div className="bg-blue-500 p-4 rounded-lg">
                          <LuFileSpreadsheet />
                          </div>
                          <p className="mt-2">Diseases Database</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <div className="bg-red-500 p-4 rounded-lg">
                          <FcSurvey />
                          </div>
                          <p className="mt-2">Surveys</p>
                      </div>
                  </div>
              </div>
          </div>
          </div>
          <div className="text-center mt-5 border-t border-zinc-700 pt-3">
              <p>© Copyright 2022 Hidoc Dr. Inc.</p>
              <p><a href="#" className="text-blue-300 hover:text-blue-500">Terms & Conditions</a> | <a href="#" className="text-blue-300 hover:text-blue-500">Privacy Policy</a></p>
          </div>
      
      </>
  )
}

export default footer