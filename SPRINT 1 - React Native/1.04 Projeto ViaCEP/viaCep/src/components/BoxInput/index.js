import { FieldContent } from "./style";
import { InputLabel } from "../Label";
import { Input } from "../Input";

export const BoxInput = ({
  fieldWidth = 100,
  editable = false,
  labelText,
  placeholder,
  fieldValue = null,
  onChangeText = null,
  keyType = "default",
  maxLength,
}) => {
  return (
    <FieldContent fieldWidth={fieldWidth}>
      <InputLabel labelText={labelText} />
      <Input
        editable={editable}
        placeholder={placeholder}
        fieldValue={fieldValue}
        onChangeText={onChangeText}
        keyType={keyType}
        maxLength={maxLength}
      />
    </FieldContent>
  );
};
