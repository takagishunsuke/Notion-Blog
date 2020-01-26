import '../styles/global.css'
import ExtLink from '../components/ext-link'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <footer>
      <span>Follow me!</span>
      <ExtLink href="https://twitter.com/takagi_1129">
        <img
          src="https://zeit.co/button"
          height={46}
          width={132}
          alt="deploy to ZEIT button"
        />
      </ExtLink>
      <span>
        or{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          view source
        </ExtLink>
      </span>
    </footer>
  </>
)
