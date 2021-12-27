import { ReactElement, FC, useState, FormEvent, KeyboardEvent } from "react";
import "../Base.css";

export interface NumericProps {
  description?: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const Numeric: FC<NumericProps> = (props: NumericProps): ReactElement => {
  // Return bounds adjusted value
  const getBoundsValue = (value: number): number => {
    let boundsValue = value;

    if (props.max !== undefined && boundsValue > props.max) {
      boundsValue = props.max;
    }

    if (props.min !== undefined && boundsValue < props.min) {
      boundsValue = props.min;
    }

    return boundsValue;
  };

  // Check bounds to remove initial range-overflow bug
  let initialValue = getBoundsValue(props.value ?? 0);

  // Use local state to handle numbers
  const [value, setValue] = useState(initialValue);

  // Will handle `onKeyUp` event for checking input bounds
  const handleKeyUp = (ev: KeyboardEvent<HTMLInputElement>) => {
    let value = ev.currentTarget.valueAsNumber;

    if (props.min !== undefined && value < props.min) {
      setValue(props.min);
    }

    if (props.max !== undefined && value > props.max) {
      setValue(props.max);
    }
  };

  // Will handle `onInput` event for state update
  const handleInput = (ev: FormEvent<HTMLInputElement>) => {
    setValue(Number(ev.currentTarget.value));
  };

  return (
    <div>
      {props.description ? (
        <p className="base-component-text base-description-text">
          {props.description}
        </p>
      ) : undefined}
      <input
        className="base-component base-component-text"
        onKeyUp={handleKeyUp}
        onChange={(ev) => props.onChange?.(Number(ev.currentTarget.value))}
        onInput={handleInput}
        max={props.max ?? undefined}
        min={props.min ?? undefined}
        value={value}
        type="number"
      />
    </div>
  );
};

export default Numeric;
