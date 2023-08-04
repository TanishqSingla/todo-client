import { Component, JSX } from "solid-js";
import Header from "../../components/Header/Header";

type Props = {
  children?: JSX.Element
}

const Layout: Component<Props> = (props) => {
  return <>
    <Header />
    <main>{props.children}</main>
    <footer>Created by <a href="https://tanishqsingla.vercel.app">Tanishq Singla</a></footer>
  </>
}

export default Layout;
