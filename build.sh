rm -rf ./build
npm run build
cd ../ && ls | grep -v transport-schedule-react | grep -v .gitignore | xargs rm -rfv && cd transport-schedule-react/
cp -r ./build/* ../