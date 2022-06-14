import styled from 'styled-components'

interface IWrapper {
  cardType: 'basic' | 'detailed'
}
export const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

interface IHorizontalItem {
  hasArrayContent?: boolean
  noMarginTop?: boolean
}
export const HorizontalItem = styled.div<IHorizontalItem>`
  display: flex;
  align-items: ${({ hasArrayContent }) =>
    hasArrayContent ? 'flex-start' : 'center'};
  flex-direction: ${({ hasArrayContent }) =>
    hasArrayContent ? 'column' : 'unset'};
  justify-content: space-between;
  width: 100%;

  & + & {
    margin-top: ${({ theme, noMarginTop }) =>
      noMarginTop ? `${theme.spacing(1)}px` : `${theme.spacing(2)}px`};
  }
`

export const ItemTitle = styled.h4`
  ${({ theme }) => theme.fontTypes.title}
  color: ${({ theme }) => theme.colors.gray4};
`

export const Text = styled.p`
  ${({ theme }) => theme.fontTypes.body}
  color: ${({ theme }) => theme.colors.gray4};
  margin-left: ${({ theme }) => `${theme.spacing(2)}px`};
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 24px);
  margin: ${({ theme }) => `${theme.spacing(2)}px 0 0 ${theme.spacing(3)}px`};
`
