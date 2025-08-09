import picture from "../assets/images/expectation.jpg"

const Sermon = ()=>{
    return(
        <div className="flex justify-around flex-col items-center bg-[#ffffff] ">
            <div className="w-[100vw] lg:w-[1000px] xl:w-[1200px] h-[70px] flex flex-col justify-center p-[10px]  ">
                <p className="text-[30px] text-black uppercase font-bold ">
                    Sermons
                </p>
                <div className="w-[50px] h-[2px] bg-[#FF9863] "></div>
            </div>
            <div className="w-[100vw] h-[500px] md:h-[300px] p-[10px] text-black mb-[20px] md:flex md:gap-[10px] lg:w-[1000px] lg:gap-[20px] xl:w-[1200px]">
                <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] ">
                    <img src={picture} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] ">
                    <p className="text-[30px] font-bold uppercase mt-[10px]">
                        loving christ
                    </p>
                    <p className="capitalize font-bold text-[#FF9863] mb-[10px]">
                        24th august, 2025
                    </p>
                    <p className="mb-[10px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil autem laboriosam assumenda aperiam voluptas cumque amet, eveniet sed quia architecto.
                    </p>
                    <button className="px-[20px] py-[10px] bg-[#FF9863] cursor-pointer hover:opacity-[0.5] ">Read More</button>
                </div>
            </div>
                        <div className="w-[100vw] h-[500px] md:h-[300px] p-[10px] text-black mb-[20px] md:flex md:gap-[10px] lg:gap-[20px] xl:w-[1200px] lg:w-[1000px] ">
                <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] ">
                    <img src={picture} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-[100%] h-[50%] md:w-[50%] md:h-[100%] ">
                    <p className="text-[30px] font-bold uppercase mt-[10px]">
                        loving christ
                    </p>
                    <p className="capitalize font-bold text-[#FF9863] mb-[10px]">
                        24th august, 2025
                    </p>
                    <p className="mb-[10px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil autem laboriosam assumenda aperiam voluptas cumque amet, eveniet sed quia architecto.
                    </p>
                    <button className="px-[20px] py-[10px] bg-[#FF9863] cursor-pointer hover:opacity-[0.5] ">Read More</button>
                </div>
            </div>
 
        </div>
    )
}

export default Sermon;