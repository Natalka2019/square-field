Working app: [Square game](https://natalka2019.github.io/square-field/).

[How to deploy React App without router to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f).

- [x] install GitHub Pages package as a dev-dependency: `npm install gh-pages --save-dev`
- [x] Add properties to package.json file:  
       `"homepage": "http://{username}.github.io/{repo-name}"`  
       Add to "scripts":  
       `"predeploy": "npm run build"`  
       `"deploy": "gh-pages -d build"`
- [x] just run the following command : `npm run deploy`

You can preview your site on the url you mentioned in package.json as “homepage”.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
