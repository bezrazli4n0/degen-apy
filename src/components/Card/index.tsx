import { FC, ReactElement, useState } from "react";
import Select from "../Select";
import Input from "../Input";
import Numeric from "../Numeric";
import { aprToApy } from "../../utils";
import "./Card.css";

export interface CardProps {}

const Card: FC<CardProps> = (_props: CardProps): ReactElement => {
  // Define local inputs state
  const [basePercent, setBasePercent] = useState(10);
  const [invest, setInvest] = useState(10000);
  const [compoundTimes, setCompoundTimes] = useState(2);

  // Define local stats state
  const calculatedPercent = aprToApy(basePercent / 100, 365, compoundTimes);
  const calculatedProfit = invest * calculatedPercent;

  return (
    <div className="card-component">
      <div className="card-component-child-wrapper">
        <Select description="MODE:">
          <option>APR to APY</option>
          <option>APY to APR</option>
        </Select>
      </div>
      <div className="card-component-child-wrapper">
        <Input
          description="APR %:"
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
          APY: <span>{(calculatedPercent * 100).toFixed(2)}%</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          PROFIT: <span>{calculatedProfit.toFixed(2).toLocaleString()}$</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          APY / DAY:{" "}
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
