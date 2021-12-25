
//Anonymous function:
//A)Print odd numbers in an array

var odd_number=function(a){
    var  res="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            res+=a[i]+" ";
        }
    }
    res+=a[a.length-1];
    return res;
}
console.log(odd_number([1,2,3,4,5,6,7,8,9,10]))
//IIF

(function(a){
    var  res="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            res+=a[i]+" "
        }
    }
    res+=a[a.length-1]
    console.log(res);
})([1,2,3,4,5,6,7,8,9,10]);

//B)Convert all the strings to title caps in a string array
//Anonymous

 var title_caps=function (string) {
    var data1 = string.toLowerCase().split(" ");
    for(var i = 0; i< data1.length; i++){
       data1[i] = data1[i][0].toUpperCase() + data1[i].slice(1);
    }
 data1.join(" ");
 var res="";
 for(let i=0;i<data1.length-1;i++)
 {
     res+=data1[i]+" "
 }
 res+=data1[data1.length-1]
 return res;
 }
 console.log(title_caps("happy new year"));

//IIF
(function (title_caps) {
    var data = title_caps.toLowerCase().split(" ");
    for(var i = 0; i< data.length; i++){
       data[i] = data[i][0].toUpperCase() + data[i].slice(1);
    }
 data.join(" ");
 var res="";
 for(let i=0;i<data.length-1;i++)
 {
     res+=data[i]+" "
 }
 res+=data[data.length-1]
 console.log(res);
})("happy new year");


//C)Sum of all numbers in an array
//Anonymous function:
sum_of_array =function(data){
    var  res=0;
    for(i=0;i<data.length;i++)
    {
            res+=data[i]
    }
    return res;
 
}
console.log(sum_of_array([1,2,3,4,5,6,7,8,9,10]))

//IIF
(function(sum_of_array){
    var  res=0;
    for(i=0;i<sum_of_array.length;i++)
    {
            res+=sum_of_array[i]
    }
    console.log(res);
})([1,2,3,4,5,6,7,8,9,10]);


//D) Return all the prime numbers in an array
// Anonymous
var prime_of_array =function(data){
    var  res="";
    for(i=0;i<data.length;i++)
    {
        var count=0;
        for(j=1;j<=data[i];j++)
        {
            if(data[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=data[i]+" "
        }
    }
    return res;
 
}
console.log(prime_of_array([1,2,3,4,5,6,7,8,9,10]))

//IIF
(function(data){
    var  res="";
    for(i=0;i<data.length;i++)
    {
        var count=0;
        for(j=1;j<=data[i];j++)
        {
            if (data[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=data[i]+" "
        }
    }
    console.log(res);
 
})([1,2,3,4,5,6,7,8,9,11])

//E)Return all the palindromes in an array 
//Anonymous
var palindrome=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palindrome([10,21,22,33,55,50]))

//IIF
(function(data){
    var res="";
    var ans="";
    for(i=0;i<data.length;i++)
    {
        res+=data[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    console.log(ans);
 
}) ([10,21,22,33,55,50]);

//F)Return median of two sorted arrays of same size
//Anonymous
var arr=function(x,y){
    var c=[];
    var n=x.length;
    var p=y.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(x[i]<y[j])
        {
            c.push(x[i])
            i++
        }
        else
        {
            c.push(y[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(x[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(y[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;
    
}
console.log(arr([1,2,3,4],[5,6,7,8]));


//IIF
(function(x,y){
    var c=[];
    var n=x.length;
    var p=y.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(x[i]<y[j])
        {
            c.push(x[i])
            i++
        }
        else
        {
            c.push(y[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(x[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(y[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     console.log(med);
    })([1,2,3,4],[5,6,7,8])

//G)Remove duplicates from an array

//Anonymous
var duplicate=function(data){
    var data1=[];
    var n=data.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(data[i]===data[j])
            {
                delete data[j]
            }
        }
    }
    for(let i=0;i<data.length;i++)
    {
        if(data[i]%10===Math.floor(data[i]%10))
        {
            data1.push(data[i])
        }
    }
    let c=""
    for(let i=0;i<data1.length-1;i++)
     {
         c+=data1[i]+" ";
    }
    c+=data1[data1.length-1];
     return c;
    
}
console.log(duplicate([1,2,3,4,5,6,6,5,4,3,2,1])); 

//IIF
(function(data){
    var data1=[];
    var n=data.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(data[i]===data[j])
            {
                delete data[j]
            }
        }
    }
    for(let i=0;i<data.length;i++)
    {
        if(data[i]%10===Math.floor(data[i]%10))
        {
            data1.push(data[i])
        }
    }
    let c=""
    for(let i=0;i<data1.length-1;i++)
     {
         c+=data1[i]+" ";
    }
    c+=data1[data1.length-1];
     console.log(c);
    
} )(([1,2,3,4,5,6,6,5,4,3,2,1]));

//H)Rotate an array by k times
//Anonymous
var rotate=function(array,a){
    n=array.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+a)%(n)]=array[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5],4))

//IIF
(function(array,a){
    n=array.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+a)%(n)]=array[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
}) ([1,2,3,4,5],4);

//3)Programs in arrow functions

//a) Print odd numbers in an array
var odd=(a)=>{
    var  res="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            res+=a[i]+" ";
        }
    }
    res+=a[a.length-1];
    return res;
}
console.log(odd([1,2,3,4,5,6,7,8,9]))

//b) Convert all the strings to title caps in a string array
var data=(string)=> {
    var data1 = string.toLowerCase().split(" ");
    for(var i = 0; i< data1.length; i++){
       data1[i] = data1[i][0].toUpperCase() + data1[i].slice(1);
    }
 data1.join(" ");
 var res="";
 for(let i=0;i<data1.length-1;i++)
 {
     res+=data1[i]+" "
 }
 res+=data1[data1.length-1]
 return res;
 } 
 console.log(data("happy new year"));

//c)Sum of all numbers in an array

sum =(data)=>{
    var  res=0;
    for(i=0;i<data.length;i++)
    {
            res+=data[i]
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]))
//d)Return all the prime numbers in an array

var sum =(data)=>{
    var  res="";
    for(i=0;i<data.length;i++)
    {
        var count=0;
        for(j=1;j<=data[i];j++)
        {
            if(data[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=data[i]+" "
        }
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]))

//e)Return all the palindromes in an array

var palindrome=(a)=>{
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palindrome([10,21,22,33,55,50]))

