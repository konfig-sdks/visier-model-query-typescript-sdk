<div align="center">

[![Visit Visier](./header.png)](https://visier.com)

# [Visier](https://visier.com)<a id="visier"></a>

Visier API for searching for Visier documents

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`visiermodelquery.documentSearch.simpleSearchDocumentHeaders`](#visiermodelquerydocumentsearchsimplesearchdocumentheaders)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Visier&serviceName=ModelQuery&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { VisierModelQuery } from "visier-model-query-typescript-sdk";

const visiermodelquery = new VisierModelQuery({
  // Defining the base path is optional and defaults to https://vanity.api.visier.io
  // basePath: "https://vanity.api.visier.io",
  apiKeyAuth: "API_KEY",
  accessToken: "ACCESS_TOKEN",
  cookieAuth: "API_KEY",
});

const simpleSearchDocumentHeadersResponse =
  await visiermodelquery.documentSearch.simpleSearchDocumentHeaders({});

console.log(simpleSearchDocumentHeadersResponse);
```

## Reference<a id="reference"></a>


### `visiermodelquery.documentSearch.simpleSearchDocumentHeaders`<a id="visiermodelquerydocumentsearchsimplesearchdocumentheaders"></a>

Perform a simple search for Visier document headers, such as analysis titles. Simple search doesn't support keywords, Boolean expressions, or any other advanced search features.
 Example: `GET /v1alpha/search/simple/document-headers?q=My+Query&limit=10` returns the first 10 document headers that best match the query string `My Query`.

 <br>**Note:** <em>This API is in **alpha**. While in alpha, APIs may change in a breaking way without notice; functionality may be removed, and no deprecation notices will be issued.
 If you are interested in using this API, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const simpleSearchDocumentHeadersResponse =
  await visiermodelquery.documentSearch.simpleSearchDocumentHeaders({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### q: `string`<a id="q-string"></a>

The search query string.

##### limit: `number`<a id="limit-number"></a>

The maximum number of results to return. Defaults to 100.

##### offset: `number`<a id="offset-number"></a>

The index to start retrieving results from, also known as offset. Defaults to 0.

#### 🔄 Return<a id="🔄-return"></a>

[SimpleDocumentHeaderSearchResponseDTO](./models/simple-document-header-search-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1alpha/search/simple/document-headers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
