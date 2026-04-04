import { Controller, FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  type = "text",
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
}) {
  const error = form.formState.errors[name];

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      <FieldGroup>
        <Controller
          control={form.control}
          name={name}
          render={({ field }) =>
            type === "textarea" ? (
              <Textarea
                {...field}
                placeholder={placeholder}
                autoComplete="off"
                className="resize-none"
              />
            ) : (
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
              />
            )
          }
        />
      </FieldGroup>

      {error && <FieldError>{String(error.message)}</FieldError>}
    </Field>
  );
}
