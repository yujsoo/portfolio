import introVideo from '../assets/intro.mp4'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projectItems = [
  {
    id: 1,
    title: '코지마',
    subtitle: '편안한 휴식파트너',
    date: 'Jun.22 - Feb.23',
  },
  {
    id: 2,
    title: 'GS칼텍스',
    subtitle: '에너지, 그 가능성을 넓히다.',
    date: 'Apr.23 - Feb.24',
  },
  {
    id: 3,
    title: 'NH Charge',
    subtitle: '편리한 충전라이프의 시작',
    date: 'Apr.23 - Feb.24',
  },
  {
    id: 4,
    title: '랩스튜디오',
    subtitle: '일상과 디지털공간의 조화',
    date: 'Dec.23 - Jan.24',
  },
  {
    id: 5,
    title: '이지트래픽',
    subtitle: '이로운 세상을 위해 패러다임을 바꾸는 기업',
    date: 'Feb.22 - Apr.22',
  },
  {
    id: 6,
    title: 'XAB',
    subtitle: 'SNS 형태의 A/B 테스트 플랫폼',
    date: 'Dec.24 - Feb.25',
  },
  {
    id: 7,
    title: 'I-CONTACT',
    subtitle: '내 주변에서 시작하는 쉽고 빠른 네트워킹',
    date: 'Dec.24 - Feb.25',
  },
]

const otherItems = [
  {
    id: 1,
    title: '웹접근성 명도대비 검사 도구',
    subtitle: '작은 차이가 사용자 경험을 만든다.',
    date: 'Apr.22 - Jun.22',
  },
  {
    id: 2,
    title: '색상 코드 변환 도구',
    subtitle: '색을 바꾸는 가장 빠른 방법',
    date: 'Apr.22 - Jun.22',
  },
]

function Home() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="overflow-hidden">
      {/* 홈 - top */}
      <section className="max-w-screen-xl mx-auto mt-56">
        <p className="relative text-[90px] font-PPNeueMontreal font-bold leading-none">
          Hello, I’m Jisoo Yu — 👋
          <br />a Frontend Developer.
        </p>
        <video
          className="relative z-2 w-full m-auto"
          autoPlay
          loop
          muted
          playsInline>
          <source src={introVideo} type="video/mp4" />
          브라우저가 비디오를 지원하지 않습니다.
        </video>
        <div className="my-48 text-center text-xl font-PPNeueMontreal">
          <p>
            PASSIONATE ABOUT BUILDING <br />
            INTUITIVE AND PERFORMANT WEB APPLICATIONS
          </p>
          <p className="mt-12">CODE. IMPROVE. REPEAT.</p>
        </div>
      </section>

      {/* 홈 - experience */}
      <section className="max-w-screen-xl mx-auto">
        <h3 className="mb-16 text-7xl font-bold font-PPNeueMontreal">
          Selected Projects.
        </h3>
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold">(6)</p>
          <p className="text-xl">Experience.</p>
        </div>
        <ul className="border-t-2 border-black">
          {projectItems.map((item) => (
            <li
              key={item.id}
              className="flex p-[1.5vw] border-black border-b hover:bg-black hover:text-white transition-all transition-duration-300"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}>
              <div className="w-[24%] text-left relative overflow-hidden">
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
              <p className="flex-auto text-left font-poppins">{item.date}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="max-w-screen-xl mx-auto mt-24">
        <div className="flex justify-between items-end">
          <p className="text-xl font-bold">(2)</p>
          <p className="text-xl">Others.</p>
        </div>
        <ul className="border-t-2 border-black">
          {otherItems.map((item) => (
            <li
              key={item.id}
              className="flex p-[1.5vw] border-black border-b hover:bg-black hover:text-white transition-all transition-duration-300"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}>
              <div className="w-[24%] text-left relative overflow-hidden">
                {/* 기존 텍스트 - 호버 시 사라짐 */}
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
                {/* 새 텍스트 - 호버 시 위로 올라오며 나타남 */}
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
              <p className="flex-auto text-left font-poppins">{item.date}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex max-w-screen-xl pt-48 mx-auto">
        <div className="w-1/2">
          <h3 className="text-7xl font-bold font-PPNeueMontreal leading-none">
            About Me.
          </h3>
        </div>
        <div className="w-1/2 break-keep leading-normal">
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
        </div>
      </section>
    </div>
  )
}

export default Home
