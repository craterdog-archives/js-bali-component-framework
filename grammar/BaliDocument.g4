grammar BaliDocument;

import BaliComponents;


document: NEWLINE* (reference NEWLINE)? body (NEWLINE seal)* NEWLINE* EOF;

body: component | procedure;

seal: reference binary;

