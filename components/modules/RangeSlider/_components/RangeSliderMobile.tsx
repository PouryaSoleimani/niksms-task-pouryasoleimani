"use client";
import { Minus, X } from "lucide-react";
import Image from "next/image";
import React from "react";

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
interface RangeSliderMobileProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  label?: string;
}

export default function RangeSliderMobile({ min = 10, max = 100, step = 10, defaultValue = 25, onChange }: RangeSliderMobileProps) {
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
  const evenLabels = labels.filter((n) => Math.floor(n / 10) % 2 === 0);
  const oddLabels = labels.filter((n) => Math.floor(n / 10) % 2 !== 0);

  // Calculate percentage for background gradient
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex min-w-[350px] flex-row overflow-hidden h-[418px] border-2 m-auto items-center justify-center bg-white p-3" dir="rtl">
      <div className="flex items-center justify-between">
        {/* SLIDER CONTAINER */}
        <div className="rotate-90 py-10 px-10 bg-nik-primary -translate-x-8 pt-4 rounded-[16px] border border-nik-gray">
          {/* Slider track background with gradient */}
          <div className="relative mb-2 left-2 translate-y-8">
            {/* Background track - unfilled portion (light) */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white rounded-full -translate-y-2/3" />

            {/* Filled portion - from right to current value (dark) */}
            <div
              className="absolute top-1/2 right-0 h-1 bg-nik-foreground rounded-full -translate-y-1/2 transition-all"
              style={{ width: `${percentage}%` }}
            />

            {/* Input slider */}
            <div className="flex items-center">
              <span className="absolute -right-5 font-medium -rotate-90">1</span>
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
              <span className="absolute -left-7 font-medium tracking-tighter -rotate-90">100</span>
            </div>
          </div>

          {/* LABELS */}
          <div className="flex justify-between">
            {evenLabels.map((label, idx) => (
              <span key={idx} className="text-[13px] translate-y-10  h-full gap-10 -rotate-90 text-nik-foreground font-medium">
                <span>{label}</span>
                <Minus className="stroke-1 -translate-y-4 translate-x-6 h-2.5" />
              </span>
            ))}
            {oddLabels.map((label, idx) => (
              <span key={idx} className="text-[13px] -rotate-90 text-nik-foreground font-medium">
                <span className="translate-y-4">{label}</span>
                <Minus className="stroke-1 -translate-y-4 -translate-x-6 h-2.5" />
              </span>
            ))}
          </div>
        </div>

        {/* DISPLAY SELECTED VALUE */}
        <div className="mb-12 flex items-center relative inset-0 z-20 bg-transparent backdrop-blur-3xl justify-center translate-x-8 gap-3 font-medium">
          <div
            id="BLUR__BACKGROUND"
            className="size-20 bg-radial from-nik-primary via-nik-primary/50 to-white rounded-full absolute top-16 z-0"
          ></div>
          <div className="flex flex-col items-baseline gap-2">
            <span className="text-[24px] text-nik-foreground w-full center text-center">عدد</span>
            <span className="text-[80px] text-center center w-full font-extrabold text-nik-foreground z-50 backdrop-blur-2xl bg-white/40">
              {value}
            </span>
            <div className="flex items-center justify-center whitespace-nowrap gap-2">
              <span className="text-[24px] text-nik-foreground">انتخاب شده</span>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center justify-center size-[26px] bg-white rounded-full">
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
