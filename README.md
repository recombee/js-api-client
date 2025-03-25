<div align="center">
  <img src="https://raw.githubusercontent.com/recombee/.github/refs/heads/main/assets/mark.svg" width="64px" align="center" alt="Recombee" />
  <br/>
  <h1>Recombee API Client</h1>
</div>

<p align="center">
<a href="https://www.npmjs.com/package/recombee-js-api-client" rel="nofollow"><img src="https://img.shields.io/npm/v/recombee-js-api-client" alt="Version"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/npm/l/recombee-js-api-client" alt="License"></a>
</p>

<div align="center">
  <a href="https://docs.recombee.com/js_client">Documentation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/recombee/js-api-client/issues/new">Issues</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="mailto:support@recombee.com">Support</a>
  <br />
</div>

## ✨ Features

- Thin JavaScript wrapper around the Recombee API
- Supported endpoints: [Interactions](https://docs.recombee.com/api#user-item-interactions), [Recommendations](https://docs.recombee.com/api#recommendations) & [Search](https://docs.recombee.com/api#search)
- UMD-compatible
- TypeScript definitions included

## 🚀 Getting Started

There are two ways to include the library in your project:

### 🔌 Install via code snippet

You can add the following `<script>` tag into your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/recombee-js-api-client@5.0.2/dist/recombee-api-client.min.js"></script>
```

After this script is included, you can access the client using the global `recombee` object (also available as `window.recombee`).

### 📦 Install via package manager

If you prefer, you can also use a package manager:

```sh
npm install recombee-js-api-client
# or
yarn add recombee-js-api-client
# or
pnpm add recombee-js-api-client
# or
bun add recombee-js-api-client
```

Afterwards, you can import the `recombee` object:

```js
import recombee from 'recombee-js-api-client'
```

### 🏗️ Example

With the `recombee` object, you can send user-item interactions and receive recommendations as follows:

```js
// Initialize the API client with the ID of your database and the associated PUBLIC token
export const client = new recombee.ApiClient(
  'database-id',
  '...db-public-token...',
  {
    // the region of your database (default: 'eu-west')
    region: 'us-west',
  },
);

// Send interactions
client.send(
  new recombee.AddDetailView('user-4395', 'item-129', {
    cascadeCreate: true,
    recommId: '23eaa09b-0e24-4487-ba9c-8e255feb01bb',
  }),
);

// Request recommendations
client
  .send(
    new recombee.RecommendItemsToItem('item-356', 'user-13434', 5, {
      returnProperties: true,
      includedProperties: ['title'],
    }),
  )
  .then((response) => {
    // `recommId` needs to be sent with interactions based on recommendations
    console.log(response.recommId);

    // The `recomms` object contains the `id` (and `values` if `returnProperties` is true)
    response.recomms.forEach((item) => {
      console.log(`ID: ${item.id}, Title: ${item.values.title}`);
    });
  })
  .catch((error) => {
    console.log(error);
    // use fallback...
  });
```

## 📝 Documentation

Discover the full [JavaScript API Client documentation](https://docs.recombee.com/js_client) for comprehensive guides and examples.

For a complete breakdown of all endpoints and their responses, check out our [API Reference](https://docs.recombee.com/api).

## 🤝 Contributing

We welcome all contributions—whether it’s fixing a bug, improving documentation, or suggesting a new feature.

To contribute, simply fork the repository, make your changes, and submit a pull request. Be sure to provide a clear description of your changes.

Thanks for helping make this project better!

## 🔧 Troubleshooting

Are you having issues? We recommend checking [our documentation](https://docs.recombee.com/js_client) to see if it contains a possible solution.

If you want to reach out, you can either [open a GitHub issue](https://github.com/recombee/js-api-client/issues/new) or send an email to support@recombee.com.

## 📄 License

The Recombee JavaScript API Client is provided under the [MIT License](https://opensource.org/licenses/MIT).
