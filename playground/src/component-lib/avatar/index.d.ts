/// <reference types="react" />
import { PropAvatar } from './types';
/**
 * Hace el render del Avatar o un Placeholder con las primeras 2 letras del nombre de la persona.
 */
export declare const Avatar: {
    (props: PropAvatar): JSX.Element;
    defaultProps: {
        alt: string;
        image: string;
        size: number;
    };
};
