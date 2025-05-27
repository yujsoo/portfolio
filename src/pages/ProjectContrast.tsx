import { Link } from 'react-router-dom'
import ProjectReviewLayout from '../components/ProjectReviewLayout'
import ProjectSubTitle from '../components/ProjectSubTitle'
import { FiArrowRight } from 'react-icons/fi'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'

function ProjectContrast() {
  return (
    <ProjectReviewLayout
      title={
        <>
          {' '}
          웹접근성
          <br /> 명도대비 검사 도구
        </>
      }
      date="Apr.22 - Jun.22">
      <ul>
        <li className="mb-14">
          <ProjectSubTitle title="Overview." />
          <p className="leading-relaxed">
            웹 접근성 명도 대비 검사 도구를 기획하고 개발하여, 실무자들이 색상
            입력만으로 빠르게 명암비를 확인할 수 있도록 구현했습니다.
            <br />
            외부 관련 블로그에 소개되며, 회사 브랜드 노출 및 홍보에 기여한
            프로젝트입니다.
          </p>
          <div className="mt-10">
            <Link
              target="_blank"
              to="https://sitero.co.kr/contrast"
              className="inline-flex items-center gap-2 group text-black">
              <p className="flex items-center justify-center h-2 w-2 group-hover:h-6 group-hover:w-6 rounded-full bg-black transition-all duration-300 ease-in-out relative">
                <FiArrowRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </p>
              <p className="relative">
                View Project
                <span className="absolute left-0 -bottom-0 h-[1px] w-full bg-black scale-x-100 group-hover:scale-x-0 origin-right transition-transform duration-300 ease-in-out" />
              </p>
            </Link>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Duration & Role." />
          <p className="mb-2 text-sm text-[#888]">Duration</p>
          <div className="mb-4">
            <p>Apr.22 - Jun.22</p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Main Tasks." />
          <div className="flex flex-col gap-2">
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              별도의 버튼 없이 색상만 입력해도 명암비 결과를 즉시 확인할 수
              있도록 구현
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              정확한 계산 로직과 빠른 피드백 제공에 중점
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Tech Stack." />
          <div className="flex gap-2">
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <FaHtml5 className="text-[#E34F26] text-2xl" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <FaCss3Alt className="text-[#1572B6] text-2xl" />
            </p>
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <IoLogoJavascript className="text-[#F7DF1E] text-2xl" />
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Retrospective." />
          <p className="leading-relaxed">
            당시 국내에는 대부분 명도 대비 검사 도구가 영어로 되어 있어, 누구나
            쉽게 사용할 수 있도록 한국어 기반의 간단하고 직관적인 도구가
            필요하다는 생각에서 개발을 시작했습니다.
            <br />
            누구나 쉽게 사용할 수 있도록, 한국어 기반의 간단하고 직관적인 도구가
            있었으면 좋겠다는 생각이 개발의 출발점이었습니다.
            <br />이 도구는 입력된 두 색상의 명도 대비 비율을 계산해 WCAG 기준을
            만족하는지 확인할 수 있도록 구현되어 있으며,{' '}
            <br className="hidden lg:block" />
            접근성 기준에 익숙하지 않은 사용자들도 결과를 쉽게 이해할 수 있도록
            즉각적인 피드백을 함께 제공합니다. <br />
            현재는 명암비 기준 충족 여부만 제공하고 있지만, 명암비가 부족할 경우
            대체 가능한 색상 조합을 추천해주는 기능이 추가된다면 더욱 실용적일
            것이라 생각합니다.
            <br />
            이 도구는 2022년에 제작되었고, 이후 퇴사로 인해 업데이트가 중단된
            상태입니다. <br />
            최근 다시 살펴보니 코드의 구조나 UX 측면에서 개선할 여지가 보여,
            여건이 된다면 기능 확장과 리팩토링을 진행할 계획입니다. :)
          </p>
        </li>
      </ul>
    </ProjectReviewLayout>
  )
}

export default ProjectContrast
