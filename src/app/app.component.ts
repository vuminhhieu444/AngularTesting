import { Component } from '@angular/core';




function tinhtongbai1(x:number, n:number):number {
  var tong=0;
  for (let index = 1; index <= n; index++) {
    tong+=Math.pow(x,index);
  }
  return tong;
}

function giaithua(n:number):number {
  var giaithua=1;
  for (let index = 1; index <= n; index++) {
    giaithua*=index;
  }
  return giaithua;
}
function bai2(x:number, n:number):number {
  var tong=0;
  for (let index = 1; index <= n; index++) {
    tong+=Math.pow(-1,index)*Math.pow(x,index)/giaithua(index);
  }
  return tong;
}


let ds:any = [{hoten: 'Nguyen Thi Mai', quequan: 'Hai Phong',diemthi:9},{hoten: 'Tran Thi Anh', quequan: 'Hai Phong',diemthi:9},{ hoten: 'Hoang Thi Dung',quequan: 'Ha Noi', diemthi:8.3}];
function TenHo(x:string) {
  let n =  x.lastIndexOf(' ');
  return x.substr(n+1)+' ' + x.substr(0,n);
 }
ds =  ds.sort((x:any,y:any) => TenHo(x.hoten) > TenHo(y.hoten)?1:-1);
function bai4() {
  var arr=ds.filter(
    function (item:any) {
      return item.quequan=='Hai Phong' && item.diemthi>8;
    }
  )
  return arr;
}
var mang:number[]=[1,2,3,4,5,6,7,8,9,12,14,15,25,16];
function bai5(a:number):boolean {
  var b:number=Math.sqrt(a);
  b=Math.floor(b);
  if(a/b==b){
    return true;
  }
  return false;
}
// var ar:any=[];
// for (let index = 0; index < mang.length; index++) {
//   if(bai5(mang[index])==true){
//     ar=mang.unshift(mang[index])
//   }

// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BaithAngular';
  bai1=tinhtongbai1(3,5);
  bai2=bai2(2,3);
  bai3=ds;
  bai4=bai4();
  // bai5=ar;
}
