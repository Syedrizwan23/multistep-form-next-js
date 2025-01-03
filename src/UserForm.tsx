import FormWrapper from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: number;
};

type UserFormProps = UserData & {
  updateFeilds: (feilds: Partial<UserData>) => void;
};

function UserForm({ firstName, lastName, age, updateFeilds }: UserFormProps) {
  return (
    <FormWrapper title="User details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFeilds({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFeilds({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        min={1}
        required
        type="number"
        value={age}
        onChange={(e) => updateFeilds({ age: Number(e.target.value) })}
      />
    </FormWrapper>
  );
}

export default UserForm;
