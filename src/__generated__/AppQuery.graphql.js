/**
 * @flow
 * @relayHash 6d38f1ecc7fc07f1e9726f86cb2ec318
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +continent: ?{|
    +name: ?string,
    +countries: ?$ReadOnlyArray<?{|
      +code: ?string,
      +name: ?string,
      +native: ?string,
      +phone: ?string,
      +languages: ?$ReadOnlyArray<?{|
        +name: ?string
      |}>,
      +currency: ?string,
    |}>,
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  continent(code: "EU") {
    name
    countries {
      code
      name
      native
      phone
      languages {
        name
      }
      currency
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "continent",
    "storageKey": "continent(code:\"EU\")",
    "args": [
      {
        "kind": "Literal",
        "name": "code",
        "value": "EU"
      }
    ],
    "concreteType": "Continent",
    "plural": false,
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "code",
            "args": null,
            "storageKey": null
          },
          (v0/*: any*/),
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
              (v0/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "currency",
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
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  continent(code: \"EU\") {\n    name\n    countries {\n      code\n      name\n      native\n      phone\n      languages {\n        name\n      }\n      currency\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd4713c5adfb94119dd9ef6626ec1108';
module.exports = node;
