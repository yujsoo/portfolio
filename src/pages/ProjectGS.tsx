import ProjectReviewLayout from '../components/ProjectReviewLayout'
import { FaVuejs } from 'react-icons/fa'

function ProjectGS() {
  return (
    <ProjectReviewLayout title="GS칼텍스" date="Dec.23 - Feb.24">
      <section>
        <ul>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Overview.
            </h4>
            <p className="leading-relaxed">
              Vue3 기반으로 구현된 관제 시스템 내 대시보드 UI 퍼블리싱을
              수행하였으며, 반응형 웹 구현과 더불어 데이터 시각화 컴포넌트(차트
              및 테이블)의 스타일링을 담당하였습니다.
            </p>
            <em className="block mt-4 text-sm text-red-400">
              * 해당 페이지는 보안상 바로가기를 제공하지 않습니다. 양해
              부탁드립니다 :)
            </em>
            {/* <div className="mt-10">
              <Link
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
            </div> */}
          </li>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Duration & Role.
            </h4>
            <p className="mb-2 text-sm text-[#888]">Duration</p>
            <div className="mb-4">
              <p>Dec.23 - Feb.24</p>
            </div>
            <p className="mb-2 text-sm text-[#888]">Role</p>
            <div className="flex flex-col gap-2">
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                퍼블리싱 전담
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                GS칼텍스 개발팀과 협업 및 커뮤니케이션
              </p>
            </div>
          </li>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Main Tasks.
            </h4>
            <div className="flex flex-col gap-2">
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                Vue3 기반의 관제 시스템 대시보드 화면 퍼블리싱 작업
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                AG Grid, Chart.js 활용한 데이터 시각화
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                최소 해상도 대응을 위한 레이아웃 구조 설계
              </p>
            </div>
          </li>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Tech Stack.
            </h4>
            <div className="flex gap-2">
              <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
                <FaVuejs className="text-[#42b883] text-2xl" />
              </p>
            </div>
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

export default ProjectGS
