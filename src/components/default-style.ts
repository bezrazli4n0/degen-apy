import { CSSProperties } from "react";
import { DarkTheme } from "../theme";

/*
 * Default styles for form components.
 */
export let DefaultComponentStyle: CSSProperties = {
  color: DarkTheme.foregroundHighlightedColor,
  backgroundColor: DarkTheme.backgroundComponentColor,
  border: `2px solid ${DarkTheme.borderColor}`,
  outline: "none",
  padding: "0.3rem 0.3rem",
  width: "100%",
  height: "100%",
};

/*
 * Default styles for text components.
 */
export let DefaultTextStyle: CSSProperties = {
  fontFamily: "Barlow, sans-serif",
  fontSize: "1em",
  fontWeight: "Bold",
  textAlign: "left",
};
