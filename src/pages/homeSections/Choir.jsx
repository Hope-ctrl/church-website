const Choir = ()=>{
    return(
       <div className="w-[100vw] h-[70vh] flex justify-center items-center">
            <div className="w-[100%] h-[80%] flex justify-center flex-col gap-[20px] items-center lg:items-start lg:w-[50%] border-2 border-e-red-500 p-[20px]">
                <p className="text-[30px] uppercase text-center lg:text-left">
                "Lift Every Voice in Praise."
                </p>
                <p className="text-center lg:text-left">
                    At Grace Chapel, worship is more than music — it's a heartfelt response to God's love. Our choir leads with passion and purpose, inviting every heart to glorify Jesus in spirit and in truth.

                </p>
                <p className="text-center lg:text-left">
                     "Sing to the Lord, all the earth; proclaim his salvation day after day."
                </p>
                <p>
                    1 Chronicles 16:23
                </p>
            </div>
            <div className="w-[50%] h-[80%] hidden lg:flex border-2 bg-[gray]">
                {/* <img src="" alt="" /> */}
            </div>
        </div>
    )
}

export default Choir;