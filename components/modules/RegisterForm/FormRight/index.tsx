"use client";
import { Controller, FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ErrorField from "../../ErrorField";

const FormSchema = z.object({
  username: z.string("وارد کردن نام الزامی است").min(1, "وارد کردن نام الزامی می باشد"),
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
      password: "",
    },
  });
  const { isValid, isSubmitting } = methods.formState;

  //* SUBMIT___HANDLER
  function submitHandler(data: FormTypes) {
    console.info("DATA => ", data);
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)} dir="rtl" className="border lg:w-2/3 mx-auto flex flex-col gap-4">
          <Controller
            control={methods.control}
            name="username"
            render={({ field }) => (
              <div className="flex flex-col gap-2 relative inset-0">
                <Label className="mb-0.5">نام کاربری</Label>
                <Input
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!methods.formState.errors.username}
                  placeholder={"مثلا : حمیدرضا"}
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
                  type="password"
                  value={field.value}
                  onChange={field.onChange}
                  aria-invalid={!!methods.formState.errors.password}
                  placeholder={"رمز عبور"}
                />
                <button
                  type="button"
                  className={cn("absolute cursor-pointer group right-1.5 top-1/2", methods.formState.errors.password && "top-7")}
                ></button>
                <ErrorField name={field.name} />
              </div>
            )}
          />
          <div id="BUTTONS__WRAPPER" className="flex gap-3 p-3">
            <Button
              disabled={!isValid || isSubmitting}
              aria-disabled={!isValid || isSubmitting}
              variant={"focused"}
              className="font-semibold rounded-md"
            >
              ثبت اطلاعات
            </Button>
            <div>
              <Button variant={"outline"} className="bg-stone-100 border border-stone-200 rounded-md font-semibold">
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
