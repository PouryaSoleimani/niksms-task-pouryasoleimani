"use client";

import React from "react";

import { useState } from "react";

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  label?: string;
}

export default function RangeSlider({ min = 10, max = 100, step = 1, defaultValue = 25, onChange, label = "عدد" }: RangeSliderProps) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  // Generate slider labels
  const labels = [];
  const labelStep = Math.ceil((max - min) / 10 + 1);
  for (let i = min; i <= max; i += labelStep) {
    labels.push(i);
  }

  // Calculate percentage for background gradient
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen bg-white p-8" dir="rtl">
      {/* Display selected value */}
      <div className="mb-12 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-green-900">{value}</span>
          <span className="text-2xl text-green-900">عدد</span>
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-900">
          <span className="text-white text-sm">✓</span>
        </div>
      </div>

      {/* Slider container */}
      <div className="w-full max-w-3xl bg-nik-primary pt-6 rounded-3xl">
        {/* Slider track background with gradient */}
        <div className="relative mb-8">
          {/* Background track - unfilled portion (light) */}
          <div className="absolute top-1/2 left-0 right-0 h-3 bg-white rounded-full -translate-y-1/2" />

          {/* Filled portion - from right to current value (dark) */}
          <div
            className="absolute top-1/2 right-0 h-3 bg-nik-foreground rounded-full -translate-y-1/2 transition-all"
            style={{ width: `${percentage}%` }}
          />

          {/* Input slider */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className="relative w-full h-3 bg-transparent rounded-full appearance-none cursor-pointer accent-green-900 slider"
            style={{
              background: "transparent",
            }}
          />
        </div>

        {/* Labels */}
        <div className="flex justify-between px-2">
          {labels.map((label, idx) => (
            <span key={idx} className="text-sm text-gray-600 font-medium">
              {label}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 12px;
          border-radius: 8px;
          background: transparent;
          outline: none;
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #1a4d2e;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #1a4d2e;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-webkit-slider-runnable-track {
          background: transparent;
          height: 12px;
          border-radius: 8px;
        }

        input[type="range"]::-moz-range-track {
          background: transparent;
          height: 12px;
          border-radius: 8px;
          border: none;
        }
      `}</style>
    </div>
  );
}
