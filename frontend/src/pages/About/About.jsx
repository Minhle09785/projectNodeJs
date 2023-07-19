import axios from "axios";
import { useState, useEffect, useContext, useRef } from "react";
import { MainContext } from "../../context/MainContext";
import { END_POINT } from "../../utils/constant";
import vietnam from "../../assets/images/vietnamwhite.png";
import footBanner from "../../assets/images/footer.png"
import {useLocation} from "react-router-dom";


function About() {
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef()
  const ref4=useRef()
  const location = useLocation();
  
  const { setMetadata, aboutUs, fetchAboutUs } = useContext(MainContext);
  const [data, setData] = useState({});
  useEffect(() => {
    setMetadata((prev) => {
      return {
        ...prev,
        title: "Về chúng tôi | TKTL",
      };
    });

    fetchAboutUs()
  }, []);
  //scrolltotitle
  const handleScrollToTitle1 = () => {
    ref1.current.scrollIntoView({behavior: "smooth"});
  };
  const handleScrollToTitle2 = () => {
    ref2.current.scrollIntoView({behavior: "smooth"});
  };
  const handleScrollToTitle3 = () => {
    ref3.current.scrollIntoView({behavior: "smooth"});
  };
  const handleScrollToTitle4 = () => {
    ref4.current.scrollIntoView({behavior: "smooth"});
  };

  setTimeout(() => {
    if (location.hash === "#1") {
      handleScrollToTitle1();
    } else if (location.hash === "#2"){
      handleScrollToTitle2();
    } else if (location.hash === "#3"){
      handleScrollToTitle3();
    } else if (location.hash === "#4"){
      handleScrollToTitle4();
    } 
      return
  }, 1000);


  return (
    <div className="mx-auto">
      {aboutUs.banners && <img src={`${END_POINT}/public/${aboutUs.banners[0]}`} alt="banner" className="w-full h-[200px] md:h-[300px] lg:h-[550px] object-cover" /> }
      <div ref={ref1} className="flex flex-col xl:flex-row justify-between  container mx-auto my-4 lg:mt-[-210px]">
        <div>
          <div className="text-justify w-full xl:w-[525px] border-4 border-border_color p-8 text-base rounded-2xl lg:bg-yellow-100 opacity-95">
            <span className="whitespace-pre-line">{aboutUs.description}</span>
            <div className="w-20 h-[2px] bg-[#f0b90c] mt-8"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around mt-16 gap-8 font-extrabold ">
          <div className="flex flex-col items-center text-center px-3 gap-y-3 ">
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/1000xe.png"
              alt="vehicle-pic"
              className="shadow-xl rounded-full"
            />
            <span className="text-3xl text-primary">850+</span>
            {/* <span x-data="{ show: false }" x-show="show" x-init="setTimeout(() => show = true, 3000)"></span> */}
            <span className="text-xl uppercase">phương tiện</span>
          </div>
          <div className="flex flex-col items-center text-center px-3 gap-y-3">
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/25000nhan-vien.png"
              alt="staff-pic"
              className="shadow-xl rounded-full"
            />
            <span className="text-3xl text-[#F0B90B]">19.000+</span>
            <span className="text-xl uppercase">nhân viên</span>
          </div>
          <div className="flex flex-col items-center text-center px-3 gap-y-3">
            <img
              src="https://jtexpress.vn/themes/jtexpress/assets/images/1900bu-cuc.png"
              alt="office-pic"
              className="shadow-xl rounded-full"
            />
            <span className="text-3xl text-[#F0B90B]">1.900</span>
            <span className="text-xl uppercase">bưu cục</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-6 container px-3 lg:px-0 mx-auto">
        <div className="flex flex-col gap-y-6 xl:order-2">
          <span ref={ref2} className="text-2xl font-black uppercase">Tấm nhìn</span>
          <span className="text-base">{aboutUs.vision}</span>
          <div className="w-20 h-[2px] bg-[#F0B90B]"></div>
          <span className="text-2xl font-black uppercase" >Giá trị cốt lõi</span>
          <span className="text-base whitespace-pre-line ">{aboutUs.values}</span>
        </div>
        <div className="lg:w-[525px] mx-auto xl:order-1">
          { aboutUs.banners && <img src={`${END_POINT}/public/${aboutUs.logo}`} className=" w-full h-full  object-cover" /> }
        </div>
      </div>
      <div ref={ref3} className=" mx-auto my-10">
        <div  className="w-auto flex flex-col xl:flex-row justify-center gap-x-20 rounded-lg bg-amber-100 py-12">
          <div className="xl:max-w-[400px]">
            <div className="text-3xl xl:text-5xl text-center xl:text-left font-black my-4 text-[#F0B90B] ">
              LỊCH SỬ
            </div>
            <div className="p-8 mb-2 border-[3px] border-border_color rounded-2xl bg-yellow-200 shadow-2xl opacity-95">
              <span className="text-base font-semibold text-justify">
                Lịch sử của TKTL.
              </span>
            </div>
          </div>
          <div className="relative my-4 flex items-center">
            <img src={vietnam} className="w-full h-full object-contain" />
            <div className="absolute top-0 flex flex-col h-full w-full justify-between">
              {/* <div className="inline-flex flex-col items-center gap-y-1"> */}
              {/* <span className=" relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
              </span> */}
              <div className="flex items-start w-full sm:pl-20 ">
                <div className="flex flex-col px-5 py-1 items-center bg-yellow-500  border-white border-2 bg-opacity-50 text-center rounded-xl translate-x-5 xl:translate-x-0 sm:translate-y-5 xl:translate-y-0">
                  <span className="uppercase font-bold tracking-widest">Hà Nội</span>
                  <span>02/2022</span>
                </div>
              </div>
              {/* </div> */}

              <div className="flex justify-end w-full sm:-translate-y-20">
                <div className="flex flex-col px-5 py-1 items-center  bg-yellow-500 border-white border-2 bg-opacity-50 text-center rounded-xl">
                  <span className="uppercase font-bold tracking-widest">Đà Nẵng</span>
                  <span>02/2022</span>
                </div>
              </div>
              <div className="flex justify-end sm:-translate-y-20">
                <div className="flex flex-col px-5 py-1 items-center bg-yellow-500 border-white border-2 bg-opacity-50 text-center rounded-xl">
                  <span className="uppercase font-bold tracking-widest">Hồ Chí Minh</span>
                  <span>02/2022</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=' scale-[0.55] sm:scale-100 flex flex-row xl:gap-x-3 justify-center xl:h-full mt-6 xl:mt-0'>
                        <div className='inline-flex flex-col items-center gap-y-1 '>
                            <span className=" relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                            </span>
                            <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                <span className='uppercase font-bold tracking-widest'>mexico</span>
                                <span>02/2022</span>
                            </div>
                        </div>
                        <div className='inline-flex flex-col items-center gap-y-1 justify-center '>
                            <span className=" relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                            </span>
                            <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                <span className='uppercase font-bold tracking-widest'>uae</span>
                                <span>01/2022</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-around'>
                            <div className='inline-flex flex-col items-center gap-y-1  '>
                                <span className=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Saudi Arabia</span>
                                    <span>01/2022</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span className=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Thailand</span>
                                    <span>03/2019</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span className=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Cambodia</span>
                                    <span>10/2019</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span className=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Malaysia</span>
                                    <span>08/2018</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-y-12 '>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span className=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>VietNam</span>
                                    <span>23/07/2018</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span className=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Singapore</span>
                                    <span>01/2022</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-around'>
                            <div className='flex flex-col gap-y-2 text-center'>
                                <div className='text-xl p-3 bg-white rounded-3xl border-2 border-border_color hover:bg-slate-200'>Asia</div>
                                <span>International Route</span>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span className=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Philippines</span>
                                    <span>03/2019</span>
                                </div>
                            </div>
                            <div className='inline-flex flex-col items-center gap-y-1 '>
                                <span className=" relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                                    <span className="inline-flex rounded-full h-3 w-3 bg-[#ff0000]"></span>
                                </span>
                                <div className='flex flex-col px-5 py-1 items-center bg-white text-center rounded-xl'>
                                    <span className='uppercase font-bold tracking-widest'>Indonesia</span>
                                    <span>08/2015</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
        {/* <div className='w-full'>
                    <img src="https://jtexpress.vn/themes/jtexpress/assets/images/map-world-in-mobile.png" className='w-full h-[550px]' />
                </div> */}
      </div>
      <div className="relative w-full lg:px-0  mt-16">
        <div className="flex flex-col mx-auto justify-center items-center gap-y-0 lg:gap-y-8 px-4 container w-full">
          <span ref={ref4} className="text-2xl lg:text-4xl font-black text-center uppercase text-[#F0B90B]">
            Mạng lưới phủ sóng
          </span>
          <span className=" lg:text-base text-justify lg:w-4/5 p-3 shadow-2xl rounded-xl border-[3px] bg-yellow-200 border-border_color tracking-wide">
            Mạng lưới phủ sóng của TKTL.
          </span>
        </div>
        <img
          src={footBanner}
          className="w-full h-auto object-cover pt-5"
        />
      </div>
    </div>
  );
}

export default About;
