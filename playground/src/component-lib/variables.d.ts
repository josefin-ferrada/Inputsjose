declare const _default: {
    borderRadius: string;
    /**
     * Colores
     */
    setColors: {
        none: string;
        primary: string;
        info: string;
        default: string;
        success: string;
        warning: string;
        danger: string;
        active: string;
        text: string;
        icons: string;
        completed: string;
        buttons: {
            success: string;
        };
        /**
         * Transforma un hexadecimal a
         * ```css
         *  rgba(255,255,255,0.3)
         * ```
         */
        hexToRgbA: (hex: any, opacity: any) => string | undefined;
        black: string;
        brownishGrey: string;
        blackTwo: string;
        blackThree: string;
        brownGrey: string;
        brownThree: string;
        veryLightPink: string;
        brownGreyTwo: string;
        veryLightPinkTwo: string;
        veryLightPinkThree: string;
        deepSeaBlue: string;
        deepSkyBlue: string;
        backgroundGrey: string;
        white: string;
        whiteTwo: string;
        whiteThree: string;
        whiteFour: string;
        red: string;
        jadeGreen: string;
        orangeyYellow: string;
        veryLightBlue: string;
        ice: string;
        activeBlue: string;
        inactiveBlue: string;
        checkGreen: string;
        checkError: string;
        lightMint: string;
        paleSalmon: string;
    };
    inputOptionFontSize: string;
    inputOptionFontSizeSm: string;
    inputOptionSize: string;
    inputOptionSizeSm: string;
    fontSize: number;
    fontSizeMobile: number;
    hSize: {
        normal: {
            h1: number;
            h2: number;
            h3: number;
            h4: number;
            h5: number;
            h6: number;
        };
        mobile: {
            h1: number;
            h2: number;
            h3: number;
            h4: number;
            h5: number;
            h6: number;
        };
    };
    pSize: {
        big: number;
        medium: number;
        small: number;
        tiny: number;
    };
    articleH: {
        normal: {
            h2: number;
            h3: number;
            h4: number;
            h5: number;
            h6: number;
        };
        mobile: {
            h2: number;
            h3: number;
            h4: number;
            h5: number;
        };
    };
    alertFontSize: {
        big: number;
        tiny: number;
    };
};
/**
 * @typedef {Object} Vars
 * @property {Object} setColors - Cambiar color
 */
export default _default;
