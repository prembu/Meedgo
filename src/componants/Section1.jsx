import Image4 from "../assets/image4.png";
import Image3 from "../assets/image3.png";




function Section1() {
  return (
    <>
    
        
        <div className="pt-3">
          <div className=" rounded-2xl bg-[#EAF3FB] w-[1400px] flex h-[300px] mx-[74px] pt-[40px] relative ">
            <div className="w-[700px] h-[700px] pl-[120px] pt-10 ">
              <p className="text-[#0962E5] text-2xl">Our products</p>
              <br />
              <h1 className=" text-6xl font-bold ">
                The Edge With <br /> Meedgo
              </h1>
            </div>
            <div className="w-[700px] h-[700px] grid grid-cols-2 pt-8">
              <div className="w-[300px] h-[250px] rounded-3xl  pl-4 pt-8 bg-[#ffffff]">
                <img src={Image3} alt="" className="w-[82px] h-[82px]" />
                <h1 className="text-2xl font-normal">
                  Removal of location <br /> Barrier
                </h1>
              </div>
              <div className="w-[300px] h-[250px] rounded-3xl pl-8 pt-8 bg-[#ffffff]">
                <img src={Image4} alt="" className="w-[82px] h-[82px]" />
                <h1 className="text-2xl font-normal">Pharmacy Review</h1>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Section1