import ProjectReviewLayout from '../components/ProjectReviewLayout'
import ProjectSubTitle from '../components/ProjectSubTitle'
import LinkBtn from '../components/LinkBtn'
import { FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoVercel } from 'react-icons/io5'
import { RiSupabaseFill } from 'react-icons/ri'

function ProjectXAB() {
  return (
    <ProjectReviewLayout title="XAB" date="Dec.24 ~ Feb.25">
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
            <p>
              <LinkBtn
                text="깃허브 저장소 바로가기"
                url="https://github.com/goorm-highfive/xab"
              />
            </p>
            <p className="mt-4">
              <LinkBtn
                text="주요 트러블 슈팅 문서 바로가기"
                url="https://scarce-maiasaura-f1f.notion.site/Troubleshooting-1d5afbe54cc6800c814af914fca8dbdd?pvs=74"
              />
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Duration & Role" />
          <p className="mb-2 text-sm text-[#888]">Duration</p>
          <div className="mb-4">
            <p>Dec.24 ~ Feb.25</p>
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
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <RiSupabaseFill className="text-[#3ecf8e] text-2xl" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <IoLogoVercel className="text-[#000] text-2xl" />
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Retrospective" />
          <p className="leading-relaxed">
            <b className="block mb-2">[이슈 리포트 작성 및 분석 경험 회고]</b>
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
