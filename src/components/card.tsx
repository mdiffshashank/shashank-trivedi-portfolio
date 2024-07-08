import React from "react";

const Card = ({
  children,
  fullwidth = false,
}: {
  children: React.ReactNode;
  fullwidth?: boolean;
}) => {
  const width = fullwidth ? "w-full" : "w-30 sm:w-80";

  return (
    <div
      className={`p-10 ${width} h-60 border-zinc-200 mb-20 border-2 rounded-md`}
    >
      {children}
    </div>
  );
};

export default Card;
