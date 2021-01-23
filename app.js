
var Name_of_Images =[];
var Images_arr =[];
var view=0;
var vote=0;
function Images_of_product(img_name,img_src){
    this.img_src = img_src;
    Name_of_Images.push(img_name);
    Images_arr.push(img_src);
}

var leftimg;
var centerimg;
var rightimg;
var maximum_of_clicks=25;
var num_of_clicks=0;
var all_of_imgs= document.getElementById('all_of_imgs');
var firstimg =  document.getElementById('firstimg');
var secondimg = document.getElementById('secondimg');
var thirdimg = document.getElementById('thirdimg');
var result =  document.getElementById('final_result');
var form = document.getElementById('form');
var button_result = document.getElementById('button_result');
    



new Images_of_product('bag','img/bag.jpg');
new Images_of_product('banana','img/banana.jpg');
new Images_of_product('bathroom','img/bathroom.jpg');
new Images_of_product('boots','img/boots.jpg');
new Images_of_product('breakfast','img/breakfast.jpg');
new Images_of_product('bubblegum','img/bubblegum.jpg');
new Images_of_product('chair','img/chair.jpg');
new Images_of_product('cthulhu','img/cthulhu.jpg');
new Images_of_product('dog-duck','img/dog-duck.jpg');
new Images_of_product('dragon','img/dragon.jpg');
new Images_of_product('pen','img/pen.jpg');
new Images_of_product('pet-sweep','img/pet-sweep.jpg');
new Images_of_product('scissors','img/scissors.jpg');
new Images_of_product('shark','img/shark.jpg');
new Images_of_product('sweep','img/sweep.png');
new Images_of_product('tauntaun','img/tauntaun.jpg');
new Images_of_product('unicorn','img/unicorn.jpg');
new Images_of_product('usb','img/usb.gif');
new Images_of_product('water-can','img/water-can.jpg');
new Images_of_product('wine-glass','img/wine-glass.jpg');



function random_images(){
    return Math.floor(Math.random()*20);

}




function render() {
    leftimg = random_images();
   
do
    {
    rightimg = random_images();
    centerimg = random_images();
    } 

while (leftimg===rightimg ||leftimg===centerimg||centerimg===rightimg);

firstimg.setAttribute("src",Images_arr[leftimg]);

Images_arr[leftimg]

secondimg.setAttribute("src",Images_arr[centerimg]);

Images_arr[centerimg]

thirdimg.setAttribute("src",Images_arr[rightimg]);

Images_arr[rightimg]
}

render();





function User_selection()
{
    num_of_clicks= num_of_clicks+1;
    view++;

    if (num_of_clicks < maximum_of_clicks){
       
        if(event.target.id==='firstimg')
        {
           
            Images_arr[leftimg];
            vote++;
            render();
        }


    else if(event.target.id ==='secondimg')
    {
        Images_arr[centerimg];
        vote++;
        render();
    }
    
    else if(event.target.id ==='thirdimg')
    {
        Images_arr[rightimg];
        vote++;
        render();

    }
    
    else
    {
        all_of_imgs.removeEventListener('click',User_selection);
        
    }
}
}

function Results() {
    

        for (var x = 0; x< Images_arr.length; x++) 
        {
            var finalresult=document.createElement('li');

            finalresult.textContent= Name_of_Images[x] + '   click    ' +  
            
            num_of_clicks + '   and number of views =   '+ 
            
            view +  '   number of votes   '+ vote+
            
            '   percentage for this image    '+
            
            (vote * 100 / view)+'%';

            
            result.appendChild(finalresult);
        }       
    }
    
// function Rounds(event) {
        
//         maximum_of_clicks = event.target.round_number.value;
//}

all_of_imgs.addEventListener('click',User_selection);

button_result.addEventListener('click',Results);



