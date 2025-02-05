import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = (props: React.PropsWithChildren) => {
  return (
    <div className="todo">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
