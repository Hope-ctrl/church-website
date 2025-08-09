import pastor from "../../assets/images/pastor.jpg"
import expectImage from "../../assets/images/expectation.jpg"

const Expectation = ()=>{
    const expectations = [
        "Bold, uncompromised teaching rooted in the truth of God's Word.",
        "Messages that point to Jesus  the only way, truth, and life.",
        "Spirit-filled worship that honors and glorifies Christ.",
        "A community built on love, prayer, and discipleship.",
        "Christ-centered teaching that helps children grow in faith."
    ]
    return(
        <div className="w-[90vw] mx-auto h-[100vh] lg:h-[90vh] text-white relative">
            <div className="w-[100%] h-[400px] flex justify-center items-start overflow-hidden">
                <img src={expectImage} alt="" className="w-full h-[100%] object-cover"/>
            </div>
            <div className="w-[100%] h-[400px] absolute z-10 top-0 left-0 bg-gradient-to-b from-transparent to-[black] flex items-end pb-[50px] pl-[20px] lg:pl-[50px]">
                <div className="w-[100%] h-[70px] flex gap-3">
                    <div className="w-[2px] h-[70px]  bg-[#FF9863] "></div>
                    <p className="text-[30px]  lg:text-[50px]  capitalize font-bold">
                    what to expect 
                </p>
                </div>
            </div>
            <ul className="pl-[20px] lg:pl-[50px] mt-[50px] list-disc text-black">
                {
                    expectations.map((items, index)=>(
                        <li key={index} className="">{items}</li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default Expectation;