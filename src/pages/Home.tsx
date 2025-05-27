import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import introVideo from '../assets/intro.mp4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { projectItems } from '../data/projectItems'
import { otherItems } from '../data/otherItems'

function Home() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const introVideoCon = useRef(null)

  const controls = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()

  const [ref, inView] = useInView({ threshold: 0.5 })
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  })
  const [ref3, inView3] = useInView({
    threshold: 0.2,
  })

  const titleControls = useAnimation()
  const [titleRef, titleInView] = useInView({ threshold: 0.1 })

  const listControls = useAnimation()
  const [listRef, listInView] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 30 })
    }
  }, [inView, controls])

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, x: 0 })
    } else {
      controls2.start({ opacity: 0, x: -100 })
    }
  }, [inView2, controls2])

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, y: 0 })
    } else {
      controls3.start({ opacity: 0, y: 50 })
    }
  }, [inView3, controls3])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.4,
        start: 'top',
        end: '+=500px',
      },
    })

    timeline.fromTo(
      introVideoCon.current,
      { y: 100, clipPath: `inset(0 50%)` },
      {
        y: 0,
        clipPath: `inset(0% 0%)`,
      },
    )
  }, [])

  useEffect(() => {
    if (titleInView) {
      titleControls.start({ opacity: 1, x: 0 })
    } else {
      titleControls.start({ opacity: 0, x: -50 })
    }
  }, [titleInView, titleControls])

  useEffect(() => {
    if (listInView) {
      listControls.start({ opacity: 1, y: 0 })
    } else {
      listControls.start({ opacity: 0, y: 50 })
    }
  }, [listInView, listControls])

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div className="overflow-hidden">
      <section className="max-w-screen-xl mx-auto pt-96 px-6">
        <div className="overflow-hidden bg-white inline-block">
          <motion.p
            className="text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] font-PPNeueMontreal font-bold leading-none"
            initial={{ opacity: 0, y: '60%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            Hello,
            <br /> I’m Jisoo Yu — 👋
            <br />a Frontend Developer.
          </motion.p>
        </div>
        <div ref={introVideoCon}>
          <video
            className="relative z-2 w-full m-auto"
            autoPlay
            loop
            muted
            playsInline>
            <source src={introVideo} type="video/mp4" />
            브라우저가 비디오를 지원하지 않습니다.
          </video>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-20 xl:mt-48 text-center text-md xl:text-xl font-PPNeueMontreal">
          <p>
            PASSIONATE ABOUT BUILDING <br />
            INTUITIVE AND PERFORMANT WEB APPLICATIONS
          </p>
          <p className="mt-12">CODE. IMPROVE. REPEAT.</p>
        </motion.div>
      </section>
      <section
        id="experience"
        className="max-w-screen-xl mx-auto pt-32 xl:pt-48 px-6">
        <div className="overflow-hidden">
          <motion.h3
            className="mb-16 text-5xl md:text-7xl font-bold font-PPNeueMontreal"
            ref={ref2}
            initial={{ opacity: 0, x: 0 }}
            animate={controls2}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            Selected Projects.
          </motion.h3>
        </div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={controls3}
          transition={{ duration: 0.6, ease: 'easeOut' }}>
          <div className="flex justify-between items-end">
            <p className="text-xl font-bold">(6)</p>
            <p className="text-xl">Experience.</p>
          </div>
          <ul className="border-t-2 border-black">
            {projectItems.map((item) => (
              <li
                key={item.id}
                className=" border-black border-b hover:bg-black hover:text-white transition-all transition-duration-300"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}>
                <Link to={item.link} className="flex p-6 relative">
                  <div className="w-1/2 md:w-[24%] text-left relative overflow-hidden">
                    <motion.span
                      className="block"
                      initial={{ y: 0, opacity: 1 }}
                      animate={{
                        y: hoveredId === item.id ? '-100%' : 0,
                        opacity: hoveredId === item.id ? 0 : 1,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}>
                      {item.title}
                    </motion.span>
                    <motion.span
                      className="absolute top-0 left-0"
                      initial={{ y: '100%', rotateX: -90, opacity: 0 }}
                      animate={{
                        y: hoveredId === item.id ? '0%' : '100%',
                        rotateX: hoveredId === item.id ? 0 : -90,
                        opacity: hoveredId === item.id ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                      }}
                      aria-hidden="true">
                      {item.title}
                    </motion.span>
                  </div>
                  <p className="flex-auto text-right md:text-left font-poppins">
                    {item.date}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div id="others" className="flex justify-between pt-24 items-end">
            <p className="text-xl font-bold">(2)</p>
            <p className="text-xl">Others.</p>
          </div>
          <ul className="border-t-2 border-black">
            {otherItems.map((item) => (
              <li
                key={item.id}
                className="border-black border-b hover:bg-black hover:text-white transition-all transition-duration-300"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}>
                <Link to={item.link} className="flex p-6 relative">
                  <div className="w-1/2 md:w-[24%] text-left relative overflow-hidden">
                    <motion.span
                      className="block"
                      initial={{ y: 0, opacity: 1 }}
                      animate={{
                        y: hoveredId === item.id ? '-100%' : 0,
                        opacity: hoveredId === item.id ? 0 : 1,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                      }}>
                      {item.title}
                    </motion.span>
                    <motion.span
                      className="absolute top-0 left-0"
                      initial={{ y: '100%', rotateX: -90, opacity: 0 }}
                      animate={{
                        y: hoveredId === item.id ? '0%' : '100%',
                        rotateX: hoveredId === item.id ? 0 : -90,
                        opacity: hoveredId === item.id ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                      }}
                      aria-hidden="true">
                      {item.title}
                    </motion.span>
                  </div>
                  <p className="flex-auto text-right md:text-left font-poppins">
                    {item.date}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
      <section
        id="about"
        className="flex max-w-screen-xl mx-auto pt-36 xl:pt-48 px-6 flex-wrap">
        <motion.div
          className="w-full md:w-1/2"
          ref={titleRef}
          initial={{ opacity: 0, x: -50 }}
          animate={titleControls}
          transition={{ duration: 0.6, ease: 'easeOut' }}>
          <h3 className="text-5xl md:text-7xl font-bold font-PPNeueMontreal leading-none">
            About Me.
          </h3>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 break-keep leading-normal"
          ref={listRef}
          initial={{ opacity: 0, y: 50 }}
          animate={listControls}
          transition={{ duration: 0.6, ease: 'easeOut' }}>
          <ul>
            <li className="py-10">
              <p className="px-2 mb-4 inline-block bg-black text-white">
                Introduce.
              </p>
              <p>
                약 3년 10개월간 웹에이전시 스타트업에서 퍼블리셔로 근무하며
                다양한 웹·앱 프로젝트를 경험했습니다.
                <br /> 마크업 구조와 접근성을 고려해 디자인 완성도를 높이는
                동시에, 개발자가 효율적으로 활용할 수 있는 구조를
                고민해왔습니다.
                <br /> 외주 개발자와의 협업을 통해 디자인과 개발 간의 간극을
                자연스럽게 좁혀왔고, 디자이너의 의도를 최대한 구현하기 위해
                개발적인 시도도 꾸준히 해왔습니다.
                <br /> 이러한 경험을 바탕으로, 더 깊은 기술과 사용자 경험에
                도전하며 사용자와 데이터, 로직을 아우르는 프론트엔드 개발자로
                성장하고자 합니다.
              </p>
            </li>
            <li className="py-10">
              <p className="px-2 mb-4 inline-block bg-black text-white">
                Career.
              </p>
              <p>
                <span className="block mb-2 text-sm text-[#888]">
                  2020.06 ~ 2024.03
                </span>
                랩스튜디오(Wrap Studio) / 퍼블리싱팀 팀장
              </p>
            </li>
            <li className="py-10 ">
              <p className="px-2 mb-4 inline-block bg-black text-white">
                Education.
              </p>
              <p className="mb-6">
                <span className="block mb-1 text-sm text-[#888]">
                  2016.03 - 2018.02
                </span>
                경인여자대학교 / 호텔관광학과 전공
              </p>
              <p className="mb-6">
                <span className="block mb-1 text-sm text-[#888]">
                  2019.11 - 2020.04
                </span>
                스마트기기 UI/UX 웹디자인(웹퍼블리셔) 과정 수료
              </p>
              <p>
                <span className="block mb-1 text-sm text-[#888]">
                  2024.08 - 2025.04
                </span>
                구름톤 딥다이브 프론트엔드 개발자 과정 수료
              </p>
            </li>
            <li className="py-10">
              <p className="px-2 mb-4 inline-block bg-black text-white">
                Channel.
              </p>
              <p>
                <Link
                  to="https://github.com/yujsoo/"
                  className="hover:underline">
                  GitHub. https://github.com/yujsoo/
                </Link>
              </p>
            </li>
            <li className="py-10">
              <p className="px-2 mb-4 inline-block bg-black text-white">
                What I Love(♥︎) to Do!
              </p>
              <p className="mb-6">
                <span className="block mb-1 text-[#888]">운동</span>
                코드와 싸우기 위해선 체력과 멘탈 관리도 중요하죠!
                <br /> 필라테스를 하며 집중력과 유연함을 챙기고 있습니다.
              </p>
              <p>
                <span className="block mb-1 text-[#888]">여행</span>
                새로운 공간과 낯선 분위기를 마주하는 걸 좋아해요.
                <br /> 여행을 통해 자극과 아이디어를 얻곤 합니다.
              </p>
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
