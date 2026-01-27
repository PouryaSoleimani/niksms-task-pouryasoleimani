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

const FormSchema = z.object({
  username: z.string("وارد کردن نام الزامی است").min(1, "وارد کردن نام الزامی می باشد"),
  name: z.string("وارد کردن نام 2 الزامی است").min(1, "وارد کردن نام 2 الزامی است"),
  password: z
    .string()
    .min(8, "حداقل باید 8 حرف باشد")
    .regex(/[0-9]/, "باید شامل عدد باشد")
    .regex(/[!$%^&*]/, "باید شامل حروف خاص مثل $-#%  باشد"),
  // .regex(/^\d+$/, "رمز عبور باید شامل اعداد باشد"),
});

export type FormTypes = z.infer<typeof FormSchema>;

const FormRightComponent = () => {
  const [inputType, setInputType] = useState<"password" | "text">("password");

  //^ REACT__HOOK__FORM
  const methods = useForm<FormTypes>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      name: "",
      password: "",
    },
  });

  // ! FORM__STATE
  const { isValid, isSubmitting } = methods.formState;

  //* SUBMIT___HANDLER
  function submitHandler(data: FormTypes) {
    console.info("DATA => ", data);
    methods.reset();
  }

  function toggleInputTypeHandler() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  useEffect(() => {
    console.info("ERRORS => ", methods.formState.errors.password);
    return;
  }, [methods.formState.errors]);


  console.info('PASSWORD ERORRS =>', methods.formState.errors)

  return (
    <div className="min-w-full">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)} dir="rtl" className="flex-0 lg:w-2/3 lg:gap-4 flex flex-col gap-6 mx-auto">
          <Controller
            control={methods.control}
            name="username"
            render={({ field, fieldState }) => {
              const hasValue = !!field.value;
              const hasError = !!fieldState.error;
              return (
                <div className="relative inset-0 flex flex-col gap-2">
                  <Label className="mb-0.5">نام کاربری</Label>
                  <Input
                    autoComplete="name"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    aria-invalid={!!methods.formState.errors.username}
                    placeholder={"مثلا : حمیدرضا"}
                    className={cn(
                      hasValue && !hasError && "bg-nik-primary/30 border-nik-primary ring-nik-primary",
                      hasError && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  <button
                    type="button"
                    className={cn("absolute cursor-pointer group right-1.5 top-1/2", methods.formState.errors.username && "top-7")}
                  ></button>
                  <ErrorField name={field.name} />
                </div>
              )
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
                    placeholder={"رمز عبور"}
                    className={cn(
                      hasValue && !hasError && "bg-nik-primary/30 border-nik-primary ring-nik-primary",
                      hasError && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {inputType === "password" ? (
                    <Button
                      type="button"
                      onClick={toggleInputTypeHandler}
                      variant={"ghost"}
                      className="w-fit absolute left-1 top-[42.5%] !px-1 hover:bg-transparent group"
                    >
                      <Eye className="size-5 text-stone-600 group-hover:text-stone-800 duration-250 transition-all" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={toggleInputTypeHandler}
                      variant={"ghost"}
                      className="w-fit absolute left-1 top-[42.5%] !px-1 hover:bg-transparent group"
                    >
                      <EyeClosed className="size-5 text-stone-600 group-hover:text-stone-800 duration-250 transition-all" />
                    </Button>
                  )}
                  <button
                    type="button"
                    className={cn("absolute cursor-pointer group right-1.5 top-1/2", methods.formState.errors.password && "top-7")}
                  ></button>
                  <ErrorField name={field.name} />
                </div>
              )
            }}
          />

          <Controller
            control={methods.control}
            name="name"
            render={({ field, fieldState }) => {
              const hasValue = !!field.value;
              const hasError = !!fieldState.error;
              return (
                <div className="relative inset-0 flex flex-col gap-2">
                  <Label className="mb-0.5">نام کاربری2</Label>
                  <Input
                    autoComplete="false"
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    aria-invalid={!!methods.formState.errors.name}
                    placeholder={"نام کاربری 2"}
                    className={cn(
                      hasValue && !hasError && "bg-nik-primary/30 border-nik-primary ring-nik-primary",
                      hasError && "border-red-500 focus-visible:ring-red-500"
                    )} />
                  <button
                    type="button"
                    className={cn("absolute cursor-pointer group right-1.5 top-1/2", methods.formState.errors.name && "top-7")}
                  ></button>
                  <ErrorField name={field.name} />
                </div>
              )
            }}
          />

          {/* PASSWORD HINTS */}
          <div className="text-stone-500 flex flex-col gap-2 text-xs">
            <div id="PASSWORD__MIN__LENGTH" className="flex items-center gap-1">
              {!methods.formState.dirtyFields.password ? (
                <div className={cn("flex items-start justify-center gap-1 text-stone-500 whitespace-nowrap tracking-tight sm:tracking-normal")}>
                  <Minus className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                  حداقل باید 8 حرف باشد
                </div>
              ) : methods.formState.dirtyFields.password && Array(methods.formState.errors.password).some((item) => item?.message === "رمز عبور باید حداقل 8 کاراکتر باشد") ? (
                <div className="text-destructive whitespace-nowrap sm:tracking-normal flex items-center gap-1 tracking-tight">
                  <XCircleIcon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                  حداقل باید 8 حرف باشد
                </div>
              ) : (
                Array(methods.formState.errors.password).length && (
                  <div className={cn("flex items-center gap-1 text-nik-foreground whitespace-nowrap tracking-tight sm:tracking-normal")}>
                    <CheckCircle2Icon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                    حداقل باید 8 حرف باشد
                  </div>
                )
              )}
            </div>
            <div id="PASSWORD__CONTAINS__NUMBERS" className="flex items-center gap-1">
              {!methods.formState.dirtyFields.password ? (
                <div className={cn("flex items-center gap-1 text-stone-500 whitespace-nowrap tracking-tight sm:tracking-normal")}>
                  <Minus className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                  رمز عبور باید شامل اعداد باشد
                </div>
              ) : methods.formState.dirtyFields.password &&
                Array(methods.formState.errors.password).some((item) => item?.message === "باید شامل عدد باشد") ? (
                <div className="text-destructive whitespace-nowrap sm:tracking-normal flex items-center gap-1 tracking-tight">
                  <XCircleIcon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                  رمز عبور باید شامل اعداد باشد
                </div>
              ) : (
                Array(methods.formState.errors.password).every((item) => item?.message !== "باید شامل عدد باشد") && (
                  <div className={cn("flex items-center gap-1 text-nik-foreground whitespace-nowrap tracking-tight sm:tracking-normal")}>
                    <CheckCircle2Icon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                    رمز عبور باید شامل اعداد باشد
                  </div>
                )
              )}
            </div>
            <div id="PASSWORD__CONTAINS__SYMBOLS" className="flex items-center gap-1">
              {!methods.formState.dirtyFields.password ? (
                <div className={cn("flex items-center gap-1 text-stone-500 whitespace-nowrap tracking-tight sm:tracking-normal")}>
                  <Minus className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                  شامل حروف خاص مثل : ؟-#% باشد
                </div>
              ) : methods.formState.dirtyFields.password &&
                Array(methods.formState.errors.password).some((item) => item?.message === "  باید شامل حروف خاص مثل $-#%  باشد") ? (
                <div className="text-destructive whitespace-nowrap sm:tracking-normal flex items-center gap-1 tracking-tight">
                  <XCircleIcon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                  شامل حروف خاص مثل : ؟-#% باشد
                </div>
              ) : (
                Array(methods.formState.errors.password).every((item) => item?.message !== "  باید شامل حروف خاص مثل $-#%  باشد") && (
                  <div className={cn("flex items-center gap-1 text-nik-foreground whitespace-nowrap tracking-tight sm:tracking-normal")}>
                    <CheckCircle2Icon className="size-4 translate-y-[2px] sm:translate-y-[1px]" />
                    شامل حروف خاص مثل : ؟-#% باشد
                  </div>
                )
              )}
            </div>
          </div>

          {/* BUTTONS WRAPPER */}
          <div id="BUTTONS__WRAPPER" className="lg:py-5 flex gap-3">
            <Button
              disabled={!isValid || isSubmitting}
              aria-disabled={!isValid || isSubmitting}
              variant={"focused"}
              className="w-[268px] text-sm rounded-md text-white flex items-center-safe gap-2"
              type="submit"
            >
              <UserPlus className="size-[20px]" />
              ثبت نام
            </Button>
            <div>
              <Button
                type="button"
                variant={"outline"}
                className="border-nik-gray text-sm text-stone-500 hover:bg-secondary border  hover:border-stone-200  rounded-md "
              >
                انصراف
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormRightComponent;
