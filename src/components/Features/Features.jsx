import React from 'react';
// Importing images
import featureDetails1 from '../images/feature-details1.webp';
import featureDetails2 from '../images/feature-details2.webp';
import featureDetails3 from '../images/feature-details3.webp';
import featureDetails4 from '../images/feature-details4.webp';
import ind01 from '../images/ind-01.png';
import ind02 from '../images/ind-02.png';
import ind03 from '../images/ind-03.png';
import ind04 from '../images/ind-04.png';
import ind05 from '../images/ind-05.png';
import ind06 from '../images/ind-06.png';
import ind07 from '../images/ind-07.png';
import ind08 from '../images/ind-08.png';
import newsletter from '../images/newletter.png';

const featuresData = [
    {
        title: "Zero Configuration",
        description: "Zero configuration is a setup approach that requires minimal or no manual configuration by the user. This method simplifies the installation and operation of software by using sensible defaults and automatic configurations.",
        benefits: [
            "Simplifies the user experience with minimal setup.",
            "Speeds up installation and deployment processes.",
            "Decreases the chances of user errors during setup.",
        ],
        imgSrc: featureDetails1,
        imgAlt: "Feature 1"
    },
    {
        title: "Code Security",
        description: "Code security refers to the practices and measures implemented to protect software code from vulnerabilities, threats, and attacks.",
        benefits: [
            "Shields software from potential exploits.",
            "Ensures the accuracy and consistency of data.",
            "Maintains the trust and confidence of users.",
        ],
        imgSrc: featureDetails2,
        imgAlt: "Feature 2"
    },
    {
        title: "Team Management",
        description: "Team management involves overseeing and coordinating a group of individuals to achieve common goals efficiently and effectively.",
        benefits: [
            "Leverages team members' strengths for better outcomes.",
            "Streamlines processes to save time and avoid delays.",
            "Builds a unified and cooperative team environment.",
        ],
        imgSrc: featureDetails3,
        imgAlt: "Feature 3"
    },
    {
        title: "Access Controlled",
        description: "Access control refers to the processes and technologies used to regulate who can view or use resources in a computing environment.",
        benefits: [
            "Protects sensitive data from unauthorized access.",
            "Ensures data is only modified by authorized users.",
            "Provides records of who accessed what and when.",
        ],
        imgSrc: featureDetails4,
        imgAlt: "Feature 4"
    }
];

const industriesData = [
    { imgSrc: ind01, title: "Manufacturing" },
    { imgSrc: ind02, title: "Healthcare" },
    { imgSrc: ind03, title: "Finance" },
    { imgSrc: ind04, title: "Tech & Travel" },
    { imgSrc: ind05, title: "Recruitment" },
    { imgSrc: ind06, title: "IT Consulting" },
    { imgSrc: ind07, title: "Real Estate" },
    { imgSrc: ind08, title: "Education" },
];

const FeaturePart = ({ title, description, benefits, imgSrc, imgAlt, reverse }) => (
    <div className={`feature-part flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center mb-4`}>
        <div className="feature-left flex-1">
            <h2 className="part-heading text-3xl font-bold text-blue-900 mb-4">{title}</h2>
            <p className="text-justify text-gray-500 mb-6">{description}</p>
            <ul className="list-disc pl-5 text-lg text-gray-800">
                {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
        </div>
        <div className="feature-right w-full lg:w-1/2 flex items-center justify-center">
            <img src={imgSrc} alt={imgAlt} className="w-full h-auto max-w-sm transform scale-90 hover:scale-100 transition-transform duration-300" />
        </div>
    </div>
);

const IndustryCard = ({ imgSrc, title }) => (
    <div className="flex flex-col items-center p-5 bg-white text-blue-900 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
        <img src={imgSrc} alt={title} className="w-20 h-20 object-contain mb-4" />
        <h4 className="text-base font-medium">{title}</h4>
    </div>
);

const Features = () => {
    return (
        <>
            {/* Features Section */}
            <section id="feature-sec" className="flex flex-col items-center justify-center w-full h-full bg-gray-100 mt-0">
                <div className="sec-heading mb-8">
                    <h1 className="text-4xl font-bold">Let's Know Our Features</h1>
                </div>
                <div className="feature max-w-5xl mx-auto p-8">
                    <div className="feature-parts flex flex-col gap-14 mb-20">
                        {featuresData.map((feature, index) => (
                            <FeaturePart
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                benefits={feature.benefits}
                                imgSrc={feature.imgSrc}
                                imgAlt={feature.imgAlt}
                                reverse={index % 2 === 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <div id="industries-sec" className="p-12 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
                <h2 className="text-3xl font-semibold text-center mb-8">Industries We Serve</h2>
                <div id="inner-d-4" className="flex flex-wrap justify-center items-center gap-6">
                    {industriesData.map((industry, index) => (
                        <IndustryCard key={index} imgSrc={industry.imgSrc} title={industry.title} />
                    ))}
                </div>
            </div>

           {/* Subscribe Section */}
<div className='mt-8 mx-auto max-w-4xl p-8 rounded-lg flex flex-col relative'>
    <h1 className='text-5xl font-bold mb-4'>Subscribe to our newsletter</h1>
    <p className='text-gray-600 mb-6'>
        Subscribe to our newsletter and get exclusive deals you won't find anywhere else straight to your inbox.
    </p>
    <form className='w-full flex flex-col items-start mb-6'>
        <input
            type="email"
            placeholder="Enter Your Email Address"
            className='w-full max-w-md p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950'
        />
        <button
            type="submit"
            className='bg-blue-950 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none'
        >
            Subscribe Now
        </button>
    </form>
    <div className='mt-4 flex justify-center'>
        <img className='w-[25rem] h-auto' src={newsletter} alt="Subscribe Image" />
    </div>
</div>
        </>
    );
};

export default Features;