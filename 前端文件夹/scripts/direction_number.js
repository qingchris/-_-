// 点击查看学生信息页面跳转开始
var searchSystemOne=document.getElementById("search-system-1")
// 使用DOMContentLoaded事件来确保在尝试获取元素之前，DOM已经完全加载。
document.addEventListener('DOMContentLoaded', (event) => {  
  var searchSystemOne = document.getElementById("search-system-1");  
  if (searchSystemOne) {  
    searchSystemOne.onclick = function() {  
      window.location.href="search-student.html"
    };  
  } else {  
    console.error("元素未找到");  
  }  
});
// 点击查看学生信息页面跳转结束

// 点击增加信息页面跳转开始
document.addEventListener('DOMContentLoaded', (event) => {  
  var searchSystemFour = document.getElementById("search-system-4");  
  if (searchSystemFour) {  
    searchSystemFour.onclick = function() {  
      window.location.href="增加信息.html"
    };  
  } else {  
    console.error("元素未找到");  
  }  
});
// 点击增加信息页面跳转结束

document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".search-system-item");

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      // 移除其他元素的active类
      items.forEach(function (otherItem) {
        otherItem.classList.remove("active");
      });
      //  给被点击的元素添加active类
      this.classList.add("active");
    });
  });
});
console.log('&');
axios
    .get("http://101.200.73.250:31111/students/getinfo_all/")
    .then((response) => {
      // 处理成功情况
      let usernumber = response.data.length;
      let qz=0;
      let java=0;
      let sk=0;
      let cpu=0;
      let sj=0;
      let msc = 0;
      let dirction_bottom = document.getElementsByClassName('dirction-bottom');
      let total = document.getElementsByClassName('total')[0];
      for (let a = 0; a < usernumber; a++){
        if (response.data[a].student_Model.department == '全栈') {
          qz++;
        } else if (response.data[a].student_Model.department == 'Java') {
          java++;
        } else if (response.data[a].student_Model.department == '数据科学') {
          sk++;
        } else if (response.data[a].student_Model.department == 'CPU&OS') {
          cpu++;
        } else if (response.data[a].student_Model.department == '设计') {
          sj++;
        }else if (response.data[a].student_Model.department == '秘书处') {
          msc++;
        }
      };
      dirction_bottom[0].innerHTML = '所在人数：' + qz;
      dirction_bottom[1].innerHTML = '所在人数：' + java;
      dirction_bottom[2].innerHTML = '所在人数：' + sk;
      dirction_bottom[3].innerHTML = '所在人数：' + cpu;
      dirction_bottom[4].innerHTML = '所在人数：' + sj;
      dirction_bottom[5].innerHTML = '所在人数：' + msc;
      total.innerHTML = '总人数:' + usernumber;
    
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error);
    })
    .finally(function () {
      // 总是会执行
    });
