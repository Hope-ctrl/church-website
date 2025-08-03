const Expectation = ()=>{
    const expectations = [
        "Bold, uncompromised teaching rooted in the truth of God's Word.",
        "Messages that point to Jesus  the only way, truth, and life.",
        "Spirit-filled worship that honors and glorifies Christ.",
        "A community built on love, prayer, and discipleship.",
        "Christ-centered teaching that helps children grow in faith."
    ]
    return(
        <div className="w-[100vw] h-[50vh] flex ">
            <div className="w-[50%] h-[100%] hidden lg:flex border-2 bg-[gray]">
                {/* <img src="" alt="" /> */}
            </div>
            <div className="w-[100%] h-[100%] flex justify-center flex-col gap-[20px] items-center lg:items-start lg:w-[50%] border-2 border-e-red-500 p-[20px]">
                <p className="text-[30px]">
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