import React from "react";

const AppDetails = () => {
  return (
    <div className="container mx-auto ">
    
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/feature.png" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mx-3">
            Key Features
          </p>
          <div className="flex flex-col items-start">
            <p className=" text-base sm:text-lg md:text-2xl lg:text-2xl mx-3 my-3">
            <b>Secure Authentication:</b> Utilizing Firebase authentication,
              AppMaster ensures secure and authorized access for users.
            </p>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-2xl mx-3 my-3">
              <b>Character List Integration:</b> Seamlessly integrates with a character
              list API, allowing users to browse and manage characters
              effortlessly.
            </p>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-2xl mx-3 my-3">
            <b>Intuitive Task Management:</b> Create, organize, and prioritize tasks
              with ease using our intuitive task management system.
            </p>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-2xl mx-3 my-3">
            <b>Real-time Collaboration:</b> Collaborate with team members in
              real-time, assign tasks, and track progress effortlessly.
            </p>
            <p className=" text-base sm:text-lg md:text-2xl lg:text-2xl mx-3 my-3">
            <b>Cross-Platform Compatibility:</b> Access AppMaster on iOS and Android
              devices, syncing data across platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
