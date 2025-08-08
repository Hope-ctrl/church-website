// src/pages/Articles.jsx
import React from "react";

const articles = [
  {
    id: 1,
    date: "February 15, 2023",
    title: "Jesus came to bring Joy",
    author: "CHURCHMASTERS",
    image: "/images/img1.jpg",
  },
  {
    id: 2,
    date: "February 15, 2023",
    title: 'Is “Repent” in the Gospel?',
    author: "CHURCHMASTERS",
    image: "/images/img2.jpg",
  },
  {
    id: 3,
    date: "February 15, 2023",
    title: "Humility in Prayer",
    author: "CHURCHMASTERS",
    image: "/images/img3.jpg",
  },
  {
    id: 4,
    date: "February 15, 2023",
    title: "What is My Faith?",
    author: "CHURCHMASTERS",
    image: "/images/img4.jpg",
  },
  {
    id: 5,
    date: "February 15, 2023",
    title: "God Decrees Whatsoever Comes",
    author: "CHURCHMASTERS",
    image: "/images/img5.jpg",
  },
  {
    id: 6,
    date: "February 15, 2023",
    title: "God’s Eternal Purpose and Will",
    author: "CHURCHMASTERS",
    image: "/images/img6.jpg",
  },
];

const Sermon =()=> {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">{article.date}</p>
              <h2 className="mt-2 text-lg font-semibold hover:text-blue-600 transition-colors">
                {article.title}
              </h2>


              <div className="mt-4 flex items-center justify-between">

                <div className="flex items-center space-x-2">
                  <img
                    src="/images/avatar.png"
                    alt={article.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{article.author}</span>
                </div>


                <div className="flex space-x-2">
                  <button className="p-1 bg-gray-100 rounded-full hover:bg-gray-200">
                    👍
                  </button>
                  <button className="p-1 bg-gray-100 rounded-full hover:bg-gray-200">
                    💬
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sermon;
