import {
  emailRule,
  FormControlProps,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

export default function TextInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule, emailRule, minLengthRule],
    ...props,
  });

  return (
    <>
      <input
        type="email"
        value={value}
        id={id}
        onChange={e => {
          changeValue(e.target.value);
        }}
        {...otherProps}
      />
      {error && (
        <span className="text-red-500 text-[13px] -mt-3}">{error}</span>
      )}
    </>
  );
}
