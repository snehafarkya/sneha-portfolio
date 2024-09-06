import React from 'react'
import { PopupButton } from "react-calendly";


export default function Calendly() {
  return (
    <div>
      <PopupButton
                  url="https://calendly.com/snhafarkya/introductory-call"
                  rootElement={document.getElementById("root")}
                  text="Set up a call!"
                  variant="solid"
                  className='button-86 '
                  style={{ marginTop: "-25px" }}
                  pageSettings={{
                    backgroundColor: "grey",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: "#b101b6",
                    textColor: "#b101b6",
                  }}
                />
    </div>
  )
}

