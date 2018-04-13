function is_leap(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function no_of_days(year, month){
    if(month == 9 || month == 4 || month == 6 || month == 11)
        return 30;
    if(month != 2)
        return 31;
    return 28 + is_leap(year);
}

function new_years_day(year) {
    var daynumber = 1
    for(var i=1900; i<year; i++)
        daynumber+=365+is_leap(i);
    return daynumber % 7;
}

function first_day(year, month) {
    var daynumber = new_years_day(year)
    for(var i=1; i<month; i++)
        daynumber+=no_of_days(year, i);
    daynumber %= 7;
    return daynumber;
}

function setUp(){
    var month = document.getElementById("months").selectedIndex + 1;
    var year = parseInt(document.getElementById("year").value);
    var numOfDays = no_of_days(year,month);
    var startDay = first_day(year,month);
    
    var html = "<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";
    
    for(var i = 0; i < numOfDays+startDay; i++){
        if(i%7 == 0)
            html+="</tr><tr>";
        if(i<startDay)
            html+="<td></td>";
        else{
            html+="<td>"+(i - startDay+1)+"</td>";
        }
    }
    
    html += "</table>";
    document.getElementById("calendar").innerHTML = html;
}

