var n = 5
var star = ""
var starr = ""
for(var i=1;i<=n;i++){
    for(var j=1;j<=n-i;j++){
        star += " ";
    }
    for(var k=0;k<2*i-1;k++){
        
        star += "*"
    }
    star += "\n"
}
for (let i = 1; i <= n - 1; i++) {
    
    for (let j = 0; j < i; j++) {
      star += " ";
    }
  
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
      star += "*";
    }
    star += "\n";
  }
console.log(star)


   