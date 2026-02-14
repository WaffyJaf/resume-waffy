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

interface ImageItem {
  src: string;
  caption?: string;
}

const HomePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const project2Ref = useRef<HTMLDivElement>(null);
  const project4Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const activityWebRef = useRef<HTMLDivElement>(null);
  const activityAppRef = useRef<HTMLDivElement>(null);
  
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

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
    { name: 'HTML', logo: '/logos/html.png', category: 'Front-end' },
    { name: 'CSS', logo: '/logos/css.svg', category: 'Front-end' },
    { name: 'JavaScript', logo: '/logos/javascript.png', category: 'Backend' },
    { name: 'TypeScript', logo: '/logos/typescript.png', category: 'Backend' },
    { name: 'React', logo: '/logos/react.png', category: 'Front-end' },
    { name: 'Next.js', logo: '/logos/nextjs.png', category: 'Front-end' },
    { name: 'Angular', logo: '/logos/angular.webp', category: 'Front-end' },
    { name: 'Tailwind', logo: '/logos/tailwind.png', category: 'Front-end' },
    { name: 'Flutter', logo: '/logos/flutter.png', category: 'Front-end' },
    { name: 'Node.js', logo: '/logos/nodejs.png', category: 'Backend' },
    { name: 'Net', logo: '/logos/net.png', category: 'Backend' },
    { name: 'MySQL', logo: '/logos/mysql.png', category: 'Backend' },
    { name: 'Figma', logo: '/logos/figma.png', category: 'ออกแบบ UI/UX' },
    { name: 'Photoshop', logo: '/logos/photoshop.png', category: 'ออกแบบ UI/UX' },
    { name: 'Arduino', logo: '/logos/arduino.png', category: 'Hardware Skill' },
    { name: 'Firebase', logo: '/logos/firebase.png', category: 'Backend' },
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
      <nav className={`fixed top-0 left-0 w-full z-50 bg-whitebackdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="flex justify-between items-center py-4 px-6 max-w-8xl mx-auto">
          <h1 className="text-xl font-bold text-black hidden md:block">Portfolio</h1>
          <ul className="flex gap-6 text-black">
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
        className="relative min-h-[40vh] flex items-center justify-center bg-[length:100%_100%] bg-center w-screen overflow-hidden"
        style={{
          backgroundImage: 'url("/images/bg-stars.svg")',
        }}
      >
        <div className="absolute inset-0 bg-white backdrop-blur-sm"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 sm:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center justify-center md:justify-start h-full animate-fade-in">
                <Image
                  src="/waffy1.png"
                  alt="Astronaut"
                  width={448}
                  height={448}
                  className="w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[28rem] object-contain"
                />
              </div>
              <div className="text-center md:text-left animate-fade-in mt-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Natthathida Khamai
                </h1>
                <p className="text-lg md:text-xl text-black mb-4 animate-slide-up">
                  Full Stack Developer | Software Developer
                </p>
                <p className="text-base text-black  animate-slide-up">
                  สาขาวิศวกรรมคอมพิวเตอร์
                </p>
                <p className="text-base text-black mb-8 animate-slide-up">
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
                    className="border-2 border-gray-700 hover:border-gray-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-black"
                  >
                    ข้อมูลติดต่อ
                  </button>
                </div>
                <div className="flex justify-center md:justify-start space-x-6 mb-3">
                  {[
                    { icon: Github, link: 'https://github.com/WaffyJaf' },
                    { icon: Facebook, link: 'https://www.facebook.com/natthathida.khamai.2025/?locale=th_TH' },
                  ].map(({ icon: Icon, link }, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-black backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
        </div>
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
                สวัสดีค่ะ ดิฉันเป็นเด็กจบใหม่ มีประสบการณ์ฝึกงาน 4 เดือน ตำแหน่ง Software Developer พัฒนาระบบ HR Cloud เป็นระบบสำหรับบริหารงานบุคคลภายในองค์กร เช่น คำนวณเงินเดือน OT 
                ระบบลงเวลาทำงานพนักงาน ระบบจัดการข้อมูลพนักงาน   และมีประสบการณ์ด้านการพัฒนาเว็บไซต์ แอปพลิเคชัน โปรเจกต์ต่างๆ 1 ปี เคยพัฒนาระบบอีคอมเมิร์ซ ระบบกิจกรรมของมหาวิทยาลัย
                ระบบการชำระเงินที่มี Dashboard สรุปยอดขาย  เรียนรู้ไวและสามารถปรับตัวได้ดี
                จึงมุ่งหวังที่จะมีโอกาสทำงานในองค์กรที่สามารถต่อยอดความรู้ และมุ่งมั่นที่จะส่งมอบงานที่มีคุณภาพ

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
                  <span className="text-6xl">📱</span>
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
            {['Front-end', 'Backend', 'ออกแบบ UI/UX' , 'Tools'].map((category) => (
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
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Activity Up</h3>
                <p className="text-gray-300 mb-3">เว็บไซต์อำนวยความสะดวกสำหรับกิจกรรมมหาวิทยาลัยพะเยา ใช้ระบบล็อกอิน Microsoft ในการเก็บ token </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Tailwind CSS','Node.js','TypeScript', 'Mysql', 'Prisma', 'Flutter'].map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                  
                </div>
                <h3 className="text-sm text-yellow-400 mb-2">
                  Source Code Git:{' '}
                  <a
                    href="https://github.com/WaffyJaf/Project-Activity"
                    className="underline text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/WaffyJaf/Project-Activity
                  </a>
                </h3>


                {/* Section 1: รูปเว็บไซต์ */}
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-200 mb-2">ภาพเว็บไซต์</h4>
                  <h4 className="text-lg font-medium text-gray-200 mb-2"></h4>
                  <div className="relative">
                    <div
                      ref={activityWebRef}
                      className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                    >
                      {[
                        { src: '/AC/login.png', caption: 'หน้าเข้าสู่ระบบ' },
                        { src: '/AC/home.png', caption: 'หน้าแรกของเว็บไซต์และฟังก์ชันหลัก' },
                        { src: '/AC/dbac.png', caption: 'หน้าสรุปกิจกรรมในระบบ' },
                        { src: '/AC/pjdetial.png', caption: 'รายละเอียดกิจกรรม' },
                        { src: '/AC/sh.png', caption: 'หน้าค้นหาประวัตินิสิต' },
                        { src: '/AC/save.png', caption: 'หน้าบันทึกการเข้าร่วมกิจกรรม' },
                        { src: '/AC/activity.png', caption: 'หน้ากิจกรรมที่มีการจัดขึ้น' },
                      ].map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="w-[450px] flex-shrink-0 snap-center flex flex-col items-center animate-slide-up hover:scale-105 transition-transform duration-300 cursor-pointer"
                          style={{ animationDelay: `${imgIndex * 0.2}s` }}
                          onClick={() => setSelectedImage(image)}
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
                  <h4 className="text-lg font-medium text-gray-200 mb-2">ภาพแอปพลิเคชันมือถือ (Flutter)</h4>
                  <div className="relative">
                    <div
                      ref={activityAppRef}
                      className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                    >
                      {[
                        { src: '/AC/homem.png', caption: 'หน้าแรก' },
                        { src: '/AC/hours.png', caption: 'หน้าชั่วโมงกิจกรรมสะสม' },
                        { src: '/AC/regisac.png', caption: 'หน้าลงทะเบียนเข้าร่วมกิจกรรม' },
                        { src: '/AC/scan.png', caption: 'หน้าสแกน QR' },
                        { src: '/AC/record.png', caption: 'หน้าประวัติ' },
                        { src: '/AC/regis.png', caption: 'หน้าลงทะเบียน' }
                        
                      ].map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="flex-shrink-0 snap-center flex flex-col items-center animate-slide-up hover:scale-105 transition-transform duration-300 cursor-pointer"
                          style={{ animationDelay: `${imgIndex * 0.2}s` }}
                          onClick={() => setSelectedImage(image)}
                        >
                          <Image
                            src={image.src}
                            alt={`Activity Up app preview ${imgIndex + 1}`}
                            width={280}
                            height={540}
                            className="object-cover rounded-lg shadow-lg mb-2"
                            priority={imgIndex === 0}
                          />
                          <p className="text-sm text-gray-300 text-center">{image.caption}</p>
                        </div>
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
                <h3 className="text-xl font-semibold mb-2 text-emerald-300">ระบบชำระเงินคาเฟ่ พร้อม Dashboard สรุปยอด</h3>
                <p className="text-gray-300 mb-3">โปรเจคเว็บที่พัฒนาโดย .NET + Angular สำหรับชำระเงินแบบง่าย อำนวยความสะดวกแก่ผู้ประกอบการ</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['.NET','Angular', 'TypeScript'].map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                  
                </div>
                <h3 className="text-sm text-yellow-400 mb-2">
                      Source Code Git:{' '}
                      <a
                        href="https://github.com/WaffyJaf/CaFewaffy"
                        className="underline text-blue-500 hover:text-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://github.com/WaffyJaf/CaFewaffy
                      </a>
                    </h3>
               
                {/* รูปภาพพร้อมปุ่มเลื่อน ซ้าย/ขวา แสดงได้ทุกขนาดหน้าจอ */}
                <div className="relative mb-4">
                  <div
                    ref={project3Ref}
                    className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                  >
                    {[
                      { src: '/cafe/homecafe.png', caption: 'หน้าหลักแสดงเมนูและสามารถเพิ่มลบ สินค้าได้' },
                      { src: '/cafe/das.png', caption: 'หน้าสรุปยอดขาย สินค้าขายดี แนวโน้ม' },
                      { src: '/cafe/pay.png', caption: 'หน้าชำระเงินและเพิ่มสินค้าลงตะกร้า' },
                      { src: '/cafe/manage.png', caption: 'หน้าเพิ่มหมวดหมู่สินค้า' },
                      { src: '/cafe/addcafe.png', caption: 'หน้าเพิ่มสินค้า' },
                    ].map((item, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="w-[380px] flex-shrink-0 snap-center flex flex-col items-center animate-slide-up hover:scale-105 transition-transform duration-300 cursor-pointer"
                        style={{ animationDelay: `${imgIndex * 0.2}s` }}
                        onClick={() => setSelectedImage(item)}
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
                    onClick={() => project3Ref.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-900 p-2 rounded-full"
                  >
                    <ChevronDown className="rotate-90 w-5 h-5 text-white" />
                  </button>

                  {/* ปุ่มเลื่อนขวา */}
                  <button
                    onClick={() => project3Ref.current?.scrollBy({ left: 300, behavior: 'smooth' })}
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
                <p className="text-gray-300 mb-3 text">เว็บไซต์อีคอมเมิร์ซสำหรับซื้อขายไอดีเกมที่นิยมในหมู่เกมเมอร์</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Tailwind CSS','Node.js','TypeScript', 'Mysql', 'Prisma'].map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-sm text-yellow-400 mb-2">
                  Source Code Git:{' '}
                  <a
                    href="https://github.com/WaffyJaf/waffy-shop"
                    className="underline text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/WaffyJaf/waffy-shop
                  </a>
                </h3>

                {/* รูปภาพพร้อมปุ่มเลื่อน ซ้าย/ขวา แสดงได้ทุกขนาดหน้าจอ */}
                <div className="relative mb-4">
                  <div
                    ref={gameRef}
                    className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                  >
                    {[
                      { src: '/lo.png', caption: 'หน้า Login' },
                      { src: '/homegame.png', caption: 'หน้าแรก' },
                      { src: '/cart.png', caption: 'ตะกร้าสินค้า' },
                      { src: '/pop.png', caption: 'หน้าเติมเงิน' },
                      { src: '/all.png', caption: 'สินค้าทั้งหมด' },
                      { src: '/manageproduct.png', caption: 'จัดการสินค้า' },
                    ].map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="flex-shrink-0 snap-center flex flex-col items-center animate-slide-up hover:scale-105 transition-transform duration-300 cursor-pointer"
                        style={{ animationDelay: `${imgIndex * 0.2}s` }}
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image.src}
                          alt={`Game Store preview ${imgIndex + 1}`}
                          width={480}      
                          height={280}     
                          className="object-cover rounded-lg shadow-lg mb-2"
                          priority={imgIndex === 0} 
                        />
                        <p className="text-sm text-gray-300 text-center">{image.caption}</p>
                      </div>
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
                  <div
                    ref={project4Ref}
                    className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                  >
                    {[
                      { src: '/game/newgame.png', caption: 'หน้าบทความเกมใหม่' },
                      { src: '/game/das.png', caption: 'หน้าแดชบอร์ด Google Search Console' },
                      { src: '/game/key.png', caption: 'หน้าบทความ' },
                      { src: '/game/home3.png', caption: 'หน้าแรกของเว็บไซต์' }
                    ].map((item, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="w-[450px] flex-shrink-0 snap-center flex flex-col items-center animate-slide-up hover:scale-105 transition-transform duration-300 cursor-pointer"
                        style={{ animationDelay: `${imgIndex * 0.2}s` }}
                        onClick={() => setSelectedImage(item)}
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

            {/* Project 2: Smart Mailbox */}
            <div
              className="group relative bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-emerald-300">Mini project และการเข้าร่วมอบรม</h3>
                <p className="text-gray-300 mb-3">โปรเจคทางด้าน Hardware และการเข้าร่วมอบรมที่ผ่านมา</p>
                
               
                {/* รูปภาพพร้อมปุ่มเลื่อน ซ้าย/ขวา แสดงได้ทุกขนาดหน้าจอ */}
                <div className="relative mb-4">
                  <div
                    ref={project2Ref}
                    className="overflow-x-auto flex gap-4 snap-x snap-mandatory pb-4 scroll-smooth"
                  >
                    {[
                      { src: '/k/os.png', caption: 'ผ่านการอบรม Data Science' },
                      { src: '/k/car.jpg', caption: 'รถหุ่นยนต์ Smart Car Esp 32 ' },
                      { src: '/k/k3.png', caption: 'ออกแบบวงจรควบคุมความเร็วมอเตอร์' },
                    
                    ].map((item, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="w-[400px] flex-shrink-0 snap-center flex flex-col items-center animate-slide-up hover:scale-105 transition-transform duration-300 cursor-pointer"
                        style={{ animationDelay: `${imgIndex * 0.2}s` }}
                        onClick={() => setSelectedImage(item)}
                      >
                        <Image
                          src={item.src}
                          alt={`Project preview ${imgIndex + 1}`}
                          width={500}      
                          height={200}     
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
              หากต้องการพูดคุยหรือสอบถามข้อมูลเพิ่มเติม
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

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 md:top-4 md:right-4 bg-red-700 hover:bg-red-950 p-2 rounded-full text-white z-10"
              aria-label="Close enlarged image"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.caption || 'Enlarged image'}
              width={1200}
              height={800}
              className="rounded-lg shadow-lg object-contain w-full h-auto"
            />
            {selectedImage.caption && (
              <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}

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