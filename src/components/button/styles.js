import chroma from "chroma-js"

const buttonStyle = theme => ({
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: "#555555",
    color: "#FFFFFF",
    boxShadow:
      "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: "#555555",
      boxShadow:
        "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle",
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle",
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
      },
    },
  },
  fullWidth: {
    width: "100%",
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.primary.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.primary.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.primary.main)
      .alpha(0.12)
      .css()}`,
    "&:hover,&:focus": {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: `0 14px 26px -12px  ${chroma(theme.palette.primary.main)
        .alpha(0.42)
        .css()}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${chroma(
        theme.palette.primary.main
      )
        .alpha(0.2)
        .css()}`,
    },
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.secondary.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.secondary.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.secondary.main)
      .alpha(0.12)
      .css()}`,
    "&:hover,&:focus": {
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: `0 14px 26px -12px  ${chroma(theme.palette.secondary.main)
        .alpha(0.42)
        .css()}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${chroma(
        theme.palette.secondary.main
      )
        .alpha(0.2)
        .css()}`,
    },
  },
  info: {
    backgroundColor: theme.palette.info.main,
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.info.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.info.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.info.main)
      .alpha(0.12)
      .css()}`,
    "&:hover,&:focus": {
      backgroundColor: theme.palette.info.dark,
      boxShadow: `0 14px 26px -12px  ${chroma(theme.palette.info.main)
        .alpha(0.42)
        .css()}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${chroma(
        theme.palette.info.main
      )
        .alpha(0.2)
        .css()}`,
    },
  },
  success: {
    backgroundColor: theme.palette.success.main,
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.success.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.success.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.success.main)
      .alpha(0.12)
      .css()}`,
    "&:hover,&:focus": {
      backgroundColor: theme.palette.success.dark,
      boxShadow: `0 14px 26px -12px  ${chroma(theme.palette.success.main)
        .alpha(0.42)
        .css()}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${chroma(
        theme.palette.success.main
      )
        .alpha(0.2)
        .css()}`,
    },
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.warning.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.warning.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.warning.main)
      .alpha(0.12)
      .css()}`,
    "&:hover,&:focus": {
      backgroundColor: theme.palette.warning.dark,
      boxShadow: `0 14px 26px -12px  ${chroma(theme.palette.warning.main)
        .alpha(0.42)
        .css()}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${chroma(
        theme.palette.warning.main
      )
        .alpha(0.2)
        .css()}`,
    },
  },
  error: {
    backgroundColor: theme.palette.error.main,
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.error.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.error.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.error.main)
      .alpha(0.12)
      .css()}`,
    "&:hover,&:focus": {
      backgroundColor: theme.palette.error.dark,
      boxShadow: `0 14px 26px -12px  ${chroma(theme.palette.error.main)
        .alpha(0.42)
        .css()}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${chroma(
        theme.palette.error.main
      )
        .alpha(0.2)
        .css()}`,
    },
  },
  black: {
    backgroundColor: theme.palette.black.main,
    boxShadow: `0 2px 2px 0 ${chroma(theme.palette.black.main)
      .alpha(0.14)
      .css()}, 0 3px 1px -2px ${chroma(theme.palette.black.main)
      .alpha(0.2)
      .css()}, 0 1px 5px 0 ${chroma(theme.palette.black.main)
      .alpha(0.12)
      .css()}`,
    "&:hover,&:focus": {
      backgroundColor: theme.palette.black.dark,
      boxShadow: `0 14px 26px -12px  ${chroma(theme.palette.black.main)
        .alpha(0.42)
        .css()}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${chroma(
        theme.palette.black.main
      )
        .alpha(0.2)
        .css()}`,
    },
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: "#555555",
    },
  },
  twitter: {
    backgroundColor: "#55acee",
    color: "#fff",
    boxShadow:
      "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: "#55acee",
      color: "#fff",
      boxShadow:
        "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)",
    },
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    boxShadow:
      "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#3b5998",
      color: "#fff",
      boxShadow:
        "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)",
    },
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    boxShadow:
      "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#dd4b39",
      color: "#fff",
      boxShadow:
        "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)",
    },
  },
  github: {
    backgroundColor: "#333333",
    color: "#fff",
    boxShadow:
      "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#333333",
      color: "#fff",
      boxShadow:
        "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)",
    },
  },

  simple: {
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none",
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.palette.primary.main,
       
      },
      "&:hover":{
        color: "white",
        background: theme.palette.primary.light,
      }
    },
    "&$secondary": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.palette.secondary.main,
      },
      "&:hover":{
        color: "white",
        background: theme.palette.secondary.light,
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.palette.info.main,
      },
      "&:hover":{
        color: "white",
        background: theme.palette.info.light,
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.palette.success.main,
      },
      "&:hover":{
        color: "white",
        background: theme.palette.success.light,
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.palette.warning.main,
      },
      "&:hover":{
        color: "white",
        background: theme.palette.warning.light,
      }
    },
    "&$black": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.palette.black.main,
      },
      "&:hover":{
        color: "white",
        background: theme.palette.black.light,
      }
    },
    "&$error": {
      "&,&:focus,&:hover,&:visited": {
        color: theme.palette.error.main,
      },
      "&:hover":{
        color: "white",
        background: theme.palette.error.light,
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: "#55acee",
      },
      "&:hover":{
        color: "white",
        background: "#55acee",
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: "#3b5998",
      },
      "&:hover":{
        color: "white",
        background: "#3b5998",
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: "#dd4b39",
      },
      "&:hover":{
        color: "white",
        background: "#dd4b39",
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: "#333333",
      },
      "&:hover":{
        color: "white",
        background: "#333333",
      }
    },
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none",
    },
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none",
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem",
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem",
  },
  round: {
    borderRadius: "30px",
  },
  block: {
    width: "100% !important",
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none",
    },
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px",
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px",
      },
      "& svg": {
        width: "32px",
        height: "32px",
      },
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px",
      },
      "& svg": {
        width: "17px",
        height: "17px",
      },
    },
  },
})

export default buttonStyle
