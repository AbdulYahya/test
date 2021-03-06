import chroma from "chroma-js"

import {
  container,
  defaultFont,
  transition,
  boxShadow,
  drawerWidth,
  tooltipsStyle,
} from "../styles"

export const headerLinksStyle = theme => ({
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
    },
  },
  listItemText: {
    padding: "0 !important",
  },
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px",
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
    },
  },
  ...tooltipsStyle,
  marginRight5: {
    marginRight: "5px",
  },
})

export const headerStyle = theme => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset",
  },
  absolute: {
    position: "absolute",
    zIndex: "1100",
  },
  fixed: {
    position: "fixed",
    zIndex: "1100",
  },
  container: {
    ...container,
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent",
    },
  },
  appResponsive: {
    margin: "20px 10px",
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.primary.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.primary.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.primary.main)
      .alpha(0.12)
      .css()}`,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: "#FFFFFF",
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.secondary.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.secondary.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.secondary.main)
      .alpha(0.12)
      .css()}`,
  },
  info: {
    backgroundColor: theme.palette.info.main,
    color: "#FFFFFF",
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.info.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.info.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.info.main)
      .alpha(0.12)
      .css()}`,
  },
  success: {
    backgroundColor: theme.palette.success.main,
    color: "#FFFFFF",
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.success.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.success.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.success.main)
      .alpha(0.12)
      .css()}`,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    color: "#FFFFFF",
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.warning.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.warning.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.warning.main)
      .alpha(0.12)
      .css()}`,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: "#FFFFFF",
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.error.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.error.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.error.main)
      .alpha(0.12)
      .css()}`,
  },
  black: {
    backgroundColor: theme.palette.black.main,
    color: "#FFFFFF",
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.black.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.black.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.black.main)
      .alpha(0.12)
      .css()}`,
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF",
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow:
      "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)",
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    ...boxShadow,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
    ...transition,
  },
})
