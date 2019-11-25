/* eslint-disable */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
        return (React.createElement("img", { className: validUrl ? ' ' : 'test-img', alt: alt, src: url, onLoad: function () { return fn(true); }, onError: function () { return fn(false); } }));
    };
    if (props.picture) {
        if (!validUrl) {
            return (React.createElement(Wrapper, { fontSize: props.fontSize, size: props.size, selectedColor: selectedColor, className: "RoundedImage" },
                React.createElement("span", null, splitLetterFromName(props.fullName)),
                React.createElement(ImgElement, { url: props.picture, alt: props.fullName, fn: function (status) {
                        setValidUrl(status);
                    } })));
        }
        return (React.createElement(Wrapper, { fontSize: props.fontSize, size: props.size, selectedColor: selectedColor, className: "RoundedImage" },
            React.createElement("img", { src: props.picture, alt: props.alt })));
    }
    return (React.createElement(Wrapper, { fontSize: props.fontSize, size: props.size, selectedColor: selectedColor, className: "PlaceholderName flex-center" },
        React.createElement("span", null, splitLetterFromName(props.fullName))));
};
Avatar.defaultProps = {
    alt: 'Rounded Image',
    image: '',
    size: 50,
};

export { Avatar };
