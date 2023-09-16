interface Color {
  defaultBlackColor: string;
  defaultBlueColor: string;
}

interface ThemeInterface {
  color: Color;
}

const Theme: ThemeInterface = {
  color: {
    defaultBlackColor: "rgb(51, 61, 75)",
    defaultBlueColor: "rgb(49, 130, 246)",
  },
};

export default Theme;
