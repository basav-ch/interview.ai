import { BsRobot } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#f3f3f3] flex justify-center px-4 pb-10 py-4 pt-10">
      <div
        className="w-full max-w-7xl bg-white rounded-3xl shadow-sm
        border border-gray-200 pt-6 pb-7 px-3 text-center"
      >
        <div className="flex justify-center itmes-center gap-3 mb-3">
          <div className="bg-black text-white p-2 rounded-lg">
            <BsRobot size={16} />
          </div>
          <h2 className="font-semibold">Interview.AI</h2>
        </div>
        <p className="text-gray-600 text-sm max-w-full mx-auto tracking-wide">
          AI-powered interview preparation platform designed to improve
          communication skills, technical depth and professional confidence.
        </p>
      </div>
    </div>
  );
}

export default Footer;
