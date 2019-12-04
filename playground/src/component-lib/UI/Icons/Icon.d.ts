/// <reference types="react" />
import PropTypes from 'prop-types';
declare type IconProps = {
    height?: number;
    onClick: any;
    viewBox: any;
    testid?: any;
    fill: any;
};
/**
 * Este componente se encarga de dibujar todos los íconos svg pequeños de la app.
Los íconos más elaborados, tienen un archivo exclusivo para cada uno, por ejemplo
los de Ranking.
 *
 * @example
 */
declare const Icon: {
    (props: IconProps): JSX.Element;
    propTypes: {
        name: PropTypes.Validator<string>;
        style: PropTypes.Requireable<object>;
        fill: PropTypes.Requireable<string>;
        stroke: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        height: PropTypes.Requireable<number>;
        width: PropTypes.Requireable<number>;
        viewBox: PropTypes.Requireable<number>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        testid: PropTypes.Requireable<string>;
    };
};
export { Icon };
