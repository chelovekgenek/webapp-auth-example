## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running follow these simple steps.

<!-- PREREQUISITES -->

### Prerequisites

Install a stable version of node, currently this is running `v12.14.1`
[Install Node](https://nodejs.org/en/download/)
[Install NVM via Homebrew](https://formulae.brew.sh/formula/nvm)

- npm

```sh
npm install npm@latest -g
```

- ngrok

```sh
npm install -g ngrok
```

<!-- INSTALLATION -->

### Installation

- Clone the repo

```sh
https://gitlab.com/commerce-club/webapp.git
```

- Install NPM packages

```sh
yarn install
```

- Copy `.env.example`, rename it to `.env`, replace variables by correct values

- Run the app in dev mode, this will open in `localhost:3000`

```sh
yarn watch
```

- Open new terminal window and get domain with https traffic

```sh
ngrok http 3000
```

- Copy https link from ngrok output and put it as redirect domain to shopify app

- Open merchant account and run the app

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
