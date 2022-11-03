import * as S from "./styles";

const AdditionalProducts = ({ products }) => {
  return (
    <div>
      <S.InfoHeader>추가상품</S.InfoHeader>
      <S.InfoList>
        {products.map((product) => (
          <li key={product.name}>
            <div>{product.name}</div>
            <div>{product.amount.toLocaleString("kr-KR")}</div>
          </li>
        ))}
      </S.InfoList>
    </div>
  );
};

export default AdditionalProducts;
