import styled from '@emotion/styled'

import { CSSSize } from 'types'

export const Container = styled.div<{ maxWidth?: CSSSize }>`
  display: grid;
  place-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: ${({ maxWidth }) => maxWidth};
  padding: 1rem;
  gap: 1rem;
`
