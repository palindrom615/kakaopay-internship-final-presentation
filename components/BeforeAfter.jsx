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
      focus="12:16,23:24,32:36,44:48,58:60"
      code={require("!!raw-loader!../examples/DirBefore").default}
      subtitle={<Markdown>`route` 곳곳에 흩어져있는 schema</Markdown>}
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
      focus="62:75"
      code={require("!!raw-loader!../examples/DirAfter").default}
      subtitle={<Markdown>**schema first!**</Markdown>}
    />
  </CodeSurferLayout>
);

export default BeforeAfter;
