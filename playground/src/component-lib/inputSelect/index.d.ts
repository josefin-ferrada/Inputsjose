/// <reference types="react" />
import PropTypes from 'prop-types';
import { PropSelect } from './types';
export declare const InputSelect: {
    (props: PropSelect): JSX.Element;
    propTypes: {
        /**
        Si está deshabilitado
        */
        disabled: PropTypes.Requireable<boolean>;
        /**
        Array de datos a listar
        */
        data: PropTypes.Requireable<any[]>;
        /**
        Placeholder de select
        */
        placeholder: PropTypes.Requireable<string>;
        /**
        Etiqueta de select
        */
        label: PropTypes.Requireable<string>;
    };
    defaultProps: {
        disabled: boolean;
        data: null;
        placeholder: string;
        label: string;
    };
};
