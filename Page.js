import React, { useState } from "react";
import UIJoined from "./UIJoined";
import UIJoinPage from "./UIJoinPage";

const Page = () => {
  const [pageIsSubmitted, setPageIsSubmitted] = useState(false);

  const submitPage = () => {
    setPageIsSubmitted(true);
  };
  return (
    <div>
      {!pageIsSubmitted ? (
        <UIJoinPage submitPage={submitPage} />
      ) : (
        <UIJoined />
      )}
    </div>
  );
};

export default Page;
