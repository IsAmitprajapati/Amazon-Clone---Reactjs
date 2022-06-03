import React from "react";

export default function InputSearch(){
    return(
        <>
            <section className="background-white inputsearch flex">
                <div className="AllSelectCatory">
                    <select>
                        <option value="All" selected>All</option>
                        <option value="All Category">All Category</option>
                    </select>
                </div>
                <section className="inputsearchbox flex justify-center items-center">
                    <input type="text" />
                </section>
                <section className="background-orange searchicon flex justify-center items-center">
                    <i className="fa-solid fa-search"/>
                </section>


            </section>
        </>
    )
}