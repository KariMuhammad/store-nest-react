import { FormControlProps, useFormControl } from "@mongez/react-form";

export default function CheckBoxInput(props: FormControlProps) {
  const { value, changeValue, id, error } = useFormControl({
    ...props,
  });

  return (
    <>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={value}
          id={id}
          onChange={e => {
            changeValue(e.target.checked);
          }}
        />
      </div>
      {error && <span className="text-red-500 text-[13px] mt-1">{error}</span>}
    </>
  );
}
