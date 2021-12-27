import { ReactElement, FC, ReactNode } from "react";
import "../Base.css";

export interface SelectProps {
  description?: string;
  children?: ReactNode;
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = (props: SelectProps): ReactElement => {
  return (
    <div>
      {props.description ? (
        <p className="base-component-text base-description-text">
          {props.description}
        </p>
      ) : undefined}
      <select
        className="base-component base-component-text"
        onChange={(ev) => props.onChange?.(ev.currentTarget.value)}
      >
        {props.children}
      </select>
    </div>
  );
};

export default Select;
