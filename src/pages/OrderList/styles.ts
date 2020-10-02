import styled from 'styled-components'
import MaterialUIButton from '@material-ui/core/Button'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: ${({ theme }) => `${theme.spacing(5)}px`};
`

export const Li = styled.li`
  background-color: ${({ theme }) => theme.colors.white2};
  justify-content: center;
  width: fit-content;
  height: 100%;
  padding: ${({ theme }) => `${theme.spacing(2)}px`};
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.gray1};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.gray3};
  }

  & + & {
    margin-top: ${({ theme }) => `${theme.spacing(2)}px`};
  }
`

export const PageTitle = styled.h3`
  ${({ theme }) => theme.fontTypes.heading}
  color: ${({ theme }) => theme.colors.white2};
  margin: ${({ theme }) => `${theme.spacing(2)}px 0 ${theme.spacing(5)}px`};
`

export const Loading = styled.p`
  ${({ theme }) => theme.fontTypes.heading};
  color: ${({ theme }) => theme.colors.white2};
  margin-top: ${({ theme }) => `${theme.spacing(2)}px`};
`

export const Button = styled(MaterialUIButton).attrs(() => ({
  type: 'button',
  variant: 'contained',
  color: 'primary',
}))``
