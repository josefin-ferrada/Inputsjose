import styled from 'styled-components'
import { IWrapper } from './types'

const Wrapper = styled.figure`
  border-radius: 50%;
  flex-shrink: 0;
/* @ts-ignore  */
  height: ${(prop: IWrapper) => `${prop.size}px`};
  margin: 0px 0px 0px 0px;
  overflow: hidden;
  /* @ts-ignore  */
  width: ${(prop: IWrapper) => `${prop.size}px`};
   //@ts-ignore  */
  background-color: ${(props: IWrapper) => props.selectedColor};
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: white;
    text-transform: uppercase;
    font: bold ${(props: IWrapper) => `${props.fontSize}px`} / 30px Roboto;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  .test-img {
    display: none;
  }
`

export { Wrapper }
