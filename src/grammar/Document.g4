grammar Document;
import Statements;

// The last line of a text document stored in a POSIX file system must be terminated with an EOL.
document: component EOL EOF;
