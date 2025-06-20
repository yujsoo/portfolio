import { motion } from 'framer-motion'
import ProjectReviewLayout from '../components/ProjectReviewLayout'
import ProjectSubTitle from '../components/ProjectSubTitle'
import LinkBtn from '../components/LinkBtn'
import { FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoVercel } from 'react-icons/io5'
import { RiSupabaseFill } from 'react-icons/ri'
import shadIcon from '../assets/ico_shad.png'
import xabitpImg01 from '../assets/xabitp-01-00.jpg'
import xabitpImg02 from '../assets/xabitp-01-01.jpg'

function ProjectXAB() {
  return (
    <ProjectReviewLayout title="XAB" date="Dec.24 - Feb.25">
      <ul>
        <li className="mb-14">
          <ProjectSubTitle title="Overview" />
          <p className="leading-relaxed">
            구름톤 딥다이브 프론트엔드 과정에서 진행한 팀 프로젝트로, A/B 테스트
            기능을 핵심으로 한 SNS형 웹 서비스를 기획하고 개발하였습니다.
            <br />
            팀원들과 협업하여 프론트엔드 전반에 걸친 기능 구현과 최적화를
            담당했습니다.
          </p>
          <div className="mt-10">
            <div>
              <LinkBtn
                text="깃허브 저장소 바로가기"
                url="https://github.com/goorm-highfive/xab"
              />
            </div>
            <div className="mt-4">
              <LinkBtn
                text="주요 트러블 슈팅 문서 바로가기"
                url="https://scarce-maiasaura-f1f.notion.site/Troubleshooting-1d5afbe54cc6800c814af914fca8dbdd?pvs=74"
              />
            </div>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Duration & Role" />
          <p className="mb-2 text-sm text-[#888]">Duration</p>
          <div className="mb-4">
            <p>Dec.24 - Feb.25</p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Main Tasks" />
          <div className="flex flex-col gap-2">
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              게시글 상세 페이지 UI 화면 구현
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              사용자 프로필 정보 변경 페이지 기능 개발 (Supabase Storage를
              활용한 프로필 이미지 업로드)
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              알림 상세 확인 및 페이지 연동 기능 개발
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
              <RiNextjsFill className="text-[#000000] text-2xl" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <SiTypescript className="text-[#3178c6] text-2xl" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <RiTailwindCssFill className="text-[#38bdf8] text-2xl" />
            </p>
            <p className="w-12 h-12 border border-[#ddd] rounded-md overflow-hidden">
              <img src={shadIcon} alt="" className="w-full" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <RiSupabaseFill className="text-[#3ecf8e] text-2xl" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md bg-black">
              <IoLogoVercel className="text-[#fff] text-2xl" />
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Inside the Project" />
          <div>
            <strong className="relative pl-4 mb-2 text-black font-medium inline-block before:absolute before:left-0 before:top-[3px] before:w-1 before:h-4 before:bg-black before:content-['']">
              협업 팀 프로젝트 분석 및 이슈 리포트 작성 진행
            </strong>
            <p className="text-md leading-relaxed">
              협업 팀의 프로젝트를 분석하여 기능상의 이슈, 불편한 UI/UX, 코드
              리팩토링 포인트 등을 정리한 뒤, <br className="hidden lg:block" />
              이슈 리포트 형식으로 문서화해 실제 협업팀과 공유하고, 해당
              리포트를 토대로 디버깅 및 최적화 작업을 진행하였습니다.
              <br />
              디버깅,기능상의 이슈, 기능 제안 등 다양한 관점에서 분석하고,
              상대방이 이해하기 쉬운 언어로 작성하는 데 중점을 두었습니다.
            </p>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
              {[xabitpImg01, xabitpImg02].map((src, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden shadow-lg group relative">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-full bg-black text-white text-sm p-3">
                    이미지 {idx + 1} / 협업팀 이슈 리포트 기반 문제 확인 화면
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 bg-gray-50 p-6 rounded-xl">
            <div className="pb-6 relative before:absolute before:bottom-0 before:left-1/2 before:h-[1px] before:w-1/2 before:border-b before:border-[#ddd] before:-translate-x-1/2">
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
                프로필 이미지 업로드 지연 문제 및 개선사항
              </h3>
              <ul>
                <li className="mb-4">
                  <strong className="float-left w-10 text-[#9e9eae] font-medium">
                    문제
                  </strong>
                  <p className="ml-10">
                    이미지 업로드 후 실제 프로필 화면에 반영되기까지 10초가
                    소요되어 사용자 경험이 저하되는 문제가 있었습니다.
                  </p>
                </li>
                <li className="mb-4">
                  <strong className="float-left w-10 text-[#9e9eae] font-medium">
                    원인
                  </strong>
                  <p className="ml-10">
                    <b className="font-semibold">
                      Supabase의 region 설정 불일치
                    </b>
                    로 인해 서버 요청이 지연되어 상태 갱신 속도가 느려졌습니다.{' '}
                    <br />
                    또한,{' '}
                    <b className="font-semibold">용량이 큰 고해상도 이미지</b>가
                    업로드될 경우 렌더링 시간이 길어져 클라이언트 화면 반영이
                    늦어지는 문제가 있었습니다.
                  </p>
                </li>
                <li className="mb-4">
                  <strong className="float-left w-10 text-[#9e9eae] font-medium">
                    해결
                  </strong>
                  <p className="ml-10">
                    기존에는 서버 응답이 완료되어야만 프로필 이미지를 확인할 수
                    있었으나,{' '}
                    <b className="font-semibold">FileReader.readAsDataURL()</b>
                    을 활용해 클라이언트에서 즉시 미리보기를 제공하도록
                    구현하였습니다.
                    <br />
                    또한,{' '}
                    <b className="font-semibold">
                      browser-image-compression 라이브러리
                    </b>
                    를 활용해 업로드 전에 WebP 포맷으로 이미지 용량을
                    최적화했습니다.
                  </p>
                </li>
                <li>
                  <strong className="float-left w-10 text-[#9e9eae] font-medium">
                    성과
                  </strong>
                  <p className="ml-10">
                    배포 환경에서 테스트한 결과, 이미지 크기가 3.8MB에서
                    129.3KB로 크게 최적화됨을 확인했으며, 이벤트 발생 후 화면
                    렌더링까지 걸리는 시간도 약 1.2초로 대폭 단축되었습니다.
                  </p>
                </li>
              </ul>
            </div>
            <div className="pt-6">
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
                알림 목록 확인 기능 추가 및 개선하기
              </h3>
              <ul>
                <li className="mb-4">
                  <strong className="float-left w-10 text-[#9e9eae] font-medium">
                    문제
                  </strong>
                  <p className="ml-10">
                    이미지 업로드 후 실제 프로필 화면에 반영되기까지 10초가
                    소요되어 사용자 경험이 저하되는 문제가 있었습니다.
                  </p>
                </li>
                <li className="mb-4">
                  <strong className="float-left w-10 text-[#9e9eae] font-medium">
                    해결
                  </strong>
                  <p className="ml-10">
                    알림 목록 클릭 시 해당 포스트로 정확히 이동하도록 기능을
                    개선했습니다.
                  </p>
                  <div className="mt-6">
                    <LinkBtn
                      url="https://scarce-maiasaura-f1f.notion.site/1a1afbe54cc6800d8c0ff1c0017df963"
                      text="관련 작업 내용 자세히 보기"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Retrospective" />
          <p className="leading-relaxed">
            <b className="block mb-2 pb-2 border-b border-[#ddd]">
              이슈 리포트 작성 및 분석 경험 회고
            </b>
            협업 과정에서 이슈 리포트를 작성하며, 같은 오류라도 원인이 다양할 수
            있다는 점을 놓친 경험이 있었습니다. <br />
            동일한 오류가 발생해도 모든 사용자가 같은 원인으로 문제를 겪는 것은
            아니기에, 이슈를 분석할 때는 여러 가능성을 열어두고 접근하는 것이
            중요하다는 사실을 깨달았습니다.
            <br /> 또한, 디버깅 및 성능 분석 도구 활용이 부족하다는 피드백을
            받고, 단순히 현상을 기록하는 데 그치지 않고
            <br className="hidden lg:block" /> DevTools, Lighthouse, Supabase
            로그, Vercel 모니터링 등 다양한 도구를 적극적으로 활용해 문제의
            원인을 보다 명확히 분석하고 근거를 뒷받침하는 과정이 필요하다는 점을
            배웠습니다. <br />
            앞으로는 구체적인 데이터와 객관적인 근거를 기반으로 체계적이고
            신뢰성 있는 이슈 리포트를 작성하여 협업의 효율성과 문제 해결력을
            높이고자 합니다.
          </p>
        </li>
      </ul>
    </ProjectReviewLayout>
  )
}

export default ProjectXAB
