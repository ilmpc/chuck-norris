import styled from "@emotion/styled";
import { Button } from "components/Button";
import { useState } from "react";
import { useGetRandomJokeQuery } from "services/api";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 30rem;
`;

const Column = styled.div<{ gap?: number | string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ gap = "2rem" }) => gap};
  text-align: center;
  margin: 0 1rem;
`;

export const Main: React.VFC = () => {
  const [auto, setAuto] = useState<Boolean>(false);
  const {
    data: joke,
    isLoading,
    isFetching,
    refetch,
  } = useGetRandomJokeQuery(undefined, { pollingInterval: auto ? 3000 : 0 });
  return (
    <Container>
      <Column>
        {isLoading && "Loading..."}
        {joke?.value}
        <Column gap="0.5rem">
          <Button onClick={refetch} disabled={isFetching} variant="primary">
            Next joke
          </Button>
          <Button onClick={() => setAuto((e) => !e)}>
            {auto ? "Disable" : "Enable"} auto next
          </Button>
        </Column>
      </Column>
    </Container>
  );
};
