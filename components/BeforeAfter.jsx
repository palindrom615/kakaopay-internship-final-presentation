import React from "react";
import {
  CodeSurferLayout,
  CodeSurferColumnLayout,
  Code,
  Step,
  nightOwl
} from "code-surfer";
import Markdown from "react-remarkable";
export const theme = nightOwl;

const BeforeAfter = () => (
  <CodeSurferLayout>
    <Code
      code={require("!!raw-loader!../examples/DirBefore").default}
      title="schema first"
    />
    <Code
      title="schema first"
      focus="20:25,27:39,40:50,53:62"
      code={require("!!raw-loader!../examples/DirBefore").default}
      subtitle={<Markdown>`route` 기반 디렉터리 구조</Markdown>}
    />
    <Code
      title="schema first"
      focus="2:19"
      code={require("!!raw-loader!../examples/DirBefore").default}
      subtitle={<Markdown>점점 커지는 `common` 디렉터리</Markdown>}
    />
    <Code
      title="schema first"
      code={require("!!raw-loader!../examples/DirAfter").default}
    />
    <Code
      title="schema first"
      focus="11:61"
      code={require("!!raw-loader!../examples/DirAfter").default}
      subtitle={<Markdown>_atomic design_을 적용</Markdown>}
    />
    <Code
      title="schema first"
      focus="62:75"
      code={require("!!raw-loader!../examples/DirAfter").default}
      subtitle={<Markdown>**schema first!**</Markdown>}
    />
  </CodeSurferLayout>
);

export default BeforeAfter;
