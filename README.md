# Intoduction to GraphQL

In this repo, we will be exploring the various concepts of GraphQL, starting by using the quick to set up [graphql-yoga](https://github.com/prisma-labs/graphql-yoga), and in some time later implementing GraphQL server in NodeJS.

I expect you to know the basics of Javascript and NodeJS before starting with it, and some experience in using REST APIs in order to appreciate this concept.



## Why GraphQL?
When it comes to creating APIs, GraphQL has some benefits over REST:


- Faster speed with less access frequency to resources
- Flexibility
- Ease of use and less maintenance

## Setting up

Use the npm to install graphql-yoga and [babel](https://babeljs.io/) transcompiler.

```npm
npm install graphql-yoga babel-cli babel-preset-env
```
Create the .babelrc file and paste the following settings to set up the environment

```.babelrc
{
    "presets": [ "env" ]
}
```

With this set up we are ready to move on.