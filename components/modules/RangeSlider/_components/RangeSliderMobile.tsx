"use client";

import { Button } from "@/components/ui/button";
import { CircleQuestionMark, Minus } from "lucide-react";
import Image from "next/image";
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

export default function RangeSlider({ min = 10, max = 100, step = 1, defaultValue = 25, onChange }: RangeSliderProps) {
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
    <div className="flex min-w-[1000px] w-0 flex-row-reverse lg:flex-col border-2 items-center justify-center bg-white p-8" dir="rtl">
      {/* Display selected value */}
      <div className="mb-12 flex items-baseline gap-3 font-medium">
        <div className="flex items-baseline gap-2">
          <span className="text-md text-nik-foreground">عدد</span>
          <span className="text-[40px] font-bold text-nik-foreground">{value}</span>
          <div className="flex items-center gap-2">
            <span className="text-md text-nik-foreground">انتخاب شده</span>
            <div className="flex items-center justify-center size-6 bg-white rounded-full">
              <Image src={"/icons/Question.png"} width={50} height={50} alt="question_mark" />
            </div>
          </div>
        </div>
      </div>

      {/* Slider container */}
      <div className="w-full max-w-3xl bg-nik-primary pt-6 pb-2 px-4 rounded-2xl border border-nik-gray">
        {/* Slider track background with gradient */}
        <div className="relative mb-2">
          {/* Background track - unfilled portion (light) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white rounded-full -translate-y-1/2" />

          {/* Filled portion - from right to current value (dark) */}
          <div
            className="absolute top-1/2 right-0 h-1 bg-nik-foreground rounded-full -translate-y-1/2 transition-all"
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
            className="relative w-full h-3 bg-transparent rounded-full appearance-none cursor-pointer accent-nik-foreground slider"
            style={{
              background: "transparent",
            }}
          />
        </div>

        {/* Labels */}
        <div className="flex justify-between px-2">
          {labels.map((label, idx) => (
            <span key={idx} className="text-sm text-gray-600 font-medium">
              <Minus className="stroke-1 rotate-90 translate-x-1 h-3" />
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
