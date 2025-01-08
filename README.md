# My Super Cool Component Library

A simple and reusable React component library with support for Storybook.

## Table of Contents
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Storybook](#storybook)
- [Scripts](#scripts)

---

## Installation

To set up the project, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/my-super-cool-component-library.git

# Navigate into the project directory
cd my-super-cool-component-library

# Install dependencies
npm install

## Running the Project

To build and run the project locally, follow these steps:

### Build the component library:

```bash
npm run rollup

### Run tests (optional)

```bash
npm run test

### Start Storybook
npm run storybook

### Start Storybook
npm run storybook

### Build Storybook for production
npm run build-storybook


## Storybook

Storybook provides a sandbox to develop and showcase your components.

### Start Storybook:

```bash
npm run storybook


## Scripts

Here are all the available npm scripts for the project:

| Script                   | Description                                                                                   |
|--------------------------|-----------------------------------------------------------------------------------------------|
| `npm run rollup`          | Builds the library into CommonJS and ES module formats in the `dist/` dir.                    |
| `npm run test`            | Runs all test cases using Jest.                                                                |
| `npm run storybook`       | Starts Storybook on [http://localhost:6006](http://localhost:6006).                            |
| `npm run build-storybook` | Builds a static version of Storybook in the `storybook-static/` dir.                         |
