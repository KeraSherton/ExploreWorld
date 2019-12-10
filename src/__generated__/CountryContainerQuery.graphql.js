/**
 * @flow
 * @relayHash abeb37f6e0370b01e9ca08cba068e22e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CountryContainerQueryVariables = {||};
export type CountryContainerQueryResponse = {|
  +continent: ?{|
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
    |}>,
  |}
|};
export type CountryContainerQuery = {|
  variables: CountryContainerQueryVariables,
  response: CountryContainerQueryResponse,
|};
*/


/*
query CountryContainerQuery {
  continent {
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
    "name": "continent",
    "storageKey": null,
    "args": null,
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
    "name": "CountryContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CountryContainerQuery",
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CountryContainerQuery",
    "id": null,
    "text": "query CountryContainerQuery {\n  continent {\n    code\n    countries {\n      code\n      name\n      native\n      phone\n      languages {\n        name\n      }\n      currency\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '180728452cf4800be6c0294a4fabc05e';
module.exports = node;
