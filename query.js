
//queryselector font color
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color ='green';
//queryselector backgroundColor
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor ='green';

var secondItem = document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.display = 'none';

document.querySelector('.list-group-item:nth-child(3)').style.display = "none";


var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = '#34eb4c';

}
//document.querySelectorAll('.newSearchResultsList li:hidden')