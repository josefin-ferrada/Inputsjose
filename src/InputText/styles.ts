import styled from 'styled-components'
import variables from '../variables'

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  height: 120px;
  label {
    font-size: 14px;
    font-weight: bold;
  }
  input {
    height: 50px;
    width: -webkit-fill-available;
    &[disabled] {
      cursor: no-drop;
    }
    ::placeholder {
      font-style: normal;
      font-size: 1rem;
      color: ${variables.setColors.brownGreyTwo}
    }
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border: solid 2px ${variables.setColors.deepSkyBlue};
    outline: 0;
    color: ${variables.setColors.black};
    box-shadow: none;
  }
  .valid_feedback {
    color: ${variables.setColors.jadeGreen};
    display: flex;
    margin-top: 4px;
    align-items: center;
    font-size: 12px;
    svg{
      margin-right: 10px;
    }
  }
  .invalid_feedback {
    color: ${variables.setColors.red};
    display: flex;
    margin-top: 4px;
    align-items: center;
    font-size: 12px;
    svg{
      margin-right: 10px;
    }
  }
  .borderGreen {
    border: solid 2px ${variables.setColors.jadeGreen};
  }
  .borderGreen:focus {
    border: solid 2px ${variables.setColors.jadeGreen};
  }
  .borderRed {
    border: solid 2px ${variables.setColors.red};
  }
  .borderRed:focus {
    border: solid 2px ${variables.setColors.red};
  }
  .gray {
    color: ${variables.setColors.brownGreyTwo};
  }
`

export { Wrapper }