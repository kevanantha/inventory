import React from 'react';
import { Field } from 'redux-form';

const TagsFieldArray = (props) => {
  const { fields } = props;

  if (!fields.length) {
    fields.push();
  }

  return (
    <div className='form-group col-md-6' style={{marginBottom: 10}}>
      <label htmlFor="tags">Tags</label>
      {fields.map((field, index) => {
        return (
          <div key={index} style={{marginBottom: 10}}>
            <Field name={field} placeholder='Tag(s)' component='input' type='text' />
          </div>
        )
      })}
      <button style={{marginTop: 10}} className='btn btn-info btn-sm' type='button' onClick={() => fields.push()}>Add More Tags</button>
    </div>
  )
}

export default TagsFieldArray;
