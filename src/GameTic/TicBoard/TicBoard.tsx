import React from 'react';

/*
  The board
    * transform data-structure into board view
    * controls player turns
    * determines game outcome given on field events
 */

export type TicField = 'X' | 'O' | '_';
export type GameField = Array<TicField>;

