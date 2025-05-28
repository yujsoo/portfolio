import ProjectReviewLayout from '../components/ProjectReviewLayout'
import ProjectSubTitle from '../components/ProjectSubTitle'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'

function ProjectWrap() {
  return (
    <ProjectReviewLayout title="WrapStudio" date="Dec.23 - Jan.24">
      <ul>
        <li className="mb-14">
          <ProjectSubTitle title="Overview." />
          <p className="leading-relaxed">
            랩스튜디오 회사 홈페이지 리뉴얼 프로젝트에 참여하여 전체 페이지
            퍼블리싱을 단독으로 진행했습니다.
            <br />
            특히 GSAP를 활용한 인터랙션 작업에 집중하여, 각 섹션별 다양한
            애니메이션을 구현했습니다.
            <br />
            이를 통해 사용자 경험을 향상시키고, 시각적 재미와 웹사이트의
            상호작용성을 높일 수 있었습니다.
            <br />
            또한, 시맨틱 마크업을 적용해 접근성을 개선하고, SEO 최적화를 위해
            태그 구조와 메타 태그 작업도 함께 수행했습니다.
          </p>
          <div className="mt-10">
            <Link
              target="_blank"
              to="https://wrapstudio.co.kr/"
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
            <p>Dec.23 - Jan.24</p>
          </div>
          <p className="mb-2 text-sm text-[#888]">Role</p>
          <div className="flex flex-col gap-2">
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              퍼블리싱 전담
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Main Tasks." />
          <div className="flex flex-col gap-2">
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              GSAP를 이용한 웹 애니메이션 및 인터랙션 구현
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              웹 접근성 향상을 위한 시맨틱 마크업 적용
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              시맨틱 마크업과 최적화된 태그 구조로 검색엔진최적화(SEO) 고려
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
              <DiJqueryLogo className="text-[#0769AD] text-2xl" />
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Retrospective." />
          <p className="leading-relaxed">
            이번 프로젝트는 <b>GSAP(GreenSock Animation Platform)</b>을 활용해
            페이지 전반에 걸친 인터랙션을 구현한 경험입니다.
            <br /> 각 섹션의 성격에 맞춰 정교하게 애니메이션을 설계하고
            적용함으로써, 단순한 정보 전달을 넘어 몰입감 있는 사용자 경험을
            제공하는 데 주력했습니다.
            <br /> 또한, 시각적인 요소에만 집중하지 않고{' '}
            <b>웹 접근성과 SEO 최적화</b>
            역시 중요한 고려 대상이었습니다.
            <br /> 시맨틱 마크업을 적극 활용해 접근성을 높였고, 메타 태그와 태그
            구조를 최적화하여 검색 엔진에 잘 노출될 수 있도록 구성했습니다.
            <br />
            <br /> 애니메이션과 접근성/SEO는 자칫 상충할 수 있는 요소처럼
            보이지만, 이번 작업을 통해 기획 단계부터 균형을 고려한다면 충분히
            조화롭게 구현할 수 있다는 점을 직접 체감할 수 있었습니다.
            <br /> 비주얼과 기술, 사용자 중심 사고를 함께 고민했던 이 프로젝트는
            제게 더 깊이 있는 프론트엔드 개발 경험으로 남았습니다.
          </p>
        </li>
      </ul>
    </ProjectReviewLayout>
  )
}

export default ProjectWrap
