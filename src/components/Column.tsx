import styled from '@emotion/styled'

export const Column = styled.div<{ gap?: number | string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ gap = '2rem' }) => gap};
  text-align: center;
`
