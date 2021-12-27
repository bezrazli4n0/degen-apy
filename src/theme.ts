export interface Theme {
  backgroundColor: string;
  foregroundColor: string;
  foregroundHighlightedColor: string;
  borderColor: string;
  backgroundComponentColor: string;
}

const DarkTheme: Theme = {
  backgroundColor: "#282828",
  foregroundColor: "#FFF",
  foregroundHighlightedColor: "#B872FF",
  borderColor: "#B872FF",
  backgroundComponentColor: "#353535",
};

export { DarkTheme };
