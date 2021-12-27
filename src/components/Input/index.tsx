import { FC, ReactElement, KeyboardEvent, useState, FormEvent } from "react";

export interface InputProps {
  description?: string;
  value?: string;
  onlyNumber?: boolean;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = (props: InputProps): ReactElement => {
  // Use local state to apply filter
  const [value, setValue] = useState(
    props.onlyNumber ? props.value ?? "0" : props.value ?? ""
  );

  // Will handle `onKeyDown` event for filtering
  const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (
      props.onlyNumber &&
      !ev.key.match("^[0-9]+$") &&
      ev.key !== "Backspace" &&
      !ev.ctrlKey &&
      ev.key !== "." &&
      ev.key !== "ArrowRight" &&
      ev.key !== "ArrowLeft" &&
      ev.key !== "ArrowUp" &&
      ev.key !== "ArrowDown"
    ) {
      ev.preventDefault();
    }
  };

  // Will handle `onInput` event for state update
  const handleInput = (ev: FormEvent<HTMLInputElement>) => {
    if (ev.currentTarget.value.length === 0 && props.onlyNumber) {
      setValue("0");
    } else {
      setValue(ev.currentTarget.value);
    }
  };

  return (
    <div>
      {props.description ? (
        <p className="base-component-text base-description-text">
          {props.description}
        </p>
      ) : undefined}
      <input
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        type="text"
        value={value}
        onChange={(ev) => props.onChange?.(ev.target.value)}
        className="base-component base-component-text"
      />
    </div>
  );
};

export default Input;
