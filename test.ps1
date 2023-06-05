npx tsc
Copy-Item -Path .\build\index.js -Destination .\src\index.js
npm run test
Start-Sleep -Seconds 5