<block qq:if="{{node.node=='element'}}"><block><block qq:if="{{node.tag=='button'}}"><button class="{{[node.classStr]}}" style="{{(node.styleStr)}}" type="default" size="mini"><weixin-parse-template vue-id="f170f344-1" node="{{node}}" bind:__l="__l"></weixin-parse-template></button></block><block qq:else><block qq:if="{{node.tag=='a'}}"><view class="{{[node.classStr]}}" style="{{(node.styleStr)}}" data-href="{{node.attr.href}}" data-event-opts="{{[['tap',[['wxParseATap',['$0','$event'],['node.attr']]]]]}}" bindtap="__e"><block qq:for="{{node.nodes}}" qq:for-item="node" qq:for-index="index" qq:key="index"><block><weixin-parse-template vue-id="{{'f170f344-2-'+index}}" node="{{node}}" bind:__l="__l"></weixin-parse-template></block></block></view></block><block qq:else><block qq:if="{{node.tag=='li'}}"><view class="{{[node.classStr]}}" style="{{(node.styleStr)}}"><block qq:for="{{node.nodes}}" qq:for-item="node" qq:for-index="index" qq:key="index"><block><weixin-parse-template vue-id="{{'f170f344-3-'+index}}" node="{{node}}" bind:__l="__l"></weixin-parse-template></block></block></view></block><block qq:else><block qq:if="{{node.tag=='table'}}"><weixin-parse-table class="{{[node.classStr]}}" style="{{(node.styleStr)}}" vue-id="f170f344-4" node="{{node}}" bind:__l="__l"></weixin-parse-table></block><block qq:else><block qq:if="{{node.tag=='br'}}"><text>\n</text></block><block qq:else><block qq:if="{{node.tag=='video'}}"><weixin-parse-video vue-id="f170f344-5" node="{{node}}" bind:__l="__l"></weixin-parse-video></block><block qq:else><block qq:if="{{node.tag=='audio'}}"><weixin-parse-audio vue-id="f170f344-6" node="{{node}}" bind:__l="__l"></weixin-parse-audio></block><block qq:else><block qq:if="{{node.tag=='img'}}"><weixin-parse-img style="{{(node.styleStr)}}" vue-id="f170f344-7" node="{{node}}" bind:__l="__l"></weixin-parse-img></block><block qq:else><view class="{{[node.classStr]}}" style="{{(node.styleStr)}}"><block qq:for="{{node.nodes}}" qq:for-item="node" qq:for-index="index" qq:key="index"><block><weixin-parse-template vue-id="{{'f170f344-8-'+index}}" node="{{node}}" bind:__l="__l"></weixin-parse-template></block></block></view></block></block></block></block></block></block></block></block></block></block><block qq:else><block qq:if="{{node.node=='text'}}"><block>{{node.text}}</block></block></block>