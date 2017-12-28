set -e

commit_msg="deployment"

for ARG in "$@"
do
	KEY=$(echo $ARG | cut -f1 -d=)
    	VALUE=$(echo $ARG | cut -f2 -d=)
    	
    	case "$KEY" in
		--app-name) app_name=${VALUE} ;;
		--repo-branch) repo_branch=${VALUE} ;;
		*)
	esac
done

validate_arg(){
    if [ -z "$1" ]; then
	echo "Not all arguments provided; check that --app-name= and --repo-branch= are there!"
	echo "Aborting scripts.."
	exit 1
	fi
}

echo "App Name is : $app_name"
echo "Branch Name is : $repo_branch"

validate_arg $app_name
validate_arg $repo_branch

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
../node_modules/heroku-cli/bin/run git:remote -a $app_name
 
#Add npm start to the package json file (npm start)
## missing

echo -e "\n-->Committing local files<--"
#Commit files
git add .
git commit -m $commit_msg
 
echo -e "\n-->Deploying the project on Heroku<--"
#Push and deploy
git push heroku $repo_branch --force
