import { FieldContent } from "./style";

export const BoxInput = ({
  fieldWidth = 100,
  editable = false,
  textLabel,
  placeholder,
  fieldValue = null,
  onChangeText = null,
  keyType = "default",
  maxLength,
}) => {
  return (
    <FieldContent fieldWidth={fieldWidth}>
      <Label textLabel={textLabel} />
      <Input
        editable={editable}
        placeholder={placeholder}
        value={fieldValue}
        onChangeText={onChangeText}
        type={keyType}
        maxLength={maxLength}
      />
    </FieldContent>
  );
};
