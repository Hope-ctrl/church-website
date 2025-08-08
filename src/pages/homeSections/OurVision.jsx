import vision from "../../assets/images/vision1.jpg"

const OurVision = ()=>{
    return(
         <div className="w-[90vw] mx-auto h-[100vh] lg:h-[90vh] text-white relative">
                    <div className="w-[100%] h-[400px] flex justify-center items-start overflow-hidden">
                        <img src={vision} alt="" className="w-full h-[100%] object-cover"/>
                    </div>
                    <div className="w-[100%] h-[420px] absolute z-10 top-0 left-0 bg-gradient-to-b from-transparent to-black flex items-end pb-[50px] pl-[20px] lg:pl-[50px]">
                        <div className="w-[100%] h-[70px] flex gap-3">
                            <div className="w-[2px] h-[70px]  bg-[#70e000] "></div>
                            <p className="text-[30px] lg:text-[50px] capitalize font-bold">
                            OUR VISION
                        </p>
                        </div>
                    </div>
                   <p className=" lg:w-[50%] pl-[20px] lg:pl-[50px] mt-[50px]">
                Our core values are more than just words, they are ideals on which we as a church place high value. They are what help guide our actions and help us stay on target to what God is doing through His church.
            </p>
                    
                </div>
    )
}

export default OurVision;