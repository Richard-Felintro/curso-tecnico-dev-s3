import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm } from "./style";

export function Home() {
  return (
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          fieldValue={"informar CEP"}
          placeholder={"CEP..."}
          keyType="numeric"
          maxLength={9}
        />
      </ContainerForm>
    </ScrollForm>
  );
}
