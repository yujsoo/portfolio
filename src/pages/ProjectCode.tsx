import ProjectReviewLayout from '../components/ProjectReviewLayout'
import ProjectSubTitle from '../components/ProjectSubTitle'
import LinkBtn from '../components/LinkBtn'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'

function ProjectCode() {
  return (
    <ProjectReviewLayout title="색상 코드 변환 도구" date="Apr.22 - Jun.22">
      <ul>
        <li className="mb-14">
          <ProjectSubTitle title="Overview" />
          <p className="leading-relaxed">
            색상 코드 변환 도구를 기획하고 개발하여, 실무자들이 HEX, RGB, HSL
            간의 색상 포맷을 실시간으로 변환할 수 있도록 구현했습니다.
          </p>
          <div className="mt-10">
            <LinkBtn text="View Project" url="https://sitero.co.kr/colorcode" />
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Duration & Role" />
          <p className="mb-2 text-sm text-[#888]">Duration</p>
          <div className="mb-4">
            <p>Apr.22 - Jun.22</p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Main Tasks" />
          <div className="flex flex-col gap-2">
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              HEX, RGB, HSL 간 변환이 가능한 컬러코드 실시간 변환 도구 개발
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              실무자 편의를 고려한 직관적인 UI 및 즉시 결과 출력 처리 구현
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Tech Stack" />
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
      </ul>
    </ProjectReviewLayout>
  )
}

export default ProjectCode
