import { FC, ReactElement, useState } from "react";
import Select from "../Select";
import Input from "../Input";
import Numeric from "../Numeric";
import { aprToApy, apyToApr } from "../../utils";
import "./Card.css";

export interface CardProps {}

const enum SelectOptions {
  AprToApy = "APR to APY",
  ApyToApr = "APY to APR",
}

const Card: FC<CardProps> = (_props: CardProps): ReactElement => {
  // Define local inputs state
  const [basePercent, setBasePercent] = useState(10);
  const [invest, setInvest] = useState(10000);
  const [compoundTimes, setCompoundTimes] = useState(2);
  const [mode, setMode] = useState(SelectOptions.AprToApy);

  // Define local stats state
  const calculatedPercent =
    mode === SelectOptions.AprToApy
      ? aprToApy(basePercent / 100, 365, compoundTimes)
      : apyToApr(basePercent / 100, 365, compoundTimes);
  const calculatedProfit = invest * calculatedPercent;

  // Doc
  const handleModeChange = (value: string) => {
    if (value === SelectOptions.AprToApy) {
      setMode(SelectOptions.AprToApy);
    } else if (value === SelectOptions.ApyToApr) {
      setMode(SelectOptions.ApyToApr);
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
          description={mode === SelectOptions.AprToApy ? "APR %:" : "APY %:"}
          onlyNumber
          value={basePercent.toString()}
          onChange={(value) => setBasePercent(Number(value))}
        />
      </div>
      <div className="card-component-child-wrapper">
        <Input
          description="Amount $:"
          onlyNumber
          value={invest.toString()}
          onChange={(value) => setInvest(Number(value))}
        />
      </div>
      <div className="card-component-child-wrapper">
        <Numeric
          description="Compound rate / day:"
          min={0}
          max={100}
          value={compoundTimes}
          onChange={(value) => setCompoundTimes(value)}
        />
      </div>
      <div className="card-component-child-wrapper card-component-divider-wrapper">
        <div className="card-component-divider"></div>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          {mode === SelectOptions.AprToApy ? "APY" : "APR"}:{" "}
          <span>{(calculatedPercent * 100).toFixed(2)}%</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          PROFIT: <span>{calculatedProfit.toFixed(2).toLocaleString()}$</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          {mode === SelectOptions.AprToApy ? "APY" : "APR"} / DAY:{" "}
          <span>{((calculatedPercent * 100) / 365).toFixed(6)}%</span>
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

export default Card;
