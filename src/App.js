import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";

import Todo from "./components/Todo";
import Loading from "./components/Loading";
import Error from "./components/Error";

export default function App() {
  return (
    <AppContainer>
      <ErrorBoundary fallback={Error()}>
        <Suspense fallback={Loading()}>
          <Todo />
        </Suspense>
      </ErrorBoundary>
      <DummyDiv />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 500px;
  border: 1px solid red;
  border-radius: 10px;
  position: relative;
`;

const DummyDiv = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: blue;
`;
