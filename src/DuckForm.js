import React from 'react';
import {
  Form,
  Text
} from 'react-form';

const DuckForm = props => {
  const { handleSubmit, handleTextChange, handleSelects } = props;
  return (
    <Form id="duckForm">
      <label htmlFor="whenFed">What time were the ducks fed?</label>
      <Text onChange={handleTextChange('whenFed')} field="whenFed" id="whenFed" />
      <br/>
      <label htmlFor="typeFed">What food was given?</label>
      <Text onChange={handleTextChange('typeFed')} field="typeFed" id="typeFed" />
      <br/>
      <label htmlFor="whereFed">Where did you feed the ducks?</label>
      <Text onChange={handleTextChange('whereFed')} field="whereFed" id="whereFed" />
      <br/>
      <label htmlFor="numberFed">How many ducks were fed?</label>
      <Text onChange={handleTextChange('numberFed')} field="numberFed" id="numberFed" />
      <br/>
      <label htmlFor="whatFed">What type of food was given (NOTE - is this the same as #2?)?</label>
      <div onChange={handleSelects('whatFed')}>
        <input type="radio" value="Type1" name="whatFed"/> Seeds
        <input type="radio" value="Type2" name="whatFed"/> Bread
      </div>
      <br/>

      <button type="submit" onClick={handleSubmit} className="mb-4 btn btn-primary">
        Submit
      </button>
    </Form>
  )
}

export default DuckForm
