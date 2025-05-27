import { Link } from 'react-router-dom'
import ProjectReviewLayout from '../components/ProjectReviewLayout'
import ProjectSubTitle from '../components/ProjectSubTitle'
import { FiArrowRight } from 'react-icons/fi'
import { FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoVercel } from 'react-icons/io5'
import { SiVite } from 'react-icons/si'
import peekImgc00 from '../assets/co-p-00.png'

function ProjectContact() {
  return (
    <ProjectReviewLayout title="I-CONTACT" date="Feb.25 - Mar.25">
      <ul>
        <li className="mb-14">
          <ProjectSubTitle title="Overview." />
          <p className="leading-relaxed">
            구름톤 딥다이브 프론트엔드 과정에서 진행한 대규모 합반 프로젝트로,
            <br className="hidden lg:block" />
            디자이너, 프론트엔드, 백엔드가 협업하여 기획부터 구현까지 함께한
            실전형 네트워킹 웹앱입니다. <br />
            실시간 채팅과 주변 참가자 탐색 기능을 중심으로 개발했습니다.
          </p>
          <div className="mt-10">
            <p>
              <Link
                target="_blank"
                to=" https://github.com/DeepDive-Final-Project/frontend"
                className="inline-flex items-center gap-2 group text-black">
                <p className="flex items-center justify-center h-2 w-2 group-hover:h-6 group-hover:w-6 rounded-full bg-black transition-all duration-300 ease-in-out relative">
                  <FiArrowRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </p>
                <p className="relative">
                  깃허브 저장소 바로가기
                  <span className="absolute left-0 -bottom-0 h-[1px] w-full bg-black scale-x-100 group-hover:scale-x-0 origin-right transition-transform duration-300 ease-in-out" />
                </p>
              </Link>
            </p>
            <p className="mt-4">
              <Link
                target="_blank"
                to="https://scarce-maiasaura-f1f.notion.site/Troubleshooting-1daafbe54cc680738f11ca1dc8615ec1?pvs=74"
                className="inline-flex items-center gap-2 group text-black">
                <p className="flex items-center justify-center h-2 w-2 group-hover:h-6 group-hover:w-6 rounded-full bg-black transition-all duration-300 ease-in-out relative">
                  <FiArrowRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </p>
                <p className="relative">
                  주요 트러블 슈팅 노션 문서 바로가기
                  <span className="absolute left-0 -bottom-0 h-[1px] w-full bg-black scale-x-100 group-hover:scale-x-0 origin-right transition-transform duration-300 ease-in-out" />
                </p>
              </Link>
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Duration & Role." />
          <p className="mb-2 text-sm text-[#888]">Duration</p>
          <div className="mb-4">
            <p>Feb.25 - Mar.25</p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Main Tasks." />
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
          <ProjectSubTitle title="Tech Stack." />
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
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <IoLogoVercel className="text-[#000] text-2xl" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <SiVite className="text-[#646CFF] text-2xl" />
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Peek into the Work." />
          <div className="mb-4">
            <strong className="relative pl-4 mb-2 text-black font-medium inline-block before:absolute before:left-0 before:top-[3px] before:w-1 before:h-4 before:bg-black before:content-['']">
              프로젝트 일지 스크린샷
            </strong>
            <p className="text-md leading-relaxed">
              기능을 구현하면서 마주한 문제와 그 해결 과정, 그리고 그때그때의
              생각 흐름을 일기처럼 기록한 개인 프로젝트 일지입니다.
              <br />매 프로젝트마다 꾸준히 작성하며, 학습 과정과 성장의 흔적을
              남기고 있습니다.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <img src={peekImgc00} alt="" />
            </div>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Retrospective." />
          <p className="leading-relaxed">
            <b className="block mb-2">
              [가장 도전적이었던 문제와 그것을 해결한 과정]
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
