import { InputText } from "./style";

export const Input = ({
  editTable,
  placeholder,
  fieldValue,
  onChangeText,
  keyType,
  maxLength,
  editable
}) => {
  return (
    <InputText
      editTable={editTable}
      placeholder={placeholder}
      value={fieldValue}
      onChangeText={onChangeText}
      type={keyType}
      maxLength={maxLength}
      editable={editable}
    />
  );
};
