## Overview

### Project Description
This project contains a JavaScript/NodeJS based implementation of the _Bali Document Framework™_. The framework is like JSON on steroids. It supports a much richer set of primitive types (13 in all) and collection types (6 in all) than JSON. It also supports powerful high-level programming constructs that integrate directly with the _Bali Cloud Environment™_. Everything in this framework is a Bali component and inherits from the [`bali.Component`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/abstractions/Component.js) class. Components may be persisted to the Bali Cloud Environment™ as **notarized** Bali documents that are instances of the `bali.Document` class. Each document contains a full description of the component using the [Bali Document Notation™](https://github.com/craterdog-bali/bali-project-documentation/wiki/The-Bali-Reference-Guide:-Part-I). This project provides all of the JavaScript/NodeJS modules that are required to work with Bali components and documents.

#### _WARNING_
_This project is still in its early stages and the classes and interfaces to the classes are likely to change. Nevertheless, the project in its current state should work well as a better JSON for capturing information and procedures. A compiler for the Bali Document Notation™ and the Bali Cloud Environment™ won't be available until 2019._

#### Example Document
To whet your appetite here is a short example document showing some of the capabilities of the Bali Document Notation™:
```
[
    $transactionId: #LYZ6PJ9GBABSF18MQMBSJDV7KAPV4MS7
    $timestamp: <2017-12-30T17:38:35.726>($city: "Madrid", $country: "Spain")
    $consumer: [
        $accountId: #SFNYCS6WTNCAVQ43DDS9HQJQX2A1XAPZ
        $email: <jane.smith@gmail.com>
    ]
    $merchant: [
        $accountId: #GYR0D0N7D7RGLAMM50TA7YYP9TRCYFF0
        $name: "Cool Deals R Us"
    ]
    $items: [
        [
            $name: "Hover Board"
            $version: v2.65
            $quantity: 1
            $price: 142.00($USD)
        ]
        [
            $name: "Hover Battery Packs"
            $version: v15.3.7
            $quantity: 2
            $price: 16.00($USD)
        ]
    ]
    $tax: 10.77($EUR)
    $total: 184.77($EUR)
]
<bali:[$protocol:v1,$tag:#SFNYCS6WTNCAVQ43DDS9HQJQX2A1XAPZ,$version:v8,$digest:'CNAXRB8XF0VKXSRXR3XXL2LL5N7CRXNMKG1T4MLAT20NW8W61YZR1LGMAH71GSC89YWM0QF1LB5ZM75K5ZG8PDCTDXCHXDZTRJAL1FR']> '
    620RF0K205QCK6FLYSSB9QV42B5FV2BZS1V32521MAC5RNGGZ3WF7B439X6X
    ZXGR8CBYH6DR5WVZKCZZ9P4TC89W98S8XS6XGKNL1DBTP1C4M9DLPH142X72
    BKHJF0GJ50LMLMSA1KZDKF1PN2Z8GH0P4FJ2HPGCV07TQGPX297ZSQ671420
    67R0QK58SG7JWWPABX7DL07TM4PKW9ZWMKXFPMSMW
'
<bali:[$protocol:v1,$tag:#GYR0D0N7D7RGLAMM50TA7YYP9TRCYFF0,$version:v27,$digest:'BSHZKB0Y78APAYLDGD31HJDXQPAK5V40X8Q695QBZRAMKX9HH0LZ1720PT4RVNG2054ATQ6RTQB7DZJSNJDK7ADRZMN5TCQ969459B0']> '
    620RH0K205JCHTM3HL9RNJBVLSGJV8P80ZFGS3Z2B3SCPH3BTMYZPM6D43Z0
    XM3W8CM7FAPHC8KSRXSLPSJYDM9R6Y0DZP2Y1VN45MDQRTYLN7M5HC14407Z
    5ZX2NDFBQ91RYZ8QF718GCWX4CQNZF7LTHXAWJSXJZ7MLDBKZGKBQF31YLK1
    7WYAXX8BYFP79LA9DADG6MKFHZZJQNAV5R98759D7B8
'
```

The document itself is fairly straight forward. It captures the information associated with a payment from a consumer to a merchant. Notice that there is not credit card or bank account information included. It is not needed because appended to the document are two cryptic looking _notary seals_. The first one was appended by the consumer validating the information in the document. The second one was appended by the merchant validating both the document and the consumer's notary seal. Either seal can be verified by anyone at any time and if anything in the document or seals has been modified, the verification will fail.

Once this document has been posted to the Bali Cloud Environment™ it cannot be modified or deleted so neither the consumer nor the merchant can deny that it took place or dispute the details of the transaction. This simple example shows the real power of the Bali Document Framework™.

### Bali Components
The [`bali.Component`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/abstractions/Component.js) class provide the foundation for all other classes in the Bali Document Framework™. It defines canonical implementations for common methods that all classes should implement like:
 * **`toString()`** - Returns a consistently formatted string containing the Bali Document Notation™ form of this component.
 * **`isEqualTo(that)`** - Returns whether or not the canonical string format of this component is equal to the canonical string format of that component.
 * **`comparedTo(that)`** - Returns a _signum_ value showing how this component compares to that component using their natural ordering: `-1` if this < that; `0` if this = that; and `1` if this > that.
 * **`getHash()`** - Returns a unique canonical integer _hash_ value for this component so that it can be used efficiently in a _hash table_.

#### Component Framework
The following UML class diagram shows a high-level view of the base component classes.
![Bali Component Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/docs/images/Bali%20Component%20Framework.png)

The component classes are split into two types of components:
 * [**`bali.Element`**](https://https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/abstractions/Element.js) - Elemental components are atomic in nature and not generally broken down into smaller pieces.
 * [**`bali.Composite`**](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/abstractions/Composite.js) - Composite components are made up of smaller subcomponents.
 
 A [`bali.Collection`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/abstractions/Collection.js) is a type of composite component that contains a dynamic set of subcomponents referred to as its items. The items in a collection may be iterated over using a [`bali.Iterator`](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/src/composites/Iterator.js) which is also a type of composite component.
 
Complex documents can be constructed out of composite components. A [`bali.Visitor`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/abstractions/Visitor.js) component is another type of composite component that is able to visit each component in a document and perform tasks based on the type of visited component. For example, any document can be visited by a [`bali.DocumentFormatter`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/utilities/DocumentFormatter.js) which generates the corresponding Bali Document Notation™ text string for the structured document.

#### Component Details
The following UML class diagram shows the details for the base component classes.
![Bali Component Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/docs/images/Bali%20Component%20Details.png)

Notice that in addition to the canonical methods defined by the [`bali.Component`](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/src/abstractions/Component.js) class a component may be parameterized to further constrain its type and behavior. In the example transaction document above the numbers representing currency amounts where parameterized with the currency type (`$USD` or `$EUR`). Also the timestamp was parameterized with the location information `($city: "Madrid", $country: "Spain")` that can be used to determine the timezone for the timestamp.

### Bali Documents
As shown in the example above a powerful type of component is a _notarized_  [`bali.Document`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/composites/Document.js). Each document wraps a potentially complex component representing knowledge about things or how to do things. A document is digitally notarized by the author of the document to prove that she is the author and to prevent anyone or anything from modifying the document once it has been notarized. To facilitate this each document may contain one or more notary seals that can be used to verify the validity of the document by anyone who cares to verify it. Refer to the Crater Dog Technologies™ [js-bali-digital-notary](https://github.com/craterdog-bali/js-bali-digital-notary) project for details on how to digitally notarize and verify the documents.

#### Document Framework
The following UML class diagram shows a high-level view of the document related component classes.
![Bali Document Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/docs/images/Bali%20Document%20Framework.png)

The [`bali.Document`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/composites/Document.js) and [`bali.Seal`](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/src/composites/Seal.js) classes are composite classes with a document containing zero or more notary seals.

A document may also contain a [`bali.Reference`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/elements/Reference.js) which is an element type that references another document, in this case the previous version of the document containing the reference.

Each notary seal also contains a reference to the public notary certificate document that can be used to verify the notary seal. Each notary seal also contains a [`bali.Binary`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/elements/Binary.js) element type that defines the base 32 encoded binary digital signature of the notarized document.

#### Document Details
The next UML class diagram shows the details for the document related component classes.
![Bali Document Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-document-framework/master/docs/images/Bali%20Document%20Details.png)

The [`bali.Document`](https://github.com/craterdog-bali/js-bali-document-framework/blob/master/src/composites/Document.js) class provides methods for doing various content and notary seal based transformations on the document. This does **not** include notarizing and verifying a document. For information on how to do that see the Crater Dog Technologies™ [js-bali-digital-notary](https://github.com/craterdog-bali/js-bali-digital-notary) project.

