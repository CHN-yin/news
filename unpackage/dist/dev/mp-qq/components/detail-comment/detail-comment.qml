<view><view class="comment-box__head"><image class="comment-box__head__img" src="{{comment.author.avatar}}" mode="aspectFit"></image><view class="comment-box__head__info"><view class="comment-box__head__name">{{comment.author.author_name}}</view><view class="comment-box__head__time">{{$root.f0}}</view></view></view><view class="comment-box__content"><view><block qq:if="{{is_reply}}"><text><text class="comment-box__content__to-name">回复</text>{{comment.to+'：'}}</text></block>{{''+comment.content+''}}</view><view data-event-opts="{{[['tap',[['handleReply',[['o',['comment',comment],['is_reply',is_reply]]]]]]]}}" class="comment-box__btn" bindtap="__e">回复</view><block qq:for="{{comment.replys}}" qq:for-item="item" qq:for-index="__i0__" qq:key="_id"><view class="comment-box__reply"><detail-comment vue-id="{{'18f3b12e-1-'+__i0__}}" is_reply="{{true}}" comment="{{item}}" data-event-opts="{{[['^reply',[['handleReply']]]]}}" bind:reply="__e" bind:__l="__l"></detail-comment></view></block></view><block qq:if="{{!is_reply}}"><view class="comment-box__line"></view></block></view>