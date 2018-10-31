## Overview

### Project Description
This project contains a JavaScript based version of the _Bali Document Framework™_. Everything in the _Bali Cloud Environment™_ is a Bali Component. Components may be persisted to the cloud as notarized Bali Documents that contain a full description of the components using the _Bali Document Notation™_. This project provides all of the JavaScript modules that are required to work with Bali Components and Bali Documents.

### Bali Components
The component classes provide the foundation for all other classes in the Bali Document Framework™.

#### Framework
The following UML class diagram shows a high-level view of the base component classes.
![Bali Component Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/docs/images/Bali%20Component%20Framework.png)

The component classes are split into two types of components:
 * **Elements** - which are atomic in nature and not generally broken down into smaller pieces.
 * **Composites** - which are made up of smaller components.
 
 A Collection is a type of Composite component that contains a dynamic set of components referred to as its items. The items in a collection may be iterated over using an Iterator which is also a type of Composite component. Complex structures can be composed out of composite components. A Visitor component is another type of Composite component that is able to visit each component in a structure and perform tasks based on the type of visited component. For example, any complex component can be visited by a formatting visitor which generates the corresponding Bali Document Notation™ text string for the structure.

#### Details
The next UML class diagram shows the details for the base component classes.
![Bali Component Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/docs/images/Bali%20Component%20Details.png)

### Bali Documents
An important type of component is a _notarized_ Bali Document. Each document contains a potentially complex component which represents knowledge about things or knowledge about how to do things. A document is digitally notarized by the author of the document to prove that she is the author and to prevent anyone or anything from modifying the document once it has been notarized. To facilitate this each document may contain one or more notary seals that can be used to verify the validity of the document by anyone who care to verify it. Refer to the Crater Dog Technologies™ [js-bali-digital-notary](https://raw.githubusercontent.com/craterdog-bali/js-bali-digital-notary) project for details on how to digitally notarize and verify the documents.

#### Framework
The following UML class diagram shows a high-level view of the document related component classes.
![Bali Document Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/docs/images/Bali%20Document%20Framework.png)

#### Details
The next UML class diagram shows the details for the document related component classes.
![Bali Document Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/docs/images/Bali%20Document%20Details.png)

