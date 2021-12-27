import { FC, ReactElement } from "react";
import Select from "../Select";
import Input from "../Input";
import Numeric from "../Numeric";
import "./Card.css";

export interface CardProps {}

const Card: FC<CardProps> = (_props: CardProps): ReactElement => {
  return (
    <div className="card-component">
      <div className="card-component-child-wrapper">
        <Select description="MODE:">
          <option>APR to APY</option>
          <option>APY to APR</option>
        </Select>
      </div>
      <div className="card-component-child-wrapper">
        <Input description="APR %:" onlyNumber value="10" />
      </div>
      <div className="card-component-child-wrapper">
        <Input description="Initial investement:" value="10000" />
      </div>
      <div className="card-component-child-wrapper">
        <Numeric
          description="Compound times / day:"
          min={0}
          max={100}
          value={2}
        />
      </div>
      <div className="card-component-child-wrapper card-component-divider-wrapper">
        <div className="card-component-divider"></div>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          APY: <span>24%</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          ROI: <span>14 000$</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          APY / DAY: <span>0.3%</span>
        </p>
      </div>
      <div className="card-component-child-wrapper">
        <p className="card-component-stats">
          ROI / DAY: <span>244$</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
