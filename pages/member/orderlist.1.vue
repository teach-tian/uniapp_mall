<template>
	<view class="">
		<view class="statusTab">
			<view class="tabItem tabItemActive">
				全部订单
			</view>
			<view class="tabItem">
				待付款
			</view>
			<view class="tabItem">
				待收货
			</view>
			<view class="tabItem">
				待评价
			</view>
		</view>
		<view class="" style="height: 70rpx;">
			
		</view>
		<view class="orderlist">
			<view class="orderItem" v-for="(item,index) in orderlist" :key="index" @click="detailHref">
				<view class="orderStatus">
					订单日期:{{item.time}}
					<!-- 1表示待付款2表示已支付待发货，3：已发货待收货4：已收货待评价5订单完成6已取消 -->
					<text v-if="item.status==1">待付款</text>
					<text v-if="item.status==2">待发货</text>
					<text v-if="item.status==3">已发货</text>
					<text v-if="item.status==4">待评价</text>
					<text v-if="item.status==5">已完成</text>
					<text v-if="item.status==6">已取消</text>
				</view>
				<view class="orderShopList">
					<view class="shopListItem" v-for="(child,cindex) in item.shop" :key="cindex">
						<image :src="imgUrl+child.mainimage" mode=""></image>
						<view class="shopListContent">
							<view class="contentTitle">
								{{child.title}}
							</view>
							<view class="contentAttr">
								{{child.attr_0}}{{child.attr_1}}
							</view>
							<view class="contentPrice">
								¥{{child.price}}<text>×{{child.num}}</text>
							</view>
						</view>
					</view>
					
				</view>
				<view class="totalBox">
					共{{item.allnum}}件商品   合计：<text>¥{{item.allprice}}</text>(运费¥{{item.logisticsprice}})
				</view>
			</view>
		</view>
		<loading :status="status"></loading>
	</view>
</template>

<script>
	import loading from '@/components/uni-load-more.vue'
	export default{
		components:{
			loading,
		},
		data(){
			return{
				orderlist:[],
				imgUrl:this.$imgUrl,
				page:1,
				allpage:0,
				status:"loading"
			}
		},
		methods:{
			detailHref(){
				this.$href('./orderdetail')
			},
			getData(){
				this.$request('/member/orderlist',{
					status:1,
					page:this.page
				}).then(res=>{
					this.allpage=res.data.last_page
					setTimeout(()=>{
						this.orderlist=this.orderlist.concat(res.data.data)
						console.log(this.orderlist)
					},200)
					
				})
			}
			
		},
		onReachBottom(){
			console.log(this.page,this.allpage)
			if(this.page>=this.allpage){
				this.status="noMore"
				return ;
			}else{
				this.status="loading"
			}
			this.page++
			this.getData();
			console.log('我滚动到底部了')
		},
		onLoad() {
			this.getData();
		}
		
	}
</script>

<style>
	.statusTab{height: 70rpx;display: flex;line-height: 70rpx;
	position: fixed;width: 100%;background: #fff;z-index: 9;
	}
	.tabItem{width: 25%;text-align: center;
	font-size: 28rpx;color: #999;}
	.tabItemActive{color: #00c3f5;font-weight: bold;}
	
	.orderlist{}
	.orderItem{border-top:10rpx solid #f4f4f4}
	.orderStatus{height: 80rpx;display: flex;padding: 0 20rpx;align-items: center;
	justify-content: space-between;font-size: 28rpx;border-bottom: 1rpx solid #e5e5e5;}
	.orderStatus text{color: #00c3f5;}
	
	.shopListItem{display: flex;margin:0 20rpx;border-top:1rpx solid #e5e5e5;}
	.orderShopList .shopListItem:nth-of-type(1){border:none}
	.shopListItem image{width: 200rpx;height: 200rpx;margin:10rpx 0;}
	.shopListContent{flex: 1;}
	.shopListContent .contentTitle{font-size: 28rpx;line-height: 40rpx;
	overflow: hidden; margin-top:10rpx;
	 text-overflow: ellipsis;
	 display: -webkit-box;
	 -webkit-line-clamp: 2; 
	 -webkit-box-orient: vertical;}
	 .shopListContent .contentAttr{font-size: 24rpx;color: #999;line-height: 40rpx;}
		 .shopListContent .contentPrice{ line-height: 80rpx;
		 color: red;font-size: 28rpx;display: flex;justify-content: space-between;}
		 .shopListContent .contentPrice text{color: #999;}
		 .totalBox{font-size: 28rpx;line-height: 80rpx;padding: 0 20rpx;
		 border-top:1rpx solid #e5e5e5;text-align: right;}
		 .totalBox text{color: #00C2F5;}
</style>
