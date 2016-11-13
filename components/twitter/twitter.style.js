import css, { keyframes, insertRule } from 'next/css'

export const twitterWrapper = css({
  position: 'absolute',
  bottom: 0,
  right: 10,
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

export const scroll = keyframes({
  '0%': { marginTop: 0 },
  '50%': { marginTop: '-1500%' },
  '100%': { marginTop: '-3000%' }
})
