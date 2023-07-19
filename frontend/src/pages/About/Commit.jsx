import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { END_POINT } from "../../utils/constant"
import { MainContext } from "../../context/MainContext";

function Commit() {
    const {setMetadata, aboutUs, fetchAboutUs} = useContext(MainContext)
    const [data, setData] = useState([])
    useEffect(() => {
        setMetadata((prev) => {
            return {
              ...prev,
              title: "Cam kết | TKTL",
            };
          });
        const fetchApi = async () => {
            try {
                const res = await axios.get(`${END_POINT}/commitment`)
                res.status===200 && setData(res.data.data.commits)
                console.log(res)
            }
            catch (error) {
                console.log(error.message)
            }
        }
        fetchApi()
        fetchAboutUs()
    }, [])

    return (
        <div className="pt-[80px] mb-10 container mx-auto">
            { aboutUs && <img src={`${END_POINT}/public/${aboutUs.banners[2]}`} alt="banner" className='w-full h-[200px] md:h-[300px] lg:h-[550px] object-cover' /> }
            <div className="flex flex-col lg:flex-row mx-4 lg:mx-0 gap-x-4 my-10">
                <div className='flex-1'>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-4 mt-8 mb-4 rounded-2xl">
                        {data.map((commit) => (
                            <div key={commit._id} className="p-3 bg-[#F0B90B] even:bg-opacity-40 lg:min-h-[350px] rounded-xl">
                                <img src={commit.logo} className="mb-7" />
                                <div className="uppercase text-lg font-black my-3 text-teal-600 ">{commit.heading}</div>
                                <div className="whitespace-pre-line">{commit.detail}</div>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Commit;