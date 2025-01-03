import FormWrapper from "./FormWrapper"

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;

};

type AddressFormProps = AddressData & {
  updateFeilds: (feilds: Partial<AddressData>) => void;
};

function AddressForm({ street, city, state, zip, updateFeilds }: AddressFormProps) {
  return (
    <FormWrapper title="Address details">
        <label>Street</label>
        <input autoFocus required type="text" value={street}
        onChange={(e) => updateFeilds({ street: e.target.value })}
       />
        <label>City</label>
        <input required type="text" value={city}
        onChange={(e) => updateFeilds({ city: e.target.value })}
       />
        <label>State</label>
        <input required type="text" value={state}
        onChange={(e) => updateFeilds({ state: e.target.value })}
       />
        <label>Zip Code</label>
        <input required type="text" value={zip}
        onChange={(e) => updateFeilds({zip: e.target.value })}
      />
    </FormWrapper>
  )
}

export default AddressForm
