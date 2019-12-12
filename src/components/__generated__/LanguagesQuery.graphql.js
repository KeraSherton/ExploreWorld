/**
 * @flow
 * @relayHash 45f1e6306353a32131d2f36d18bc0257
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LanguagesQueryVariables = {|
  code?: ?string
|};
export type LanguagesQueryResponse = {|
  +country: ?{|
    +languages: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>
  |}
|};
export type LanguagesQuery = {|
  variables: LanguagesQueryVariables,
  response: LanguagesQueryResponse,
|};
*/


/*
query LanguagesQuery(
  $code: String
) {
  country(code: $code) {
    languages {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "code",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "country",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "code",
        "variableName": "code"
      }
    ],
    "concreteType": "Country",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "languages",
        "storageKey": null,
        "args": null,
        "concreteType": "Language",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
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
    "name": "LanguagesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LanguagesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "LanguagesQuery",
    "id": null,
    "text": "query LanguagesQuery(\n  $code: String\n) {\n  country(code: $code) {\n    languages {\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d5846e056df0435b92cb1eb39edb058';
module.exports = node;
