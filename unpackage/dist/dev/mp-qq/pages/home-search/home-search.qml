<view class="wrapper data-v-88a65998"><nav-bar vue-id="88a68104-1" is_search="{{true}}" value="{{value}}" data-event-opts="{{[['^searchBtn',[['searchBtn']]],['^input',[['__set_model',['','value','$event',[]]],['inputVal']]]]}}" bind:searchBtn="__e" bind:input="__e" class="data-v-88a65998" bind:__l="__l"></nav-bar><block qq:if="{{is_history}}"><view class="content data-v-88a65998"><view class="content__header data-v-88a65998"><view class="content__header__title data-v-88a65998">搜索历史</view><view data-event-opts="{{[['tap',[['handleRemove',['$event']]]]]}}" class="content__header__clear data-v-88a65998" bindtap="__e">清空</view></view><block qq:if="{{historyList.length>0}}"><view class="content__list data-v-88a65998"><block qq:for="{{historyList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view data-event-opts="{{[['tap',[['handleHistory',['$0'],[[['historyList','',index]]]]]]]}}" class="content__list__item data-v-88a65998" bindtap="__e">{{item}}</view></block></view></block><block qq:else><view class="content__null data-v-88a65998">没有搜索历史</view></block></view></block><block qq:else><view class="content data-v-88a65998"><block qq:if="{{loading}}"><uni-load-more vue-id="88a68104-2" status="loading" iconType="snow" class="data-v-88a65998" bind:__l="__l"></uni-load-more></block><block qq:if="{{searchList.length>0}}"><list-scroll vue-id="88a68104-3" class="data-v-88a65998" bind:__l="__l" vue-slots="{{['default']}}"><block qq:for="{{searchList}}" qq:for-item="item" qq:for-index="__i0__" qq:key="_id"><list-cart vue-id="{{('88a68104-4-'+__i0__)+','+('88a68104-3')}}" item="{{item}}" class="data-v-88a65998" bind:__l="__l"></list-cart></block></list-scroll></block><block qq:if="{{searchList.length<=0&&!loading}}"><view class="content__null data-v-88a65998">搜索无结果！</view></block></view></block></view>