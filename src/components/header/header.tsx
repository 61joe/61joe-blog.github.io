import React from "react"
import { Layout } from "antd"
import { createUseStyles } from "react-jss"

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
type Props = {
  name: string
  menu?: JSX.Element
  webList?: Array<any>
}

const header = ({ name, menu: topMenu, webList = [] }: Props) => {
  const classes = useStyles()

  return (
    <Header className={classes.header}>
      <span>{`${name}的个人花园`}</span>
      <div>{topMenu}</div>
      <div>
        {webList.map(item => (
          <a href={item.site} target="_blank">
            {item.icon}
          </a>
        ))}
      </div>
    </Header>
  )
}
export default header
