import * as S from "./styles";

const Insurance = ({ insurances }) => {
  return (
    <div>
      <S.InfoHeader>보험</S.InfoHeader>
      <S.InfoList>
        {insurances.map((insurance) => (
          <li key={insurance.name}>
            <div>{insurance.name}</div>
            <div>{insurance.description}</div>
          </li>
        ))}
      </S.InfoList>
    </div>
  );
};

export default Insurance;
