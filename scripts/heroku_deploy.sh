set -e

app_name="mini-magic"
commit_msg="deployment"
repo_branch="master"

echo -e "-->Starting Deployment on Heroku for $app_name<--"
 
#Move to the compiled folder, move a package.json that contains the npm start script
echo -e "\n-->Moving to the app folder<--"
cp package_deploy.json dist/package.json
cd dist
 
#Initialize Git
echo -e "\n-->Initializing Heroku git on specific folder<--"
git init
 
#Add remote Heroku url of your app
echo -e "\n-->Adding Heroku remote url<--"
heroku git:remote -a $app_name
 
#Add npm start to the package json file (npm start)
## missing

echo -e "\n-->Committing local files<--"
#Commit files
git add .
git commit -m $commit_msg
 
echo -e "\n-->Deploying the project on Heroku<--"
#Push and deploy
git push heroku $repo_branch --force
