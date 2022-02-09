import styled from '@emotion/styled'

import { CSSSize } from 'types'

export const Column = styled.div<{ gap?: CSSSize; maxWidth?: CSSSize; fullWidth?: boolean; center?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ gap = '2rem' }) => gap};
  max-width: ${({ maxWidth }) => maxWidth};
  width: ${({ fullWidth }) => fullWidth && '100%'};
  ${({ center }) =>
    center &&
    `
    margin-left: auto;
    margin-right: auto;
  `}
`
