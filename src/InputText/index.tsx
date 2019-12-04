import React, { useState } from "react";
import { Wrapper } from "./styles";
import { Input, Label } from "reactstrap";
import { Icon } from "../UI/Icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import { InputProps } from "./types";

export const InputText = (props: InputProps) => {
  const { disabled, autoFocus, type, placeholder, label } = props;
  const [valueInput, setValueInput] = useState("");
  const [icon, setIcon] = useState();
  const [borderValid, setBorderValid] = useState(false);
  const [borderInvalid, setBorderInvalid] = useState(false);

  let timer: any;
  const interval = 1000;

  const ValidIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      version="1.1"
      viewBox="0 0 17 17"
    >
      <g fillRule="nonzero">
        <rect width="17" height="17" fill="#28A745" rx="8.5" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M7.125 10.531l5.385-5.385 1.097 1.097-6.364 6.364L3 8.364l.98-.98z"
        />
      </g>
    </svg>
  );

  const InvalidIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      version="1.1"
      viewBox="0 0 17 17"
    >
      <g {...props} fillRule="nonzero">
        <rect width="17" height="17" fill="#C00" rx="8.5" />
        <g stroke="#FFF" strokeLinecap="square" strokeWidth="1.5">
          <path d="M5.474 5.555l6.24 5.941M5.34 11.544l6.035-6.153" />
        </g>
      </g>
    </svg>
  );

  const validateInput = (typeValidation: any, value: any) => {
    switch (typeValidation) {
      case "phone":
        return validation(
          "^([+])?([0-9]{1,20})$",
          value,
          "Debe ingresar sólo números"
        );
      case "email":
        return validation(
          "^.+@[^.].*.[a-z]{2,}$",
          value,
          "Debes llenar este campo con email válido"
        );
      case "alphabetic":
        return validation(
          "^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]+$",
          value,
          "Debe contener sólo valores alfabéticos"
        );
      default:
        return null;
    }
  };

  const validation = (regex: any, value: any, message: any) => {
    clearTimeout(timer);
    if (value.match(regex)) {
      timer = setTimeout(() => {
        setIcon(
          <div className="valid_feedback">
            {ValidIcon}
            Correcto
          </div>
        );
        setBorderValid(true);
        setBorderInvalid(false);
      }, interval);
    } else if (value === "") {
      timer = setTimeout(() => {
        setIcon(
          <div className="invalid_feedback">
            {InvalidIcon}
            Este campo es obligatorio
          </div>
        );
        setBorderValid(false);
        setBorderInvalid(true);
      }, interval);
    } else {
      timer = setTimeout(() => {
        setIcon(
          <div className="invalid_feedback">
            {InvalidIcon}
            {message}
          </div>
        );
        setBorderValid(false);
        setBorderInvalid(true);
      }, interval);
    }
  };

  return (
    <Wrapper>
      <Label for="Input Text" className={classNames(disabled ? "gray" : "")}>
        {label}
      </Label>
      <Input
        aria-label="Campo de texto"
        value={valueInput}
        onChange={(e: any) => {
          setValueInput(e.target.value);
        }}
        onKeyUp={(e: any) => {
          clearTimeout(timer);
          validateInput(type, e.target.value);
        }}
        onKeyDown={() => {
          clearTimeout(timer);
        }}
        onBlur={() => {
          clearTimeout(timer);
        }}
        autoFocus={autoFocus || false}
        placeholder={placeholder}
        className={classNames({
          borderRed: borderInvalid,
          borderGreen: borderValid
        })}
        disabled={disabled || false}
      />
      {icon}
    </Wrapper>
  );
};

// @Proptypes
InputText.propTypes = {
  /**
  Tipo de validación
  */
  type: PropTypes.oneOf(["phone", "email", "alphabetic"]),
  /**
  Si está deshabilitado
  */
  disabled: PropTypes.bool,
  /**
  Autofocus al input
  */
  autoFocus: PropTypes.bool,
  /**
  Placeholder del input
  */
  placeholder: PropTypes.string,
  /**
  Etiqueta sobre el input
  */
  label: PropTypes.string
};

InputText.defaultProps = {
  disabled: false,
  autoFocus: false,
  placeholder: "Placeholder",
  label: "Etiqueta"
};
