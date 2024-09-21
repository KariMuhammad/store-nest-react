import {
  FormControlProps,
  maxLengthRule,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

export default function PasswordInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule, maxLengthRule, minLengthRule],
    ...props,
  });

  return (
    <>
      <input
        type="password"
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
