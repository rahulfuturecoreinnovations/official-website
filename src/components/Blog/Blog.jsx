import blogem from '../images/blog-em.jpg';
import blogcy from '../images/blog-cyber.jpg';
import blogsf from '../images/blog-sfd.jpg';
import blogco from '../images/blog-cod.jpg';
import blogda from '../images/blog-data.jpg';
import blog1 from '../images/blog-1.jpg';
import blog2 from '../images/blog-2.jpg';
// import blog3 from '../images/blog-3.jpg'

const Blog = () => {
    return (
        <>
            {/* Main Content */}
            <div id="all-training-sec-1" className="py-20 bg-gray-100">
                <div id="all-training-sec-1-inner" className="mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="col-span-2">
                            <div className="flex flex-col gap-6">
                                {[
                                    {
                                        imgSrc: blogem,
                                        title: 'Emerging Technologies',
                                        description: 'Emerging technologies in IT, such as quantum computing, 5G, AI, machine learning, and blockchain, are revolutionizing industries by enhancing computational power, connectivity, and security.',
                                    },
                                    {
                                        imgSrc: blogcy,
                                        title: 'Cybersecurity',
                                        description: 'Cybersecurity involves protecting systems, networks, and data from cyber threats. With the rise of sophisticated attacks, robust strategies are essential.',
                                    },
                                    {
                                        imgSrc: blogsf,
                                        title: 'Software Development',
                                        description: 'Software development involves creating and maintaining applications through methodologies like DevOps, Agile, and Waterfall.',
                                    },
                                    {
                                        imgSrc: blogco,
                                        title: 'Cloud Computing',
                                        description: 'Cloud computing revolutionizes IT by providing scalable, on-demand resources over the internet.',
                                    },
                                    {
                                        imgSrc: blogda,
                                        title: 'Data Science and Analytics',
                                        description: 'Data science and analytics involve extracting insights from vast amounts of data to drive informed decision-making.',
                                    },
                                ].map((post, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow transition-transform duration-300 hover:shadow-lg">
                                        <img src={post.imgSrc} alt={post.title} className="rounded-t-lg w-full h-auto" />
                                        <h4 className="mt-4 text-xl font-bold">{post.title}</h4>
                                        <p className="text-gray-600">{post.description}</p>
                                        <button className="mt-4 bg-[#03103D] text-white py-2 px-6 rounded-md">
                                            <a href="#">Read More</a>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <aside className="col-span-1">
                            <div className="mb-4">
                                <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded-lg" />
                                <i className="fa fa-search blog-ser-icon absolute top-3 right-3 bg-[#03103D] p-1 rounded text-white"></i>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow mb-6">
                                <h1 className="text-lg font-bold mb-4">Categories</h1>
                                <button className="w-full text-left bg-white hover:bg-[#03103D] hover:text-white p-2 rounded">Website Development</button>
                                <button className="w-full text-left bg-white hover:bg-[#03103D] hover:text-white p-2 rounded">Android Apps Development</button>
                                <button className="w-full text-left bg-white hover:bg-[#03103D] hover:text-white p-2 rounded">Cyber Security Services</button>
                                <button className="w-full text-left bg-white hover:bg-[#03103D] hover:text-white p-2 rounded">Design & Development</button>
                                <button className="w-full text-left bg-white hover:bg-[#03103D] hover:text-white p-2 rounded">Website Hosting</button>
                                <button className="w-full text-left bg-white hover:bg-[#03103D] hover:text-white p-2 rounded">IT Consulting</button>
                            </div>

                            {/* Recent Posts Section */}
                            <div className="bg-white p-4 rounded-lg shadow mb-6">
                                <h1 className="text-lg font-bold mb-4">Recent Post</h1>
                                <div className="flex flex-col mb-4">
                                    <img src={blog1} alt="" className="w-full h-auto mb-2" />
                                    <div>
                                        <h3 className="font-semibold">Post launch show initial product target business</h3>
                                        <span className="text-gray-500"><i className="fa-solid fa-calendar-days"></i> 22 Mar 2022</span>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <img src={blog2} alt="" className="w-full h-auto mb-2" />
                                    <div>
                                        <h3 className="font-semibold">Post launch show initial product target business</h3>
                                        <span className="text-gray-500"><i className="fa-solid fa-calendar-days"></i> 22 Mar 2022</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Service Section */}
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h1 className="text-3xl p-5 font-semibold text-start text-blue-950 mb-4">Services</h1>
                                <ul className="flex flex-col p-5 leading-10  text-lg relative -top-4 ">
                                    <li className='hover:bg-blue-900 bg-blue-950 text-stat text-white my-3 py-1  w-auto hover:translate-x-0  rounded-lg'>
                                        <a href="#" >Cloud Databases</a>
                                    </li>
                                    <li className='hover:bg-blue-900 text-start text-white bg-blue-950 my-3 py-1  w-auto  rounded-lg'>
                                        <a href="#" >Website Development</a>
                                    </li>
                                    <li className='hover:bg-blue-900 text-start text-white bg-blue-950 my-3 py-1  w-auto  rounded-lg'>
                                        <a href="#" >Network Setup & Management</a>
                                    </li>
                                    <li className='hover:bg-blue-900 text-start text-white bg-blue-950 my-3 py-1  w-auto  rounded-lg'>
                                        <a href="#" >Network Setup & Management</a>
                                    </li>
                                    <li className='hover:bg-blue-900 text-start text-white bg-blue-950 my-3 py-1  w-auto  rounded-lg'>
                                        <a href="#" >Cyber Security Services</a>
                                    </li>
                                    <li className='hover:bg-blue-900 text-start text-white bg-blue-950 my-3 py-1  w-auto  rounded-lg'>
                                        <a href="#" >Android Apps Development</a>
                                    </li>
                                    <li className='hover:bg-blue-900 text-start text-white bg-blue-950 my-3 py-1  w-auto  rounded-lg'>
                                        <a href="#" >Design & Development</a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;