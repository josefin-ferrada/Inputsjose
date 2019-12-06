import React, { useState } from "react";
import { Wrapper } from "./styles";
import { Input, Label } from "reactstrap";
import classNames from "classnames";
import PropTypes from "prop-types";
import { PropSelect } from "./types";
import { CircularError, CircularCheck } from "../UI/Icons";

export const InputSelect = (props: PropSelect) => {
  const { disabled, label, placeholder, data } = props;
  const [icon, setIcon] = useState();
  const [borderValid, setBorderValid] = useState(false);
  const [borderInvalid, setBorderInvalid] = useState(false);

  let timer: any;
  const interval = 1000;

  const validateSelect = (value: any, placeholder:string) => {
    if (value === placeholder || value >= 240) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIcon(
          <div className="invalid_feedback">
            <CircularError/>
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
            <CircularCheck/>
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
          validateSelect(e.target.value, placeholder);
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
                <option value={item.id} key={key}>
                  {item.name}
                </option>
              );
            })
          : null}
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
  placeholder: "Selecciona",
  label: "Etiqueta"
};
