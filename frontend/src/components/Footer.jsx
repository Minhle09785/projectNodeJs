import logoJT from "../assets/icons/logo-business.png";
import appStore from "../assets/images/appStore.png";
import ggPlay from "../assets/images/ggPlay.png";
import zaloIcon from "../assets/icons/icons-zalo.svg";
import axios from "axios";
import { END_POINT } from "../utils/constant";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutubeSquare,
} from "react-icons/fa";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainContext";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const { contactUs } = useContext(MainContext)
  const [services,setServices] = useState([])
  useEffect(() => {
    const getService = async()=>{
       const res = await axios.get(`${END_POINT}/service`)
       console.log(res)
       const {data} =res.data
       console.log(data.service)
       setServices(data.service)
     }
   getService()
  }, []);
  
  return (
    <footer className="bg-[#e0e3e7]">
      <div className=" grid grid-cols-1 gap-x-[70px] lg:grid-cols-3 pt-[35px] mx-auto px-4 lg:px-0 container ">
        <div className="leading-6 ">
          <img src={logoJT} className="h-[80px]" alt="logo-JnT" />
          <h5 className="mb-4 font-extrabold">
            CÔNG TY TIEN KIM THANH LOGISTICS
          </h5>
          <div className="text-[12px] mb-1 ">
            <p>
              Giấy CNĐKKD: 0313617136 - Ngày cấp: 13/01/2016, đăng ký thay đổi
              lần 06 ngày 25/09/2018
            </p>
            <p>
              Cơ Quan Cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư TP
              Hồ Chí Minh
            </p>
          </div>
          <img src="https://jtexpress.vn/themes/jtexpress/assets/images/icon-bct.png" />
        </div>
        <div>
          <h5 className="font-extrabold mb-1">TRUY CẬP NHANH</h5>
          <div className="w-full h-[2px] bg-slate-400 mb-4 relative">
            <div className="w-2/5 h-full bg-[#f0b90c] absolute"></div>
          </div>
          <div className="flex  text-[12px]">
            <div className="flex-1">
              <div className="flex">
                <div className="mr-2">
                  <p className="mb-[10px] font-bold h-8">
                    Trung tâm chăm sóc khách hàng
                  </p>
                  <Link to="/tu-van/lien-he" className="block mb-2">
                    Liên hệ với chúng tôi
                  </Link>
                  <Link to="/tu-van/dang-ki-tu-van" className="block mb-2">
                    Đăng ký tư vấn
                  </Link>
                </div>
                <div>
                <p className="mb-[10px] font-bold h-8">
                    Tuyển dụng
                  </p>
                  <Link to="/tuyen-dung" className="block mb-2">
                    Cơ hội nghề nghiệp
                  </Link>
                  <Link to="/cuoc-song" className="block mb-2">
                    Cuộc sống TKT Express
                  </Link>
                </div>
              </div>

              <div className="flex">
                <div className="mr-2">
                  <p className="mb-[10px] font-bold">Thông tin công ty</p>
                  <Link to="/ve-chung-toi#1" className="block mb-[10px]">
                    Câu chuyện thương hiệu
                  </Link>
                  <Link to="/ve-chung-toi#2" className="block mb-[10px]">
                    Tầm nhìn và giá trị cốt lõi
                  </Link>
                  <Link to="/ve-chung-toi#3" className="block mb-[10px]">
                    Lịch sử phát triển
                  </Link>
                  <Link to="/ve-chung-toi#4" className="block">
                    Mạng lưới và quy mô
                  </Link>
                </div>
                <div>
                  <p className="mb-[10px] font-bold">Dịch Vụ</p>
                  {
                    services?.map(service=>(
                      <Link to={(`dich-vu/${service.name}`).toLowerCase()}
                      className="block mb-[10px]">
                    {service.name}
                  </Link>
                    ))
                  }
                </div>
              </div>
            </div>
            
            <div>
              <p className="mb-[10px] font-bold h-8">
                Tra cứu
              </p>
              <Link to="/tra-cuu/cuoc-van-chuyen" className="block mb-2">
                Cước vận chuyển
              </Link>
              <Link to="/tra-cuu/buu-cuc" className="block mb-2">
                Bưu cục gần đây
              </Link>
              <Link to="/tra-cuu/van-don" className="block mb-2">
                Vận đơn
              </Link>
              <Link to="/tra-cuu/bang-gia" className="block mb-2">
                Bảng giá
              </Link>
              <Link to="/tra-cuu/hang-cam-gui" className="block mb-2">
                Hàng cấm gửi
              </Link>
              </div>
          </div>
        </div>
        <div>
          <h5 className="font-extrabold mb-1 ">THÔNG TIN LIÊN HỆ</h5>
          <div className="w-full h-[2px] bg-slate-400 mb-4 relative">
            <div className="w-1/2 h-full bg-[#f0b90c] absolute"></div>
          </div>
          <div className="flex mb-3">
            <IoMailOutline />
            <span className="ml-2 text-[12px]">{contactUs.email}</span>
          </div>
          <div className="flex mb-3">
            <IoCallOutline />
            <span className="ml-2 text-[12px]">{contactUs.phone}</span>
          </div>
          <div className="flex mb-5">
            <IoLocationOutline />
            <span className="ml-2 text-[12px]">{contactUs.address}</span>
          </div>
          <h5 className="font-extrabold mb-1 ">TẢI ỨNG DỤNG</h5>
          <div className="w-full h-[2px] bg-slate-400 mb-4 relative">
            <div className="w-1/2 h-full bg-[#f0b90c] absolute "></div>
          </div>
          <div className="flex">
            <img
              className="w-20 "
              src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=https://jtexpress.vn/download&choe=UTF-8"
            />
            <div className="ml-6">
              <a href="https://apps.apple.com/us/app/j-t-vnm-vip/id1474072185">
                <img src={appStore} alt="appStore-logo" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.msd.VIPyueNanClient&hl=vi&gl=US">
                <img src={ggPlay} alt="ggPlay-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-slate-400 w-3/5 mt-7 mb-7 mx-auto"></div>
      <div className="flex justify-center pb-4">
        <a href={contactUs.facebook} target="_blank">
          <FaFacebook className="mx-2 w-6 h-6" />
        </a>
        <a href={contactUs.instagram} target="_blank">
          <FaInstagram className="mx-2 w-6 h-6" />
        </a>
        <a href={contactUs.tiktok} target="_blank">
          <FaTiktok className="mx-2 w-6 h-6" />
        </a>
        <a href={contactUs.youtube} target="_blank">
          <FaYoutubeSquare className="mx-2 w-6 h-6" />
        </a>
        <a href="https://oa.zalo.me/1837464433417511317" target="_blank">
          <img src={zaloIcon} className="mx-2 w-6 " alt="zalo-icon"></img>
        </a>
      </div>
      <div className="flex justify-center items-center text-center flex-col lg:flex-row text-xs lg:text-sm pb-6">
        <a href="/">
          <span>Chính sách bảo mật</span>
        </a>
        <span className="hidden mx-1 lg:block ">|</span>
        <span className="">
          Copyright © 2022 J&T Express. All rights reserved
        </span>
      </div>
    </footer>
  );
};
export default Footer;
