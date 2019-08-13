import React from "react";
import gemoji from "gemoji-parser";
import Markdown from "react-remarkable";

const Commit = () => {
  return (
    <Markdown>
      {gemoji`\`\`\`
56db6e02 :recycle: Refactor BankAccountEditor
14804e2d :loud_sound: Report graphql error
0d325084 :recycle: Refactor bank editor
d336f81c :lipstick: Disable identity validator button when passport 
780dd83a :lipstick: PLATFORMREQ-193 disable residentNo field
203fe294 :bug: PLATFORMREQ-192 Fix initial values
218d295e :bug: PLATFORMREQ-191 Fix identityExt code save
87173fa3 :recycle: Refactor identification validator api
d063cb34 :ambulance: Fix ownerAuthCd100
176798d7 :bug: 심사완료된 심사의 사업자등록번호가 수정 가능한 버그 수정
dcf85a74 :fire: Remove unreachable code
50fabf05 :mute: Disable sentry plugin
eb292d26 :loud_sound: Enable sentry
\`\`\``}
    </Markdown>
  );
};

export default Commit;
