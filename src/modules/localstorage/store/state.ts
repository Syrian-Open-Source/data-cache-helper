import { IMemo } from '../../../interfaces';
import { isClientSide } from '../../helpers';
import { ObjectConverterService } from '../../object';
import { STATE_KEY } from './types';

export const _STATE_ = () => {
  let state = {} as IMemo;
  if (isClientSide()) {
    state = ObjectConverterService.toObject(localStorage.getItem(STATE_KEY)!) as IMemo;
  }
  return state || {};
};
