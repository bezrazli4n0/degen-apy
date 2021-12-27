import { ReactElement, FC, ReactNode } from "react";
import { DarkTheme } from "../../theme";
import { DefaultComponentStyle, DefaultTextStyle } from "../default-style";

export interface SelectProps {
  description?: string;
  children?: ReactNode;
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = (props: SelectProps): ReactElement => {
  return (
    <div
      style={{
        display: "inline-block",
      }}
    >
      {props.description ? (
        <p
          style={{
            ...DefaultTextStyle,
            color: DarkTheme.foregroundColor,
          }}
        >
          {props.description}
        </p>
      ) : undefined}
      <select
        onChange={(ev) => props.onChange?.(ev.currentTarget.value)}
        style={{
          ...DefaultComponentStyle,
          ...DefaultTextStyle,
        }}
      >
        {props.children}
      </select>
    </div>
  );
};

export default Select;
