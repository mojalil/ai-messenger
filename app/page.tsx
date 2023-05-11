import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl mb-20 font-bold">Chat GPT Messenger</h1>

      <div className="flex space-x-2 text-center">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* The sun icon */}
            <SunIcon className="h-8 w-8" />

            <h2>Examples</h2>
          </div>
          <div className=" space-y-2">
            <p className="infoText">Explain Something To Me</p>
            <p className="infoText">
              What is the difference between a dog and a cat
            </p>
            <p className="infoText">What is the colour of the sun</p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* The sun icon */}
            <BoltIcon className="h-8 w-8" />

            <h2>Capabilities</h2>
          </div>
          <div className=" space-y-2">
            <p className="infoText">Explain Something To Me</p>
            <p className="infoText">
              What is the difference between a dog and a cat
            </p>
            <p className="infoText">What is the colour of the sun</p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* The sun icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />

            <h2>Limitations</h2>
          </div>
          <div className=" space-y-2">
            <p className="infoText">Explain Something To Me</p>
            <p className="infoText">
              What is the difference between a dog and a cat
            </p>
            <p className="infoText">What is the colour of the sun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
