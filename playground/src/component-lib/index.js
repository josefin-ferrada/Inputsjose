/* eslint-disable */
import React__default, { useState, useEffect, createElement } from 'react';
import styled from 'styled-components';
import { Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Wrapper = styled.figure(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-radius: 50%;\n  flex-shrink: 0;\n/* @ts-ignore  */\n  height: ", ";\n  margin: 0px 0px 0px 0px;\n  overflow: hidden;\n  /* @ts-ignore  */\n  width: ", ";\n   //@ts-ignore  */\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  span {\n    color: white;\n    text-transform: uppercase;\n    font: bold ", " / 30px Roboto;\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  .test-img {\n    display: none;\n  }\n"], ["\n  border-radius: 50%;\n  flex-shrink: 0;\n/* @ts-ignore  */\n  height: ", ";\n  margin: 0px 0px 0px 0px;\n  overflow: hidden;\n  /* @ts-ignore  */\n  width: ", ";\n   //@ts-ignore  */\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  span {\n    color: white;\n    text-transform: uppercase;\n    font: bold ", " / 30px Roboto;\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  .test-img {\n    display: none;\n  }\n"])), function (prop) { return prop.size + "px"; }, function (prop) { return prop.size + "px"; }, function (props) { return props.selectedColor; }, function (props) { return props.fontSize + "px"; });
var templateObject_1;

/**
 * Hace el render del Avatar o un Placeholder con las primeras 2 letras del nombre de la persona.
 */
var Avatar = function (props) {
    var _a = useState('#0076ba'), selectedColor = _a[0], setColor = _a[1];
    var _b = useState(false), validUrl = _b[0], setValidUrl = _b[1];
    useEffect(function () {
        var colors = [
            '#0076ba',
            '#229f9c',
            '#2cb26b',
            '#30baed',
            '#95569e',
            '#9bc03a',
            '#d84315',
            '#f5a623',
            '#f6712f',
            '#ff6363',
        ];
        var colorPosition = 0;
        if (props.userId >= 0) {
            var numbers = props.userId.toString().split('');
            colorPosition = parseInt(numbers[numbers.length - 1], 10);
        }
        else {
            colorPosition = Math.floor(Math.random() * colors.length);
        }
        setColor(colors[colorPosition]);
    }, [props.userId]);
    var splitLetterFromName = function (input) {
        return input
            .split(' ')
            .map(function (string) { return string[0]; })
            .slice(0, 2)
            .join('');
    };
    var ImgElement = function (_a) {
        var url = _a.url, fn = _a.fn, alt = _a.alt;
        return (React__default.createElement("img", { className: validUrl ? ' ' : 'test-img', alt: alt, src: url, onLoad: function () { return fn(true); }, onError: function () { return fn(false); } }));
    };
    if (props.picture) {
        if (!validUrl) {
            return (React__default.createElement(Wrapper, { fontSize: props.fontSize, size: props.size, selectedColor: selectedColor, className: "RoundedImage" },
                React__default.createElement("span", null, splitLetterFromName(props.fullName)),
                React__default.createElement(ImgElement, { url: props.picture, alt: props.fullName, fn: function (status) {
                        setValidUrl(status);
                    } })));
        }
        return (React__default.createElement(Wrapper, { fontSize: props.fontSize, size: props.size, selectedColor: selectedColor, className: "RoundedImage" },
            React__default.createElement("img", { src: props.picture, alt: props.alt })));
    }
    return (React__default.createElement(Wrapper, { fontSize: props.fontSize, size: props.size, selectedColor: selectedColor, className: "PlaceholderName flex-center" },
        React__default.createElement("span", null, splitLetterFromName(props.fullName))));
};
Avatar.defaultProps = {
    alt: 'Rounded Image',
    image: '',
    size: 50,
};

/**
 * @typedef {Object} Vars
 * @property {Object} setColors - Cambiar color
 */
var UIVars = {
    // Border
    borderRadius: '10px',
    /**
     * Colores
     */
    setColors: {
        none: '',
        primary: '#0189ff',
        info: '#e0eefa',
        default: '#c9c9d3',
        success: '#e9f6ec',
        warning: '#fdeed6',
        danger: '#f9dfdf',
        active: '#adadbd',
        text: '#9a9aa4',
        icons: '#b0cfe0',
        completed: '#60798e',
        buttons: {
            success: '#2cb26b'
        },
        /**
         * Transforma un hexadecimal a
         * ```css
         *  rgba(255,255,255,0.3)
         * ```
         */
        hexToRgbA: function (hex, opacity) { return hexToRgbA(hex, opacity); },
        black: '#2f2f2f',
        brownishGrey: '#5c5c5c',
        blackTwo: '#333333',
        blackThree: '#2f2f2f',
        brownGrey: '#797979',
        brownThree: '#808080',
        veryLightPink: '#c6c6c6',
        brownGreyTwo: '#999999',
        veryLightPinkTwo: '#e8e8e8',
        veryLightPinkThree: '#f9dfdf',
        deepSeaBlue: '#005580',
        deepSkyBlue: '#0189ff',
        backgroundGrey: '#e6e6e6',
        white: '#f4f4f4',
        whiteTwo: '#f8f8f8',
        whiteThree: '#ffffff',
        whiteFour: '#e8e8e8',
        red: '#cc0000',
        jadeGreen: '#28a745',
        orangeyYellow: '#f5a623',
        veryLightBlue: '#e0eefa',
        ice: '#e9f6ec',
        activeBlue: '#2488F7',
        inactiveBlue: '#B0CFE0',
        checkGreen: '#28A745',
        checkError: '#C00',
        lightMint: '#c3e7cb',
        paleSalmon: '#f0b5b5'
    },
    inputOptionFontSize: '1rem',
    inputOptionFontSizeSm: '0.7143rem',
    inputOptionSize: '1.7143rem',
    inputOptionSizeSm: '1.2143rem',
    fontSize: 16,
    fontSizeMobile: 14,
    hSize: {
        normal: {
            h1: 40,
            h2: 36,
            h3: 32,
            h4: 28,
            h5: 24,
            h6: 20
        },
        mobile: {
            h1: 36,
            h2: 32,
            h3: 28,
            h4: 24,
            h5: 20,
            h6: 18
        }
    },
    pSize: {
        big: 18,
        medium: 16,
        small: 14,
        tiny: 12
    },
    articleH: {
        normal: {
            // h1: 0,
            h2: 36,
            h3: 36,
            h4: 32,
            h5: 26,
            h6: 20
        },
        mobile: {
            // h1: 0,
            h2: 28,
            h3: 28,
            h4: 26,
            h5: 23
            // h6: 0,
        }
    },
    alertFontSize: {
        big: 24,
        tiny: 14
    }
};
/**
 * Pasa un color hexadecimal a rgba()
 *
 * @param {string} hex - color en hexadecimal
 * @param {number} opacity - opacidad
 * @example
 * ```js
 *   const color = hexToRgbA('FFAACC', 0,2)
 * ```
 * @returns {string} Color en `rgba(255, 0, 0, 0.2)`
 */
var hexToRgbA = function (hex, opacity) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return ('rgba(' +
            [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
            ',' +
            opacity +
            ')');
    }
};

var Wrapper$1 = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  height: 97px;\n  select {\n    width: 400px;\n    height: 44px;\n  }\n\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border: solid 2px ", ";\n    outline: 0;\n    box-shadow: none;\n  }\n\n  .form-control:disabled {\n    color: ", ";\n  }\n\n  select.form-control {\n    font-family: 'Roboto', sans-serif;\n    background-repeat: no-repeat;\n    background-position: 370px;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    position: relative;\n    overflow: hidden;\n    color: ", ";\n    :before {\n      -webkit-transform: rotate(deg);\n      transform: rotate(90deg);\n    }\n  }\n  .valid_feedback {\n    color: ", ";\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n    font-size: 12px;\n  }\n\n  .invalid_feedback {\n    color: ", ";\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n    font-size: 12px;\n  }\n\n  .borderGreen {\n    border: solid 2px ", ";\n  }\n  .borderGreen:focus {\n    border: solid 2px ", ";\n  }\n  .borderRed {\n    border: solid 2px ", ";\n  }\n  .borderRed:focus {\n    border: solid 2px ", ";\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  label {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .gray {\n    color: ", ";\n  }\n"], ["\n  height: 97px;\n  select {\n    width: 400px;\n    height: 44px;\n  }\n\n  .form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border: solid 2px ", ";\n    outline: 0;\n    box-shadow: none;\n  }\n\n  .form-control:disabled {\n    color: ", ";\n  }\n\n  select.form-control {\n    font-family: 'Roboto', sans-serif;\n    background-repeat: no-repeat;\n    background-position: 370px;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    position: relative;\n    overflow: hidden;\n    color: ", ";\n    :before {\n      -webkit-transform: rotate(deg);\n      transform: rotate(90deg);\n    }\n  }\n  .valid_feedback {\n    color: ", ";\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n    font-size: 12px;\n  }\n\n  .invalid_feedback {\n    color: ", ";\n    display: flex;\n    margin-top: 4px;\n    align-items: center;\n    font-size: 12px;\n  }\n\n  .borderGreen {\n    border: solid 2px ", ";\n  }\n  .borderGreen:focus {\n    border: solid 2px ", ";\n  }\n  .borderRed {\n    border: solid 2px ", ";\n  }\n  .borderRed:focus {\n    border: solid 2px ", ";\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  label {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .gray {\n    color: ", ";\n  }\n"])), UIVars.setColors.deepSkyBlue, UIVars.setColors.veryLightPink, UIVars.setColors.black, UIVars.setColors.jadeGreen, UIVars.setColors.red, UIVars.setColors.jadeGreen, UIVars.setColors.jadeGreen, UIVars.setColors.red, UIVars.setColors.red, UIVars.setColors.brownGreyTwo, UIVars.setColors.brownGreyTwo);
var templateObject_1$1;

var getViewBox = function (viewBox, width, height) {
    if (viewBox) {
        return "0 0 " + viewBox + " " + viewBox;
    }
    return "0 0 " + width + " " + (height || width);
};
var getPath = function (name, props) {
    switch (name) {
        case 'bell':
            return (createElement("path", __assign({}, props, { d: "M11.826 6.957V4.87A4.84 4.84 0 0 0 6.956 0a4.84 4.84 0 0 0-4.869 4.87v2.087C2.087 9.252 0 9.809 0 11.13c0 1.183 2.713 2.087 6.957 2.087 4.243 0 6.956-.904 6.956-2.087 0-1.321-2.087-1.878-2.087-4.173zm-4.869 7.652c-.905 0-1.67-.07-2.435-.14C5.009 15.375 5.913 16 6.957 16 8 16 8.974 15.374 9.39 14.47c-.765.07-1.53.139-2.434.139z" })));
        case 'comment':
            return (createElement("path", __assign({}, props, { d: "M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7c.4 0 .8 0 1.1-.1L14 16v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7z" })));
        case 'flag':
            return (createElement("path", __assign({}, props, { fillRule: "evenodd", d: "M12 6l2-5H2c0-.6-.4-1-1-1S0 .4 0 1v14c0 .6.4 1 1 1s1-.4 1-1v-4h12l-2-5z" })));
        case 'circle-check':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M8 .5c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.9L3.6 8.5 5 7.1l2 2 4-4 1.4 1.4L7 11.9z" })));
        case 'belongs':
            return (createElement("path", __assign({}, props, { fillRule: "evenodd", d: "M11 0H8v7L5.5 5 3 7V0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h10c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z" })));
        case 'certificate':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("path", { d: "M7 4h2v2H7z" }),
                createElement("path", { d: "M15 8h-2V4.618l.553.277a1 1 0 1 0 .894-1.79l-6-3a1 1 0 0 0-.894 0l-6 3a1 1 0 0 0 .894 1.79L3 4.618V8H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6v-4h2v4h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM5 13H3v-3h2v3zm0-5V4a.98.98 0 0 0-.07-.347L8 2.118l3.07 1.535A.98.98 0 0 0 11 4v4H5zm8 5h-2v-3h2v3z" })));
        case 'alert':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M8 .278c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7v-5h2v5z" })));
        case 'calendar':
            return (createElement("g", __assign({}, props, { fillRule: "evenodd" }),
                createElement("path", { fillRule: "nonzero", d: "M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 12H2V5h12v9z" }),
                createElement("path", { d: "M4 7h2v2H4zM7 7h2v2H7zM4 10h2v2H4zM7 10h2v2H7zM10 7h2v2h-2zM10 10h2v2h-2z" })));
        case 'calendar-time':
            return (createElement("g", __assign({}, props, { fillRule: "evenodd" }),
                createElement("path", { fillRule: "nonzero", d: "M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 12H2V5h12v9z" }),
                createElement("path", { d: "M11 11H7V7h2v2h2z" })));
        case 'information-welcome':
            return (createElement("g", { fill: "none", fillRule: "evenodd" },
                createElement("g", { transform: "translate(1 1)" },
                    createElement("circle", __assign({ cx: 13, cy: 13, r: 13 }, props)),
                    createElement("path", { fill: "#FFF", d: "M10 10.75h4.314v7.07h1.336v2.541H10V17.82h1.447v-4.527H10V10.75zm1.299-3.099c0-.228.042-.443.125-.644a1.602 1.602 0 0 1 .872-.877c.201-.087.42-.13.654-.13.223 0 .433.043.631.13a1.664 1.664 0 0 1 1.002 1.521 1.664 1.664 0 0 1-1.002 1.521c-.198.087-.408.13-.63.13a1.635 1.635 0 0 1-1.179-.482 1.602 1.602 0 0 1-.348-.524 1.664 1.664 0 0 1-.125-.645z" })),
                createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M14 28C6.268 28 0 21.732 0 14S6.268 0 14 0s14 6.268 14 14-6.268 14-14 14zm0-2c6.627 0 12-5.373 12-12S20.627 2 14 2 2 7.373 2 14s5.373 12 12 12z" }))));
        case 'information-gmt':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm2.658 18.284c-.661.26-2.952 1.354-4.272.191a1.676 1.676 0 0 1-.59-1.318c0-.998.328-1.868.919-3.957.104-.395.231-.907.231-1.313 0-.701-.266-.887-.987-.887-.352 0-.742.125-1.095.257l.195-.799c.787-.32 1.775-.71 2.621-.71 1.269 0 2.203.633 2.203 1.837 0 .347-.06.955-.186 1.375l-.73 2.582c-.151.522-.424 1.673-.001 2.014.416.337 1.401.158 1.887-.071l-.195.799zM13.452 8a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 13.452 8z" })));
        case 'letter':
            return (createElement("g", __assign({}, props, { fillRule: "evenodd" }),
                createElement("path", { d: "M15 2H1c-.6 0-1 .4-1 1v1.4l8 4.5 8-4.4V3c0-.6-.4-1-1-1z" }),
                createElement("path", { d: "M7.5 10.9L0 6.7V15c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V6.7l-7.5 4.2c-.28.14-.72.14-1 0z" })));
        case 'phone':
            return (createElement("path", __assign({}, props, { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 10l-2 2-6-6 2-2-3-3-2 2c0 6.627 5.373 12 12 12l2-2-3-3z" })));
        case 'arrow':
            return (createElement("path", __assign({}, props, { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 4l4.5 4.5L6 13" })));
        case 'arrow-back':
            return (createElement("path", __assign({}, props, { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.5 12L5 7.5 9.5 3" })));
        case 'arrow-big':
            return (createElement("path", __assign({}, props, { fillRule: "evenodd", d: "M8.106 12.235a.934.934 0 0 1-.611-.227L.212 5.75l1.222-1.43 6.672 5.735 6.672-5.735L16 5.75l-7.283 6.258a.934.934 0 0 1-.611.227z" })));
        case 'arrow-down':
            return (createElement("path", __assign({}, props, { fillRule: "evenodd", d: "M8 11.4L2.6 6 4 4.6l4 4 4-4L13.4 6z" })));
        case 'close':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M10.678.334a1.099 1.099 0 0 0-1.553 0L5.507 3.952 1.889.334A1.099 1.099 0 0 0 .335 1.887l3.618 3.618L.335 9.123a1.099 1.099 0 1 0 1.554 1.554l3.618-3.618 3.618 3.618a1.099 1.099 0 0 0 1.553-1.554L7.06 5.505l3.618-3.618a1.099 1.099 0 0 0 0-1.553z" })));
        case 'in-progress':
            return (createElement("path", __assign({}, props, { fillRule: "evenodd", d: "M5 1h6.792a1 1 0 0 1 .751 1.66L10.49 5l2.044 2.308a1 1 0 0 1-.745 1.663L5 8.993V14c0 .667-.336 1-1.008 1-.672 0-1.002-.333-.992-1V2a1 1 0 0 1 1-1h1z" })));
        case 'opened':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M10.005 7V4.1c0-.71-.581-1.35-1.605-1.35S7.005 3.29 7.005 4c0 .67-.333 1.005-.998 1.005-.666 0-1-.335-1-1.004C5.007 2.253 6.442 1 8.4 1 10.358 1 12 2.353 12 4.1V7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.005z" })));
        case 'blocked':
        case 'blocked pending':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M6 7h4.018V4.1c0-.71-.555-1.35-2.018-1.35-1.463 0-2 .64-2 1.35V7zm6.02 0A1 1 0 0 1 13 8v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 .992-1V4.1C3.992 2.354 6.042 1 8 1c1.958 0 4.02 1.353 4.02 3.1V7z" })));
        case 'blocked isTest':
            return (createElement("g", __assign({}, props),
                createElement("path", { fillRule: "nonzero", d: "M3.5 7h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" }),
                createElement("path", { d: "M2.5 4h11v2h-11z" }),
                createElement("path", { d: "M5.5 2a1 1 0 0 1 1 1v2h-2V3a1 1 0 0 1 1-1zM10.5 2a1 1 0 0 1 1 1v2h-2V3a1 1 0 0 1 1-1z" })));
        case 'completed':
        case 'done':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M13.173 3.325L6.34 10.327 3.852 7.775a1.067 1.067 0 0 0-1.522.014 1.133 1.133 0 0 0-.013 1.56l3.257 3.338a1.067 1.067 0 0 0 1.535 0l7.599-7.79a1.133 1.133 0 0 0-.014-1.559 1.067 1.067 0 0 0-1.521-.013z" })));
        case 'timelineArrow':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M.47 8.341c0-.218.076-.434.227-.611L6.957.447l1.429 1.222L2.65 8.341l5.735 6.672-1.43 1.222L.697 8.952a.934.934 0 0 1-.226-.61z" })));
        case 'map-indicator':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M7 0C3.1 0 0 3.1 0 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" })));
        case 'goback-courses':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M5.926 0L0 6l5.926 6L8 9.9 4.148 6 8 2.1z" })));
        case 'show-welcome':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z" })));
        case 'play-video':
            return (createElement("g", { fill: "none", fillRule: "evenodd" },
                createElement("circle", { cx: "11", cy: "11", r: "10", stroke: props.stroke, strokeWidth: "2" }),
                createElement("path", { fill: props.fill, d: "M9 15V7l6 4z" })));
        case 'download':
            return (createElement("g", __assign({}, props, { fillRule: "evenodd" }),
                createElement("path", { d: "M7 12c.3 0 .5-.1.7-.3L13.4 6 12 4.6l-4 4V0H6v8.6l-4-4L.6 6l5.7 5.7c.2.2.4.3.7.3zM0 14h14v2H0z" })));
        case 'clock':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H7V4h2v3h3v2z" })));
        case 'close-modal':
            return (createElement("path", __assign({}, props, { fillRule: "evenodd", d: "M19 .171l-8 8-8-8L.171 3l8 8-8 8L3 21.829l8-8 8 8L21.829 19l-8-8 8-8z" })));
        case 'audio':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M8 0C3.589 0 0 3.589 0 8v5c0 1.654 1.346 3 3 3h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H2V8c0-3.309 2.691-6 6-6s6 2.691 6 6v1h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1c1.654 0 3-1.346 3-3V8c0-4.411-3.589-8-8-8z" })));
        case 'video':
            return (createElement("path", __assign({}, props, { fillRule: "nonzero", d: "M15 0H1C.4 0 0 .4 0 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-4.4 8.8l-4 3c-.6.5-1.6 0-1.6-.8V5a1 1 0 0 1 1.6-.8l4 3c.5.4.5 1.2 0 1.6z" })));
        case 'reading':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("path", { d: "M5 6H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1zM8 0h8v2H8zM8 4h8v2H8zM0 8h16v2H0zM0 12h16v2H0z" })));
        case 'multimedia':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("circle", { cx: "3", cy: "3", r: "3" }),
                createElement("circle", { cx: "11", cy: "3", r: "3" }),
                createElement("circle", { cx: "3", cy: "11", r: "3" }),
                createElement("circle", { cx: "11", cy: "11", r: "3" })));
        case 'edit':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("path", { d: "M0 14h16v2H0zM11.7 3.3c.4-.4.4-1 0-1.4L10.1.3c-.4-.4-1-.4-1.4 0L0 9v3h3l8.7-8.7z" })));
        case 'circularCheck':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("rect", { width: "17", height: "17", fill: UIVars.setColors.checkGreen, rx: "8.5" }),
                createElement("path", { fill: "#FFF", fillRule: "nonzero", d: "M7.125 10.531l5.385-5.385 1.097 1.097-6.364 6.364L3 8.364l.98-.98z" })));
        case 'circularError':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("rect", { width: "17", height: "17", fill: UIVars.setColors.checkError, rx: "8.5" }),
                createElement("g", { stroke: "#FFF", strokeLinecap: "square", strokeWidth: "1.5" },
                    createElement("path", { d: "M5.474 5.555l6.24 5.941M5.34 11.544l6.035-6.153" }))));
        case 'academic_historial':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("path", { d: "M0 0h4v4H0zM6 0h4v4H6zM12 0h4v4h-4zM0 6h4v4H0zM6 6h4v4H6zM12 6h4v4h-4zM0 12h4v4H0zM6 12h4v4H6zM12 12h4v4h-4z" })));
        case 'menuListItems':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("path", { d: "M6 1h10v2H6zM6 7h10v2H6zM6 13h10v2H6zM3 0H1C.4 0 0 .4 0 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM3 6H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zM3 12H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z" })));
        case 'arrow-top-right':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("path", { d: "M6.793 2.793L.586 9 2 10.414l6.207-6.207L11 7V0H4z" })));
        case 'bullet-list':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("path", { d: "M6 1h10v2H6zM6 7h10v2H6zM6 13h10v2H6zM3 0H1C.4 0 0 .4 0 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM3 6H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zM3 12H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1z" })));
        case 'window-paragraph':
            return (createElement("g", __assign({}, props, { fillRule: "nonzero" }),
                createElement("path", { d: "M5 6H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1zM8 0h8v2H8zM8 4h8v2H8zM0 8h16v2H0zM0 12h16v2H0z" }),
                ' ',
                "/>"));
        default:
            return createElement("path", null);
    }
};
getPath.propTypes = {
    fill: PropTypes.string,
    stroke: PropTypes.string
};
// @Component
/**
 * Este componente se encarga de dibujar todos los íconos svg pequeños de la app.
Los íconos más elaborados, tienen un archivo exclusivo para cada uno, por ejemplo
los de Ranking.
 *
 * @example
 */
var Icon = function (props) {
    var height = props.height, onClick = props.onClick, viewBox = props.viewBox, testid = props.testid;
    var name = '';
    var style = {};
    var fill = 'none';
    var stroke = '';
    var className = '';
    var width = 16;
    return (createElement(StyledSVG, { "data-testid": testid, onClick: onClick, width: width, style: style, height: height, viewBox: getViewBox(viewBox, width, height), className: className, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, getPath(name, { fill: fill, stroke: stroke })));
};
// @Export Styled Component
var StyledSVG = styled.svg(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  flex-shrink: 0;\n  margin-right: ", ";\n  height: ", ";\n  width: ", ";\n"], ["\n  flex-shrink: 0;\n  margin-right: ",
    ";\n  height: ", ";\n  width: ", ";\n"
    // @PropTypes
])), function (_a) {
    var className = _a.className;
    return className && className.split(' ').includes('arrow-icon') ? 0 : '10px';
}, function (_a) {
    var height = _a.height, width = _a.width;
    return (height ? height + "px" : width + "px");
}, function (_a) {
    var width = _a.width;
    return (width ? width + "px" : '16px');
});
// @PropTypes
Icon.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.object,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    viewBox: PropTypes.number,
    onClick: PropTypes.func,
    testid: PropTypes.string
};
var templateObject_1$2;

var InputSelect = function (props) {
    var disabled = props.disabled, label = props.label, placeholder = props.placeholder, data = props.data;
    var _a = useState(), icon = _a[0], setIcon = _a[1];
    var _b = useState(false), borderValid = _b[0], setBorderValid = _b[1];
    var _c = useState(false), borderInvalid = _c[0], setBorderInvalid = _c[1];
    var timer;
    var interval = 1000;
    var validateSelect = function (value) {
        if (value === 'Selecciona') {
            clearTimeout(timer);
            timer = setTimeout(function () {
                setIcon(React__default.createElement("div", { className: "invalid_feedback" },
                    React__default.createElement(Icon, { width: 17, fill: "#ffff", name: "circularError" }),
                    "Seleccione una opci\u00F3n v\u00E1lida"));
                setBorderValid(false);
                setBorderInvalid(true);
            }, interval);
        }
        else {
            timer = setTimeout(function () {
                setIcon(React__default.createElement("div", { className: "valid_feedback" },
                    React__default.createElement(Icon, { width: 17, fill: "#ffff", name: "circularCheck" }),
                    "Correcto"));
                setBorderInvalid(false);
                setBorderValid(true);
            }, interval);
        }
    };
    return (React__default.createElement(Wrapper$1, null,
        React__default.createElement(Label, { for: "exampleSelect", className: classNames(disabled ? 'gray' : '') }, label),
        React__default.createElement(Input, { onChange: function (e) {
                validateSelect(e.target.value);
            }, className: classNames({
                borderRed: borderInvalid,
                borderGreen: borderValid
            }), type: "select", name: "select", id: "exampleSelect", disabled: disabled || false },
            React__default.createElement("option", { value: "Selecciona" }, placeholder),
            data
                ? data.map(function (region, key) {
                    return (React__default.createElement("option", { value: region.region, key: key }, region.region));
                })
                : null),
        icon));
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
    placeholder: 'Placeholder',
    label: 'Etiqueta'
};

export { Avatar, InputSelect };
