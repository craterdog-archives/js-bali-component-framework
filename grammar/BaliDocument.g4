grammar BaliDocument;

import BaliComponents;


document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF;

content: component | procedure;

seal: reference binary;

