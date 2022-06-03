import React from "react"
import InputSearch from "./inputSearch"
import LogoSection from "./logosection"

export default function Topsection(){
    return(
        <>
            <section className="Topsection flex">
                <LogoSection/>
                <InputSearch/>
            </section>
        </>
    )
}