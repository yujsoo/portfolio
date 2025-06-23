import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { projectItems } from '../data/projectItems'
import { otherItems } from '../data/otherItems'
import { frontItems } from '../data/frontItems'
import { skillItems } from '../data/skillItems'
import TextTag from '../components/TextTag'
import LinkBtn from '../components/LinkBtn'
import ConTitle from '../components/ConTitle'
import ProjectTableTitle from '../components/ProjectTableTitle'
import ProjectItemsList from '../components/ProjectItemsList'
import OtherItemsList from '../components/OtherItemsList'
import { IoIosArrowForward } from 'react-icons/io'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const fadeInUpText = {
  hidden: { opacity: 0, y: '60%' },
  visible: { opacity: 1, y: 0 },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

function Home() {
  const location = useLocation()
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const [selectedTab, setSelectedTab] = useState(0)
  const selectedItem = skillItems[selectedTab]

  const [showDetail, setShowDetail] = useState(false)

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
      <section className="max-w-screen-xl mx-auto pt-80 px-6">
        <div className="overflow-hidden bg-white inline-block">
          <motion.p
            variants={fadeInUpText}
            initial="hidden"
            whileInView="visible"
            className="text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] font-bold leading-tight break-keep"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            안녕하세요.
            <br />
            <span className="text-primary">프론트엔드 개발자</span>
            <br />
            유지수입니다. —{' '}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
                delay: 0.6,
              }}
              className="inline-block text-primary">
              ❋
            </motion.span>
          </motion.p>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto mt-20 xl:mt-48">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center">
          <p className="mb-14 text-[16px] leading-relaxed xl:text-xl xl:leading-normal">
            <span className="text-primary font-semibold">유연하게 소통</span>
            하고,{' '}
            <span className="text-primary font-semibold">끈기있게 개발</span>
            합니다.
            <br /> 그동안의 실무 경험을 바탕으로,{' '}
            <br className="block sm:hidden" />
            제가 자신 있게 말씀드릴 수 있는 강점은 다음과 같습니다.
          </p>
          <ol className="max-w-5xl mx-auto p-10 xl:p-14 border border-[#ddd] rounded-md">
            <li className="pb-8 mb-8 border-b border-[#ddd]">
              <p className="block mb-4 text-[18px] xl:text-xl font-semibold">
                <span className="block mb-2 font-normal">01</span>
                다수 프로젝트 병행 속에서도 완성도 높은 결과물
              </p>
              <p className="leading-relaxed break-keep sm:text-base text-[15px]">
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
              <p className="leading-relaxed break-keep sm:text-base text-[15px]">
                한 줄의 코드도 쉽게 지나치지 않고, 다른 사람이 이해하고 이어받기
                쉬운 구조인지 항상 점검하며 작성합니다.
              </p>
            </li>
            <li className="pb-8 mb-8 border-b border-[#ddd]">
              <p className="block mb-4 text-[18px] xl:text-xl font-semibold">
                <span className="block mb-2 font-normal">03</span>
                디테일과 구조에 대한 고민
              </p>
              <p className="leading-relaxed break-keep sm:text-base text-[15px]">
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
              <p className="leading-relaxed break-keep sm:text-base text-[15px]">
                퍼블리싱팀 리드 역할 경험으로 팀원들과 적극적으로 소통하며
                <br className="hidden lg:block" />
                문제를 신속히 파악하고 해결하여, 여러 프로젝트를 성공적으로
                완수했습니다.
              </p>
            </li>
          </ol>
        </motion.div>
      </section>
      <motion.section
        id="skill"
        className="max-w-screen-xl mx-auto pt-32 xl:pt-48 px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}>
        <ConTitle
          title="기술 스택 및 툴"
          subTitle="Skills & Tools"
          desc={
            <>
              아래 기술을 활용할 수 있으며, <br />
              원활한 협업을 위해 다양한 툴을 적극 활용해왔습니다.
            </>
          }
        />
        <div className="flex gap-2 flex-wrap justify-center mb-10 -mt-7 md:mt-0">
          {skillItems.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setSelectedTab(index)}
              className={`px-4 py-2 rounded-md text-sm border ${
                selectedTab === index
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-black border-[#ddd]'
              }`}>
              {item.title}
            </button>
          ))}
        </div>
        <ul className="max-w-2xl mx-auto box-border">
          <li className="mb-6 box-border">
            <p className="py-2 mb-2 font-semibold text-center border-b border-[#ddd]">
              {selectedItem.title}
            </p>
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="w-full md:w-1/2">
                <p className="mb-2 text-sm text-center">주력</p>
                {selectedItem.familiar.length > 0 ? (
                  selectedItem.familiar.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex items-center mb-3 gap-3 text-sm">
                      <div className="w-10 h-10 border border-[#ddd] rounded-md overflow-hidden">
                        <img src={icon} alt={name} className="w-full" />
                      </div>
                      <span className="font-ppNeueMontreal">{name}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs py-8 text-center text-gray-400">
                    해당 없음
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <p className="mb-2 text-sm text-center">경험</p>
                {selectedItem.tried.length > 0 ? (
                  selectedItem.tried.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex items-center mb-3 gap-3 text-sm">
                      <div className="w-10 h-10 border border-[#ddd] rounded-md overflow-hidden">
                        <img src={icon} alt={name} className="w-full" />
                      </div>
                      <span className="font-ppNeueMontreal">{name}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs pt-8 text-center text-gray-400">
                    해당 없음
                  </p>
                )}
              </div>
            </div>
          </li>
        </ul>
      </motion.section>
      <motion.section
        id="experience"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-screen-xl mx-auto pt-32 xl:pt-48 px-6">
        <ConTitle
          title="주요 프로젝트"
          subTitle="Experience"
          desc={
            <>디자인 구현부터 개발까지의 경험을 담은 주요 프로젝트입니다.</>
          }
        />

        <ProjectTableTitle
          length={projectItems.length}
          tableTitle="Publishing"
        />
        <ProjectItemsList hoveredId={hoveredId} setHoveredId={setHoveredId} />
        <div className="pt-24">
          <ProjectTableTitle
            length={frontItems.length}
            tableTitle="Frontend Development"
          />
        </div>
        <ul className="border-t-2 border-black">
          {frontItems.map((item) => (
            <li
              key={item.id}
              className=" border-black border-b hover:bg-black hover:text-white transition-all transition-duration-300"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}>
              <Link to={item.link} className="flex p-6 relative">
                <div className="w-1/2 text-left relative overflow-hidden">
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
                <p className="w-1/2 text-right md:text-left font-poppins">
                  {item.date}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </motion.section>
      <motion.section
        id="others"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-screen-xl mx-auto pt-32 xl:pt-48 px-6">
        <ConTitle
          title="개인 프로젝트"
          subTitle="Others"
          desc={<>주요 프로젝트 외 개인적으로 진행한 서브 프로젝트입니다.</>}
        />
        <motion.div>
          <ProjectTableTitle length={otherItems.length} tableTitle="Others" />
          <OtherItemsList hoveredId={hoveredId} setHoveredId={setHoveredId} />
        </motion.div>
      </motion.section>
      <section
        id="current"
        className="max-w-screen-xl mx-auto pt-32 xl:pt-48 px-6">
        <div className="flex">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full md:w-1/2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-normal sm:leading-normal lg:leading-snug break-keep">
              현재
              <br />
              이런 걸 하고 있어요.
            </h3>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
            className="w-full md:w-1/2 break-keep leading-normal">
            <ul>
              <li className="py-10">
                <TextTag text="개인 프로젝트" />
                <p className="break-keep">
                  백엔드 개발자 한 분과 함께 작은 웹 서비스를 개발 중입니다.
                  <br />
                  새로운 기술을 실험하며 리액트 감을 잃지 않고자 꾸준히 공부하고
                  있어요.
                  <br /> 아직 개발 진행중이지만, 관련 작업 기록과 GitHub는 아래
                  링크에서 확인하실 수 있습니다!
                </p>
                <div className="mt-6">
                  <div>
                    <LinkBtn
                      text="블로그 바로가기"
                      url="https://yujsoo.tistory.com/category/Projects/mallan"
                    />
                  </div>
                  <div className="mt-4">
                    <LinkBtn
                      text="깃허브 저장소 바로가기"
                      url="https://github.com/yujeong-ran/mallan"
                    />
                  </div>
                </div>
              </li>
              <li className="py-10">
                <TextTag text="Java 언어 및 생태계 학습" />
                <p className="break-keep">
                  프로젝트를 진행하면서 백엔드 분야에 대한 이해가 필요하다고
                  느끼는 순간이 많았습니다. <br />그 과정에서 자연스럽게 공부를
                  시작하게 되었고, 현재는 인강을 통해 학습 중입니다.
                </p>
              </li>
              <li className="py-10">
                <TextTag text="애니메이션" />
                <p className="break-keep">
                  유튜브에서 우연히 리액트 모션 관련 강의를 보고 직접 만들어보고
                  싶은 욕심이 생겨 공부 중입니다. <br />
                  실무에서는 주로 바닐라 자바스크립트와 jQuery를 사용해 모션을
                  구현했지만, 리액트 환경에서는 컴포넌트 단위로 모션을 관리할 수
                  있어 더 체계적이었고, Framer Motion 같은 라이브러리를 활용해
                  보다 직관적이고 세밀한 애니메이션 구현이 가능하다는 점이 특히
                  인상 깊었습니다.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      <section
        id="profile"
        className="flex max-w-screen-xl mx-auto pt-36 xl:pt-48 px-6 flex-wrap">
        <div className="w-full md:w-1/2">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-normal sm:leading-normal lg:leading-snug break-keep">
              <span className="text-primary">감사합니다.</span> <br />
              마지막으로,
              <br /> 제 간단한 소개를 전합니다.
            </h3>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 break-keep leading-normal">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: 'easeOut',
            }}>
            <ul>
              <li className="py-10">
                <TextTag text="Introduce" />
                <p className="break-keep">
                  3년 10개월간 웹사이트 디자인 및 퍼블리싱 전문 웹에이전시에서
                  퍼블리셔로 근무하며 다양한 웹·앱 프로젝트를 경험했습니다.{' '}
                  <br />
                  마크업 구조와 접근성을 고려해 디자인 완성도를 높이는 동시에,
                  개발자가 효율적으로 활용할 수 있는 구조를 고민해왔습니다.{' '}
                  <br />
                  외주 개발자와의 협업을 통해 디자인과 개발 간의 간극을
                  자연스럽게 좁혀왔고, 디자이너의 의도를 최대한 구현하기 위해
                  개발적인 시도도 꾸준히 해왔습니다. <br />
                  <br />
                  실무 경험을 바탕으로 프론트엔드 개발 역량을 키우기 위해,
                  구름톤 딥다이브 프론트엔드 개발자 과정을 수료했습니다. 해당
                  과정에서 React 기반 프로젝트를 진행하며 컴포넌트 설계, 상태
                  관리, API 연동, 성능 최적화 등 프론트엔드 핵심 기술을 학습하고
                  직접 구현해보았습니다. <br />
                  <br />
                  이제는 퍼블리싱을 넘어 사용자와 데이터, 로직을 아우르는
                  프론트엔드 개발자로의 전환을 준비하고 있습니다.
                </p>
              </li>
              <li className="py-10">
                <TextTag text="Career" />
                <p>
                  <span className="block mb-2 text-sm text-[#888]">
                    2020.06 - 2024.03
                  </span>
                  랩스튜디오(Wrap Studio) / 퍼블리싱팀 팀장
                </p>
                <button
                  onClick={() => setShowDetail((prev) => !prev)}
                  className="flex items-center mt-4 font-semibold transition-transform duration-300"
                  aria-expanded={showDetail}>
                  <IoIosArrowForward
                    className={`mr-1 transition-transform duration-300 ${
                      showDetail ? 'rotate-90' : ''
                    }`}
                  />
                  {showDetail ? '주요 업무 내용 가리기' : '주요 업무 내용 보기'}
                </button>
                {showDetail && (
                  <ul className="pl-6 py-4 mt-2 list-disc list-inside leading-relaxed rounded-md bg-[#f9f7f7]">
                    <li>반응형 웹 및 웹 접근성(웹 표준) 기반 퍼블리싱 수행 </li>
                    <li>팀원 업무 분배 및 일정 조율</li>
                    <li>프로젝트 검토 및 이슈 관리</li>
                  </ul>
                )}
              </li>
              <li className="py-10 ">
                <TextTag text="Education" />
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
                <TextTag text="Channel" />
                <p>
                  <Link
                    to="https://github.com/yujsoo/"
                    className="hover:underline">
                    GitHub. https://github.com/yujsoo/
                  </Link>
                </p>
                <p className="mt-1">
                  <Link
                    to="https://yujsoo.tistory.com/"
                    className="hover:underline">
                    blog. https://yujsoo.tistory.com/
                  </Link>
                </p>
              </li>
              <li className="py-10">
                <TextTag text="What I Love(♥︎) to Do!" />
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
        </div>
      </section>
    </div>
  )
}

export default Home
