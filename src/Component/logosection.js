import React from "react";

export default function LogoSection(){
    return(
        <>
            <section className="flex items-center ">
                <div className="logoSection flex items-center">
                    <div className="logo"></div>
                    <span className="logo_in">.in</span>
                </div>

                <div className="text-white flex justify-center items-center locationsectin">
                <i class="fa-solid fa-location-dot p-5" />
                    <div className="">
                        <p className="text-gray">Hello</p>
                        <span className="bold">Select your address</span>
                    </div>
                </div>
   
            </section>
        </>
    )
}