import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/zeit-and-notion.png"
        height="85"
        width="250"
        alt="ZEIT + Notion"
      />
      <h1>tkgshn note</h1>
      <h2>
        Pedagogy to Eliminate inequality.
        </ExtLink>
      </h2>



      <div className="explanation">
        <p>
Born in 2002. We aim to close the choice gap through education. I'm interested in implementing in society between academics and business.</p>


      </div>
    </div>
  </>
)
