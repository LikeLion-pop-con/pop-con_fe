import React, { Component } from "react";
import styled from "styled-components";
import Typo from "../../assets/Typo";
const Container = styled.div`
  background-color: transparent;
  border-radius: 10px;
`;

const Form = styled.form``;
const FormCheck = styled.div``;
const Input = styled.input`
  margin-left:20px`;
const FormGroup = styled.div``;
const Btn = styled.button`
  width: 100px;
  height: 30px;
  font-size: 15px;
  text-align: center;
  border-radius: 20px;
  border: none;
  margin-top: 5px;
  background-color:#D9D9D9;
  color: #333;
  :hover {
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`;

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      satisfaction: false,
      average: false,
      unsatisfactory: false,
      trigger: false,
    };
    this.triggetNext = this.triggetNext.bind(this);
  }
  onChange = (checkedState) => (event) => {
    this.setState((initialState) => ({
      [checkedState]: !this.state[checkedState],
    }));
  };
  onSubmit = async (e) => {
    e.preventDefault();
    let checkArray = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        checkArray.push(key);
      }
    }
    let checkData = {
      checkbox: checkArray.toString(),
    };

    console.log(checkData);
    this.triggetNext();
  };
  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormCheck>
            <Input type="checkbox" onChange={this.onChange("satisfaction")} />
            만족
          </FormCheck>

          <FormCheck>
            <Input type="checkbox" onChange={this.onChange("average")} />
            보통
          </FormCheck>

          <FormCheck>
            <Input type="checkbox" onChange={this.onChange("unsatisfactory")} />
            불만족
          </FormCheck>

          <FormGroup>
          <Typo size="1rem" weight="500">
            <Btn>제출</Btn>
          </Typo>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
