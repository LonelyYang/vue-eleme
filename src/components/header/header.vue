<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name" v-text="seller.name"></span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      seller: {
        type: Object
      }
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../commen/sass/mixin";

  .header{
    color:#fff;
    background: rgba(7,17,27,.5);
    .content-wrapper{
      padding: 24px 12px 18px 24px;
      font-size: 0;
      &>div{
        display: inline-block;
        vertical-align: top;
      }
      .content{
        font-size: 14px;
        margin-left: 16px;
        .title{
          margin: 2px 0 8px 0;
          .brand{
            display: inline-block;
            width: 30px;
            height: 18px;
            @include bg-image('brand');
            background-size: 30px 18px;
            vertical-align: top;
          }
          .name{
            margin-left: 6px;
            font-size:16px;
            line-height: 18px;
            font-weight: bold;
          }
        }
        .description{
          font-size: 12px;
          line-height: 12px;
        }
        .supports{
          margin: 10px 0 2px 0;
          font-size: 10px;
          line-height: 12px;
          background-size: auto 100%;
          .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            @each $name in decrease, discount,guarantee,invoive,special{
              &.#{$name} {

                 @include bg-image("'"+ #{$name} + "'");
              }
            }
          }
        }
      }
    }
  }
</style>
