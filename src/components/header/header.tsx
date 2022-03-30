import React from "react"
import { Layout, Switch } from "antd"
import { createUseStyles, useTheme } from "react-jss"
import { username } from "../../utils/constant"
import { GithubOutlined, YuqueOutlined } from "@ant-design/icons"
import { MyTheme } from "../../context/ThemeContext"
import { Link } from "gatsby"

const { Header } = Layout
const useStyles = createUseStyles<string, unknown, MyTheme>({
  header: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "60px",
    "&>span": {
      color: ({ theme }) => (theme.dark ? "white" : "black"),
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
      display: "flex",
      alignItems: "center",
      "&>a": {
        margin: "0 10px",
        display: "flex",
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
    title: "github",
  },
  {
    icon: <YuqueOutlined style={iconStyle} />,
    site: "https://www.yuque.com/weubg3",
    title: "语雀",
  },
]

const topMenu = (
  <>
    {topMenuList.map(item => (
      <Link
        key={item}
        to={`/${item === "home" ? "" : item}`}
        style={{ color: "white", fontSize: "20px" }}
      >
        {item}
      </Link>
    ))}
  </>
)

const header = () => {
  const theme = useTheme<MyTheme>()
  console.log(theme)

  const classes = useStyles({ theme })

  return (
    <Layout>
      <Header className={classes.header}>
        <span>{`${username}的个人花园`}</span>
        <div>{topMenu}</div>
        <div>
          {websiteLinkList.map((item, index) => (
            <a
              key={index}
              href={item.site}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
          <Switch defaultChecked onChange={theme.toggleDark} />
        </div>
      </Header>
    </Layout>
  )
}
export default header
