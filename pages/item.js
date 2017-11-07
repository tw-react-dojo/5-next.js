import Page from '../components/Page'
import fetch from 'isomorphic-fetch'
import moment from 'moment'

const Item = ({title, text, time}) => (
  <Page title="Welcome">
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
      <i>{moment(time).format('MMM Do YY')}</i>
    </div>
  </Page>
)

Item.getInitialProps = async ({query}) => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${query.id}.json`
  )
  const item = await response.json()
  return item
}

export default Item
