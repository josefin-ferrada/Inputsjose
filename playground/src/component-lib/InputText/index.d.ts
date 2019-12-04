/// <reference types="react" />
import PropTypes from "prop-types";
import { InputProps } from "./types";
export declare const InputText: {
    (props: InputProps): JSX.Element;
    propTypes: {
        /**
        Tipo de validación
        */
        type: PropTypes.Requireable<string>;
        /**
        Si está deshabilitado
        */
        disabled: PropTypes.Requireable<boolean>;
        /**
        Autofocus al input
        */
        autoFocus: PropTypes.Requireable<boolean>;
        /**
        Placeholder del input
        */
        placeholder: PropTypes.Requireable<string>;
        /**
        Etiqueta sobre el input
        */
        label: PropTypes.Requireable<string>;
    };
    defaultProps: {
        disabled: boolean;
        autoFocus: boolean;
        placeholder: string;
        label: string;
    };
};
