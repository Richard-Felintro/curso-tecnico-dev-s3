import { useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, ScrollForm, ContainerFormRow } from "./style";
import axios from "axios";

export function Home() {
  const [cepInfo, setCepInfo] = useState([]);
  const [cep, setCep] = useState("09380320");

  const SearchCep = () => {
    axios({
      method: "get",
      url: `localhost:3000/cep`,
    }).then((response) => {
      setCepInfo(response);
    });
  };
  return (
    <ScrollForm>
      <ContainerForm>
        <BoxInput
          labelText={"Informar CEP:"}
          placeholder={"CEP..."}
          keyType="number"
          maxLength={9}
          editable={true}
          fieldValue={cep}
          onChangeText={(x) => setCep(x)}
        />
        <BoxInput
          labelText={"Logradouro"}
          placeholder={"Logradouro..."}
          fieldValue={cepInfo.logradouro}
        />
        <BoxInput
          labelText={"Bairro"}
          placeholder={"Bairro..."}
          fieldValue={cepInfo.bairro}
        />
        <BoxInput
          labelText={"Cidade"}
          placeholder={"Cidade..."}
          fieldValue={cepInfo.localidade}
        />
        <ContainerFormRow>
          <BoxInput
            fieldWidth={70}
            labelText={"Estado"}
            placeholder={"Logradouro..."}
            fieldValue={cepInfo.localidade}
          />
          <BoxInput
            fieldWidth={20}
            labelText={"UF"}
            placeholder={"UF"}
            fieldValue={cepInfo.uf}
            maxLength={2}
          />
        </ContainerFormRow>
      </ContainerForm>
    </ScrollForm>
  );
}
