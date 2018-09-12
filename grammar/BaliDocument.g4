grammar BaliDocument;

import BaliComponents;


document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF;

// AMBIGUITY: A procedure can be as simple as an evaluate clause with no
// recipient which could be a single component. So a component takes
// precedence over a procedure.
content: component | procedure;

seal: reference binary;

