import * as S from "./styles";

const Main = ({ imageUrl, brand, name, amount }) => {
  return (
    <S.MainContainer>
      <S.Image src={`${imageUrl}`} alt="" />
      <div className="brand-and-name">
        <div className="brand">{brand}</div>
        <div className="name">{name}</div>
      </div>
      <div className="amount">월 {amount.toLocaleString("ko-KR")} 원</div>
    </S.MainContainer>
  );
};

export default Main;
