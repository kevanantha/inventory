import { change as _change, initialize } from 'redux-form';

export const change = (form, field, value) => {
  return _change(form, field, value)
}

export const init = (form, values) => {
  return initialize(form, values)
}
