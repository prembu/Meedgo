import Image6 from "../assets/Image6.png";
import Image5 from "../assets/Image5.png";
import Image4 from "../assets/Image4.png";
import Image3 from "../assets/image3.png";
import { FaCheckCircle } from "react-icons/fa";
import React from "react";
import { BiBox } from "react-icons/bi";

// hero section
function Herosection() {
  return (
    <>
      <div className="h-[850px] w-[100%] bg-[#ffffff]">
        <div className=" rounded-2xl bg-[#EAF3FB] w-[1400px] flex h-[750px] mx-[74px] pt-[40px] relative ">
          <div className="w-[700px] h-[700px] pl-[120px] pt-10 ">
            <p className="text-[#0962E5] text-2xl">Our products</p>
            <br />
            <h1 className=" text-6xl font-bold ">
              The Edge With <br /> Meedgo
            </h1>
            <h4 className="text-[#5D6C7C] text-md font-md">
              Handle customers with more speed and <br /> confidence
            </h4>
            <div className="icon1">
              <FaCheckCircle className=" " />
              <p>A.I inventory assistance </p>
            </div>
            <div className="icon1">
              <FaCheckCircle className=" " />
              <p>Removal Of location Barrier </p>
            </div>
            <div className="icon1">
              <FaCheckCircle className=" " />
              <p>Margin Rationalisation </p>
            </div>
            <div className="icon1">
              <FaCheckCircle className=" " />
              <p>Location Based Product Demand info</p>
            </div>
            <div className="icon1">
              <FaCheckCircle className=" " />
              <p>Prescription Management </p>
            </div>
            <button className="btn3">Get started for free</button>
          </div>
          <div className="w-[700px] h-[700px] grid grid-cols-2 pt-6">
            <div className="w-[300px] h-[300px] rounded-3xl drop-shadow-lg pl-6 pt-8 bg-slate-50">
              <img src={Image3} alt="" className="w-[82px] h-[82px]" />
              <h1 className="text-2xl font-normal">
                Removal of location <br /> Barrier
              </h1>
              <p>
                Take your services beyond your physical <br /> establishment and
                into the hands obr fevery customer in your hyper local market{" "}
              </p>
            </div>
            <div className="w-[300px] h-[300px] rounded-3xl drop-shadow-lg pl-8 pt-6 bg-slate-50">
              <img src={Image4} alt="" className="w-[82px] h-[82px]" />
              <h1 className="text-2xl font-normal">Pharmacy Review</h1>
              <p>
                Letting the world know about your <br /> experience and quality
                assurance , <br />
                enabling you with an edge to procure <br /> new customers .
              </p>
            </div>
            <div className="w-[300px] h-[300px] rounded-3xl drop-shadow-lg pl-6 pt-8 bg-slate-50">
              <img src={Image5} alt="" className="w-[82px] h-[82px]" />
              <h1 className="text-2xl font-normal">
                Business Opportunity <br /> creation
              </h1>
              <p>
                Giving you insists about the market’s <br />
                highest and lowest selling SKUs results in <br />
                better inventory planning and cost <br />
                optimisation.
              </p>
            </div>
            <div className="w-[300px] h-[300px] rounded-3xl drop-shadow-lg pl-6 pt-8 bg-slate-50">
              <img src={Image6} alt="" className="w-[82px] h-[82px]" />
              <h1 className="text-2xl font-normal">
                Location-based product <br />
                in-demand info
              </h1>
              <p>
                Get optimum inventory information ,<br /> taking your inventory
                turn ratio to its <br /> best levels.
              </p>
            </div>
          </div>
        </div>
        <div className=" justify-center items-center flex align-middle pt-10">
          <FaCheckCircle className=" " />
          <p>Prescription Management </p>
        </div>

        {/* herosection next */}

      </div>
    </>
  );
}

export default Herosection;
