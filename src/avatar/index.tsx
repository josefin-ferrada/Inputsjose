import React, { useState, useEffect } from 'react';
import { PropAvatar } from './types';
import { Wrapper } from './Styled';

type ImgElementProps = {
  url: string;
  fn: Function;
  alt: string;
};

/**
 * Hace el render del Avatar o un Placeholder con las primeras 2 letras del nombre de la persona.
 */
export const Avatar = (props: PropAvatar) => {
  const [selectedColor, setColor] = useState('#0076ba');
  const [validUrl, setValidUrl] = useState(false);
  useEffect(() => {
    const colors = [
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

    let colorPosition = 0;

    if (props.userId >= 0) {
      const numbers = props.userId.toString().split('');
      colorPosition = parseInt(numbers[numbers.length - 1], 10);
    } else {
      colorPosition = Math.floor(Math.random() * colors.length);
    }

    setColor(colors[colorPosition]);
  }, [props.userId]);

  const splitLetterFromName = (input: string) =>
    input
      .split(' ')
      .map(string => string[0])
      .slice(0, 2)
      .join('');

  const ImgElement = ({ url, fn, alt }: ImgElementProps) => {
    return (
      <img
        className={validUrl ? ' ' : 'test-img'}
        alt={alt}
        src={url}
        onLoad={() => fn(true)}
        onError={() => fn(false)}
      />
    );
  };

  if (props.picture) {
    if (!validUrl) {
      return (
        <Wrapper
          fontSize={props.fontSize}
          size={props.size}
          selectedColor={selectedColor}
          className="RoundedImage"
        >
          <span>{splitLetterFromName(props.fullName)}</span>
          <ImgElement
            url={props.picture}
            alt={props.fullName}
            fn={(status: any) => {
              setValidUrl(status);
            }}
          />
        </Wrapper>
      );
    }
    return (
      <Wrapper
        fontSize={props.fontSize}
        size={props.size}
        selectedColor={selectedColor}
        className="RoundedImage"
      >
        <img src={props.picture} alt={props.alt} />
      </Wrapper>
    );
  }
  return (
    <Wrapper
      fontSize={props.fontSize}
      size={props.size}
      selectedColor={selectedColor}
      className="PlaceholderName flex-center"
    >
      <span>{splitLetterFromName(props.fullName)}</span>
    </Wrapper>
  );
};

Avatar.defaultProps = {
  alt: 'Rounded Image',
  image: '',
  size: 50,
};
