import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'
import { NavItem } from '../layouts'
import NavMenu from './NavMenu'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: baseline;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
const HeaderSubtitle = styled.h5`
  color: ${colors.white};
  font-size: 0.875em;
  font-weight: 400;
  margin: 0 1em;
`

interface HeaderProps {
  title: string
  subtitle: string
  nav: NavItem[]
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, nav }) => (
  <StyledHeader>
    <HeaderInner>
      <HeaderLeft>
        <HomepageLink to="/">{title}</HomepageLink>
        <HeaderSubtitle>{subtitle}</HeaderSubtitle>
      </HeaderLeft>
      <NavMenu items={nav} />
    </HeaderInner>
  </StyledHeader>
)

export default Header
