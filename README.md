# Pivotal Documentation
###Product Version Navigation and Search

##Areas of Focus
- Product Version Navigation
- User Orientation
- Product Version Search

##Problem Statement
Pivotal Documentation was designed to provide education and guides to install and configure software for all Pivotal offerings. We have observed that customers are having a difficult time finding specific pieces of documentation and navigating to old versions of software releases. How might we improve the navigation and user orientation as so that we are providing customers and prospects with more context such as education around Pivotal, products, narrative, mission, agile, etc.

##Goals
- Improved UX for older versions of software
- Solving some of the biggest usability issues with Docs (Search and Navigation) based on previous usability research findings
- Making Data Docs feel a bit more like other Pivotal Docs

##Goals of this Prototype
This prototype is built for the purpose of think aloud usability tests. The script is [available here](https://docs.google.com/a/pivotal.io/document/d/1apLKEXz9O1egvciV3QdaBI-UP2ZnssE3th_o30QuvSI/edit?usp=sharing). The recordings are [available here](https://lookback.io/pivotal-cloud-foundry/pivotal-docs). Send a note to `shurst@pivotal.io` for access.

---

##Getting Started

```
git clone git@github.com:pivotal-plech/docs-design.git
cd docs-design
npm i
gulp serve
```

##Build
```
make build
```
this will:

0. `gulp build`
1. `cd dist/`
2. `cf push` based on the manifest.yml
3. `cd ../`