"use client";
import { Controller, FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ErrorField from "../../ErrorField";
import { CheckCircle2Icon, Eye, EyeClosed, Minus, XCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import UserPlus from "@/components/icons/UserPlus";
import { sleep } from "@/utils/sleep";
import Image from "next/image";
import { useFormUiStore } from "@/store/useFormUiStore";

const FormSchema = z.object({
  username: z.string("وارد کردن نام الزامی است").min(1, "وارد کردن نام الزامی است"),
  phoneNumber: z
    .string("وارد کردن شماره موبایل الزامی است")
    .min(11, "شماره موبایل باید 11 رقم باشد")
    .max(11, "شماره موبایل باید 11 رقم باشد")
    .regex(/^09\d{9}$/, "شماره موبایل وارد شده صحیح نمی باشد"),
  password: z
    .string()
    .min(8, "حداقل باید 8 حرف باشد")
    .regex(/[0-9]/, "باید شامل عدد باشد")
    .regex(/[!$%^&*]/, "باید شامل حروف خاص مثل $-#%  باشد"),
});

export type FormTypes = z.infer<typeof FormSchema>;

const FormRightComponent = () => {
  const [inputType, setInputType] = useState<"password" | "text">("password");
  const [formStatus, setformStatus] = useState<"unfilled" | "invalid-loading" | "invalid-error" | "valid-loading" | "valid-success">("unfilled");

  const setter = useFormUiStore.setState;

  //^ REACT__HOOK__FORM
  const methods = useForm<FormTypes>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      password: "",
    },
  });

  //& FORM__STATE
  const { isValid, isSubmitting } = methods.formState;

  //! INVALID FORM HANDLER
  async function invalidFormHandler() {
    setter({ isShowLeft: false });
    setformStatus("invalid-loading");
    await sleep(2000);
    setformStatus("invalid-error");
  }

  useEffect(() => {
    console.info("FORM STATUS =>", formStatus);
  }, [formStatus]);

  //* SUBMIT___HANDLER
  async function submitHandler(data: FormTypes) {
    setter({ isShowLeft: false });
    setformStatus("valid-loading");
    await sleep(2000);
    setformStatus("valid-success");
    methods.reset();
    console.info("DATA =>", data);
  }

  function toggleInputTypeHandler() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  function backHandler() {
    setformStatus("unfilled");
    setter({ isShowLeft: true });
  }

  return (
    <div className="min-w-full">
      {formStatus === "invalid-loading" ? (
        <div className="min-h-[748px] transition-all duration-300 h-0 flex flex-col flex-0 gap-4 lg:gap-4 mx-auto lg:w-[1015px] lg:min-h-[524px] lg:h-0 items-center justify-center">
          <div className="bg-desctructive-background rounded-full p-3 -translate-y-8">
            <Image src={"/images/form/SmileySad.png"} width={48} height={48} alt="smiley_sad" />
          </div>
        </div>
      ) : formStatus === "invalid-error" ? (
        <div className="min-h-[748px] transition-all duration-300 h-0 flex flex-col flex-0 gap-4 lg:gap-4 mx-auto lg:w-[1015px] lg:min-h-[524px] lg:h-0 items-center justify-center">
          <div className="bg-desctructive-background rounded-full p-[17px]">
            <Image src={"/images/form/SmileySad.png"} width={48} height={48} alt="smiley_sad" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h4 dir="rtl" className="text-destructive-foreground! text-lg text-center font-bold">
              مشکلی پیش آمده!
            </h4>
            <p className="text-nik-secondary-foreground text-sm font-normal text-center">ثبت نام شما انجام نشد...</p>
            <Button
              onClick={backHandler}
              variant={"outline"}
              size={"sm"}
              className="rounded-full mt-4 text-destructive-foreground text-sm mx-auto w-[86px] h-[28px]"
            >
              بازگشت
            </Button>
          </div>
        </div>
      ) : formStatus == "valid-loading" ? (
        <div className="min-h-[748px] transition-all duration-300 h-0 flex flex-col flex-0 gap-4 lg:gap-4 mx-auto lg:w-[1015px] lg:min-h-[524px] lg:h-0 items-center justify-center">
          <div className="bg-nik-primary rounded-full p-3 -translate-y-8">
            <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley_sad" />
          </div>
        </div>
      ) : formStatus === "valid-success" ? (
        <div className="min-h-[748px] transition-all duration-300 h-0 flex flex-col flex-0 gap-4 lg:gap-4 mx-auto lg:w-[1015px] lg:min-h-[524px] lg:h-0 items-center justify-center">
          <div className="bg-nik-primary rounded-full p-[17px]">
            <Image src={"/images/form/Smiley.png"} width={48} height={48} alt="smiley_sad" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h4 dir="rtl" className="text-nik-foreground text-lg text-center font-bold">
              ثبت نام شما با موفقیت انجام شد!
            </h4>
            <p className="text-nik-secondary-foreground text-sm font-normal text-center">به مجموعه ما خوش آمدید...</p>
            <Button
              onClick={backHandler}
              variant={"outline"}
              size={"sm"}
              className="rounded-full mt-4 text-nik-foreground text-sm mx-auto w-[86px] h-[28px]"
            >
              بازگشت
            </Button>
          </div>
        </div>
      ) : (
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submitHandler)}
            dir="rtl"
            className="flex flex-col flex-0 gap-4 lg:gap-4 mx-auto lg:w-2/3 lg:min-h-[524px]"
          >
            <Controller
              control={methods.control}
              name="username"
              render={({ field, fieldState }) => {
                const hasValue = !!field.value;
                const hasError = !!fieldState.error;
                return (
                  <div className="relative inset-0 flex flex-col gap-2">
                    <Label>نام کاربری</Label>
                    <Input
                      autoComplete="name"
                      type="text"
                      value={field.value}
                      onChange={field.onChange}
                      aria-invalid={!!methods.formState.errors.username}
                      placeholder={"مثلا : حمیدرضا"}
                      className={cn(hasValue && !hasError && "bg-nik-input-filled ", hasError && "border-destructive text-destructive-foreground")}
                    />
                    <button
                      type="button"
                      className={cn("group top-1/2 right-1.5 absolute cursor-pointer", methods.formState.errors.username && "top-7")}
                    ></button>
                    <ErrorField name={field.name} />
                  </div>
                );
              }}
            />

            <Controller
              control={methods.control}
              name="phoneNumber"
              render={({ field, fieldState }) => {
                const hasValue = !!field.value;
                const hasError = !!fieldState.error;
                return (
                  <div className="relative inset-0 flex flex-col gap-2">
                    <Label>شماره تماس</Label>
                    <Input
                      autoComplete="false"
                      type="text"
                      value={field.value}
                      onChange={field.onChange}
                      aria-invalid={!!methods.formState.errors.phoneNumber}
                      placeholder={"مثلا: 09121445588"}
                      className={cn(hasValue && !hasError && "bg-nik-input-filled ", hasError && "border-destructive text-destructive-foreground")}
                    />
                    <button
                      type="button"
                      className={cn("group top-1/2 right-1.5 absolute cursor-pointer", methods.formState.errors.phoneNumber && "top-7")}
                    ></button>
                    <ErrorField name={field.name} />
                  </div>
                );
              }}
            />

            <Controller
              control={methods.control}
              name="password"
              render={({ field, fieldState }) => {
                const hasValue = !!field.value;
                const hasError = !!fieldState.error;
                return (
                  <div className="relative inset-0 flex flex-col gap-2">
                    <Label className="mb-0.5">رمز عبور</Label>
                    <Input
                      autoComplete="new-password"
                      type={inputType}
                      value={field.value}
                      onChange={field.onChange}
                      aria-invalid={!!methods.formState.errors.password}
                      placeholder={"رمز عبور مورد نظر خود را وارد کنید..."}
                      className={cn(hasValue && !hasError && "bg-nik-input-filled ", hasError && "border-destructive text-destructive-foreground")}
                    />
                    {inputType === "password" ? (
                      <Button
                        type="button"
                        onClick={toggleInputTypeHandler}
                        variant={"ghost"}
                        className="group top-[42.5%] left-1 absolute hover:bg-transparent !px-1 w-fit"
                      >
                        <Eye className="size-5 text-stone-300 group-hover:text-stone-400 transition-all duration-250" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={toggleInputTypeHandler}
                        variant={"ghost"}
                        className="group top-[42.5%] left-1 absolute hover:bg-transparent !px-1 w-fit"
                      >
                        <EyeClosed className="size-5 text-stone-300 group-hover:text-stone-400 transition-all duration-250" />
                      </Button>
                    )}
                    <button
                      type="button"
                      className={cn("group top-1/2 right-1.5 absolute cursor-pointer", methods.formState.errors.password && "top-7")}
                    ></button>
                    <ErrorField name={field.name} />
                  </div>
                );
              }}
            />

            {/* PASSWORD HINTS */}
            <div className="flex flex-col gap-3 px-1 text-nik-secondary-foreground text-xs">
              <div id="PASSWORD__MIN__LENGTH" className="flex items-center-safe gap-3 text-[13px]">
                {!methods.formState.dirtyFields.password ? (
                  <div className={cn("flex justify-center items-center gap-1 text-stone-500 tracking-tight sm:tracking-normal whitespace-nowrap")}>
                    <Minus className="stroke-1 w-4.5 translate-y-[2px] sm:translate-y-[1px]" />
                    حداقل باید 8 حرف باشد
                  </div>
                ) : methods.formState.dirtyFields.password &&
                  Array(methods.formState.errors.password).some((item) => item?.message === "رمز عبور باید حداقل 8 کاراکتر باشد") ? (
                  <div className="flex items-center gap-1 text-destructive tracking-tight sm:tracking-normal whitespace-nowrap">
                    <XCircleIcon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                    حداقل باید 8 حرف باشد
                  </div>
                ) : (
                  Array(methods.formState.errors.password).length && (
                    <div className={cn("flex items-center gap-1 text-nik-foreground tracking-tight sm:tracking-normal whitespace-nowrap")}>
                      <CheckCircle2Icon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                      حداقل باید 8 حرف باشد
                    </div>
                  )
                )}
              </div>
              <div id="PASSWORD__CONTAINS__NUMBERS" className="flex items-center gap-1 text-[13px]">
                {!methods.formState.dirtyFields.password ? (
                  <div className={cn("flex items-center gap-1 text-stone-500 tracking-tight sm:tracking-normal whitespace-nowrap")}>
                    <Minus className="stroke-1 w-4.5 translate-y-[2px] sm:translate-y-[1px]" />
                    رمز عبور باید شامل اعداد باشد
                  </div>
                ) : methods.formState.dirtyFields.password &&
                  Array(methods.formState.errors.password).some((item) => item?.message === "باید شامل عدد باشد") ? (
                  <div className="flex items-center gap-1 text-destructive tracking-tight sm:tracking-normal whitespace-nowrap">
                    <XCircleIcon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                    رمز عبور باید شامل اعداد باشد
                  </div>
                ) : (
                  Array(methods.formState.errors.password).every((item) => item?.message !== "باید شامل عدد باشد") && (
                    <div className={cn("flex items-center gap-1 text-nik-foreground tracking-tight sm:tracking-normal whitespace-nowrap")}>
                      <CheckCircle2Icon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                      رمز عبور باید شامل اعداد باشد
                    </div>
                  )
                )}
              </div>
              <div id="PASSWORD__CONTAINS__SYMBOLS" className="flex items-center gap-1 text-[13px]">
                {!methods.formState.dirtyFields.password ? (
                  <div className={cn("flex items-center gap-1 text-stone-500 tracking-tight sm:tracking-normal whitespace-nowrap")}>
                    <Minus className="stroke-1 w-4.5 translate-y-[2px] sm:translate-y-[1px]" />
                    باید شامل حروف خاص مثل $-#% باشد
                  </div>
                ) : methods.formState.dirtyFields.password &&
                  Array(methods.formState.errors.password).some((item) => item?.message === "باید شامل حروف خاص مثل $-#%  باشد") ? (
                  <div className="flex items-center gap-1 text-destructive tracking-tight sm:tracking-normal whitespace-nowrap">
                    <XCircleIcon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                    باید شامل حروف خاص مثل $-#% باشد
                  </div>
                ) : (
                  Array(methods.formState.errors.password).every((item) => item?.message !== "باید شامل حروف خاص مثل $-#%  باشد") && (
                    <div className={cn("flex items-center gap-1 text-nik-foreground tracking-tight sm:tracking-normal whitespace-nowrap")}>
                      <CheckCircle2Icon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                      باید شامل حروف خاص مثل $-#% باشد
                    </div>
                  )
                )}
              </div>
            </div>

            {/* BUTTONS WRAPPER */}
            <div id="BUTTONS__WRAPPER" className="mt-2 px-1 grid grid-cols-8 gap-1.5 p-0">
              <Button
                disabled={!isValid || isSubmitting}
                aria-disabled={!isValid || isSubmitting}
                variant={"focused"}
                className="flex items-center-safe gap-2 rounded-md h-0 min-h-[44px] text-white text-sm col-span-5"
                type="submit"
              >
                <UserPlus className="size-[20px]" />
                ثبت نام
              </Button>

              <Button
                onClick={invalidFormHandler}
                type="button"
                variant={"outline"}
                className="text-nik-secondary-foreground/80 hover:bg-transparent hover:text-nik-secondary-foreground rounded-md h-0 min-h-[44px] text-sm col-span-3"
              >
                انصراف
              </Button>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default FormRightComponent;
