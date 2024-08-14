import React from "react";

const AccountHero =()=>{  
    return (
        <div className="relative bg-cover bg-center h-40 md:h-56 lg:h-64"
            style={{backgroundImage: "url('/Images/Pamonas/fruits & vegetables/vegetables7.jpg')",}}>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold pb-1">My Account</div>
        <div className="text-sm md:text-base lg:text-lg text-lime-500">
          <span className="font-semibold text-lime-500">Pamona's</span> / My Account
        </div>
      </div>
    </div>
    );
};
export default AccountHero;