import css from 'next/css'

export const weatherWrapper = css({
  float: 'right',
  display: 'inline-block',
  textAlign: 'right',
  width: '25%',
  minWidth: 200,
  maxWidth: 400
})

export const weatherH1 = css({
  display: 'inline-block',
  verticalAlign: 'top',
  margin: 0,
  padding: 0,
  fontSize: 50
})

export const weatherIcon = css({
  height: 65,
  width: 'auto',
  marginLeft: 10,
})
