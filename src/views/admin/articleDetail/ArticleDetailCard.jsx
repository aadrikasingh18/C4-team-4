import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const ArticleDetailCard = (props) => {

    const { state } = useLocation();
    console.log(state);
    const { article } = state;

    return (
        <>
            <div className='mt-6 flex justify-center text-gray-1000 text-3xl font-bold dark:text-white'>
                {article.post.title}
            </div>

            <div className='my-2 flex justify-center text-gray-800 py-0 text-xl dark:text-white'>
                {article.authorData.name}
            </div>

            <div className="flex justify-center">
                <img
                    className="w-100"
                    src={article.post.imageUrl}
                    alt="article tile"
                />
            </div>

            <div className='px-10 py-10 m-5 overflow-hidden bg-gray-200 shadow-md dark:bg-navy-700 rounded-xl'>
                {article.post.content}
            </div>

            <div className="flex justify-center">
                <Link to={`..`} relative="path">
                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Back to Feed 
                    </button>
                </Link>
            </div>
        </>
    );
};