echo startupdate
pwd
cd ../prod
pwd
pm2 deploy prod update --force
echo done
