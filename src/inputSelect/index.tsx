import React, { useState } from "react";
import { Wrapper } from "./styles";
import { Input, Label } from "reactstrap";
import { Icon } from "../UI/Icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import { PropSelect } from "./types";

export const InputSelect = (props: PropSelect) => {
  const { disabled, label, placeholder, data } = props;
  const [icon, setIcon] = useState();
  const [borderValid, setBorderValid] = useState(false);
  const [borderInvalid, setBorderInvalid] = useState(false);

  let timer: any;
  const interval = 1000;

  const validateSelect = (value: any) => {
    if (value === "Selecciona") {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIcon(
          <div className="invalid_feedback">
            <Icon width={17} fill="#ffff" name="circularError" />
            Seleccione una opción válida
          </div>
        );
        setBorderValid(false);
        setBorderInvalid(true);
      }, interval);
    } else {
      timer = setTimeout(() => {
        setIcon(
          <div className="valid_feedback">
            <Icon width={17} fill="#ffff" name="circularCheck" />
            Correcto
          </div>
        );
        setBorderInvalid(false);
        setBorderValid(true);
      }, interval);
    }
  };

  return (
    <Wrapper>
      <Label for="exampleSelect" className={classNames(disabled ? "gray" : "")}>
        {label}
      </Label>
      <Input
        onChange={e => {
          validateSelect(e.target.value);
        }}
        className={classNames({
          borderRed: borderInvalid,
          borderGreen: borderValid
        })}
        type="select"
        name="select"
        id="exampleSelect"
        disabled={disabled || false}
      >
        <option value="Selecciona">{placeholder}</option>
        {data
          ? data.map((item: any, key: any) => {
              return (
                <option value={item.item} key={key}>
                  {item.item}
                </option>
              );
            })
          : null}{<svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
          <path fill="#60798E" fill-rule="evenodd" d="M8.106 8.235a.934.934 0 0 1-.611-.227L.212 1.75 1.434.32l6.672 5.735L14.778.32 16 1.75 8.717 8.008a.934.934 0 0 1-.611.227z"/>
      </svg>}
      </Input>
      {icon}
    </Wrapper>
  );
};

// @Proptypes
InputSelect.propTypes = {
  /**
  Si está deshabilitado
  */
  disabled: PropTypes.bool,
  /**
  Array de datos a listar
  */
  data: PropTypes.array,
  /**
  Placeholder de select
  */
  placeholder: PropTypes.string,
  /**
  Etiqueta de select
  */
  label: PropTypes.string
};

InputSelect.defaultProps = {
  disabled: false,
  data: null,
  placeholder: "Placeholder",
  label: "Etiqueta"
};
