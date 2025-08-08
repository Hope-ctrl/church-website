const WeeklyActivities = ()=>{
    return(
        <div className="flex justify-center items-center w-[100vw] h-[90vh] flex-col gap-[40px] mb-[20px] lg:mb-[40px]">
            <div className="flex justify-center items-center flex-col ">
                <p className="text-center text-[20px] text-[#70e000]">
                JOIN US FOR SERVICE
            </p>
            <p className="text-white">
                SUNDAY SERVICE: 9:30 - 11:00
            </p>
            <p className="text-white">
                TUESDAYS: BIBLE STUDY: 5:00 - 6:30
            </p>
            <p className="text-white">
                WEDNESDAY: SOLUTION HOUR: 8:00 - 10:00
            </p>
             <p className="text-white">
                FRIDAY: REVIVAL HOUR: 5:00 - 6:30
            </p>
            </div>

           <div className="w-[90%] lg:w-[90%] h-[60%] border-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126862.19224503996!2d3.0007615972656243!3d6.465363300000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b811c2f1e5b25%3A0x7a88e6709058dcc1!2sLagos%20Ajangbadi!5e0!3m2!1sen!2sng!4v1754594406407!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        </div>
    )
}

export default WeeklyActivities;