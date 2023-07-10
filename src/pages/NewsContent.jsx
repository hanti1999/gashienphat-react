
import { useParams } from "react-router-dom";
import react, { useState, useEffect } from "react";
import { db } from "../firebase.config";
import { getDoc, doc } from "firebase/firestore";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import blogItems from "../assets/data/blogs";
import CommonSection from "../components/UI/CommonSection";

import ConvertVie from '../assets/ConvertVie'

import '../styles/newsContent.css'

function NewsContent() {
    const [blog, setBlog] = useState({})
    const { id } = useParams();

    // Test
    useEffect(() => {
        setBlog(blogItems[id - 1])
    },[])

    return (
        <Helmet title='Tin tức' >
            <CommonSection title={'Tin tức'} />
            <div className="wid-1200">
                <div className="grid grid-cols-12 gap-6 mt-8">
                    <div className="col-span-8">
                        <h1 className="font-bold text-20">{blog.blogName}</h1>
                        <p>{blog.blogDesc}</p>
                    </div>
                    <div className="col-span-4">
                        <div>
                            <h1 className="text-20 font-bold mb-4">Tin khác</h1>
                            {
                                blogItems.slice(0,5).map((blog, index)=> (
                                    <div className='flex mb-8 blog__mini' key={index}>
                                        <Link to={`/news/${blog.id}`} className='flex-2 overflow-hidden mr-4 w-40 aspect-video rounded-lg'>
                                            <img src={blog.blogImg} alt="" className='object-cover' />
                                        </Link>
                                        <div className="flex-1">
                                            <h3 className='font-bold text-16 text-333 mb-4'>{blog.blogName}</h3>
                                            <span className='text-[#6c757d]'>{blog.blogDate}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default NewsContent;