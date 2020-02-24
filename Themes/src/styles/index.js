import {ThemesEvents} from '../events/index';

const Light = {
  background_color: 'white',
  text_color: 'black',
  name: 'nocturno',
  separator_line_color: 'grey',
  switch_to: ThemesEvents.to_dark,
};

const Dark = {
  background_color: 'black',
  text_color: 'white',
  name: 'diurno',
  separator_line_color: 'white',
  switch_to: ThemesEvents.to_light,
};

export {Light, Dark};
