import FormWrapper from "./FormWrapper"


type AccountData = {
  email: string;
  password: string;

};

type AccountFormProps = AccountData & {
  updateFeilds: (feilds: Partial<AccountData>) => void;
};

function AccountForm({ email, password, updateFeilds }: AccountFormProps) {
  return (
    <FormWrapper title="Account Information">
            <label>Email</label>
            <input required type="email" value={email} onChange={(e) => updateFeilds({ email: e.target.value })} />
            <label>Password</label>
            <input required type="password" value={password} onChange={(e) => updateFeilds({ password: e.target.value })} />
    </FormWrapper>
  )
}

export default AccountForm
