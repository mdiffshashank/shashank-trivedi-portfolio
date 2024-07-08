import Link from "next/link";
import React from "react";

const HighlightButton = () => {
  return (
    <Link href={"/say-hello"}>
      <button className="highlight-btn hover:border-[#5BE9B9] hover:bg-[#5BE9B9] hover:text-black">
        Let&#39;s do this
      </button>
    </Link>
  );
};

export default HighlightButton;
