import pastor from "../../assets/images/pastor.jpg"

const Expectation = ()=>{
    const expectations = [
        "Bold, uncompromised teaching rooted in the truth of God's Word.",
        "Messages that point to Jesus  the only way, truth, and life.",
        "Spirit-filled worship that honors and glorifies Christ.",
        "A community built on love, prayer, and discipleship.",
        "Christ-centered teaching that helps children grow in faith."
    ]
    return(
        <div className="w-[90vw] mx-auto h-[70vh] lg:h-[90vh] lg:py-[80px] flex ">
            <div className="w-[50%] h-[100%] hidden lg:flex bg-[gray]">
                 <img src={pastor} alt="" className="w-[100%] h-[100%] object-cover" />
            </div>
            <div className="w-[100%] h-[100%] flex justify-center flex-col gap-[20px] items-center lg:items-start lg:w-[50%] border-e-red-500 p-[20px]">
                <p className="text-[30px] font-bold">
                    WHAT TO EXPECT:
                </p>
                <ul className="flex justify-center text-center lg:text-left items-center flex-col w-[100%] gap-[10px] lg:items-start">
                    {
                        expectations.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>   
            </div>
        </div>
    )
}

export default Expectation;