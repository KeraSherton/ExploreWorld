/**
 * @flow
 * @relayHash aa0c84e44520b26048275899b6f79435
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
    "text": "query AppQuery {\n  continent(code: \"EU\") {\n    name\n    countries {\n      name\n      native\n      phone\n      languages {\n        name\n      }\n      currency\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4d5c8ff5869cd655b9e6ebee36dab7b3';
module.exports = node;
