import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"
import { Layout, Menu } from "antd"
import { username } from "../utils/constant"
import { GithubOutlined, YuqueOutlined } from "@ant-design/icons"

const topMenuList = ["home", "about", "blog"]
const iconStyle = { fontSize: "24px", color: "white" }
const websiteLinkList = [
  {
    icon: <GithubOutlined style={iconStyle} />,
    site: "https://github.com/61joe",
  },
  {
    icon: <YuqueOutlined style={iconStyle} />,
    site: "https://www.yuque.com/weubg3",
  },
]

const topMenu = (
  <>
    {topMenuList.map(item => (
      <Link to={`/${item}/`} style={{ color: "white", fontSize: "20px" }}>
        {item}
      </Link>
    ))}
  </>
)

export default () => (
  <div>
    {/* <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
    <Layout>
      <Header name={username} menu={topMenu} webList={websiteLinkList} />
    </Layout>
  </div>
)
