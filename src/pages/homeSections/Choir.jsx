import choir from "../../assets/images/choir.jpg"

const Choir = ()=>{
    return(
       <div className="w-[90vw] mx-auto h-[70vh] lg:h-[90vh] lg:py-[80px] mb-[30px] flex justify-center items-center">
            <div className="w-[100%] h-[80%] flex justify-center flex-col gap-[20px] items-center lg:items-start lg:w-[50%] border-e-red-500 p-[20px] text-white">
                <p className="text-[30px] uppercase text-center lg:text-left font-bold text-[#70e000]">
                "Lift Every Voice in Praise."
                </p>
                <p className="text-center lg:text-left">
                    At CGEM, worship is more than music it's a heartfelt response to God's love. Our choir leads with passion and purpose, inviting every heart to glorify Jesus in spirit and in truth.

                </p>
                <p className="text-center lg:text-left">
                     "Sing to the Lord, all the earth; proclaim his salvation day after day."
                </p>
                <p>
                    1 Chronicles 16:23
                </p>
            </div>
            <div className="w-[50%] h-[80%] hidden lg:flex  bg-[gray]">
                <img src={choir} alt="" className="w-[100%] h-[100%] object-cover" />
            </div>
        </div>
    )
}

export default Choir;