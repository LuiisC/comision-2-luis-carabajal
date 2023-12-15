import Router from "./Router"
import Navbar  from "./components/Navbar"
import React from "react"

export const App = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Router/>
    </React.Fragment>
  )
}