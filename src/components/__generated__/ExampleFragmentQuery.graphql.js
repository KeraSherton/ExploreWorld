/**
 * @flow
 * @relayHash 7c3259cc674317b335bb9c1acabe08c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ExampleFragmentQueryVariables = {|
  code?: ?string
|};
export type ExampleFragmentQueryResponse = {|
  +continent: ?{|
    +name: ?string
  |}
|};
export type ExampleFragmentQuery = {|
  variables: ExampleFragmentQueryVariables,
  response: ExampleFragmentQueryResponse,
|};
*/


/*
query ExampleFragmentQuery(
  $code: String
) {
  continent(code: $code) {
    name
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
    "name": "continent",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "code",
        "variableName": "code"
      }
    ],
    "concreteType": "Continent",
    "plural": false,
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ExampleFragmentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ExampleFragmentQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ExampleFragmentQuery",
    "id": null,
    "text": "query ExampleFragmentQuery(\n  $code: String\n) {\n  continent(code: $code) {\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '22a448c8f3e7cb9f2f595f0ee4b750fb';
module.exports = node;
