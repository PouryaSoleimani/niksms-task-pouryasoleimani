"use client";
import { Minus, X } from "lucide-react";
import Image from "next/image";
import React from "react";

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  label?: string;
}

export default function RangeSlider({ min = 10, max = 100, step = 10, defaultValue = 25, onChange }: RangeSliderProps) {
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
    <div
      className="flex sm:min-w-[600px] md:min-w-[730px] lg:min-w-[965px] rounded-[100px] w-0 overflow-hidden flex-col items-center justify-center bg-white p-3"
      dir="rtl"
    >
      {/* Display selected value */}
      <div className="mb-12 flex items-baseline gap-3 font-medium">
        <div className="flex items-baseline gap-2">
          <span className="text-md text-nik-foreground">عدد</span>
          <span className="text-[40px] font-bold text-nik-foreground">{value}</span>
          <div className="flex items-center gap-2">
            <span className="text-md text-nik-foreground">انتخاب شده</span>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center justify-center size-5 bg-white rounded-full">
                  <Image src={"/icons/Question.png"} width={50} height={50} alt="question_mark" />
                </div>
              </TooltipTrigger>

              <TooltipContent className="flex flex-col p-0 bg-white h-[144px] rounded-[12px] w-[313px] shadow-lg text-nik-foreground ">
                <div id="header" className="basis-3/12 px-3 py-1.5 flex items-center-safe justify-between bg-nik-primary rounded-t-sm">
                  <Button variant={"ghost"} className="hover:bg-nik-primary/70">
                    <X className="size-3.5" />
                  </Button>
                  <p className="font-bold text-[15px]">متن راهنما</p>
                </div>
                <div dir="rtl" id="body" className="basis-9/12 rounded-b-sm px-3 py-1.5 leading-[24px] text-xs ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه است.
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Slider container */}
      <div className="w-full max-w-[871px] px-10 mx-auto bg-nik-primary pt-4 -translate-y-8 rounded-[16px] border border-nik-gray">
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
          <div className="flex items-center">
            <span className="absolute -right-5 font-medium">1</span>
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
            <span className="absolute -left-7 font-medium tracking-tighter">100</span>
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between w-full -translate-y-3">
          {labels.map((label, idx) => (
            <span key={idx} className="text-[13px] text-nik-foreground font-medium">
              <Minus className="stroke-1 rotate-90 translate-x-1 h-2.5" />
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
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #1a4d2e;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #1a4d2e;
          cursor: pointer;
          border: none;
          margin-top: 2px;
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
