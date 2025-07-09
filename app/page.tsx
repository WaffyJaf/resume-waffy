 "use client";
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Facebook, Mail, Phone, MapPin, Code, Cpu} from 'lucide-react';


    // Define interfaces for TypeScript
    interface MousePosition {
      x: number;
      y: number;
    }

    interface Skill {
      name: string;
      logo: string;
      category: string;
    }

    const HomePage: React.FC = () => {
      const [isScrolled, setIsScrolled] = useState<boolean>(false);
      const [activeSection, setActiveSection] = useState<string>('home');
      const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
      const project2Ref = useRef<HTMLDivElement>(null);
       const project4Ref = useRef<HTMLDivElement>(null);
      const gameRef = useRef<HTMLDivElement>(null);
      const activityWebRef = useRef<HTMLDivElement>(null);
      const activityAppRef = useRef<HTMLDivElement>(null);
      
      const [selectedImage, setSelectedImage] = useState(null);

      const closeModal = () => {
        setSelectedImage(null);
      };


      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
          const sections = ['home', 'about', 'skills', 'projects', 'contact'];
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element && window.scrollY >= element.offsetTop - 100) {
              setActiveSection(section);
            }
          }
        };
        
        const handleMouseMove = (e: MouseEvent) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

      const skills: Skill[] = [
        { name: 'HTML', logo: '/logos/html.png', category: 'Development' },
        { name: 'CSS', logo: '/logos/css.svg', category: 'Development' },
        { name: 'JavaScript', logo: '/logos/javascript.png', category: 'Development' },
        { name: 'TypeScript', logo: '/logos/typescript.png', category: 'Development' },
        { name: 'React', logo: '/logos/react.png', category: 'Development' },
        { name: 'Next.js', logo: '/logos/nextjs.png', category: 'Development' },
        { name: 'Tailwind', logo: '/logos/tailwind.png', category: 'Development' },
        { name: 'Flutter', logo: '/logos/flutter.png', category: '' },
        { name: 'Node.js', logo: '/logos/nodejs.png', category: 'Development' },
        { name: 'MySQL', logo: '/logos/mysql.png', category: 'Development' },
        { name: 'Figma', logo: '/logos/figma.png', category: 'ออกแบบ UI/UX' },
        { name: 'Photoshop', logo: '/logos/photoshop.png', category: 'ออกแบบ UI/UX' },
        { name: 'Arduino', logo: '/logos/arduino.png', category: 'Hardware Skill' },
        { name: 'Firebase', logo: '/logos/firebase.png', category: 'Hardware Skill' },
        { name: 'Docker', logo: '/logos/docker.png', category: 'Hardware Skill' },
        { name: 'KiCad', logo: '/logos/kiCad.png', category: 'Hardware Skill' },
        { name: 'C++', logo: '/logos/c.png', category: 'Hardware Skill' },
        { name: 'Git', logo: '/logos/git.png', category: 'Tools' },
        { name: 'Postman', logo: '/logos/postman.png', category: 'Tools' },
      ];

      const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
        }
      };

      return (
        <div className="min-h-screen text-white">
          {/* Navigation Bar */}
            <nav className={`fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
              <div className="flex justify-between items-center py-4  px-6 max-w-8xl mx-auto">
                <h1 className="text-xl font-bold text-white hidden md:block">Portfolio</h1>
                <ul className="flex gap-6 text-white">
                  {[
                    { label: 'HOME', id: 'home' },
                    { label: 'ABOUT', id: 'about' },
                    { label: 'SKILLS', id: 'skills' },
                    { label: 'PROJECT', id: 'projects' },
                    { label: 'CONTACT', id: 'contact' },
                  ].map(({ label, id }) => (
                    <li
                      key={id}
                      className={`cursor-pointer hover:text-purple-400 transition ${
                        activeSection === id ? 'text-purple-400 font-semibold' : ''
                      }`}
                      onClick={() => scrollToSection(id)}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          {/* Hero Section */} 
          <section
            id="home"
            className="relative min-h-[70vh] flex items-center justify-center bg-[length:100%_100%] bg-center w-screen overflow-hidden"
            style={{
              backgroundImage: 'url("/images/bg-stars.svg")',
            }}
          >
            <div className="absolute inset-0 bg-black/100 backdrop-blur-sm"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 sm:pt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex items-center justify-center md:justify-start h-full animate-fade-in">
                 <Image
                  src="/waffyy.png"
                  alt="Astronaut"
                  width={448}  // 28rem * 16px = 448px (max size ที่ตั้งไว้)
                  height={448} // กำหนดให้เท่ากัน เพื่อรักษาสัดส่วน
                  className="w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[28rem] object-contain"
                />
                </div>
                <div className="text-center md:text-left animate-fade-in mt-20">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Natthathida Khamai
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 mb-4 animate-slide-up">
                    สาขาวิศวกรรมคอมพิวเตอร์
                  </p>
                  <p className="text-base text-gray-400 mb-8 animate-slide-up">
                    คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-slide-up">
                    <button 
                      onClick={() => scrollToSection('projects')}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <ChevronDown className="inline-block w-5 h-5 mr-2" />
                      ผลงานที่ผ่านมา
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="border-2 border-white/20 hover:border-white/40 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                    >
                      ข้อมูลติดต่อ
                    </button>
                  </div>
                  <div className="flex justify-center md:justify-start space-x-6 mb-3 ">
                      {[
                        { icon: Github, link: 'https://github.com/WaffyJaf' },
                        { icon: Facebook, link: 'https://www.facebook.com/natthathida.khamai.2025?locale=th_TH' },
                        
                      ].map(({ icon: Icon, link }, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                </div>
              </div>
            </div>
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-white/60" />
            </div> */}
          </section>

          {/* Animated Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg%20width=%22100%22%20height=%22100%22%20viewBox=%220%200%20100%20100%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23FFFFFF%22%20fill-opacity=%220.2%22%3E%3Ccircle%20cx=%2210%22%20cy=%2210%22%20r=%221%22/%3E%3Ccircle%20cx=%2250%22%20cy=%2230%22%20r=%221.5%22/%3E%3Ccircle%20cx=%2280%22%20cy=%6060%22%20r=%221%22/%3E%3Ccircle%20cx=%2220%22%20cy=%2080%22%20r=%221.2%22/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <div 
              className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl transition-all duration-1000"
              style={{
                left: mousePosition.x - 200,
                top: mousePosition.y - 200,
              }}
            ></div>
          </div>

          {/* About Section */}
          <section id="about" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    เกี่ยวกับฉัน
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    ดิฉันมีความสนใจด้านการเขียนโปรแกรมและการประยุกต์ใช้ซอฟต์แวร์ให้สามารถทำงานร่วมกับระบบต่าง ๆ ได้ 
                    โดยเฉพาะอย่างยิ่ง มีความสนใจในด้าน การพัฒนาเว็บไซต์ รวมถึง การจัดการฐานข้อมูล นอกจากนี้ยังมีพื้นฐานด้าน
                    ระบบสมองกลฝังตัวและวงจรอิเล็กทรอนิกส์ ซึ่งสามารถประยุกต์ใช้ในการพัฒนาอุปกรณ์ IoT 
                    จึงมุ่งหวังที่จะมีโอกาสฝึกงานในองค์กรที่สามารถต่อยอดความรู้และทักษะเหล่านี้ได้จริง
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <Code className="w-8 h-8 text-blue-400 mb-2" />
                      <h3 className="font-semibold mb-1">Software</h3>
                      <p className="text-sm text-gray-400">Software Developer </p>
                      <p className="text-sm text-gray-400">Full-stack development</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <Cpu className="w-8 h-8 text-purple-400 mb-2" />
                      <h3 className="font-semibold mb-1">Hardware</h3>
                      <p className="text-sm text-gray-400">Circuit & Embedded Systems</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <div className="w-60 h-60 bg-gradient-to-r from-blue-900 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-6xl">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  Skills
                </h2>          
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {['Development', 'Hardware Skill', 'ออกแบบ UI/UX' , 'Tools'].map((category) => (
                  <div key={category} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {skills.filter(skill => skill.category === category).map((skill, index) => (
                        <div
                          key={index}
                          className="group relative flex flex-col items-center p-4 hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:scale-105 animate-slide-up"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          <Image
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            width={64}  
                            height={64}
                            className="object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                          />
                          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Project & Experience
                </h2>
                <p className="text-lg text-gray-300">ผลงานและประสบการณ์สะสมที่ผ่านมา</p>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {/* Project 1: Activity Up */}
                <div
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-slide-in-left"
                  style={{ animationDelay: '0s' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">Activity Up</h3>
                    <p className="text-gray-300 mb-3">เว็บไซต์เพื่ออำนวยความสะดวกสำหรับกิจกรรมมหาวิทยาลัยพะเยา</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['React', 'Tailwind CSS','Node.js','TypeScript', 'Mysql', 'Prisma', 'Flutter'].map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Section 1: รูปเว็บไซต์ */}
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-gray-200 mb-2">ภาพเว็บไซต์</h4>
                      <div className="relative">
                        <div
                          ref={activityWebRef}
                          className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                        >
                          {[
                            { src: '/AC/login.png', caption: 'หน้าเข้าสู่ระบบ' },
                            { src: '/AC/home.png', caption: 'หน้าแรกของเว็บไซต์และฟังก์ชันหลัก' },
                            { src: '/AC/pjdetial.png', caption: 'รายละเอียดกิจกรรม' },
                            { src: '/AC/activity.png', caption: 'หน้ากิจกรรมที่มีการจัดขึ้น' },
                          ].map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="w-[450px] flex-shrink-0 snap-center flex flex-col items-center animate-slide-up hover:scale-105 transition-transform duration-300"
                              style={{ animationDelay: `${imgIndex * 0.2}s` }}
                              
                            >
                              <Image
                                src={image.src}
                                alt={`Activity Up preview ${imgIndex + 1}`}
                                width={500}      
                                height={300}      
                                className="rounded-lg shadow-lg mb-2 object-cover"
                              />
                              <p className="text-sm text-gray-300 text-center">{image.caption}</p>
                            </div>
                          ))}
                        </div>

                        {/* ปุ่มเลื่อนซ้าย */}
                        <button
                          onClick={() => activityWebRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                        >
                          <ChevronDown className="rotate-90 w-5 h-5 text-white" />
                        </button>

                        {/* ปุ่มเลื่อนขวา */}
                        <button
                          onClick={() => activityWebRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                        >
                          <ChevronDown className="-rotate-90 w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>


                        {/* Section 2: รูปแอปมือถือ */}
                        <div>
                          <h4 className="text-lg font-medium text-gray-200 mb-2">ภาพแอปพลิเคชันมือถือ</h4>
                          <div className="relative">
                            <div
                              ref={activityAppRef}
                              className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                            >
                              {[
                                '/AC/homem.png',
                                '/AC/scan.png',
                                '/AC/record.png',
                                '/AC/regis.png'
                              ].map((image, imgIndex) => (
                                <Image
                                  key={imgIndex}
                                  src={image}
                                  alt={`Activity Up app preview ${imgIndex + 1}`}
                                  width={280}
                                  height={540}
                                  className="object-cover"
                                  priority={imgIndex === 0} // โหลดรูปแรกก่อน (ถ้ต้องการ)
                                />
                              ))}
                            </div>
                            {/* ปุ่มเลื่อนซ้าย */}
                            <button
                              onClick={() => activityAppRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                            >
                              <ChevronDown className="rotate-90 w-5 h-5 text-white" />
                            </button>
                            {/* ปุ่มเลื่อนขวา */}
                            <button
                              onClick={() => activityAppRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                            >
                              <ChevronDown className="-rotate-90 w-5 h-5 text-white" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>


                {/* Project 2: Smart Mailbox */}
                <div
                  className="group relative bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">Miniproject ทางด้านฮาร์ดแวร์  </h3>
                    <p className="text-gray-300 mb-3">รวมโปรเจคที่เคยทำมาทั้งในส่วนของการออกแบบวงจร การประกอบวงจร การเชื่อมต่อ WI-FI และ Docker เบื่องต้น  </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['KiCad','Arduino', 'ESP32', 'C++', 'IoT' , 'Docker'].map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                   
                    
                    {/* รูปภาพพร้อมปุ่มเลื่อน ซ้าย/ขวา แสดงได้ทุกขนาดหน้าจอ */}
                      <div className="relative mb-4">
                        {/* ref container */}
                        <div
                          ref={project2Ref}
                          className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                        >
                          {[
                            { src: '/k/k3.png', caption: 'ออกแบบวงจรควบคุมความเร็วมอเตอร์โดยใช้ KiCad และทำการบัดกรีเพื่อทดลองใช้งาน' },
                            { src: '/k/car.jpg', caption: 'ประกอบรถ Smart Robot Car พร้อมเขียนโปรแกรมควบคุมผ่าน Arduino IDE เช่น การเดินตามเส้น ควบคุมรถด่วยจอยสติ๊ก และตรวจจับสิ่งกีดขวาง' },
                            { src: '/k/to.jpg', caption: 'ตู้ไปรษณีย์อัจฉริยะ ตรวจจับการเปิดตู้ไปรษณีย์ด้วยเซนเซอร์อินฟราเรด (IR sensor) เมื่อมีจดหมายเข้ามา จะส่งข้อความแจ้งเตือนผ่าน LINE Notify ' },
                          ].map((item, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="w-[380px] flex-shrink-0 snap-center flex flex-col items-center animate-slide-up hover:scale-105 transition-transform duration-300"
                              style={{ animationDelay: `${imgIndex * 0.2}s` }}
                            >
                              <Image
                                src={item.src}
                                alt={`Project preview ${imgIndex + 1}`}
                                width={480}      
                                height={256}     
                                className="rounded-lg shadow-lg mb-2 object-cover"
                              />
                              <p className="text-white text-sm text-center">{item.caption}</p>
                            </div>
                          ))}
                        </div>

                        {/* ปุ่มเลื่อนซ้าย */}
                        <button
                          onClick={() => project2Ref.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                        >
                          <ChevronDown className="rotate-90 w-5 h-5 text-white" />
                        </button>

                        {/* ปุ่มเลื่อนขวา */}
                        <button
                          onClick={() => project2Ref.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                        >
                          <ChevronDown className="-rotate-90 w-5 h-5 text-white" />
                        </button>
                      </div>
                    
                    
                  </div>
                </div>

                {/* Project 3: Game ID Store Website */}
                  <div
                    className="group relative bg-amber-300/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-slide-in-left"
                    style={{ animationDelay: '0.4s' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2">เว็บร้านค้าขายไอดีเกม</h3>
                      <p className="text-gray-300 mb-3">เว็บไซต์อีคอมเมิร์ซสำหรับซื้อขายไอดีเกมที่นิยมในหมู่เกมเมอร์</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['React', 'Tailwind CSS','Node.js','TypeScript', 'Mysql', 'Prisma'].map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* รูปภาพพร้อมปุ่มเลื่อน ซ้าย/ขวา แสดงได้ทุกขนาดหน้าจอ */}
                      <div className="relative mb-4 w-full">
                        {/* ref container */}
                        <div
                          ref={gameRef}
                          className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                          style={{ width: '100%' }}
                        >
                          {[
                            '/homegame.png',
                            '/cart.png',
                            '/manageproduct.png',
                            '/all.png'
                          ].map((image, imgIndex) => (
                            
                            <Image
                              key={imgIndex}
                              src={image}
                              alt={`Game Store preview ${imgIndex + 1}`}
                              width={480}      
                              height={280}     
                              className="object-cover rounded-lg flex-shrink-0"
                              priority={imgIndex === 0} 
                            />
                          ))}
                        </div>

                        {/* ปุ่มเลื่อนซ้าย */}
                        <button
                          onClick={() => gameRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                        >
                          <ChevronDown className="rotate-90 w-5 h-5 text-white" />
                        </button>

                        {/* ปุ่มเลื่อนขวา */}
                        <button
                          onClick={() => gameRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                        >
                          <ChevronDown className="-rotate-90 w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                {/* Project 4: Robot Car Project */}
                <div
                  className="group relative bg-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-masonry-reveal"
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">ระบบทดสอบ seo</h3>
                    <p className="text-gray-300 mb-3">
                      เว็บไซต์บทความที่ออกแบบมาเพื่อ SEO Friendly{' '}
                      <a
                        href="https://waffy-game.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300 transition-colors"
                      >
                        คลิกเพื่อเยี่ยมชม
                      </a>
                    </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                      {['Next.js', 'Git', 'Vercel'].map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* รูปภาพพร้อมปุ่มเลื่อน ซ้าย/ขวา แสดงได้ทุกขนาดหน้าจอ */}
                      <div className="relative mb-4">
                        {/* ref container */}
                        <div
                          ref={project4Ref}
                          className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                        >
                          {[
                            { src: '/game/newgame.png', caption: 'หน้าบทความเกมใหม่' },
                            { src: '/game/das.png', caption: 'หน้าแดชบอร์ด Google Search Console  ' },
                            { src: '/game/key.png', caption: 'หน้าบทความ' },
                            { src: '/game/home3.png', caption: 'หน้าแรกของเว็บไซต์' }
                          ].map((item, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="w-[450px] flex-shrink-0 snap-center flex flex-col items-center animate-slide-up hover:scale-105 transition-transform duration-300"
                              style={{ animationDelay: `${imgIndex * 0.2}s` }}
                            >
                              <Image
                                src={item.src}
                                alt={`Game Store preview ${imgIndex + 1}`}
                                width={500}     
                                height={320}    
                                className="rounded-lg shadow-lg mb-2 object-cover"
                              />
                              <p className="text-sm text-gray-300 text-center">{item.caption}</p>
                            </div>
                          ))}
                        </div>

                        {/* ปุ่มเลื่อนซ้าย */}
                        <button
                          onClick={() => project4Ref.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                        >
                          <ChevronDown className="rotate-90 w-5 h-5 text-white" />
                        </button>

                        {/* ปุ่มเลื่อนขวา */}
                        <button
                          onClick={() => project4Ref.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                        >
                          <ChevronDown className="-rotate-90 w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 relative z-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  ข้อมูลติดต่อ
                </h2>
                <p className="text-lg text-gray-300">
                  สามารถติดต่อได้ผ่านช่องทางด้านล่างนี้ หากต้องการพูดคุยหรือสอบถามข้อมูลเพิ่มเติม
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4 justify-center">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Interstellar Email</h3>
                    <p className="text-gray-300">nat.tatida678@gmail.com </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Space Comm</h3>
                    <p className="text-gray-300">080-7026932 </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">address</h3>
                    <p className="text-gray-300">เชียงใหม่, ประเทศไทย</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <style jsx>{`
            @keyframes fade-in {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slide-up {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes slide-in-left {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }
            
            @keyframes masonry-reveal {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            
            .animate-fade-in {
              animation: fade-in 1s ease-out;
            }
            
            .animate-slide-up {
              animation: slide-up 1s ease-out both;
            }
            
            .animate-slide-in-left {
              animation: slide-in-left 1s ease-out;
            }
            
            .animate-masonry-reveal {
              animation: masonry-reveal 1s ease-out;
            }

            .snap-x {
              scroll-snap-type: x mandatory;
            }
            
            .snap-center {
              scroll-snap-align: center;
            }

            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
            
            .overflow-x-auto {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      );
    };

    export default HomePage;