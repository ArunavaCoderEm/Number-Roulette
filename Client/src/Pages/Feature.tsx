import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-transparent p-4">
      <h1 className="text-3xl font-bold text-blue-400 text-center mb-8">Features</h1>

      <div className="mb-16">
        <h2 className="text-2xl text-blue-300 font-semibold mb-6">Our Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-blue-300 p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/one.png" alt="Feature 1" className="mb-4 w-full h-48 object-cover rounded-lg" />
            <p className="text-center">Hit Join Game Room To Initialize Game.</p>
          </div>
          <div className="bg-blue-300 p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/two.png" alt="Feature 2" className="mb-4 w-full h-48 object-cover rounded-lg" />
            <p className="text-center">After Hitting Enter Arena You Are Waiting For Other Players.</p>
          </div>
          <div className="bg-blue-300 p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/three.png" alt="Feature 3" className="mb-4 w-full h-48 object-cover rounded-lg" />
            <p className="text-center">You Are Only Able To Spin Your Own Wheel And Wait For Opponent To Spin And Get Desired Results.</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-blue-300">Coming Soon</h2>
        <ul className="list-disc list-inside space-y-2 bg-blue-300 p-6 rounded-lg shadow-md">
          <li>Fake Money And Bidding Will Be Added.</li>
          <li>SignIn Options Will Be THeir To Store Details Always.</li>
          <li>Rooms Will Be Added So That Two Known Players Can Play</li>
        </ul>
      </div>
    </div>
  );
}

export default FeaturesPage;
