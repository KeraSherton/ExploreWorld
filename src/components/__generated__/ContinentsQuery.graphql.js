/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContinentsQueryVariables = {||};
export type ContinentsQueryResponse = {|
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
export type ContinentsQuery = {|
  variables: ContinentsQueryVariables,
  response: ContinentsQueryResponse,
|};
*/


/*
query ContinentsQuery {
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Continent",
    "kind": "LinkedField",
    "name": "continents",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "countries",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "native",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "phone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Language",
            "kind": "LinkedField",
            "name": "languages",
            "plural": true,
            "selections": [
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "currency",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "emoji",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContinentsQuery",
    "selections": (v2/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContinentsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ContinentsQuery",
    "operationKind": "query",
    "text": "query ContinentsQuery {\n  continents {\n    code\n    countries {\n      code\n      name\n      native\n      phone\n      languages {\n        name\n      }\n      currency\n      emoji\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8c9f13e625d664ee9421110623e5c394';

module.exports = node;
