<view class="laber data-v-03eb5dcc"><view class="laber-box data-v-03eb5dcc"><view class="laber-box__title data-v-03eb5dcc"><view class="laber-box__title__left data-v-03eb5dcc">我的标签</view><view data-event-opts="{{[['tap',[['handleEdit',['$event']]]]]}}" class="laber-box__title__right data-v-03eb5dcc" bindtap="__e">{{is_edit?'编辑':'提交'}}</view></view><view class="laber-box__content data-v-03eb5dcc"><block qq:if="{{loading}}"><uni-load-more class="loading data-v-03eb5dcc" vue-id="03eb8538-1" status="loading" iconType="snow" bind:__l="__l"></uni-load-more></block><block qq:for="{{my_laberList}}" qq:for-item="item" qq:for-index="index" qq:key="_id"><view class="laber-box__content__item data-v-03eb5dcc">{{''+item.name+''}}<block qq:if="{{!is_edit}}"><view data-event-opts="{{[['tap',[['handleDel',[index]]]]]}}" class="laber-box__content__icon-del iconfont data-v-03eb5dcc" bindtap="__e"></view></block></view></block><block qq:if="{{my_laberList<=0&&!loading}}"><view class="laber-box__content__null data-v-03eb5dcc">暂无标签</view></block></view></view><view class="laber-box data-v-03eb5dcc"><view class="laber-box__title data-v-03eb5dcc"><view class="laber-box__title__left data-v-03eb5dcc">标签推荐</view></view><view class="laber-box__content data-v-03eb5dcc"><block qq:if="{{loading}}"><uni-load-more class="loading data-v-03eb5dcc" vue-id="03eb8538-2" status="loading" iconType="snow" bind:__l="__l"></uni-load-more></block><block qq:for="{{sell_laberList}}" qq:for-item="item" qq:for-index="index" qq:key="_id"><view class="laber-box__content__item data-v-03eb5dcc">{{''+item.name+''}}<block qq:if="{{!is_edit}}"><view data-event-opts="{{[['tap',[['handleAdd',[index]]]]]}}" class="laber-box__content__icon-add iconfont data-v-03eb5dcc" bindtap="__e"></view></block></view></block><block qq:if="{{sell_laberList<=0&&!loading}}"><view class="laber-box__content__null data-v-03eb5dcc">暂无标签</view></block></view></view></view>