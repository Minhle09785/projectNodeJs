import React, { useContext, useState,useEffect } from 'react';
import { Tabs } from 'antd';
import CuocVanChuyen from './CuocVanChuyen';
import HangCamGui from './HangCamGui';
import VanDon from './VanDon';
import BuuCuc from './BuuCuc';
import BangGia from './BangGia';
import { Outlet, useNavigate } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';
import { END_POINT } from '../../utils/constant';
const { TabPane } = Tabs;

export default function Track({ number }) {
    const { aboutUs, fetchAboutUs} = useContext(MainContext);
    useEffect(() => {
        fetchAboutUs()
    },[])


    const onChange = (key) => {
        console.log(key);
    };
    const navigate = useNavigate()
    const [defaultService, setDefaultService] = useState("cước vận chuyển")
    function callback(dichVu) {
        setDefaultService(dichVu);
        navigate(`/tra-cuu/${dichVu}`)   
    }   

    return (
        <>
            {aboutUs.banners && <img className='w-full h-[200px] md:h-[300px] lg:h-[550px] object-cover' src={`${END_POINT}/public/${aboutUs.banners[5]}`} />}
            <div className='custom-tab shadow-[#000000] container mx-auto text-xl '
                style={{ maxWidth: "1200px" }} >
                <Tabs activeKey={number} onChange={callback} centered size='large' tabPosition='top' type='line' className='p-3' tabBarStyle={{ color: "#fcd535" }} >
                    <TabPane tab="Cước vận chuyển" key="cuoc-van-chuyen" >
                        <CuocVanChuyen />
                    </TabPane>
                    <TabPane tab="Vận đơn" key="van-don">
                        <VanDon />
                    </TabPane>
                    <TabPane tab="Bưu cục" key="buu-cuc">
                        <BuuCuc />
                    </TabPane>
                    <TabPane tab="Bảng giá" key="bang-gia">
                        <BangGia />
                    </TabPane>
                    <TabPane tab="Hàng cấm gửi" key="hang-cam-gui">
                        <HangCamGui />
                    </TabPane>
                </Tabs>
            </div>
            <Outlet />
        </>
    )
}
