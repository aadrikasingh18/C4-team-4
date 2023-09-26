import React from "react";

export const ArticleCard = (props) => {
    const { post, authorData, createdAt } = props;

    const createdDate = new Date(createdAt.toMillis()).toLocaleString();

    return (
        <div className="my-4 max-w-7xl bg-gray-100 dark:bg-navy-700 overflow-hidden shadow-md sm:rounded-2xl">
            <div className="flex items-center justify-between px-4 py-5 sm:px-6">
                <div className="w-30 basis-3/4">
                    <h3 className="oneLine text-3xl font-bold text-gray-1000 dark:text-white">{post.title}</h3>
                    <div className="text-xl text-blueSecondary dark:text-brandLinear">
                        {post.content}
                    </div>
                    <div className="text-xm font-bold text-slate-700 dark:text-white">
                        {authorData.name}
                    </div>
                    <div className="text-xs text-slate-300 dark:text-gray-400 ">
                        {createdDate}
                    </div>
                </div>
                <div className="flex items-center justify-center basis-1/4">
                    <div className="flex items-center justify-center">
                        <img className="object-fill rounded-2xl w-22 h-20" src={post.imageUrl} alt="React Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};