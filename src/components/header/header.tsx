import React from "react"
import { Layout } from "antd"
import { createUseStyles } from "react-jss"
import { username } from "../../utils/constant"
import { GithubOutlined, YuqueOutlined } from "@ant-design/icons"
import { Link } from "gatsby"

const { Header } = Layout
const useStyles = createUseStyles({
  header: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60px",
    "&>span": {
      color: "white",
      fontSize: "28px",
      textAlign: "center",
    },
    "&>:nth-child(1)": {
      flex: "1 1 25%",
    },
    "&>:nth-child(2)": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flex: "1 1 50%",
    },
    "&>:nth-child(3)": {
      flex: "1 1 25%",
      "&>a": {
        margin: "0 10px",
      },
    },
  },
})
// type Props = {
//   name: string
//   menu?: JSX.Element
//   webList?: Array<any>
// }

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
      <Link
        to={`/${item === "home" ? "" : item}`}
        style={{ color: "white", fontSize: "20px" }}
      >
        {item}
      </Link>
    ))}
  </>
)

const header = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Header className={classes.header}>
        <span>{`${username}的个人花园`}</span>
        <div>{topMenu}</div>
        <div>
          {websiteLinkList.map(item => (
            <a href={item.site} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </Header>
    </Layout>
  )
}
export default header
