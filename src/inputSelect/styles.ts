import styled from 'styled-components'
import variables from '../variables'

const Wrapper = styled.div`
  height: 120px;
  select {
    width: -webkit-fill-available;
    height: 50px;
  }

  .form-control:focus {
    background-color: #fff;
    border: solid 2px ${variables.setColors.deepSkyBlue};
    outline: 0;
    box-shadow: none;
  }

  .form-control:disabled {
    color: ${variables.setColors.veryLightPink};
  }

  select.form-control {
    background-image: url('https://svgshare.com/i/GaH.svg');
    font-family: 'Roboto', sans-serif;
    background-repeat: no-repeat;
    background-position: right;
    background-origin: content-box;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    overflow: hidden;
    :before {
      -webkit-transform: rotate(deg);
      transform: rotate(90deg);
    }
  }
  .valid_feedback {
    color: ${variables.setColors.jadeGreen};
    display: flex;
    margin-top: 4px;
    align-items: center;
    font-size: 12px;
    svg {
      margin-right: 10px
    }
  }

  .invalid_feedback {
    color: ${variables.setColors.red};
    display: flex;
    margin-top: 4px;
    align-items: center;
    font-size: 12px;
    svg {
      margin-right: 10px
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

  ::placeholder {
    color: ${variables.setColors.brownGreyTwo};
  }

  label {
    font-size: 14px;
    font-weight: bold;
  }
  .gray {
    color: ${variables.setColors.brownGreyTwo};
  }
`

export { Wrapper }
