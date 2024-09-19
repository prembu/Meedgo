import midimage7 from "../assets/midimage7.png";
import midimage8 from "../assets/midimage8.png";
import midimage9 from "../assets/midimage9.png";


function Section3() {
  return (
    <div className=" w-full h-[1200px]pt-10">
      <div className="flex pt-16 pl-24 gap-28 ">
        <div className=" pl-9 w-[600px]  h-[550px] pt-[60px]">
          <div className="flex gap-20">
          <img src={midimage8} alt="" className=" w-[170px] h-[170px] pt[2px]"/>
          <img src={midimage9} alt="" className=" w-[170px] h-[170px] pt-[12px]"/>
          </div>
            <h1 className="font-bold text-5xl ">
            Manage your <br />Pharmacy 
            </h1>
            <p>
            Meedgo ERP is an inventory management system that <br /> streamlines processes and offers comprehensive financial <br />
            tracking. It generates detailed statements and provides both <br />graphical and summary reports.
            </p>
          <div className="flex gap-0 pt-3 ">
          <button className="btn2">Download App</button>
          <h1>Learn More</h1>
          </div>
        </div>

        <div className="w-[700px]  h-30">
          <img src={midimage7} alt=""  />
        </div>
      </div>
    </div>
  );
}

export default Section3;
