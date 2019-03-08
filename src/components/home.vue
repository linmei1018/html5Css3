<template>
  <div class="Home">
    <!--<div class="scrollbox"><a class="scrollTop" href="javascript:;">回到顶部</a>	</div>-->
    <transition name="slide-fade">
      <div class="slideInBox" id="slideInBox"  v-show="slideInbox">
        <Icon type="md-close" class="close" @click="close" size="24" />
        <ul>
          <li v-for="(item,index) in navList" :key="index">{{ item }}</li>
        </ul>
      </div>
    </transition>
    <header>
      <section class="sub_main topBar">
        <h3>HTML5&CSS3</h3>
        <div class="nav_button" ><Icon type="md-menu" size="24" @click="navBtn" /></div>
        <nav>
            <div v-for="(item,index) in navList" :key="index">{{ item }}</div>
        </nav>
      </section>
    </header>
    <!--轮播图begin-->
    <div class="main_carousel ">
      <Carousel autoplay v-model="value2" loop :autoplay-speed="autoplaySpeed" :height="height">
        <CarouselItem>
          <div class="demo-carousel"><img src="../assets/banner1.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel"><img src="../assets/banner2.jpg" /></div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel"><img src="../assets/banner3.jpg" /></div>
        </CarouselItem>
      </Carousel>
    </div>
    <!--轮播图end-->
    <!--主要内容begin-->
    <div class="main_content">
      <!--HTML5 begin-->
      <section class="html5">
        <h2>HTML5</h2>
        <p>
          HTML5赋予网页更好的意义和结构。更加丰富的标签将随着对RDFa的，微数据与微格式等方面的支持，构建对程序、对用户都更有价值的数据驱动的Web。
        </p>
      </section>
      <section class="captionList">
        <div class="listLeft">
          <figure v-for="(left,leftIndex) in html5LeftList" :key="leftIndex">
            <Icon :type="left.img" size="40" style="color:#ccc" />
            <div class="captionBox">
              <h3>{{left.title}}</h3>
              <p>{{left.text}}</p>
            </div>
          </figure>
        </div>
        <div class="listRight">
          <figure v-for="(right,rightIndex) in html5RightList" :key="rightIndex">
            <Icon :type="right.img" size="40" style="color:#ccc" />
            <div class="captionBox">
              <h3>{{ right.title }}</h3>
              <p>{{ right.text }}</p>
            </div>
          </figure>
        </div>
      </section>
      <!--HTML5 end-->
      <!--CSS3 begin-->
      <section>
        <section class="css3Title">
          <h2>CSS3</h2>
          <div class="textBox">
            <p>CSS即层叠样式表（Cascading StyleSheet）。在网页制作时采用层叠样式表技术，可以有效地对页面的布局、字体、颜色、背景和其它效果实现更加精确的控制。只要对相应的代码做一些简单的修改，就可以改变同一页面的不同部分，或者页数不同的网页的外观和格式。</p>
          </div>
        </section>
        <section class="rotateBox">
          <ul class="rotateList" v-for="(css3,css3Index) in css3RotateList" :key="css3Index">
            <li v-for="(item,index) in css3.rotateList" :key="index">
              <a href="javascript:;">
                <img :src="item.img">
                <p>{{ item.text }}</p>
              </a>
            </li>
          </ul>
        </section>
      </section>
      <!--CSS3 end-->
      <section class="table">
        <h2>flex</h2>
        <p>
          这是一款多功能表格，有搜索、筛选、排序、分页、新增、删除、编辑（表格行内编辑）、详情（跳转到详情页面）及render函数的用法
        </p>
      </section>

    </div>
  </div>
</template>
<script>
  export default {
    name: "home",
    data(){
      return{
        user:sessionStorage.user,
        navList:[ 'HTML5','CSS3','flex','responsive','Number','swiper','form' ],  //头部导航
        slideInbox:false,
        //轮播图
        value2: 0,
        autoplaySpeed:3000,
        height:600,
        //HTML5列表数据
        html5LeftList:[
          {
            img:'ios-home-outline',
            title:'Main',
            text:'main元素中的内容对于文档来说应当是唯一的。它不应包含在文档中重复出现的内容，比如侧栏、导航栏、版权信息、站点标志或搜索表单。'
          },
          {
            img:'ios-list-box-outline',
            title:'Section',
            text:'section标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。'
          },
          {
            img:'ios-list',
            title:'Nav',
            text:'nav标签定义导航链接的部分,如果文档中有“前后”按钮，则应该把它放到nav元素中'
          },
          {
            img:'ios-paper-outline',
            title:'Article',
            text:'article标签定义外部的内容。外部内容可以是来自一个外部的新闻提供者的一篇新的文章。'
          }
        ],
        html5RightList:[
          {
            img:'md-reorder',
            title:'Aside',
            text:'aside标签定义 article 以外的内容。aside 的内容应该与 article 的内容相关。'
          },
          {
            img:'md-easel',
            title:'Figure',
            text:'figure标签规定独立的流内容（图像、图表、照片、代码等等）。figure元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响'
          },
          {
            img:'logo-html5',
            title:'Header',
            text:'header标签定义文档的页眉介绍信息。'
          },
          {
            img:'ios-water-outline',
            title:'Footer',
            text:'footer标签定义文档或节的页脚。footer元素应当含有其包含元素的信息。页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。'
          }
        ],
        //css3列表数据
        css3RotateList:[
          {
            rotateList:[
              {
                img: require('../assets/car1.jpg'),
                text:'我是第一张图片的说明文字'
              },{
                img: require('../assets/car2.jpg'),
                text:'我是第二张图片的说明文字'
              },{
                img: require('../assets/car3.jpg'),
                text:'我是第三张图片的说明文字'
              }
            ]
          },
          {
            rotateList:[
              {
                img: require('../assets/car4.jpg'),
                text:'我是第一张图片的说明文字'
              },{
                img: require('../assets/car5.jpg'),
                text:'我是第二张图片的说明文字'
              },{
                img: require('../assets/car6.jpg'),
                text:'我是第三张图片的说明文字'
              }
            ]
          },
          {
            rotateList:[
              {
                img: require('../assets/car7.jpg'),
                text:'我是第一张图片的说明文字'
              },{
                img: require('../assets/car8.jpg'),
                text:'我是第二张图片的说明文字'
              },{
                img: require('../assets/car9.jpg'),
                text:'我是第三张图片的说明文字'
              }
            ]
          }
        ],

      }
    },
    methods: {
      //顶部菜单滑入
      navBtn() {
        this.slideInbox = true;

      },
      close() {
        this.slideInbox = false;
      },

    },


  }
</script>
<style lang="less" scoped>
  li{
    list-style:none;
  }
  .sub_main{width:100%;}
  .slideInBox {
    position: fixed;
    z-index: 3;
    right: 0;
    width: 40%;
    height: 100%;
    background: #000;
    .close{
      display: flex;
      margin: 15px 15px 0 auto;
      transition: all 0.3s;
      width:25px;
      height:25px;
      cursor:pointer;
    }
    ul{
      display: flex;
      flex-direction: column;
      li {
        color: #7f7f67;
        font-size: 16px;
        padding-left: 30px;
        line-height: 30px;
        list-style:none;
      }
      li:hover{color:#A7c7c7;}
    }
  }
  header{
    height:80px;
    line-height:80px;
    padding:0 10%;
    box-shadow: 0 1px 4px #ccc;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    background: #fff;
    z-index: 2;
    .topBar{
      display:flex;
      align-items:center;
    }

    h3{
      font-size:26px;

    }
    *{
      transition: all 0.5s;
    }
    nav{
      margin-left:auto;
      div{
        float:left;
        margin-right: 20px;
        font-size: 16px;
        color: #000;
      }
    }
    .nav_button{
      display:none;
    }
  }
  .main_carousel{
    padding-top:80px;
    width:100%;
  }
  .main_content{
    padding:100px 10%;
    .html5,.table{
      h2{
        display: inline-block;
        font-size: 32px;
        color: #000;
        border-bottom: #ff5126 solid 2px;
        padding-bottom: 15px;
      }
      p{
        width: 40%;
        padding: 30px 0 80px 0;
        font-size: 18px;

      }
    }
    .captionList{
      width: 100%;
      display: flex;
      .listLeft{
        margin-right:50px;
      }
      .listLeft,.listRight{
        margin-right:50px;
        flex: 1;
        display: flex;
        flex-direction: column;
        figure{
          display: flex;
          height: 200px;
          .captionBox{
            margin-left:40px;
            h3{
              color: #ff5126;
              font-size: 22px;
            }
            p{
              color: #999;
              font-size: 16px;
              line-height: 30px;
            }
          }
        }
      }
    }
    .css3Title {
      padding-top: 80px;
      width: 100%;
      text-align: center;
      h2 {
        display: inline-block;
        font-size: 32px;
        color: #000;
        border-bottom: #ff5126 solid 2px;
        padding-bottom: 15px;
      }
      .textBox {
        display: flex;
        justify-content: center;
        p {
          width: 65%;
          color: #333;
          font-size: 16px;
          line-height: 30px;
          margin: 20px 0 50px 0;
        }
      }
    }
    .rotateBox {
      display: flex;
      flex-direction: column;
      padding-bottom: 80px;
      .rotateList {
        display: flex;
        li {
          flex: 1;
          min-height: 280px;
          margin: 10px;
          perspective: 1200px;
          position: relative;
          a {
            position: absolute;
            transform-style: preserve-3d;
            transition: all 0.8s;
            img {
              width: 100%;
              border-radius: 15px;
              max-height: 270px;
              vertical-align:top;
            }
            p {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              transform: rotateY(180deg) translateZ(1px);
              backface-visibility: hidden;
              opacity: 0.6;
              transition: 1s .5s opacity;
              font-size: 25px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #000;
            }
          }
        }
      }
    }

   
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  
  .content{
    padding-top:100px;

  }

  @media (min-width: 1140px) {
    .sub_main {
      width: 1140px;
      margin: 0 auto;
    }

  }
  @media(max-width:1140px){
    .main_content .html5 p{width:100%;}

  }
  @media (min-width: 750px){
    header nav {
      margin-left: auto;
    }
  }
  @media (min-width: 750px) {
    header nav div:hover, header nav div.selected {
      color: #FF5126;
      cursor:pointer;
    }

  }
  @media(max-width:750px){	/*顶部菜单收缩断点*/
    header .nav_button{margin-left:auto; padding-right:20px; display:block}
    header nav{display:none;}
    .captionList {
      flex-direction: column;
    }
    .listLeft {
      margin-right: 10px;
    }
    .main_content .captionList .listLeft figure {
      height: 220px;
    }
    .captionBox{
      margin-left:10px;
    }


    .main_content .css3Title .textBox p {
      width: 85%;
    }
    .main_content .rotateBox .rotateList {
      flex-direction: column;
    }
    .main_content .rotateBox .rotateList li {
      min-height: 450px;
      width: 90%;
      margin: 20px auto;
    }
    .main_content .rotateBox .rotateList li a img {
      max-height: 450px;
    }
    .main_content{
      width: 1140px;
      margin: 0 auto;
      padding:100px 0;
    }
  }
  @media(max-width:900px){
    header{padding:0;padding-left:10px;}
    .main_content{
      padding:100px 10px;
    }
  }

</style>
