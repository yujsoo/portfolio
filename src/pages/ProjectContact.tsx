import ProjectReviewLayout from '../components/ProjectReviewLayout'
import ProjectSubTitle from '../components/ProjectSubTitle'
import LinkBtn from '../components/LinkBtn'
import { FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoVercel } from 'react-icons/io5'
import viteIcon from '../assets/ico_vite.png'
import contactitpImg01 from '../assets/contactitp-00.jpg'
import contactitpImg02 from '../assets/contactitp-01-00.png'
import contactitpImg03 from '../assets/contactitp-01-01.png'
import { motion } from 'framer-motion'

function ProjectContact() {
  return (
    <ProjectReviewLayout title="I-CONTACT" date="Feb.25 - Mar.25">
      <ul>
        <li className="mb-14">
          <ProjectSubTitle title="Overview" />
          <p className="leading-relaxed">
            구름톤 딥다이브 프론트엔드 과정에서 진행한 대규모 합반 프로젝트로,
            <br className="hidden lg:block" />
            디자이너, 프론트엔드, 백엔드가 협업하여 기획부터 구현까지 함께한
            실전형 네트워킹 웹앱입니다. <br />
            실시간 채팅과 주변 참가자 탐색 기능을 중심으로 개발했습니다.
          </p>
          <div className="mt-10">
            <div>
              <LinkBtn
                text="깃허브 저장소 바로가기"
                url="https://github.com/DeepDive-Final-Project/frontend"
              />
            </div>
            <div className="mt-4">
              <LinkBtn
                text="주요 트러블 슈팅 문서 바로가기"
                url="https://scarce-maiasaura-f1f.notion.site/Troubleshooting-1daafbe54cc680738f11ca1dc8615ec1?pvs=74"
              />
            </div>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Duration & Role" />
          <p className="mb-2 text-sm text-[#888]">Duration</p>
          <div className="mb-4">
            <p>Feb.25 - Mar.25</p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Main Tasks" />
          <div className="flex flex-col gap-2">
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              채팅 요청, 수락/거절, 채팅방 생성 및 퇴장 기능 개발
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              채팅 페이지 UI 구현 및 WebSocket(STOMP)을 활용한 실시간 채팅 기능
              개발
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              실시간 알림 기능 구현
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Tech Stack" />
          <div className="flex gap-2">
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <FaReact className="text-[#61dafb] text-2xl" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <SiTypescript className="text-[#3178c6] text-2xl" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <RiTailwindCssFill className="text-[#38bdf8] text-2xl" />
            </p>
            <p className="w-12 h-12 border border-[#ddd] rounded-md overflow-hidden">
              <img src={viteIcon} alt="" className="w-full" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md bg-black">
              <IoLogoVercel className="text-[#fff] text-2xl" />
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Inside the Project" />
          <div className="mb-10">
            <strong className="relative pl-4 mb-2 text-black font-medium inline-block before:absolute before:left-0 before:top-[3px] before:w-1 before:h-4 before:bg-black before:content-['']">
              프로젝트 진행 중 작성한 개발 일지
            </strong>
            <p className="text-md leading-relaxed">
              기능을 구현하면서 마주한 문제와 그 해결 과정, 그리고 그때그때의
              생각 흐름을 일기처럼 기록한 개인 프로젝트 일지입니다.
              <br />매 프로젝트마다 꾸준히 작성하며, 학습 과정과 성장의 흔적을
              남기고 있습니다.
            </p>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {[contactitpImg01].map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden shadow-lg group relative">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-full bg-black text-white text-sm p-3">
                    이미지 {idx + 1} / 개발 일지 스크린샷
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <strong className="relative pl-4 mb-2 text-black font-medium inline-block before:absolute before:left-0 before:top-[3px] before:w-1 before:h-4 before:bg-black before:content-['']">
              사용성 테스트(Usability Test) 진행
            </strong>
            <p className="text-md leading-relaxed">
              실제 사용자에게 프로덕트를 직접 사용해보도록 한 후 피드백을
              수집하는 사용성 테스트를 진행했습니다.
              <br />
              사용 과정에서 발생한 혼란 요소나 불편한 UI 요소를 파악하고, 이를
              바탕으로 UI 개선 및 기능 흐름을 조정했습니다.
            </p>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {[contactitpImg02, contactitpImg03].map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden shadow-lg group relative">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-full bg-black text-white text-sm p-3">
                    이미지 {idx + 1} / 실제 사용자 피드백을 수집하기 위한 설문지
                    화면
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'linear',
                }}
                className="inline-block mr-2 font-normal align-top text-primary">
                ❋
              </motion.span>
              채팅 기능 사용성 테스트 결과 및 개선사항
            </h3>
            <ul>
              <li className="mb-4">
                <strong className="float-left w-10 text-[#9e9eae] font-medium">
                  문제
                </strong>
                <p className="ml-10">
                  모바일 Safari에서 채팅 입력창을 터치하면 화면이 자동으로
                  확대되어 UI가 깨지고 사용성이 떨어지는 현상이 있었습니다.
                </p>
              </li>
              <li className="mb-4">
                <strong className="float-left w-10 text-[#9e9eae] font-medium">
                  원인
                </strong>
                <p className="ml-10">
                  iOS Safari의 기본 동작으로, 폰트 크기가 16px 미만인 input에
                  포커스가 맞춰질 때 자동 확대가 발생하는 것이 원인이었습니다.
                </p>
              </li>
              <li className="mb-4">
                <strong className="float-left w-10 text-[#9e9eae] font-medium">
                  해결
                </strong>
                <p className="ml-10">
                  여러 방법을 검토했지만, 해당 input에 특별한 디자인 제약이
                  없어서 기존 15px 폰트 크기를 16px로 통일하여 간단하고
                  효과적으로 문제를 해결했습니다.
                </p>
              </li>
              <li>
                <strong className="float-left w-10 text-[#9e9eae] font-medium">
                  성과
                </strong>
                <p className="ml-10">
                  이로써 Safari에서 발생하던 확대 문제를 제거했고, 모든 기기에서
                  안정적이고 일관된 입력 경험을 제공할 수 있었습니다.
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Retrospective" />
          <p className="leading-relaxed">
            <b className="block mb-2 pb-2 border-b border-[#ddd]">
              가장 도전적이었던 문제와 그것을 해결한 과정
            </b>
            웹소켓을 활용한 다중 채팅방 기능을 구현하면서 연결 불안정 및 404
            오류가 지속 발생하는 문제를 겪었습니다. <br />
            웹소켓 특성상 프론트와 백엔드 중 어느 쪽에 문제가 있는지 명확히
            드러나지 않아 원인 파악에 시간이 걸렸고, <br />
            백엔드 지식이 부족했던 저에게는 큰 도전이었습니다. 이를 해결하기
            위해 백엔드 개발자와 화면 및 로그를 공유하며 소통을 이어갔고,
            <br className="hidden lg:block" />
            백엔드에서request.getURI().getPath() 기준으로만 파라미터를 처리하고
            있다는 점을 확인했습니다. <br />
            이로 인해 쿼리스트링 방식으로 전달된 중요한 데이터들이 정상적으로
            전달되지 않는 문제가 있었고, 백엔드의 파싱 로직 보완과 프론트 요청
            구조 정리를 통해 문제를 해결할 수 있었습니다. <br /> 이 경험을 통해
            단순 구현을 넘어서 전체 서비스 구조를 이해하려는 자세와, 모호한 문제
            상황에서 협업을 통해 해결하는 능력을 키울 수 있었고, 프론트엔드
            개발자로서의 시야를 넓힐 수 있었습니다.
          </p>
        </li>
      </ul>
    </ProjectReviewLayout>
  )
}

export default ProjectContact
