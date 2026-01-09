"use client";
import { Controller, FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  username: z.string("وارد کردن نام الزامی است").min(1, "وارد کردن نام الزامی می باشد"),
  password: z.string("وارد کردن پسورد الزامی است"),
});

type FormTypes = z.infer<typeof FormSchema>;

const FormRightComponent = () => {
  const methods = useForm<FormTypes>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function submitHandler(data: FormTypes) {
    console.info("DATA => ", data);
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitHandler)}>
          <Controller control={methods.control} name="username" render={({ field }) => <input value={field.value} onChange={field.onChange} className="border" />} />
        </form>
      </FormProvider>
    </div>
  );
};

export default FormRightComponent;
