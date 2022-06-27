call echo Manzoor you have got super powers! Please dont share it with others! Your magic starts in next 10 secs
call timeout 10

call echo installing Angular
call timeout 5
call npm install @angular/cli --global

call echo Creating UIProject
call timeout 5
call ng new SSUI --routing=true --style=css --directory .

call echo installing pagination
call timeout 5
call npm install ngx-pagination

call echo installing Search filter
call timeout 5
call npm install ng2-search-filter

call echo installing Sorting Pipe
call timeout 5
call npm install ngx-order-pipe

call echo installing bootstrap and jquery
call timeout 5
call npm install bootstrap jquery

call echo installing angular web storage
call timeout 5
call npm install angular-web-storage

call echo Adding All Components in respective folders
call timeout 5
call ng g c header  --skip-tests
call ng g c footer  --skip-tests
call ng g c home  --skip-tests
call ng g c login  --skip-tests
call ng g c register  --skip-tests
call ng g c error  --skip-tests
call ng g c user/readstories  --skip-tests
call ng g c user/poststory  --skip-tests
call ng g c admin/approvestory  --skip-tests

call echo Adding All Services
call timeout 5
call ng g s services/api --skip-tests
call ng g s services/auth --skip-tests

call echo Adding All Models
call timeout 5
call ng g class models/story --skip-tests
call ng g class models/ssuser --skip-tests
call ng g class models/loginvm --skip-tests

call echo Building UI
call timeout 5
call ng build --output-path=wwwroot

call echo Running UI
call timeout 5
call ng serve -o
