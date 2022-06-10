# frontend-core

frontend-core is a component library to house all shared elemantary related components in core-web(https://www.stocktwits.com).
It contains mutual components/hooks/utils used in core-web and other module projects.

## Getting Started

run `yarn` to install the package.
run `yarn storybook` to check library components. it will automatically open `localhost:6006`

### During development

when you develop locally, first, run `yarn link` in the root of this library repo, then switch to the root of the repo that use the library, run `yarn link @stocktwits/frontend-core`. Thus, you have linked these two repos, then run `yarn start` in the root of this library repo to live watch the changes you made in development. When you want to unlink the library locally, run `yarn unlink @stocktwits/frontend-core` in the root of the repo that use the library.
