/**
 * @flow
 * @relayHash 7a118d6599275379c02bab1a87a500a0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContinentsContainerQueryVariables = {||};
export type ContinentsContainerQueryResponse = {|
  +continents: ?$ReadOnlyArray<?{|
    +code: ?string,
    +countries: ?$ReadOnlyArray<?{|
      +code: ?string,
      +name: ?string,
      +native: ?string,
      +phone: ?string,
      +languages: ?$ReadOnlyArray<?{|
        +name: ?string
      |}>,
      +currency: ?string,
      +emoji: ?string,
    |}>,
  |}>
|};
export type ContinentsContainerQuery = {|
  variables: ContinentsContainerQueryVariables,
  response: ContinentsContainerQueryResponse,
|};
*/


/*
query ContinentsContainerQuery {
  continents {
    code
    countries {
      code
      name
      native
      phone
      languages {
        name
      }
      currency
      emoji
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "code",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "continents",
    "storageKey": null,
    "args": null,
    "concreteType": "Continent",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "countries",
        "storageKey": null,
        "args": null,
        "concreteType": "Country",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "native",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "phone",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "languages",
            "storageKey": null,
            "args": null,
            "concreteType": "Language",
            "plural": true,
            "selections": [
              (v1/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "currency",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "emoji",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ContinentsContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ContinentsContainerQuery",
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ContinentsContainerQuery",
    "id": null,
    "text": "query ContinentsContainerQuery {\n  continents {\n    code\n    countries {\n      code\n      name\n      native\n      phone\n      languages {\n        name\n      }\n      currency\n      emoji\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a6ca825cda4cfdec22dad27e9ea5f2b0';
module.exports = node;
