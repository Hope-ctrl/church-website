import { useState } from "react"
import picture from "../assets/images/expectation.jpg"
import picture2 from "../assets/images/pastor.jpg"

const Sermon = ()=>{

    const [displaySermon, setDisplaySermon] = useState(0)

   

    const sermons = [
        {
            id: 0,
            image: picture,
            title: "loving christ",
            date: "24th august, 2025",
            intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor corporis nam accusamus itaque quis, aliquam mollitia eaque necessitatibus, expedita dolorum accusantium aut eos pariatur? Unde sit, repellat odit deserunt iusto porro fuga illo quis consectetur quisquam? Officia vel ut doloribus vitae odio ipsam cum? Nihil corrupti recusandae, necessitatibus aliquam laborum quos. Autem dolor cumque excepturi. Dolorem cupiditate eveniet ullam delectus porro vel illum, fuga accusantium sequi placeat numquam consequuntur expedita quam commodi eius provident deserunt quisquam nostrum natus corporis? Quis, ipsa maxime! Debitis quis inventore facere consectetur dignissimos quidem unde quo, voluptatibus corrupti illo delectus cum labore eligendi consequatur? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis commodi error exercitationem tempora sunt reiciendis dicta tempore animi asperiores accusamus! Nisi necessitatibus hic deleniti voluptatem aperiam esse debitis labore maiores itaque repudiandae ad laborum rem voluptates quidem inventore consectetur velit vitae ut dolor omnis, quasi vel. Quos, distinctio! Non quo, saepe, dicta autem, quia dolorum quaerat suscipit corrupti pariatur deleniti eum tempore blanditiis placeat. Odit ipsa neque possimus, eos nostrum voluptate voluptatem ad alias autem obcaecati! Ipsam, iusto odit, tenetur accusantium laborum distinctio consequuntur repellat ipsum voluptate, labore beatae perferendis. Repellendus repudiandae nam consequatur vitae ratione eveniet porro nihil quae itaque ullam, et dolorem ad eos quod laboriosam doloribus iusto dolores natus perspiciatis odit deleniti nobis modi impedit! Nulla, laborum? Dignissimos explicabo quasi nihil ad ullam doloribus dolor enim provident debitis, magnam nostrum, temporibus veniam nam iusto sit. Nihil tenetur, sapiente quam quisquam quasi natus sit itaque dolorum, molestias aut iste aperiam, labore dicta perspiciatis adipisci inventore error consequatur nam magnam ut aliquam. Omnis modi ad assumenda labore? Odit, voluptatem saepe pariatur aliquid aspernatur nesciunt ipsum quibusdam, quaerat cupiditate rem nobis. In vel doloribus cum quam repellat. Ullam esse, in et, aperiam consequuntur laudantium voluptatum delectus aliquid eius praesentium distinctio"
        },
        {
            id: 1,
            image: picture2,
            title: "following christ",
            date: "24th august, 2025",
            intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor corporis nam accusamus itaque quis, aliquam mollitia eaque necessitatibus, expedita dolorum accusantium aut eos pariatur? Unde sit, repellat odit deserunt iusto porro fuga illo quis consectetur quisquam? Officia vel ut doloribus vitae odio ipsam cum? Nihil corrupti recusandae, necessitatibus aliquam laborum quos. Autem dolor cumque excepturi. Dolorem cupiditate eveniet ullam delectus porro vel illum, fuga accusantium sequi placeat numquam consequuntur expedita quam commodi eius provident deserunt quisquam nostrum natus corporis? Quis, ipsa maxime! Debitis quis inventore facere consectetur dignissimos quidem unde quo, voluptatibus corrupti illo delectus cum labore eligendi consequatur? Accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis commodi error exercitationem tempora sunt reiciendis dicta tempore animi asperiores accusamus! Nisi necessitatibus hic deleniti voluptatem aperiam esse debitis labore maiores itaque repudiandae ad laborum rem voluptates quidem inventore consectetur velit vitae ut dolor omnis, quasi vel. Quos, distinctio! Non quo, saepe, dicta autem, quia dolorum quaerat suscipit corrupti pariatur deleniti eum tempore blanditiis placeat. Odit ipsa neque possimus, eos nostrum voluptate voluptatem ad alias autem obcaecati! Ipsam, iusto odit, tenetur accusantium laborum distinctio consequuntur repellat ipsum voluptate, labore beatae perferendis. Repellendus repudiandae nam consequatur vitae ratione eveniet porro nihil quae itaque ullam, et dolorem ad eos quod laboriosam doloribus iusto dolores natus perspiciatis odit deleniti nobis modi impedit! Nulla, laborum? Dignissimos explicabo quasi nihil ad ullam doloribus dolor enim provident debitis, magnam nostrum, temporibus veniam nam iusto sit. Nihil tenetur, sapiente quam quisquam quasi natus sit itaque dolorum, molestias aut iste aperiam, labore dicta perspiciatis adipisci inventore error consequatur nam magnam ut aliquam. Omnis modi ad assumenda labore? Odit, voluptatem saepe pariatur aliquid aspernatur nesciunt ipsum quibusdam, quaerat cupiditate rem nobis. In vel doloribus cum quam repellat. Ullam esse, in et, aperiam consequuntur laudantium voluptatum delectus aliquid eius praesentium distinctio"
        }
    ]

     const filteredSermon = sermons.find(sermon=> sermon.id === displaySermon);


    
    return(
        <div className="container mx-auto px-4 py-6">
      {/* Flex Layout for Desktop */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 space-y-8">
          {/* Recent Posts */}
          <div>
            <h2 className="text-lg font-bold mb-3">Recent Sermons</h2>
            <div className="space-y-2 text-gray-700 flex flex-col ">
                {
                    sermons.map((item, index) => (
                        <button className="text-left capitalize hover:text-[#FF9863] cursor-pointer " key={index}  onClick={(e)=> setDisplaySermon(index)}>{item.title}</button>
                    ))
                }
            </div>
          </div>

        </aside>

        <main className="w-full md:w-3/4">
          <div className="bg-white shadow-lg rounded overflow-hidden">
            <div className="relative">
              <img
                src={filteredSermon.image}
                alt="Mountains"
                className="w-full h-64 md:h-96 object-cover"
              />
              
            </div>

            <div className="p-6">
              <h1 className="text-2xl font-bold mb-3 capitalize">
                {filteredSermon.title}
              </h1>
              <div className="text-sm text-gray-500 mb-4 flex gap-4 flex-wrap">
                <span>📅 {filteredSermon.date}</span>
                <span> 🎙️ Pas. Dan Bello</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-justify">
                {filteredSermon.intro}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
    )
}

export default Sermon;