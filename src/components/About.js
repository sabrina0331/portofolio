import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import bg1 from "../bg1.jpeg";
import BlockContent from "@sanity/block-content-to-react";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type=="author"]{
                name,
                bio,
                "authorImage": image.asset->url,
            }`)
            .then((data) => setAuthor(data[0]))
            .catch(console.error)
    },[])
    if (!author) return <div>Loading....</div>
    return (
        <main className="text-center sm:text-left">
            <img src={bg1} alt="background" className="absolute object-cover w-full h-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-purple-800 bg-opacity-75 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()}
                            alt={author.name}
                            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
                            style={{ height: "400px"}}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h2 className="cursive text-4xl text-gray-200 mb-4">About Me</h2>
                        <h1 className='cursive text-6xl text-green-300 mb-4'>
                            Hey there. I'm {" "} <span className='text-green-100'>{author.name}</span></h1>
                            <div className="prose lg:prose-xl text-white">
                                <BlockContent blocks={author.bio} projectId='5m3s5ybn' dataset="production"></BlockContent>
                            </div>
                    </div>
                </section>
                
            </div>
        </main>
    )
}