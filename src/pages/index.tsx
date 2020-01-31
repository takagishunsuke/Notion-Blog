ctimport Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
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
        Thoese days action is my'{' '}
        <ExtLink
          href="https://twitter.com/takagi_1129"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          Twitter
        </ExtLink>
      </h2>

      <Features />

      <div className="explanation">
        <p>
17歳，N高生．「ハッシャダイ」という会社でユーザー体験をデザインすることメインとしています．スキルセットはPjM/UX/IAあたりです．高校退学→新規事業→サービスデザイン・グロースとか．新規事業をやったり，転職メディアをやったりでリサーチ・MVPの作成・情報デザイン（infomation architecture）・グロースハック・データ分析あたりだったり，UXに基づいたSNSコンテンツ戦略などをやってきました．社外ではbouncyの動画ライターや，英会話塾の「PRESENC」でネットコース新設のPMなどやったりも．今はNoCodeのbubbleで高卒に向けた進路選択をサポートするプロダクトを作っています
        </p>


      </div>
    </div>
  </>
)
