import { FC, ReactElement } from "react";
import Select from "../Select";
import Input from "../Input";
import Numeric from "../Numeric";
import "./ApyCard.css";

/**
 * Define `ApyCard` component properties.
 */
export interface CardProps {
  basePercent: number;
  investAmount: number;
  compoundTimes: number;
  calculatedPercent: number;
  mode: SelectOptions;
  onChangePercent: (percent: number) => void;
  onChangeInvestAmount: (invest: number) => void;
  onChangeCompoundTimes: (compoundTimes: number) => void;
  onChangeMode: (mode: SelectOptions) => void;
}

/**
 * Define `Select` component options.
 */
const enum SelectOptions {
  AprToApy = "APR to APY",
  ApyToApr = "APY to APR",
}

const ApyCard: FC<CardProps> = (props: CardProps): ReactElement => {
  // Calculate profit based on percent
  const calculatedProfit = props.investAmount * props.calculatedPercent;

  // Handle `Select` component change event
  const handleModeChange = (value: string) => {
    if (value === SelectOptions.AprToApy) {
      props.onChangeMode(SelectOptions.AprToApy);
    } else if (value === SelectOptions.ApyToApr) {
      props.onChangeMode(SelectOptions.ApyToApr);
    }
  };

  return (
    <div className="card-component">
      <div className="card-component-child-wrapper">
        <Select description="MODE:" onChange={handleModeChange}>
          <option>APR to APY</option>
          <option>APY to APR</option>
        </Select>
      </div>
      <div className="card-component-child-wrapper">
        <Input
          description={
            props.mode === SelectOptions.AprToApy ? "APR %:" : "APY %:"
          }
          onlyNumber
          value={(props.basePercent * 100).toFixed(2).toString()}
          onChange={(value) => props.onChangePercent(Number(value) / 100)}
        />
      </div>
      <div className="card-component-child-wrapper">
        <Input
          description="Amount $:"
          onlyNumber
          value={props.investAmount.toString()}
          onChange={(value) => props.onChangeInvestAmount(Number(value))}
        />
      </div>
      <div className="card-component-child-wrapper">
        <Numeric
          description="Compound rate / day:"
          min={1}
          max={100}
          value={props.compoundTimes}
          onChange={(value) => props.onChangeCompoundTimes(value)}
        />
      </div>
      <div className="card-component-child-wrapper card-component-divider-wrapper">
        <div className="card-component-divider"></div>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          {props.mode === SelectOptions.AprToApy ? "APY" : "APR"}:{" "}
          <span>{(props.calculatedPercent * 100).toFixed(2)}%</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          PROFIT: <span>{calculatedProfit.toFixed(2).toLocaleString()}$</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          {props.mode === SelectOptions.AprToApy ? "APY" : "APR"} / DAY:{" "}
          <span>{((props.calculatedPercent * 100) / 365).toFixed(6)}%</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          PROFIT / DAY:{" "}
          <span>{(calculatedProfit / 365).toFixed(2).toLocaleString()}$</span>
        </p>
      </div>
    </div>
  );
};

export default ApyCard;
export { SelectOptions };
