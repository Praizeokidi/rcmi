import React from "react";
import Strategy from "../components/Strategy";
import Button from "../components/Button";

const StrategyPage = () => {
  return (
    <main>
      <div className="h-96   bg-[url('/images/project3.jpg')]">
        <div className="h-96 opacity-65 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="z-3 px-8 pt-24 flex flex-col isolate justify-center items-center h-full m-auto text-center ">
            <h1 className="font-bold text-3xl mb-5">
              Strategy of the ministry
            </h1>
            <p className="mb-4"></p>
            <Button href="/" className={"max-w-32  "}>
              Back Home
            </Button>
          </div>
        </div>
      </div>
      <Strategy />
    </main>
  );
};

export default StrategyPage;
