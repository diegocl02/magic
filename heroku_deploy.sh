set -e
 
app_name="mini-magic"
commit_msg="deployment"
repo_branch="master"
 
#Move to the compiled fodler
#cd dist
 
#Initialize Git
git init
 
#Add remote Heroku url of your app
heroku git:remote -a $app_name
 
#Add npm start to the package json file (npm start)
## missing
 
#Commit files
git add .
git commit -m $commit_msg
 
#Push and deploy
git push heroku $repo_branch
