import React from "react"
import "./Main.css"
import Inputter from "./Inputter"

function Password() {
  return (
    <div className='main'>
      <h1>결제 비밀번호</h1>
      <br/>
      <p>비밀번호를 입력해주세요</p>
      <br/>
      <Inputter></Inputter>
    </div>
  )
}

export default Password