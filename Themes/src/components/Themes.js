import {DarkStyles, LightStyles} from '../styles/index';
import {ThemesEvents} from '../events/index';

const Light = {
  styles: {...LightStyles},
  name: 'nocturno',
  turn_off: ThemesEvents.to_dark,
};

const Dark = {
  styles: {...DarkStyles},
  name: 'diurno',
  turn_off: ThemesEvents.to_light,
};

export {Light, Dark};
