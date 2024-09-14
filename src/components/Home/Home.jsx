import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faChevronRight, faChevronLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import blog1 from "../media/blog-1.jpg";
import blog2 from "../media/blog-2.jpg";
import blog3 from "../media/blog-3.jpg";
import ser01 from "../media/ser01.png";
import ser02 from "../media/ser02.png";
import ser03 from "../media/ser03.png";
import aboutBgImg from "../media/ab-bg.png";
import featureIcon1 from "../media/features-icon-1.png";
import featureIcon2 from "../media/features-icon-2.png";
import featureIcon3 from "../media/features-icon-3.png";
import faqImg from "../media/faq.png";
import "./Home.css";

const Home = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef(null);
    const workRef = useRef(null);
    const sectionRef = useRef(null);
    const faqRef = useRef(null);
    

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const elements = entry.target.querySelectorAll(".quantity");
              elements.forEach((el, index) => {
                el.classList.add("animate-slideIn");
                el.classList.add(`delay-${index + 1}`);
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const work = workRef.current;
      const cards = work.querySelectorAll('.card');
  
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('drop-from-top');
              }, index * 200); 
            });
            observer.disconnect(); 
          }
        },
        { threshold: 0.3 } 
      );
  
      if (work) {
        observer.observe(work);
      }
  
      return () => {
        if (work) {
          observer.unobserve(work);
        }
      };
    }, []);


  useEffect(() => {
    const section = sectionRef.current;
    const imgElement = section.querySelector('.animated-img');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          imgElement.classList.add('slide-from-left');
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const faqItems = faqRef.current.querySelectorAll('.faq-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            faqItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('drop');
              }, index * 100); 
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(faqRef.current);
  }, []);

    const handleIndicatorClick = (index) => {
      setCurrentIndex(index);
    };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleRightClick = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex + 3 >= services.length ? prevIndex : prevIndex + 3
    );
  };

  const handleLeftClick = () => {
    setVisibleIndex((prevIndex) =>
      prevIndex - 3 < 0 ? prevIndex : prevIndex - 3
    );
  };

  const services = [
    {
      title: 'Cloud Databases',
      tags: ['SQL', 'API', 'DBaaS'],
      description: 'Cloud databases store and manage data on remote servers accessed over the internet. Cloud databases support real-time data processing and ensure high availability and disaster recovery.',
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
    {
      title: 'Website Hosting',
      tags: ['HTTP/HTTPS', 'DNS', 'SSL/TLS'],
      description: 'Website hosting provides the infrastructure and resources needed to make websites accessible online. It ensures fast load times, reliable uptime and allowing businesses to maintain a strong online presence and deliver a seamless user experience.',
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
    {
      title: 'IT Consulting',
      tags: ['ERP', 'CRM', 'Data Analytics'],
      description: 'We partner closely with our clients to assess their current IT infrastructure, identify opportunities for improvement, and develop customized solutions that drive efficiency and innovation. ',
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
    {
      title: 'Network Setup & Management',
      tags: ['LAN/WAN', 'VPN', 'Firewall'],
      description: "Network setup and management involve configuring and maintaining an organization's IT network. This ensures reliable connectivity, optimal performance, and robust security, supporting seamless communication and data transfer across devices and locations.",
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
    {
      title: 'Data Management and Analytics',
      tags: ['ETL', 'Data Visualization', 'Reporting'],
      description: 'Data management and analytics services help organizations efficiently collect, store, and analyze data. These services enable actionable insights, improve decision-making, and enhance operational efficiency by leveraging data-driven strategies and advanced analytical tools.',
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
    {
      title: 'Design and Development',
      tags: ['UI/UX', 'HTML', 'CSS'],
      description: 'Design and development services create and build customized digital solutions, from intuitive user interfaces to robust backend systems. These services ensure your website or application is visually appealing, functional, and aligned with your business objectives.',
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
    {
      title: 'Android Apps Development',
      tags: ['XML', 'Java', 'React Navite'],
      description: 'Android app development services create customized applications for Android devices, ensuring optimal performance and a seamless user experience. These services encompass everything from design and coding to testing and deployment, tailored to meet your business needs.',
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
    {
      title: 'Website Development',
      tags: ['HTML', 'CSS', 'JS'],
      description: 'Website development services create and maintain professional websites tailored to your business needs. From responsive design and seamless functionality to optimized performance and security, these services ensure a compelling online presence and an exceptional user experience.',
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
    {
      title: 'Cyber Security Services',
      tags: ['Encryption', 'Threat Detection', 'IDS/IPS'],
      description: "Cybersecurity services protect your digital assets from threats and breaches. These services include threat detection, risk assessment, firewall management, and incident response, ensuring robust defenses and safeguarding your organization's sensitive data and systems.",
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
    {
      title: 'VoIP and Unified Communications',
      tags: ['SIP', 'Call Routing', 'PBX'],
      description: 'VoIP and unified communications services streamline communication by integrating voice, video, and messaging into a single platform. These services enhance collaboration, reduce costs, and ensure seamless connectivity across various devices and locations.',
      imageSrcs: [featureIcon1, featureIcon2, featureIcon3]
    },
  ];

    const reviews = [
        {
          text: `Thanks to Future Core Innovations, our SEO rankings have significantly improved. Their strategies are top-notch, and we’ve seen a substantial increase in web traffic.`,
          name: 'Daniel K.',
          company: 'GreenLeaf Organics',
        },
        {
          text: `Future Core Innovations provided us with a comprehensive IT consulting service that transformed our business processes. Their insights and recommendations were invaluable.`,
          name: 'James B.',
          company: 'UrbanTech Dynamics',
        },
        {
          text: `Our experience with Future Core Innovations has been nothing short of extraordinary. As a growing startup, we needed a partner who could understand our vision and translate it into a functional, user-friendly product. Future Core Innovations did just that. They took the time to understand our requirements in-depth, provided valuable insights, and kept us informed throughout the development process. Their team is highly skilled, responsive, and dedicated. The custom software they developed has significantly improved our operational efficiency and customer satisfaction. We highly recommend their services to any business looking for top-notch IT solutions.`,
          name: 'VedPrakash Mishr.',
          company: 'SmartHomes Tech',
        },
      ];

      const blogPosts = [
        {
          id: 1,
          imgSrc: blog1,
          altText: 'blog-01',
          category: 'TECHNOLOGY',
          date: '10 FEB, 2023',
          title: 'How is technology working with new things?',
        },
        {
          id: 2,
          imgSrc: blog2,
          altText: 'blog-02',
          category: 'TECHNOLOGY',
          date: '10 FEB, 2023',
          title: 'Top 10 important tips on IT services & design',
        },
        {
          id: 3,
          imgSrc: blog3,
          altText: 'blog-03',
          category: 'TECHNOLOGY',
          date: '10 FEB, 2023',
          title: 'How our company works in different ways',
        },
      ];

      const faqData = [
        {
          question: "How can I request a quote for your services?",
          answer: (
            <span>
              You can request a quote by filling out the form on our "Get in Touch" page or by contacting us directly at{' '}
              <a href="mailto:help@futurecoreinnovations.tech">
                help@futurecoreinnovations.tech
              </a>.
            </span>
          ),
        },
        {
          question: "Do you provide maintenance and support for websites and apps?",
          answer: "Yes, we offer ongoing maintenance and support to ensure your website and apps are always up-to-date and functioning smoothly.",
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a variety of industries including healthcare, finance, education, e-commerce, and more.",
        },
        {
          question: "What kind of support do you offer after project completion?",
          answer: "We provide comprehensive post-project support including maintenance, updates, and technical assistance to ensure your systems run smoothly.",
        },
        {
          question: "How do you stay updated with the latest technology trends?",
          answer: "Our team regularly participates in industry conferences, training, and continuous learning programs to stay ahead of the latest technology trends.",
        },
      ];

  return (
    <div className="bg-gray-100">
<div>
  <div id="main" className="main-container">
    <div id="hero" className="flex flex-col lg:flex-row-reverse justify-around items-center h-auto lg:h-[840px] mx-auto max-w-[1100px] p-4">
      <div className="content md:order-1 p-5 lg:p-10">
        <h6 className="text-gray-300 mb-1">Future Core Innovations.</h6>
        <h1 className="text-white text-4xl font-bold mb-10">Innovating <br /> Tomorrow, Today</h1>
        <p className="text-gray-300 text-sm w-full lg:w-[500px] lg:mr-[6rem] font-medium mb-8">
          At Future Core Innovations, we specialize in delivering state-of-the-art web development, app development, and comprehensive IT services. Our expert team is dedicated to transforming your vision into reality.
        </p>
        <div>
          <button className="bg-transparent border-none">
            <Link 
              to="/contact"
              className="bg-white text-black border-2 border-[#eb3b5a] py-4 px-10 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[#eb3b5a] hover:text-white"
            >
              Get Started Now
            </Link>
          </button>
        </div>
      </div>
      <div className="box-con-container flex flex-col lg:flex-row lg:items-start lg:space-x-4">
        <div className="box-con-single lg:w-1/3">
          <div className="box-con-inner bg-white w-full md:w-[160px] md:ml-[-30px] p-5 mt-[50px] rounded-lg shadow-md hover:translate-y-[-10px] transition-transform duration-100">
            <div className="flex space-x-1">
              <FontAwesomeIcon icon={faCircle} className="text-red-500 text-[0.8rem]" />
              <FontAwesomeIcon icon={faCircle} className="text-yellow-400 text-[0.8rem]" />
              <FontAwesomeIcon icon={faCircle} className="text-green-400 text-[0.8rem]" />
            </div>
            <div>
              <h4 className="text-[17px] font-bold mt-2 mb-1">Android Apps Development</h4>
              <p className="text-[13px]">"At first, the purpose of Android was thought of as a mobile OS."</p>
            </div>
          </div>
        </div>
        <div className="box-con-multiple lg:w-2/3 flex flex-col space-y-4">
          <div className="box-con-inner bg-white p-7 rounded-lg shadow-md hover:translate-y-[-10px] transition-transform duration-100">
            <div className="flex space-x-1">
              <FontAwesomeIcon icon={faCircle} className="text-red-500 text-[0.8rem]" />
              <FontAwesomeIcon icon={faCircle} className="text-yellow-400 text-[0.8rem]" />
              <FontAwesomeIcon icon={faCircle} className="text-green-400 text-[0.8rem]" />
            </div>
            <div>
              <h4 className="text-[17px] font-bold mt-2 mb-1">Cyber Security Services</h4>
              <p className="text-[13px]">"Blocking malware and spam, vulnerability scanning, intrusion detection, firewalls,"</p>
            </div>
          </div>
          <div className="box-con-inner bg-white p-5 rounded-lg shadow-md hover:translate-y-[-10px] transition-transform duration-100">
            <div className="flex space-x-1">
              <FontAwesomeIcon icon={faCircle} className="text-red-500 text-[0.8rem]" />
              <FontAwesomeIcon icon={faCircle} className="text-yellow-400 text-[0.8rem]" />
              <FontAwesomeIcon icon={faCircle} className="text-green-400 text-[0.8rem]" />
            </div>
            <div>
              <h4 className="text-[17px] font-bold mt-2 mb-1">Design & Development</h4>
              <p className="text-[13px]">"The process of creating software applications and systems by combining design and development activities"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="text-center my-5 hero-down-btn">
  <h4 className="text-gray-400 text-base">Web Development, Cyber Security, IT Consulting and More.</h4>
  <FontAwesomeIcon icon={faChevronDown} className="m-4 h-6" />
</div>

<div id="container" className="max-w-5xl mx-auto my-30 px-4" ref={containerRef}>
      <div className="text text-center mb-10">
        <p className="font-semibold">How Can We Help You</p>
        <h1 className="text-center text-4xl font-extrabold text-gray-800 py-4">
          We’re helping teams do their best work
        </h1>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-6">
        <div className="quantity q1 bg-[#e9ddff] w-full md:w-[480px] border-l-4 border-[#e9ddff] p-6 rounded-lg shadow-md hover:border-l-4 hover:border-gray-950 hover:translate-y-[-10px] transition-transform duration-100">
          <div className="inner-qn flex items-center justify-between">
            <div>
              <h3 className="text-gray-800 text-xl font-semibold">Zero Configuration</h3>
              <p className="text-gray-800 text-sm mt-5">
                Zero Configuration, Maximum Security - Effortless Integration and Protection for Your Digital Solutions.
              </p>
            </div>
            <div>
              <img src={ser02} alt="Zero Configuration" className="h-36" />
            </div>
          </div>
        </div>
        <div className="quantity q2 bg-[#ffdadb] w-full md:w-[480px] border-l-4 border-[#ffdadb] p-5 rounded-lg shadow-md hover:border-l-4 hover:border-gray-950 hover:translate-y-[-10px] transition-transform duration-100">
          <div className="inner-qn flex items-center justify-between">
            <div>
              <h3 className="text-gray-800 text-xl font-semibold">Code Security</h3>
              <p className="text-gray-800 text-sm mt-5">
                Robust Code Security - Protecting Your Applications from Vulnerabilities with Expert Precision and Care.
              </p>
            </div>
            <div>
              <img src={ser01} alt="Code Security" className="h-36" />
            </div>
          </div>
        </div>
        <div className="quantity q3 bg-[#d6edff] w-full md:w-[480px] border-l-4 border-[#d6edff] p-5 rounded-lg shadow-md hover:border-l-4 hover:border-gray-950 hover:translate-y-[-10px] transition-transform duration-100">
          <div className="inner-qn flex items-center justify-between">
            <div>
              <h3 className="text-gray-800 text-xl font-semibold">Team Management</h3>
              <p className="text-gray-800 text-sm mt-5">
                Effective Team Management - Streamlining Collaboration and Productivity for Optimal Project Success and Growth.
              </p>
            </div>
            <div>
              <img src={ser03} alt="Team Management" className="h-36" />
            </div>
          </div>
        </div>
        <div className="quantity q4 bg-[#ffede1] w-full md:w-[480px] border-l-4 border-[#ffede1] p-5 rounded-lg shadow-md hover:border-l-4 hover:border-gray-950 hover:translate-y-[-10px] transition-transform duration-100">
          <div className="inner-qn flex items-center justify-between">
            <div>
              <h3 className="text-gray-800 text-xl font-semibold">Access Controlled</h3>
              <p className="text-gray-800 text-sm mt-5">
                Access Controlled - Ensuring Secure, Authorized Entry to Your Systems with Robust Protection Measures.
              </p>
            </div>
            <div>
              <img src={ser02} alt="Access Controlled" className="h-36" />
            </div>
          </div>
        </div>
      </div>
    </div>

{/* about section */}

<div id="about" ref={sectionRef} className="max-w-[1140px] mx-auto my-12 p-5">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full">
          <div className="p-5 m-2">
            <img
              src={aboutBgImg}
              alt="About Company"
              className="rounded-lg m-2 transition-transform duration-300 transform hover:scale-110 animated-img opacity-0"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="p-5 m-2">
            <h4 className="text-base uppercase font-bold my-7">About Company</h4>
            <p className="my-2 text-sm text-[#444444]">
              At Future Core Innovations, our mission is to push the boundaries of what's possible through innovative technology solutions. We are committed to fostering a culture of creativity and excellence, ensuring that we not only meet but exceed our clients' expectations. Our goal is to drive progress and transform industries, creating a better, more connected world for everyone.
            </p>
            <p className="my-2 text-sm text-[#444444]">
              At Future Core Innovations, we take a holistic approach to innovation. We understand that true progress requires more than just cutting-edge technology; it demands a deep understanding of our client's needs and a collaborative spirit.
            </p>
            <h2 className="my-7 font-bold">Let's Start a New Project Together</h2>
            <button className="my-2 bg-transparent border-none">
              <Link
                to="/about"
                className="bg-[#03103D] text-white py-2 px-10 rounded-md border-2 border-[#03103D] text-sm transition-colors duration-200 hover:bg-white hover:text-black"
              >
                About Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>


{/* service section */}
<div className="bg-[#e1f3f4] p-[50px_60px] rounded-[20px] max-w-[1140px] mx-auto my-[80px_0_10px_0]">
  <div className="relative">
    <p className="text-[1rem] font-semibold m-0">SERVICES WE PROVIDE</p>
    <h1 className="text-[3.5rem] font-bold text-[#1d3557]">
      Best Quality <br /> Service for your <br /> Company.
    </h1>
    <div className="absolute right-0 top-0 mt-[10px]">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="bg-white p-[10px_14px] rounded-[20px] transition-all duration-300 mx-[10px_3px] cursor-pointer hover:bg-[#1d3557] hover:text-white"
        onClick={handleLeftClick}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="bg-white p-[10px_14px] rounded-[20px] transition-all duration-300 mx-[10px_3px] cursor-pointer hover:bg-[#1d3557] hover:text-white"
        onClick={handleRightClick}
      />
    </div>
  </div>
  <div className="my-[90px] flex flex-wrap mx-auto overflow-hidden">
    {services.slice(visibleIndex, visibleIndex + (window.innerWidth < 640 ? 1 : 3)).map((service, index) => (
      <div
        className={`bg-white m-[10px] p-[20px] w-full sm:w-[300px] h-[370px] rounded-[10px] shadow-[0_8px_46px_0_rgba(3,15,39,0.04)] transition-all duration-200 hover:translate-y-[10px] ${index === 1 ? 'mt-[70px]' : ''}`}
        key={index}
      >
        <h4 className="text-[1.2rem] font-semibold">{service.title}</h4>
        <div className="flex flex-row">
          {service.tags.map((tag, i) => (
            <span className="m-[10px_20px_20px_3px] text-[12px] font-semibold" key={i}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-row">
          {service.imageSrcs.map((src, i) => (
            <img
              src={src}
              alt={`${service.title} icon ${i}`}
              className="h-[40px] m-[10px_20px_20px_3px]"
              key={i}
            />
          ))}
        </div>
        <p className="text-[#6c6b6b] text-[12px] my-[10px] font-normal">
          {service.description}
        </p>
        <button className="bg-[#03103D] mt-3 border-[#03103D] border-2 rounded-[5px] p-[5px_20px] text-[14px] font-normal text-white cursor-pointer transition-all duration-200">
          <Link to="/service">Read more.</Link>
        </button>
      </div>
    ))}
  </div>
</div>



{/* work  section */}
<div ref={workRef} className="work-section max-w-[1140px] mx-auto my-[40px] p-[10px] text-center">
      <h1 className="text-[#1d3557] my-[10px] text-[3.3rem] font-bold">
        Our Working <br /> Process
      </h1>

      <div className="flex flex-wrap justify-center mt-[50px]">
        {[
          { step: 'Meet', description: 'With Client' },
          { step: 'Think', description: 'Brainstorming' },
          { step: 'Plan', description: 'Make the Solutions' },
          { step: 'Execute', description: 'Deliver' }
        ].map((item, index) => (
          <div
            className="p-[20px] flex-[1_1_200px] bg-white m-[10px] rounded-[10px] shadow-[0_8px_46px_0_rgba(3,15,39,0.04)] transition-all duration-300 hover:bg-[#03103D] hover:translate-y-[-10px] card opacity-0"
            key={index}
          >
            <h4 className="text-[2rem] font-bold text-[#eb3b5a]">{item.step}</h4>
            <p className="text-[#6c6b6b] hover:text-white font-semibold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>


{/* review section */}
<div className="review-section py-[50px] my-[40px]">
  <div className="max-w-[1140px] max-h-[700px] h-auto lg:h-[400px] mx-auto my-[20px] p-[20px] text-center">
    <h1 className="text-white text-[3rem] my-[10px] font-bold">
      What Our Client Says
    </h1>
    <div className="r-slider container">
      <div className="user-rev">
        <p className="text-[14px] my-[20px] text-[#b1acac] mx-auto max-w-[500px]">
          {reviews[currentIndex].text}
        </p>
        <h4 className="text-[1.5rem] font-bold text-white">{reviews[currentIndex].name}</h4>
        <h5 className="text-[1.2rem] text-[#ccc] my-[10px]">{reviews[currentIndex].company}</h5>
      </div>
    </div>
    <div className="flex justify-center mt-[20px]">
      {reviews.map((_, index) => (
        <div
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className={`w-[12px] h-[12px] rounded-full mx-[5px] cursor-pointer transition-all duration-300 ${
            currentIndex === index ? 'bg-[#03103D]' : 'bg-[#ccc]'
          }`}
        ></div>
      ))}
    </div>
  </div>
</div>


{/* blog section */}
<div id="blog" className="bg-[#f7f7f7] py-[50px] px-[20px]">
  <div className="max-w-[1140px] mx-auto my-[20px]">
    <div className="text-center mb-[40px]">
      <p className="text-[#585555] font-semibold text-[20px] mb-[5px]">Latest News</p>
      <h1 className="font-bold text-[#585555] mb-[30px] text-[40px] transition-all duration-200">
        Our latest articles & <br /> resources
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
      {blogPosts.map((post) => (
        <Link to="/blog" key={post.id}>
          <div className="bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={post.imgSrc}
              alt={post.altText}
              className="w-full h-auto transition-transform duration-300 hover:scale-110"
            />
            <div className="p-[10px]">
              <div className="flex items-center space-x-2 mb-[10px]">
                <i className="fa-solid fa-tag text-[#ff3d00]"></i>
                <p className="text-[15px] text-[#585555] inline-block">{post.category}</p>
              </div>
              <div className="flex items-center space-x-2 mb-[10px]">
                <i className="fa-regular fa-calendar-days text-[#ff3d00]"></i>
                <p className="text-[15px] text-[#585555] inline-block">{post.date}</p>
              </div>
              <h1 className="text-[#585555] font-bold text-[20px] transition-all duration-200 hover:text-[#ff3d00] cursor-pointer">
                {post.title}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

{/* faq section */}
<div
      id="faq"
      ref={faqRef}
      className="max-w-[1140px] mx-auto my-[10px] mb-[40px] p-[10px]"
    >
      <h1 className="text-center mt-[60px] text-[3rem] text-[#1d3557] font-bold">
        Frequently Asked Questions
      </h1>

      <div className="my-[30px] flex flex-col lg:flex-row order-1 items-center">
        <div className="lg:w-7/12 w-full">
          <div className="p-[20px]">
            <div className="accordion">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="accordion-item faq-item my-[15px] border-none rounded-[10px]"
                >
                  <button
                    className={`accordion-button bg-white hover:shadow-md w-full lg:w-[600px] shadow-sm p-3 flex justify-between items-center rounded-[10px] ${
                      openIndex === index
                        ? 'text-white bg-[#1F3170] shadow-inner'
                        : ''
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`accordion-content rounded-sm bg-white p-6 ${
                      openIndex === index ? 'block' : 'hidden'
                    }`}
                  >
                    <p className="text-left text-[0.9rem]">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-5/12 w-full order-2">
          <div className="p-[20px]">
            <img
              src={faqImg}
              alt="FAQ"
              className="w-full h-auto rounded-[50px] transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Home;
