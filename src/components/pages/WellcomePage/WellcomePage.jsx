import WellcomePageWrapper from "./style";
import { ReactComponent as HomeImage } from "../../../assets/images/WellcomePage/Home.svg";
import { useState } from "react";
import Modal from "../../Modal";
import styled from "styled-components";
import ColombiaCheckedImg from "../../../assets/images/MxColModal/ColombiaChecked.svg";
import ColombiaUncheckedImg from "../../../assets/images/MxColModal/ColombiaUnchecked.svg";
import MexicoCheckedImg from "../../../assets/images/MxColModal/MexicoChecked.svg";
import MexicoUncheckedImg from "../../../assets/images/MxColModal/MexicoUnchecked.svg";

const WellcomePage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const [countrySelected, setCountrySelected] = useState(null);

  const handleSelectCountry = (country) => {
    if (!countrySelected) {
      setCountrySelected(country);
      if (country === "Mexico") {
        setTimeout(() => {
          window.location.href = "https://mihabi.mx/";
        }, 500);
      } else {
        setTimeout(() => {
          setOpenModal(false);
        }, 500);
      }
    }
  };

  const ModalCountryWrapper = styled.div`
    padding: 37px 38px;
    background: white;
    max-width: 360px;
    margin: 133px 27px;
    position: relative;
    border-radius: 16px;

    .flex {
      display: flex;
      justify-content: center;
      gap: 16px;
    }

    .title {
      font-size: 32px;
      line-height: 32px;
      text-align: center;
      color: #6d6970;
    }

    .subtitle {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      color: #6d6970;
    }
  `;

  return (
    <WellcomePageWrapper>
      <div className="full-container">
        <div className="container">
          <div className="home-img">
            <HomeImage className="full-width" />
          </div>

          <div className="content">
            <h1 className="title">Bienvenido a Habimetro</h1>
            <h4 className="content-text">
              Estás a punto de empezar el avaluo de tu inmueble. Queremos tener
              en cuenta algunos datos.
            </h4>
          </div>
          <button className="btn" onClick={handleClick}>
            Continuar
          </button>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <ModalCountryWrapper>
          <h1 className="title">¡Hola!</h1>
          <h3 className="subtitle">¿A qué país de Habi quieres ingresar?</h3>
          <div className="flex">
            <CheckButton
              onClick={() => {
                handleSelectCountry("Colombia");
              }}
              checked={countrySelected === "Colombia"}
              checkedImg={ColombiaCheckedImg}
              unCheckedImg={ColombiaUncheckedImg}
            />
            <CheckButton
              onClick={() => {
                handleSelectCountry("Mexico");
              }}
              checked={countrySelected === "Mexico"}
              checkedImg={MexicoCheckedImg}
              unCheckedImg={MexicoUncheckedImg}
            />
          </div>
        </ModalCountryWrapper>
      </Modal>
    </WellcomePageWrapper>
  );
};

const BigButtonWrapper = styled.div`
  img {
    width: 120px;
  }
`;

const CheckButton = ({
  checkedImg,
  unCheckedImg,
  checked,
  onClick = () => {},
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <BigButtonWrapper>
      <img
        onClick={handleClick}
        src={checked ? checkedImg : unCheckedImg}
        alt=""
      />
    </BigButtonWrapper>
  );
};

export default WellcomePage;
