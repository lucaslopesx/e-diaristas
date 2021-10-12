import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import {
  FormELementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer,
} from "@styles/pages/index.style";
import { useState } from "react";

const Home: NextPage = () => {
  const [contador, setContador] = useState(5);

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      Contador: {contador}
      <button onClick={() => setContador(contador + 1)}>clique aqui</button>
      <Container>
        <FormELementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />

          <Typography color={"error"}>CEP Invalido</Typography>

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormELementsContainer>
        <ProfessionalsPaper>
          <ProfessionalsContainer>
            <UserInformation
              name={"Lucas Lopes"}
              picture={"https://github.com/lucaslopesx.png"}
              rating={5}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Lopes"}
              picture={"https://github.com/lucaslopesx.png"}
              rating={5}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Lopes"}
              picture={"https://github.com/lucaslopesx.png"}
              rating={5}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Lopes"}
              picture={"https://github.com/lucaslopesx.png"}
              rating={5}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Lopes"}
              picture={"https://github.com/lucaslopesx.png"}
              rating={5}
              description={"Minas Gerais"}
            />
            <UserInformation
              name={"Lucas Lopes"}
              picture={"https://github.com/lucaslopesx.png"}
              rating={5}
              description={"Minas Gerais"}
            />
          </ProfessionalsContainer>
        </ProfessionalsPaper>
      </Container>
    </div>
  );
};

export default Home;
