import ProjectReviewLayout from '../components/ProjectReviewLayout'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { DiJqueryLogo } from 'react-icons/di'
import { DiJqueryUiLogo } from 'react-icons/di'
import peekImg00 from '../assets/nh-p-00.png'
import peekImg01 from '../assets/nh-p-01.png'
import peekImg02 from '../assets/nh-p-02.png'

function ProjectNH() {
  return (
    <ProjectReviewLayout title="NH Charge" date="Apr.23 - Feb.24">
      <section>
        <ul>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Overview.
            </h4>
            <p className="leading-relaxed">
              운영관제시스템 퍼블리싱을 수행하였으며, AG Grid 및 Chart.js를
              활용한 복잡한 테이블 및 시각화 UI를 구현하였습니다. <br />
              변화가 잦은 폼 레이아웃에 대응하기 위해 유연한 그리드 구조를
              설계하였고, 데이터 추가 및 요소 확장 시에도 무리 없이 적용될 수
              있도록 퍼블리싱 가이드를 제작하였습니다. <br />
              해당 가이드는 외부 개발자와의 원활한 협업을 위한 기준점으로
              활용되었습니다.
            </p>
            <em className="block mt-4 text-sm text-red-400">
              * 해당 페이지는 보안상 바로가기를 제공하지 않습니다. 양해
              부탁드립니다 :)
            </em>
          </li>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Duration & Role.
            </h4>
            <p className="mb-2 text-sm text-[#888]">Duration</p>
            <div className="mb-4">
              <p>Apr.23 - Feb.24</p>
            </div>
            <p className="mb-2 text-sm text-[#888]">Role</p>
            <div className="flex flex-col gap-2">
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                퍼블리싱 전담
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                외부 개발팀과 협업 및 커뮤니케이션
              </p>
            </div>
          </li>
          <li className="mb-14">
            <h4 className="mb-4 text-xl font-bold font-ppNeueMontreal">
              Main Tasks.
            </h4>
            <div className="flex flex-col gap-2">
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                운영관제시스템 화면 퍼블리싱 작업
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                AG Grid와 Chart.js를 활용한 테이블 UI와 데이터 시각화 컴포넌트
                구현
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                동적 변경이 잦은 폼에 대응하기 위해 2단/3단 그리드 레이아웃
                기반의 유연한 폼 구조 설계
              </p>
              <p className="relative pl-4 before:absolute before:left-0 before:top-0  before:content-['-']">
                외부 개발자와의 원활한 협업을 위한 협업을 위한 퍼블리싱 가이드
                문서 제작
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
                <IoLogoJavascript className="text-[#F7DF1E] text-2xl" />
              </p>
              <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
                <DiJqueryLogo className="text-[#0769AD] text-2xl" />
              </p>
              <p className="flex justify-center items-center w-12 h-12 border border-[#ddd] rounded-md">
                <DiJqueryUiLogo className="text-[#F8981D]" />
              </p>
            </div>
          </li>
          <li className="mb-14">
            <h4 className="mb-8 text-xl font-bold font-ppNeueMontreal">
              Peek into the Work.
            </h4>
            <div className="mb-4">
              <strong className="relative pl-4 mb-2 text-black font-medium inline-block before:absolute before:left-0 before:top-[3px] before:w-1 before:h-4 before:bg-black before:content-['']">
                퍼블리싱 가이드 스크린샷
              </strong>
              <p className="text-md">
                구성 요소별 네이밍, 여백 기준, 확장 방안 등을 정리한
                가이드입니다.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/2">
                <img src={peekImg00} alt="" />
              </div>
              <div className="w-1/2">
                <img src={peekImg01} alt="" />
              </div>
              <div className="w-1/2">
                <img src={peekImg02} alt="" />
              </div>
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

export default ProjectNH
