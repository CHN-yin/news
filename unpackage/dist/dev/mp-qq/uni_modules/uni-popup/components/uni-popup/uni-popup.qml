<block qq:if="{{showPopup}}"><view class="{{['uni-popup',popupstyle,isDesktop?'fixforpc-z-index':'']}}"><view data-event-opts="{{[['touchstart',[['touchstart',['$event']]]]]}}" bindtouchstart="__e"><block qq:if="{{maskShow}}"><uni-transition vue-id="7c43c065-1" name="mask" mode-class="fade" styles="{{maskClass}}" duration="{{duration}}" show="{{showTrans}}" data-event-opts="{{[['^click',[['onTap']]]]}}" bind:click="__e" bind:__l="__l"></uni-transition></block><uni-transition vue-id="7c43c065-2" mode-class="{{ani}}" name="content" styles="{{transClass}}" duration="{{duration}}" show="{{showTrans}}" data-event-opts="{{[['^click',[['onTap']]]]}}" bind:click="__e" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['clear',['$event']]]]]}}" class="{{['uni-popup__wrapper',popupstyle]}}" style="{{'background-color:'+(bg)+';'}}" bindtap="__e"><slot></slot></view></uni-transition></view></view></block>