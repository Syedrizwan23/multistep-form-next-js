import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import UserForm from "./UserForm";
import { FormEvent, useState } from "react";

type FormData = {
 firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  username: string;
  

};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: 0,
  email: "",
  password: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  username: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFeilds(feilds: Partial<FormData>) {
    setData(prev => { 
      return { ...prev, ...feilds }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep,isLastStep, back, next } =
    useMultistepForm([
    <UserForm {...data} updateFeilds={updateFeilds} />, 
    <AddressForm {...data} updateFeilds={updateFeilds}  />,
     <AccountForm {...data} updateFeilds={updateFeilds} /> ]);

  function onsubmit  (e: FormEvent) {
    e.preventDefault();
   if(!isLastStep) return next();
    alert("successfull Account creation");
  }
  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(175deg, rgba(173,59,166,1) 20%, rgba(79,228,255,1) 100%)",
        padding: "2rem",
        borderRadius: ".5rem",
        border: "1px solid black",
        margin: "1rem",
        boxShadow: "0 0 10px rgba(0,0,0,.5)",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onsubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            display: "flex",
            gap: ".5rem",
            marginTop: "1rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit" >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
