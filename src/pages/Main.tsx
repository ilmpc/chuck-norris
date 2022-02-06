import styled from "@emotion/styled";
import { Button } from "components/Button";
import { useGetRandomJokeQuery } from "services/api";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 30rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  text-align: center;
`;

export const Main: React.VFC = () => {
  const { data: joke, isLoading, refetch } = useGetRandomJokeQuery();
  return (
    <Container>
      <Column>
        {isLoading && "Loading..."}
        {joke?.value}
        <Button onClick={refetch}>Next cite</Button>
      </Column>
    </Container>
  );
};
