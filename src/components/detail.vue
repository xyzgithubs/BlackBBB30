<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
            <el-carousel height="312px">
        <el-carousel-item v-for="item in imglist" :key="item.id" class="slider-img">
        <img :src="item.thumb_path" alt="">
      </el-carousel-item>
    </el-carousel>
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <div class="el-input-number el-input-number--small">
                          <span role="button" class="el-input-number__decrease is-disabled">
                            <i class="el-icon-minus"></i>
                          </span>
                          <span role="button" class="el-input-number__increase">
                            <i class="el-icon-plus"></i>
                          </span>
                          <div class="el-input el-input--small">
                            <!---->
                            <input
                              autocomplete="off"
                              size="small"
                              type="text"
                              rows="2"
                              max="60"
                              min="1"
                              validateevent="true"
                              class="el-input__inner"
                              role="spinbutton"
                              aria-valuemax="60"
                              aria-valuemin="1"
                              aria-valuenow="1"
                              aria-disabled="false"
                            >
                            <!---->
                            <!---->
                            <!---->
                          </div>
                        </div>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <!-- tab栏类似   当索引为1显示1内容  -->
                  <li>
                    <a @click="index=1" href="javascript:;" :class="{selected:index==1}">商品介绍</a>
                  </li>
                  <li>
                    <a @click="index=2 " href="javascript:;" :class="{selected:index==2}">商品评论</a>
                  </li>
                </ul>
              </div>
              <!-- 内容 -->
              <div class="tab-content entry" v-html="goodsinfo.content" v-show="index==1"></div>
              <div class="tab-content" v-show="index==2">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model="comment"
                          
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="postComment"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(item, index) in commentList" :key="index">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{item.user_name}}</span>
                          <span>{{item.reply_time |formatTime}}</span>
                        </div>
                        <p>{{item.content}}</p>
                      </div>
                    </li>
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <div id="pagination" class="digg">   
                                   <!-- element -->
                      <span class="demonstration">完整功能</span>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="pageIndex"
                      :page-sizes="[5, 10, 15, 20]"
                      :page-size="pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalcount">
                    </el-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="(item, index) in hotgoodslist " :key="index">
                    <div class="img-box">
                      <a href="#/site/goodsinfo/90" >
                        <img :src="item.img_url">
                      </a>
                    </div>
                    <div class="txt-box">
                      <a href="#/site/goodsinfo/90" class>{{item.title}}</a>
                      <span>{{item.add_time | formatTime }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// // 导入axios
// import axios from "axios";

// //导入moment
// import moment from "moment";

export default {
  name: "detail",
  data() {
    return {
      // 商品详情
      goodsinfo: {},
      // 热卖
      hotgoodslist:[],
      // 图片
      imglist: [],
      // tab栏索引
      index: 1,
      //输入的内容
      comment:'',

      //页码
      pageIndex:1,
      //页容量
      pageSize:10,

      //总评论数
      totalcount:0,

      //评论的数组
      commentList:[]
    };
  },
 methods: {
    postComment(){
    if(this.comment===''){
       this.$message.error("非法输入!!!");
    }else{
        // 成功调接口
        this.$axios.post(`/site/validate/comment/post/goods/${this.$route.params.id}`,{
            commenttxt:this.comment
        }).then(res=>{
            // console.log(res);
            if(res.data.status===0){
              this.$message.success(res.data.message);
              //清空
              this.comment = '';
              //重新渲染
              this.getComment()
              //并跳回第一页
              this.pageIndex =1
            }
            
        })
    }
 },

 getComment(){
   //调接口
   this.$axios.get(`site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res=>{
     console.log(res);
      this.totalcount = res.data.totalcount
      this.commentList = res.data.message
   })
 },
      // element方法
      // 页容量改变
        handleSizeChange(size) {
        console.log(size);
        this.pageSize = size
        //改变后重新渲染
        this.getComment();
      },
      // 页码改变
      handleCurrentChange(current) {
        console.log(current);
        this.pageIndex = current
        //改变后重新渲染
        this.getComment(); 
      }
    },


  created() {
    // console.log(this.route);
    // console.log(this.$route.params.id);
    // 获取数据  导入 axios
    this.$axios
      .get(
        `/site/goods/getgoodsinfo/${
          this.$route.params.id
        }`
      )
      .then(res => {
        // console.log(res); 
        // 渲染this.
        this.goodsinfo = res.data.message.goodsinfo;
        this.hotgoodslist = res.data.message.hotgoodslist;
        this.imglist = res.data.message.imglist;
      });

      //获取评论
      this.getComment()

  },
  // //过滤器
  // filters: {
  //   formatTime(value) {
  //     // return value.split('T')[0]
  //     // 使用moment处理
  //     return moment(value).format("YYYY年MM月DD日");
  //   }
  // },

};
</script>

<style>
.tab-content img {
  display: block;
  width: 100%;
}
.pic-box {
    width: 320px;
}
.pic-box img{
    width: 100%;
}
</style>
