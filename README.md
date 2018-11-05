## Overview

### Project Description
This project contains a JavaScript/NodeJS based implementation of the _Bali Component Framework™_. The framework is like JSON on steroids. It supports a much richer set of primitive types (13 in all) and collection types (6 in all) than JSON supports. It also provides powerful high-level programming constructs that integrate directly with the _Bali Cloud Environment™_. Everything in this framework is a Bali component and inherits from the [`bali.Component`](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/abstractions/Component.js) class. Each component can be turned into a portable document format called the [Bali Document Notation™](https://github.com/craterdog-bali/bali-project-documentation/wiki/The-Bali-Reference-Guide:-Part-I). Similarly, a string containing Bali Document Notation™ can be parsed into its corresponding Bali components. This project provides all of the JavaScript/NodeJS modules that are required to work with Bali components and Bali Document Notation™ strings.

#### _WARNING_
_This project is still in its early stages and the classes and interfaces to the classes are likely to change. Nevertheless, the project in its current state should work well as a better JSON for capturing information and procedures. A compiler for the Bali Document Notation™ and the Bali Cloud Environment™ won't be available until 2019._

#### Example Document
To whet your appetite here is a short example Bali document showing some of the capabilities of the Bali Document Notation™:
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
```

The document itself is fairly straight forward. It captures the information associated with a payment from a consumer to a merchant. The example is overly simple but should give you the gist of the power behind the Bali Component Framework™.

### Bali Components
The [`bali.Component`](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/abstractions/Component.js) class provides the foundation for all other classes in the Bali Component Framework™. It defines canonical implementations for common methods that all classes should implement like:
 * **`toString()`** - Returns a consistently formatted string containing the Bali Document Notation™ form of this component.
 * **`isEqualTo(that)`** - Returns whether or not the canonical string format of this component is equal to the canonical string format of that component.
 * **`comparedTo(that)`** - Returns a _signum_ value showing how this component compares to that component using their natural ordering: `-1` if this < that; `0` if this = that; and `1` if this > that.
 * **`getHash()`** - Returns a unique canonical integer _hash_ value for this component so that it can be used efficiently in a _hash table_.

#### Component Framework
The following UML class diagram shows a high-level view of the base component classes.
![Bali Component Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-component-framework/master/docs/images/Bali%20Component%20Framework.png)

The component classes are split into two types of components:
 * [**`bali.Element`**](https://https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/abstractions/Element.js) - Elemental components are atomic in nature and not generally broken down into smaller pieces.
 * [**`bali.Composite`**](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/abstractions/Composite.js) - Composite components are made up of smaller subcomponents.
 
Complex nested component structures can be constructed out of composite components. A [`bali.Visitor`](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/abstractions/Visitor.js) component is another type of composite component that is able to visit each subcomponent in a complex component and perform tasks based on the type of visited component. For example, any component can be visited by a [`bali.ComponentFormatter`](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/utilities/ComponentFormatter.js) which generates the corresponding Bali Document Notation™ text string for the component.

#### Component Details
The following UML class diagram shows the details for the base component classes.
![Bali Component Details](https://raw.githubusercontent.com/craterdog-bali/js-bali-component-framework/master/docs/images/Bali%20Component%20Details.png)

Notice that in addition to the canonical methods defined by the [`bali.Component`](https://raw.githubusercontent.com/craterdog-bali/js-bali-component-framework/master/src/abstractions/Component.js) class a component may be parameterized to further constrain its type and behavior. In the example transaction document above the numbers representing currency amounts where parameterized with the currency type (`$USD` or `$EUR`). Also the timestamp was parameterized with the location information `($city: "Madrid", $country: "Spain")` that can be used to determine the timezone for the timestamp.

### Bali Collections
The [`bali.Collection`](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/abstractions/Collection.js) class provides the foundation for the collection classes in the Bali Component Framework™. Collections are groups of subcomponents referred to as _items_ that are maintained and ordered following different rules depending on the specific collection type.

#### Collection Framework
The following UML class diagram shows a high-level view of both the abstract and concrete collection classes.
![Bali Collection Framework](https://raw.githubusercontent.com/craterdog-bali/js-bali-component-framework/master/docs/images/Bali%20Collection%20Framework.png)

Each concrete collection class enforces different rules for managing its items:
 * [**`bali.Tree`**](https://https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/composites/Tree.js) - A tree maintains a collection of children components that are maintained in the order in which they were added. Each node in the tree has a specified type which defines the semantics of each of its children nodes.
 * [**`bali.Stack`**](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/composites/Stack.js) - A stack is a collection of items that are added and removed sequentially and strictly enforces the "last in, first out" (aka LIFO) ordering.
 * [**`bali.Set`**](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/composites/Set.js) - A set is an ordered collection that automatically orders its items in their natural order and does not allow duplicate items.
 * [**`bali.Range`**](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/composites/Range.js) - A range is a collection that constrains an other collection to a specific subset of its items by specifying the first and last item to be included in the range.
 * [**`bali.List`**](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/composites/List.js) - A list is a collection that maintains its items in the order in which they were added, but also allows its items to be sorted if desired using a [`bali.Comparator`](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/components/Comparator.js) component.
 * [**`bali.Catalog`**](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/composites/Catalog.js) - A catalog is like a list collection whose items are [`bali.Association`](https://github.com/craterdog-bali/js-bali-component-framework/blob/master/src/composites/Association.js) components each containing a key that is mapped to a value, both of which are also components. A catalog collection may also be sorted based on its keys if desired.

#### Collection Details
The following UML class diagram shows the details for the abstract collection classes.
![Bali Collection Details](https://raw.githubusercontent.com/craterdog-bali/js-bali-component-framework/master/docs/images/Bali%20Collection%20Details.png)

#### Fixed Collection Details
And the next UML class diagram shows the details for the fixed collection classes.
![Bali Fixed Collection Details](https://raw.githubusercontent.com/craterdog-bali/js-bali-component-framework/master/docs/images/Bali%20Fixed%20Collection%20Details.png)

#### Ordered Collection Details
The next UML class diagram shows the details for the ordered collection classes.
![Bali Ordered Collection Details](https://raw.githubusercontent.com/craterdog-bali/js-bali-component-framework/master/docs/images/Bali%20Ordered%20Collection%20Details.png)

#### Sortable Collection Details
And the last UML class diagram shows the details for the sortable collection classes.
![Bali Sortable Collection Details](https://raw.githubusercontent.com/craterdog-bali/js-bali-component-framework/master/docs/images/Bali%20Sortable%20Collection%20Details.png)

