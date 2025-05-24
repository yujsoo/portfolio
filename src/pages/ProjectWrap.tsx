import ProjectReviewLayout from '../components/ProjectReviewLayout'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiJqueryLogo } from 'react-icons/di'

function ProjectWrap() {
  return (
    <ProjectReviewLayout title="WrapStudio" date="Dec.23 - Jan.24">
      <section>
        <ul>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Overview.
            </h4>
            <p className="leading-relaxed">
              랩스튜디오의 회사 홈페이지 리뉴얼 프로젝트에 참여하여, 전체
              페이지의 퍼블리싱을 단독으로 수행하였습니다.
              <br /> GSAP를 활용한 인터랙션 작업을 집중적으로 진행했습니다.
              <br />
              홈페이지의 각 섹션에서 다양한 애니메이션을 구현하여 사용자 경험을
              향상시키고, 시각적인 재미와 함께 웹사이트의 상호작용성을
              높였습니다.
              <br /> 또한, 웹 접근성과 SEO 최적화에도 신경을 써서, 시맨틱
              마크업을 활용하여 접근성을 개선하고, SEO를 고려한 태그 구조와 메타
              태그 최적화 작업을 병행했습니다.
            </p>
            <div className="mt-10">
              <Link
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
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Duration & Role.
            </h4>
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
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Main Tasks.
            </h4>
            <div className="flex flex-col gap-2">
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                GSAP를 이용한 웹 애니메이션 및 인터랙션 구현
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                웹 접근성 향상을 위한 시맨틱 마크업 적용
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                SEO 최적화를 위한 HTML 구조 개선 및 메타 태그 추가
              </p>
            </div>
          </li>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Tech Stack.
            </h4>
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
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Peek into the Work.
            </h4>
          </li>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Retrospective.
            </h4>
          </li>
        </ul>
      </section>
    </ProjectReviewLayout>
  )
}

export default ProjectWrap
