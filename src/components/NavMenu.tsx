import * as React from 'react'
import styled from '@emotion/styled'
// import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { colors, breakpoints } from '../styles/variables'
import { NavItem } from '../layouts'

const StyledNavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
const StyledNavItem = styled.li`
  display: inline-block;
  margin-right: 1em;

  &:last-child {
    margin-right: 0;
  }
  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

export interface Props {
  items: NavItem[]
}

const NavMenu: React.FC<Props> = ({ items }) => {
  return (
    <nav>
      <StyledNavList>
        {items.map(item => (
          <StyledNavItem key={item.id}>
            <NavLink to={item.to}>{item.name}</NavLink>
          </StyledNavItem>
        ))}
      </StyledNavList>
    </nav>
  )
}

export default NavMenu
