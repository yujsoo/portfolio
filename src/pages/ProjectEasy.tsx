import ProjectReviewLayout from '../components/ProjectReviewLayout'
import ProjectSubTitle from '../components/ProjectSubTitle'
import LinkBtn from '../components/LinkBtn'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiSwiper } from 'react-icons/si'

function ProjectEasy() {
  return (
    <ProjectReviewLayout title="이지트래픽" date="Feb.22 - Apr.22">
      <ul>
        <li className="mb-14">
          <ProjectSubTitle title="Overview" />
          <p className="leading-relaxed">
            교통시스템 혁신을 목표로 하는 이지트래픽의 홈페이지 전면 리뉴얼을
            맡아 진행했습니다.
            <br /> 반응형 웹과 검색엔진 최적화(SEO)를 꼼꼼히 고려하여 퍼블리싱
            작업을 완성했습니다.
          </p>
          <div className="mt-10">
            <LinkBtn text="View Project" url="http://easytraffic.co.kr/" />
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Duration & Role" />
          <p className="mb-2 text-sm text-[#888]">Duration</p>
          <div className="mb-4">
            <p>Feb.22 - Apr.22</p>
          </div>
          <p className="mb-2 text-sm text-[#888]">Role</p>
          <div className="flex flex-col gap-2">
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              퍼블리싱 전담
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Main Tasks" />
          <div className="flex flex-col gap-2">
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              반응형 웹 구현
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              자바스크립트 기반 기능 개발
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              시맨틱 마크업과 최적화된 태그 구조로 검색엔진최적화(SEO) 고려
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
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <SiSwiper className="text-[#007aff] text-2xl" />
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Retrospective" />
          <p className="leading-relaxed">
            당시에는 평소 jQuery로 기능 개발을 주로 하던 시기였지만, 해당
            프로젝트에서는 자바스크립트만으로 기능을 구현해야 하는 조건이
            있었습니다. <br />
            jQuery에 익숙했던 터라 순수 자바스크립트로 기능을 작성하는 데 큰
            어려움은 없었고, 오히려 자바스크립트의 기본 동작을 다시 한 번 탄탄히
            다질 수 있는 좋은 경험이 되었습니다.
          </p>
        </li>
      </ul>
    </ProjectReviewLayout>
  )
}

export default ProjectEasy
