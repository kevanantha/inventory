import { change as _change } from 'redux-form';
import { initialize } from 'redux-form';

export const change = (form, field, value) => {
  return _change(form, field, value)
}

export const loadItemForForm = (form, values) => {
  return initialize(form, values)
}
