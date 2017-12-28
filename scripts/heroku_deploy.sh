set -e

echo -e "Starting Deployment on Heroku for "

app_name="mini-magic"
commit_msg="deployment"
repo_branch="master"

echo -e "$(app_name)"
 
#Move to the compiled fodler
#cd dist
 
#Initialize Git
echo -e "\nInitializing Heroku git on specific folder"
git init
 
#Add remote Heroku url of your app
echo -e "\nAdding Heroku remote url"
heroku git:remote -a $app_name
 
#Add npm start to the package json file (npm start)
## missing

echo -e "\nCommitting local files"
#Commit files
git add .
git commit -m $commit_msg
 
echo -e "\nDeploying the project on Heroku"
#Push and deploy
git push heroku $repo_branch
