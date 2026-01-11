"use client";
import { Controller, FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ErrorField from "../../ErrorField";
import { CheckCircle2Icon, Eye, EyeClosed, InfoIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";

const FormSchema = z.object({
  username: z.string("وارد کردن نام الزامی است").min(1, "وارد کردن نام الزامی می باشد"),
  name: z.string("وارد کردن نام 2 الزامی است").min(1, "وارد کردن نام 2 الزامی است"),
  password: z
    .string("وارد کردن پسورد الزامی است")
    .min(8, "رمز عبور باید حداقل 8 حرف باشد")
    .includes("!@#$%^&*()_+-=", "رمز عبور باید شامل کاراکتر های خاص مثل #$! باشد"),
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

  console.info("ERRORS => ", methods.formState.errors.password);
  return (
    <div className="min-w-full">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)} dir="rtl" className="flex-0 lg:w-2/3 mx-auto flex flex-col gap-4">
          <Controller
            control={methods.control}
            name="username"
            render={({ field }) => (
              <div className="flex flex-col gap-2 relative inset-0">
                <Label className="mb-0.5">نام کاربری</Label>
                <Input
                  autoComplete="false"
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!methods.formState.errors.username}
                  placeholder={"مثلا : حمیدرضا"}
                  className={cn(methods.getValues(field.name).length > 0 && !methods.formState.errors.username && "bg-[#f2f2f0]")}
                />
                <button
                  type="button"
                  className={cn("absolute cursor-pointer group right-1.5 top-1/2", methods.formState.errors.username && "top-7")}
                ></button>
                <ErrorField name={field.name} />
              </div>
            )}
          />

          <Controller
            control={methods.control}
            name="password"
            render={({ field }) => (
              <div className="flex flex-col gap-2 relative inset-0">
                <Label className="mb-0.5">رمز عبور</Label>
                <Input
                  autoComplete="false"
                  type={inputType}
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!methods.formState.errors.password}
                  placeholder={"رمز عبور"}
                  className={cn("relative inset-0", methods.getValues(field.name).length > 0 && !methods.formState.errors.password && "bg-[#f2f2f0]")}
                />
                {inputType === "password" ? (
                  <Button
                    type="button"
                    onClick={toggleInputTypeHandler}
                    variant={"ghost"}
                    className="w-fit absolute left-1 top-[42.5%] !px-1 hover:bg-transparent group"
                  >
                    <Eye className="size-5 text-stone-600 group-hover:text-stone-800 transition-all duration-250" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={toggleInputTypeHandler}
                    variant={"ghost"}
                    className="w-fit absolute left-1 top-[42.5%] !px-1 hover:bg-transparent group"
                  >
                    <EyeClosed className="size-5 text-stone-600 group-hover:text-stone-800 transition-all duration-250" />
                  </Button>
                )}
                <button
                  type="button"
                  className={cn("absolute cursor-pointer group right-1.5 top-1/2", methods.formState.errors.password && "top-7")}
                ></button>
                <ErrorField name={field.name} />
              </div>
            )}
          />

          <Controller
            control={methods.control}
            name="name"
            render={({ field }) => (
              <div className="flex flex-col gap-2 relative inset-0">
                <Label className="mb-0.5">نام کاربری2</Label>
                <Input
                  autoComplete="false"
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!methods.formState.errors.name}
                  placeholder={"نام کاربری 2"}
                  className={cn(methods.getValues(field.name).length > 0 && !methods.formState.errors.name && "bg-[#f2f2f0]")}
                />
                <button
                  type="button"
                  className={cn("absolute cursor-pointer group right-1.5 top-1/2", methods.formState.errors.name && "top-7")}
                ></button>
                <ErrorField name={field.name} />
              </div>
            )}
          />

          {/* PASSWORD HINTS */}
          <div className="flex flex-col gap-2 text-xs text-stone-500">
            <p id="PASSWORD__MIN__LENGTH" className="flex items-center gap-1">
              {!methods.formState.dirtyFields.password ? (
                <div className={cn("flex items-center gap-1 text-stone-500")}>
                  <InfoIcon className="size-4 translate-y-[1px]" />
                  رمز عبور باید حداقل 8 رقم باشد
                </div>
              ) : methods.formState.dirtyFields.password && methods.formState.errors.password?.type === "too_small" ? (
                <div className="flex items-center gap-1 text-destructive">
                  <XCircleIcon className="size-4 translate-y-[1px]" />
                  رمز عبور باید حداقل 8 رقم باشد
                </div>
              ) : (
                Array(methods.formState.errors.password).length && (
                  <div className={cn("flex items-center gap-1 text-nik-foreground")}>
                    <CheckCircle2Icon className="size-4 translate-y-[1px]" />
                    رمز عبور باید حداقل 8 رقم باشد
                  </div>
                )
              )}
            </p>
            <p id="PASSWORD__CONTAINS__NUMBERS" className="flex items-center gap-1">
              {!methods.formState.dirtyFields.password ? (
                <div className={cn("flex items-center gap-1 text-stone-500")}>
                  <InfoIcon className="size-4 translate-y-[1px]" />
                  رمز عبور باید شامل اعداد باشد
                </div>
              ) : methods.formState.dirtyFields.password &&
                Array(methods.formState.errors.password).some((item) => item?.type === "invalid_format") ? (
                <div className="flex items-center gap-1 text-destructive">
                  <XCircleIcon className="size-4 translate-y-[1px]" />
                  رمز عبور باید شامل اعداد باشد
                </div>
              ) : (
                Array(methods.formState.errors.password).every((item) => item?.type !== "invalid_format") && (
                  <div className={cn("flex items-center gap-1 text-nik-foreground")}>
                    <CheckCircle2Icon className="size-4 translate-y-[1px]" />
                    رمز عبور باید شامل اعداد باشد
                  </div>
                )
              )}
            </p>
            <p id="PASSWORD__CONTAINS__SYMBOLS" className="flex items-center gap-1">
              {!methods.formState.dirtyFields.password ? (
                <div className={cn("flex items-center gap-1 text-stone-500")}>
                  <InfoIcon className="size-4 translate-y-[1px]" />
                  رمز عبور باید شامل کاراکتر های خاص مثل !@#% باشد
                </div>
              ) : methods.formState.dirtyFields.password &&
                Array(methods.formState.errors.password).some((item) => item?.type === "invalid_format") ? (
                <div className="flex items-center gap-1 text-destructive">
                  <XCircleIcon className="size-4 translate-y-[1px]" />
                  رمز عبور باید شامل کاراکتر های خاص مثل !@#% باشد
                </div>
              ) : (
                Array(methods.formState.errors.password).every((item) => item?.type !== "invalid_format") && (
                  <div className={cn("flex items-center gap-1 text-nik-foreground")}>
                    <CheckCircle2Icon className="size-4 translate-y-[1px]" />
                    رمز عبور باید شامل کاراکتر های خاص مثل !@#% باشد
                  </div>
                )
              )}
            </p>
          </div>

          {/* BUTTONS WRAPPER */}
          <div id="BUTTONS__WRAPPER" className="flex gap-3 py-5">
            <Button
              disabled={!isValid || isSubmitting}
              aria-disabled={!isValid || isSubmitting}
              variant={"focused"}
              className="font-semibold rounded-md text-sm w-44"
              type="submit"
            >
              ثبت اطلاعات
            </Button>
            <div>
              <Button
                type="button"
                variant={"outline"}
                className=" bg-(--nik-gray) text-sm text-stone-500 hover:bg-secondary border border-transparent hover:border-stone-200  rounded-md font-semibold"
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
