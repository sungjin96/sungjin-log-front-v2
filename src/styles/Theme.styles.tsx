import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    info: "#498E7C",
    infoLight: "#57A893",
    infoDark: "#3C7566",

    primary: "#ADB2C0",
    primaryLight: "#C3C9D9",
    primaryDark: "#959AA6",

    success: "#69b072",
    warning: "#e6a03a",
    danger:"#f44336",

    background: "#f4f3f3",
    backgroundDark: "#DBDADA",

    point: "#f44336",
    pointLight: "#E0606F",
    pointDark: "#AD4A55",

    greyLight1: "#faf9f9",
    greyLight2: "#f4f2f2",
    greyLight3: "#f0eeee",
    greyLight4: "#ccc",
    
    greyDark1: "#333",
    greyDark2: "#777",
    greyDark3: "#666",
    greyDark4: "#999",
  },
  shadow: {
    dark: "0 2rem 6rem rgba(0, 0, 0, 0.3)",
    light: "0 2rem 2rem rgba(0, 0, 0, 0.3)",
    card: "0 1.5rem 4rem rgba(0, 0, 0, .15)"
  },
  line: "1px solid #f4f2f2",
  mainBorder: "2px solid #C3C9D9",
};

export default theme;
