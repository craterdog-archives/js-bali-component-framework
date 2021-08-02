grammar Document;
import Statements;

// A Bali Document Notation™ (BDN) source string must contain only a single component.
source: component EOF;

// The last line of a Bali Document Notation™ text document must be terminated with an EOL to be
// stored in a POSIX file system.
document: component EOL EOF;

