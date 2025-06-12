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
import { frontItems } from '../data/frontItems'
import { BiHealth } from 'react-icons/bi'

function Home() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const introVideoCon = useRef(null)

  const controls = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()

  const [ref, inView] = useInView({ threshold: 0.2 })
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
          className="mt-20 xl:mt-48 text-center">
          <BiHealth className="text-3xl mx-auto mb-8" />
          <p className="mb-14 leading-relaxed text-[16px] xl:text-xl xl:leading-normal">
            유연하게 소통하고, 끈기있게 개발합니다.
            <br /> 그동안의 실무 경험을 바탕으로, 제가 자신 있게 말씀드릴 수
            있는 강점은 다음과 같습니다.
            <br /> 이러한 역량은 단순한 구현을 넘어서, 구조적이고 유지보수가
            쉬운 프론트엔드 개발을 실현하는 데 큰 힘이 됩니다.
          </p>
          <ol className="max-w-5xl mx-auto p-10 xl:p-14 border border-[#ddd] rounded-md">
            <li className="pb-8 mb-8 border-b border-[#ddd]">
              <p className="block mb-4 text-[18px] xl:text-xl font-semibold">
                <span className="block mb-2 font-normal">01</span>
                다수 프로젝트 병행 속에서도 완성도 높은 결과물
              </p>
              <p className="leading-relaxed break-keep text-[#494848]">
                웹 에이전시에서 여러 프로젝트를 동시에 진행하며,
                <br className="hidden lg:block" /> 마감만을 목표로 하지 않고 각
                작업의 완성도까지 고려하는 자세로 임했습니다.
              </p>
            </li>
            <li className="pb-8 mb-8 border-b border-[#ddd]">
              <p className="block mb-4 text-[18px] xl:text-xl font-semibold">
                <span className="block mb-2 font-normal">02</span>
                유지보수를 고려한 꼼꼼한 마크업
              </p>
              <p className="leading-relaxed break-keep text-[#494848]">
                한 줄의 코드도 쉽게 지나치지 않고, 다른 사람이 이해하고 이어받기
                쉬운 구조인지 항상 점검하며 작성합니다.
              </p>
            </li>
            <li className="pb-8 mb-8 border-b border-[#ddd]">
              <p className="block mb-4 text-[18px] xl:text-xl font-semibold">
                <span className="block mb-2 font-normal">03</span>
                디테일과 구조에 대한 고민
              </p>
              <p className="leading-relaxed break-keep text-[#494848]">
                “더 나은 구조는 없을까?”, “확장과 수정이 쉬운 방향일까?”를
                스스로에게 끊임없이 질문하며 작업해왔습니다. <br />그 덕분에
                협업과 유지보수 측면에서 좋은 평가를 받았습니다.
              </p>
            </li>
            <li>
              <p className="block mb-4 text-[18px] xl:text-xl font-semibold">
                <span className="block mb-2 font-normal">04</span>
                유연한 소통과 리더십
              </p>
              <p className="leading-relaxed break-keep text-[#494848]">
                퍼블리싱팀 리드 역할을 바탕으로 팀원들과 적극적으로 소통하며
                <br className="hidden lg:block" />
                문제를 신속히 파악하고 해결하여, 여러 프로젝트를 성공적으로
                완수했습니다.
              </p>
            </li>
          </ol>
        </motion.div>
      </section>
      <section
        id="experience"
        className="max-w-screen-xl mx-auto pt-32 xl:pt-48 px-6">
        <div className="overflow-hidden">
          <motion.h3
            className="mb-16 text-lg font-light font-PPNeueMontreal"
            ref={ref2}
            initial={{ opacity: 0, x: 0 }}
            animate={controls2}
            transition={{ duration: 0.6, ease: 'easeOut' }}>
            Experience.
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-normal sm:leading-normal lg:leading-snug break-keep">
              디자인 구현부터 개발까지의 경험을 담은 주요 프로젝트입니다.
              <br /> 각 프로젝트의 기능적 특징과 기술적 고민을 소개합니다.
            </p>
          </motion.h3>
        </div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={controls3}
          transition={{ duration: 0.6, ease: 'easeOut' }}>
          <div className="flex justify-between items-end">
            <p className="text-base md:text-xl font-bold">(5)</p>
            <p className="text-base md:text-xl">Publishing.</p>
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
            <p className="text-base md:text-xl font-bold">(2)</p>
            <p className="text-base md:text-xl text-right">
              Frontend Development.
            </p>
          </div>
          <ul className="border-t-2 border-black">
            {frontItems.map((item) => (
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
            <p className="text-base md:text-xl font-bold">(2)</p>
            <p className="text-base md:text-xl">Others.</p>
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
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-normal sm:leading-normal lg:leading-snug break-keep">
            감사합니다. <br />
            마지막으로,
            <br /> 제 간단한 소개를 전합니다.
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
              <p className="break-keep">
                3년 10개월간 웹사이트 디자인 및 퍼블리싱 전문 웹에이전시에서
                퍼블리셔로 근무하며 다양한 웹·앱 프로젝트를 경험했습니다. <br />
                마크업 구조와 접근성을 고려해 디자인 완성도를 높이는 동시에,
                개발자가 효율적으로 활용할 수 있는 구조를 고민해왔습니다. <br />
                외주 개발자와의 협업을 통해 디자인과 개발 간의 간극을 자연스럽게
                좁혀왔고, 디자이너의 의도를 최대한 구현하기 위해 개발적인 시도도
                꾸준히 해왔습니다. <br />
                <br />
                실무 경험을 바탕으로 프론트엔드 개발 역량을 키우기 위해, 구름톤
                딥다이브 프론트엔드 개발자 과정을 수료했습니다. 해당 과정에서
                React 기반 프로젝트를 진행하며 컴포넌트 설계, 상태 관리, API
                연동, 성능 최적화 등 프론트엔드 핵심 기술을 학습하고 직접
                구현해보았습니다. <br />
                <br />
                이제는 퍼블리싱을 넘어 사용자와 데이터, 로직을 아우르는
                프론트엔드 개발자로의 전환을 준비하고 있습니다.
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
