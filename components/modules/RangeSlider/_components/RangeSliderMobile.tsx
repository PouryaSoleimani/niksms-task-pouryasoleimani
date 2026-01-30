"use client";

import React from "react";
import { useState } from "react";

interface RangeSliderMobileProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export default function RangeSliderMobile({ min = 10, max = 100, step = 1, defaultValue = 25, onChange }: RangeSliderMobileProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  // Generate slider labels (every 10 units)
  const labels = [];
  for (let i = min; i <= max; i += 10) {
    labels.push(i);
  }

  // Calculate percentage for background gradient (from bottom)
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col items-center justify-center  bg-white p-6" dir="rtl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-2xl font-bold text-green-900 mb-4">عدد</h1>
      </div>

      {/* Slider container - vertical layout */}
      <div className="flex flex-col items-center gap-8 h-96">
        {/* Main slider area with labels */}
        <div className="flex gap-6 h-full">
          {/* Vertical slider */}
          <div className="relative w-20">
            {/* Background track - unfilled portion (light) */}
            <div className="absolute top-0 left-1/2 bottom-0 w-3 bg-lime-100 rounded-full -translate-x-1/2" />

            {/* Filled portion - from bottom to current value (dark) */}
            <div
              className="absolute left-1/2 bottom-0 w-3 bg-lime-400 rounded-full -translate-x-1/2 transition-all"
              style={{ height: `${percentage}%` }}
            />

            {/* Input slider - vertical */}
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleChange}
              className="relative h-full w-3 appearance-none rounded-full cursor-pointer accent-green-900 vertical-slider"
              // style={{
              //   writingMode: "bt-lr",
              // }}
            />
          </div>

          {/* Labels on the right */}
          <div className="flex flex-col justify-between h-full">
            {labels.map((label, idx) => (
              <div key={idx} className="text-sm text-gray-600 font-medium">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display selected value - bottom */}
      <div className="mt-12 flex items-center gap-3">
        <span className="text-gray-600">انتخاب شده</span>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-900">
          <span className="text-white text-sm">?</span>
        </div>
      </div>

      <style jsx>{`
        input[type="range"].vertical-slider {
          -webkit-appearance: slider-vertical;
          appearance: slider-vertical;
          width: 20px;
          height: 100%;
          border-radius: 8px;
          background: transparent;
          outline: none;
          cursor: pointer;
        }

        input[type="range"].vertical-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #1a4d2e;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        input[type="range"].vertical-slider::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #1a4d2e;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        input[type="range"].vertical-slider::-webkit-slider-runnable-track {
          background: transparent;
          width: 20px;
          border-radius: 8px;
        }

        input[type="range"].vertical-slider::-moz-range-track {
          background: transparent;
          border: none;
        }
      `}</style>
    </div>
  );
}
