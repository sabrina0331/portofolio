import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";


export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage {
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    })
    return (
        // <main className="bg-purple-100 min-h-screen p-12">
        //     <section className="container mx-auto">
        //         <h1 className="text-5xl flex justify-center cursive">Blog posts page</h1>
        //         <br/>
        //         <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my blog</h2>
        //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        //             
        //             <article>
        //                 <Link 
        //                     to={"/post/" + post.slug.current} 
        //                     key={post.slug.current}>
        //                     <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}>
        //                         <img src={post.mainImage.asset.url} 
        //                             alt={post.mainImage.alt}
        //                             className="w-full h-full rounded-r object-cover absolute"
        //                         />
        //                         <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
        //                             <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">{post.title}</h3>
        //                         </span>
        //                     </span>
        //                 </Link>
        //             </article>
        //             ))}
        //         </div>

        //     </section>
        // </main>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
            {postData && postData.map((post, index) => (
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" 
                        src={post.mainImage.asset.url} 
                        alt={post.mainImage.alt}/>
                <div className='p-8'>
                    <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>{post.title}</div>
                    <p className='mt-2 text-gray-500'>{post.body}</p>
                </div>
                </div>
                ))}
            </div>
        </div>
    )
}