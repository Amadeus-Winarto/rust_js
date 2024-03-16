# Rust in TypeScript

## Dependencies

### ANTLR4

To generate the parser, you need to have ANTLR4 installed. You can install it using the following command:

```bash
python3 -m pip install antlr4-tools
```

### Node.js

We use `npm` to manage the dependencies and typescript to run the code. You can install `npm` using the following command:

```bash
sudo apt install nodejs
```

You can then install the dependencies using the following command:

```bash
npm install
```

To run the code, you need to have `tsx` installed. You can install it using the following command:

```bash
npm install -g tsx
```

You also need to generate the parser using the following command:

```bash
npm run gen_parser
```

## Running the code

You can run the code using the following command:

```bash
npm run main
```
