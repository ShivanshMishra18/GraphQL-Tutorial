# GraphQL Tutorial in Javascript

In this repo, we will be exploring the various concepts of GraphQL, starting by using the quick to set up [graphql-yoga](https://github.com/prisma-labs/graphql-yoga), and in some time later implementing GraphQL server in NodeJS.

I expect you to know the basics of Javascript and NodeJS before starting with it, and some experience in using REST APIs in order to appreciate this concept.



## Why GraphQL?
When it comes to creating APIs, GraphQL has some benefits over REST:


- Faster speed with less access frequency to resources
- Flexibility
- Ease of use and less maintenance

## Setting up

Use npm to install graphql-yoga and [babel](https://babeljs.io/) transcompiler.

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

## About the Tutorial

This tutorial starts with the fundamentals of graphql-yoga, setting it up and building a small application with it, right from the data types to most concepts (and some working) required to build the application. 
Initially, it might look vague, but eventually, after exploring the data types and relationships, things would become clear as we would have an aim for the application.

We would be creating an information portal (only backend) for a country, DoctorLand, where only doctors live.
Our application would be serving the endpoint for the relational database of doctors, hospitals and patients (who are also doctors in DoctorLand).

It would be easy to follow along as I would be adding all details before the actual code for any topic along with some example query.