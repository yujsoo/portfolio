import jsIcon from '../assets/ico_js.png'
import tsIcon from '../assets/ico_ts.png'
import reactIcon from '../assets/ico_react.png'
import nexttIcon from '../assets/ico_next.png'
import vueIcon from '../assets/ico_vue.png'
import zustandIcon from '../assets/ico_zustand.png'
import tanstackIcon from '../assets/ico_tanstack.png'
// import springIcon from '../assets/ico_sp.png'
// import springbootIcon from '../assets/ico_spb.png'
import htmlIcon from '../assets/ico_html.png'
import cssIcon from '../assets/ico_css.png'
import tcssIcon from '../assets/ico_tcss.png'
import stylecpIcon from '../assets/ico_style_c.png'
import sassIcon from '../assets/ico_sass.png'
import swiperIcon from '../assets/ico_swiper.png'
import agIcon from '../assets/ico_ag.png'
import chartIcon from '../assets/ico_chart.png'
import gsapIcon from '../assets/ico_gsap.png'
import shadIcon from '../assets/ico_shad.png'
import fmIcon from '../assets/ico_fm.png'
import supaIcon from '../assets/ico_supa.png'
import viteIcon from '../assets/ico_vite.png'
import githubIcon from '../assets/ico_git.png'
import vercelIcon from '../assets/ico_vercel.png'
import figmaIcon from '../assets/ico_figma.png'
import pslIcon from '../assets/ico_ps.png'
import xdIcon from '../assets/ico_xd.png'
import aiIcon from '../assets/ico_ai.png'
import zepIcon from '../assets/ico_zep.png'
import slackIcon from '../assets/ico_slack.png'
import flowIcon from '../assets/ico_flow.png'
import teamsIcon from '../assets/ico_teams.png'
import trelloIcon from '../assets/ico_trello.png'
import notionIcon from '../assets/ico_notion.png'
import jiraIcon from '../assets/ico_jira.png'
import linearIcon from '../assets/ico_linear.png'

export const skillItems = [
  {
    title: '언어',
    familiar: [{ name: 'JavaScript', icon: jsIcon }],
    tried: [{ name: 'TypeScript', icon: tsIcon }],
  },
  {
    title: '프레임워크 / 라이브러리',
    familiar: [{ name: 'React', icon: reactIcon }],
    tried: [
      { name: 'Next.js', icon: nexttIcon },
      { name: 'Vue.js', icon: vueIcon },
      { name: 'Zustand', icon: zustandIcon },
      { name: 'TanStack Query', icon: tanstackIcon },
      // { name: 'Spring', icon: springIcon },
      // { name: 'Spring Boot', icon: springbootIcon },
    ],
  },
  {
    title: '스타일링',
    familiar: [
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
    ],
    tried: [
      { name: 'Tailwind CSS', icon: tcssIcon },
      { name: 'Styled Components', icon: stylecpIcon },
      { name: 'SASS', icon: sassIcon },
    ],
  },
  {
    title: 'UI 라이브러리',
    familiar: [
      { name: 'Swiper', icon: swiperIcon },
      { name: 'Chart.js', icon: chartIcon },
    ],
    tried: [
      { name: 'AG-Grid', icon: agIcon },
      { name: 'GSAP', icon: gsapIcon },
      { name: 'shadcn/ui', icon: shadIcon },
      { name: 'Framer Motion', icon: fmIcon },
    ],
  },
  {
    title: '백엔드 서비스',
    familiar: [],
    tried: [{ name: 'Supabase', icon: supaIcon }],
  },
  {
    title: '환경 및 배포',
    familiar: [
      { name: 'Vite', icon: viteIcon },
      { name: 'GitHub', icon: githubIcon },
    ],
    tried: [{ name: 'Vercel', icon: vercelIcon }],
  },
  {
    title: '디자인 툴',
    familiar: [
      { name: 'Figma', icon: figmaIcon },
      { name: 'Adobe Photoshop', icon: pslIcon },
    ],
    tried: [
      { name: 'Adobe XD', icon: xdIcon },
      { name: 'Adobe Illustrator', icon: aiIcon },
      { name: 'Zeplin', icon: zepIcon },
    ],
  },
  {
    title: '협업 툴',
    familiar: [
      { name: 'Slack', icon: slackIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'flow', icon: flowIcon },
      { name: 'Microsoft Teams', icon: teamsIcon },
      { name: 'Trello', icon: trelloIcon },
      { name: 'Notion', icon: notionIcon },
    ],
    tried: [
      { name: 'Jira', icon: jiraIcon },
      { name: 'Linear', icon: linearIcon },
    ],
  },
]
