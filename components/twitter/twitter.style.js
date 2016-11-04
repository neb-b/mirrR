import css, {insertRule} from 'next/css'

export const twitterWrapper = css({
  margin: 0,
  padding: 0,
  position: 'absolute',
  bottom: 0,
  height: '60%',
  minHeight: 300,
  width: '25%',
  minWidth: 250,
  overflow: 'hidden',
  listStyleType: 'none',
})

export const tweetWrapper = css({
  paddingTop: 10,
  paddingBottom: 10
})

export const tweetTime = css({
  paddingLeft: 10
})

export const tweetImg = css({
  maxWidth: '100%'
})

export const smallText = css({
  fontWeight: 300,
})

insertRule(".tweet-wrapper:first-child { animation-duration: 350s; animation-name: scroll; animation-timing-function: linear; }")
