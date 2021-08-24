import React from "react";

const TextBanner: React.FC = () => {
  return (
    <div className="flex py-1 md:py-2 mt-6 border-t-2 border-b-2 whitespace-nowrap overflow-hidden">
      <h1 className="animate-ticker text-2xl md:text-4xl" id="ticker">
        {"A man can't have enough basement. swag - A man can't have enough basement. swag - "}
      </h1>
      <h1 className="animate-ticker2 text-2xl md:text-4xl" id="ticker2">
        {"A man can't have enough basement. swag - A man can't have enough basement. swag - "}
      </h1>
    </div>
  );
};

export default TextBanner;
