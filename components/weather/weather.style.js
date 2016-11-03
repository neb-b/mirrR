import css from 'next/css'

export const weatherWrapper = css({
  display: 'inline-block',
  width: '25%',
  minWidth: 200,
  maxWidth: 400
})

export const weatherH1 = css({
  display: 'inline-block'
})

export const weatherIcon = css({
    height: 65,
    width: 'auto',
    transform: 'translateY(20px)'
})
