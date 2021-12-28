import { useState } from "react";
import "./App.css";
import ApyCard, { SelectOptions } from "./components/ApyCard";
import { aprToApy, apyToApr } from "./utils";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { DarkTheme } from "./theme";

function App() {
  // Define local inputs state
  const [basePercent, setBasePercent] = useState(0.1);
  const [investAmount, setInvestAmount] = useState(10000);
  const [compoundTimes, setCompoundTimes] = useState(2);
  const [mode, setMode] = useState(SelectOptions.AprToApy);

  // Calculate percentage based on mode
  const calculatedPercent =
    mode === SelectOptions.AprToApy
      ? aprToApy(basePercent, 365, compoundTimes)
      : apyToApr(basePercent, 365, compoundTimes);

  const data = [...Array(365)].map((_value, idx) => {
    let day = idx + 1;
    let amountPerDay = (investAmount * calculatedPercent) / 365;

    return {
      day,
      amount: investAmount + day * amountPerDay,
    };
  });

  return (
    <div className="app-view">
      <div className="app-view-card">
        <ApyCard
          basePercent={basePercent}
          compoundTimes={compoundTimes}
          investAmount={investAmount}
          mode={mode}
          onChangeMode={(mode) => setMode(mode)}
          calculatedPercent={calculatedPercent}
          onChangePercent={(value) => setBasePercent(value)}
          onChangeCompoundTimes={(value) => setCompoundTimes(value)}
          onChangeInvestAmount={(value) => setInvestAmount(value)}
        />
      </div>
      <div className="app-view-chart">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid
              stroke={DarkTheme.backgroundColor}
              fontFamily="Barlow"
              color={DarkTheme.borderColor}
              verticalFill={[DarkTheme.backgroundComponentColor]}
            />
            <XAxis dataKey="day" fontFamily="Barlow" minTickGap={30} />
            <YAxis
              fontFamily="Barlow"
              domain={["auto", "auto"]}
              tickFormatter={(x, _y) => `${Number(x).toLocaleString()}$`}
            />
            <Legend
              wrapperStyle={{
                fontFamily: "Barlow",
                fontWeight: "bold",
              }}
              payload={[
                {
                  value: `${
                    mode === SelectOptions.AprToApy ? "APY" : "APR"
                  } scaling`,
                  type: "line",
                  color: DarkTheme.borderColor,
                },
              ]}
            />
            <Tooltip
              labelStyle={{
                color: "white",
              }}
              contentStyle={{
                fontFamily: "Barlow, sans-serif",
                backgroundColor: DarkTheme.backgroundColor,
              }}
            />
            <Line
              fontFamily="Barlow"
              type="monotone"
              dataKey="amount"
              stroke={DarkTheme.borderColor}
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="app-view-footer">
        <h3 id="app-view-footer-text">
          Ape’d by{" "}
          <a
            href="https://twitter.com/b3zrazli4n0"
            target="_blank"
            rel="noreferrer"
          >
            <span>@b3zrazli4n0</span>
          </a>{" "}
          with 💖
        </h3>
      </div>
    </div>
  );
}

export default App;
