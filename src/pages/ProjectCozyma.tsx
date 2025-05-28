import { Link } from 'react-router-dom'
import ProjectReviewLayout from '../components/ProjectReviewLayout'
import ProjectSubTitle from '../components/ProjectSubTitle'
import { FiArrowRight } from 'react-icons/fi'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'
import { SiSwiper } from 'react-icons/si'

function ProjectCozyma() {
  return (
    <ProjectReviewLayout title="코지마" date="Jun.22 - Feb.23">
      <ul>
        <li className="mb-14">
          <ProjectSubTitle title="Overview." />
          <p className="leading-relaxed">
            토탈 헬스케어 브랜드 ‘코지마’의 자사몰 리뉴얼 프로젝트에 참여하여
            전체 페이지의 퍼블리싱을 단독으로 수행하였습니다. <br />
            반응형 웹으로 구현된 본 프로젝트는 다양한 디바이스 환경에서 일관된
            사용자 경험을 제공하는 것을 목표로 하였으며, <br /> 웹 접근성 기준을
            고려한 마크업 구현에도 집중하였습니다.
          </p>
          <div className="mt-10">
            <Link
              target="_blank"
              to="https://cozyma.com/"
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
            <p>Jun.22 - Feb.23</p>
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
              쇼핑몰 전 페이지 퍼블리싱 (디바이스 환경에 대응하는 반응형 구현)
            </p>
            <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
              웹 접근성 기준을 고려한 마크업 적용
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
            <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
              <SiSwiper className="text-[#007aff] text-2xl" />
            </p>
          </div>
        </li>
        <li className="mb-14">
          <ProjectSubTitle title="Retrospective." />
          <p className="leading-relaxed">
            다수가 이용하는 쇼핑몰이라는 특성상, 웹 표준과 접근성은 반드시
            지켜야 할 중요한 요소였습니다. <br />
            동시에, 복잡한 레이아웃을 다양한 디바이스 환경에서 자연스럽게
            보이도록 반응형으로 구현하는 것도 큰 과제였습니다. <br />
            뿐만 아니라, 향후 유지보수와 확장성을 고려해 코드 구조를 체계적으로
            설계하는 것 역시 중요한 목표 중 하나였기에,{' '}
            <br className="hidden lg:block" />
            다양한 요구사항을 어떻게 효율적으로 만족시킬 수 있을지 깊이 고민하며
            작업했습니다.
            <br /> 이 경험은 실무적인 고민을 직접 마주하고 해결했던 소중한
            과정이었으며, 지금도 저에게 큰 자산으로 남아 있습니다.
          </p>
        </li>
      </ul>
    </ProjectReviewLayout>
  )
}

export default ProjectCozyma
