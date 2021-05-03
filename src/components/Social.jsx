import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
const SocialStyle = styled.div`
  margin: 0 auto;
  display: block;
`

const SocialUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
`

const SocialAnchor = styled.a`
  color: #212121;
  text-decoration: none;
  font-size: 1.2em;
`

const SocialIcon = styled.i`
  color: ${props => props.theme.color};
`

const facebook = {
  color: '#3b5998'
}
const twitter = {
  color: '#38A1F3'
}
const linkedin = {
  color: '#0e76a8'
}
const github = {
  color: '#333'
}

const fb = 'facebook'

const Social = () => {
  return (
    <SocialStyle>
      <SocialUl>
        <SocialLi>
          <SocialAnchor href='www.facebook.com' target='_blank'>
            <ThemeProvider theme={facebook}>
              <SocialIcon className='fab fa-facebook'></SocialIcon>
            </ThemeProvider>
          </SocialAnchor>
        </SocialLi>
        <SocialLi>
          <SocialAnchor href='www.twitter.com' target='_blank'>
            <ThemeProvider theme={twitter}>
              <SocialIcon className='fab fa-twitter'></SocialIcon>
            </ThemeProvider>
          </SocialAnchor>
        </SocialLi>
        <SocialLi>
          <SocialAnchor href='www.linkedin.com' target='_blank'>
            <ThemeProvider theme={linkedin}>
              <SocialIcon className='fab fa-linkedin'></SocialIcon>
            </ThemeProvider>
          </SocialAnchor>
        </SocialLi>
        <SocialLi>
          <SocialAnchor href='www.github.com' target='_blank'>
            <ThemeProvider theme={github}>
              <SocialIcon className='fab fa-github'></SocialIcon>
            </ThemeProvider>
          </SocialAnchor>
        </SocialLi>
      </SocialUl>
    </SocialStyle>
  )
}

export default Social
