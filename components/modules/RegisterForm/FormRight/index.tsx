"use client";
import { Controller, FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ErrorField from "../../ErrorField";
import { CheckCircle2Icon } from "lucide-react";

const FormSchema = z.object({
  username: z.string("وارد کردن نام الزامی است").min(1, "وارد کردن نام الزامی می باشد"),
  name: z.string("وارد کردن نام 2 الزامی است").min(1, "وارد کردن نام 2 الزامی است"),
  password: z.string("وارد کردن پسورد الزامی است").min(1, "وارد کردن رمز عبور الزامی می باشد"),
});

export type FormTypes = z.infer<typeof FormSchema>;

const FormRightComponent = () => {
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
                  type="password"
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!methods.formState.errors.password}
                  placeholder={"رمز عبور"}
                  className={cn(methods.getValues(field.name).length > 0 && !methods.formState.errors.password && "bg-[#f2f2f0]")}
                />
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
          <div className="flex flex-col gap-2 text-xs text-nik-foreground">
            <p className="flex items-center gap-1">
              <CheckCircle2Icon className="size-4" />
              رمز عبور باید حداقل 8 رقم باشد
            </p>
            <p className="flex items-center gap-1">
              <CheckCircle2Icon className="size-4" />
              رمز عبور باید حداقل 8 رقم باشد
            </p>
            <p className="flex items-center gap-1">
              <CheckCircle2Icon className="size-4" />
              رمز عبور باید حداقل 8 رقم باشد
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
