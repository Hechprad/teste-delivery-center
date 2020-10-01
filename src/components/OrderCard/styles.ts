import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const HorizontalItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & + & {
    margin-top: ${({ theme }) => `${theme.spacing(2)}px`};
  }
`

export const ItemTitle = styled.h4`
  ${({ theme }) => theme.fontTypes.title}
  color: ${({ theme }) => theme.colors.gray4};
`

export const Text = styled.p`
  ${({ theme }) => theme.fontTypes.body}
  color: ${({ theme }) => theme.colors.gray4};
`
