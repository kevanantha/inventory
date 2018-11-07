import React from 'react';
import { Field } from 'redux-form';

const TagsFieldArray = (props) => {
  const { fields } = props;

  if (!fields.length) {
    fields.push();
  }

  return (
    <div className='form-group col-md-3' style={{marginBottom: 10}}>
      <label htmlFor="tags">Tags</label>
      {fields.map((field, index) => {
        return (
          <div key={index} style={{marginBottom: 10}}>
            <div className="input-group mb-3">
              <Field name={field} placeholder='Tag(s)' component='input' className='form-control' type='text' />
              <div className="input-group-append">
                <span className="input-group-text">
                  <button type="button" onClick={() => fields.remove(index)} className="close input-group-text" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
          //<button type='button' onClick={() => fields.remove(index)}>x</button>
        )
      })}
      <button style={{marginTop: 10}} className='btn btn-info btn-sm' type='button' onClick={() => fields.push()}>Add More Tags</button>
    </div>
  )
}

export default TagsFieldArray;
