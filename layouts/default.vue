<template>
  <section class="container xs-border xs-text-5 md-text-4">

    <BaelHeader :blogtitle="blogtitle" :thecrumb="this.$store.state.theCrumb" :posts="portfolioitems" />
    <nuxt/>
    <SlideOut/>
    <BaelFooter :pagination="paginate" />
  </section>
</template>
<script>
import SlideOut from "~/components/SlideOut";
import BaelFooter from "~/components/BaelFooter";
import BaelHeader from "~/components/BaelHeader";

export default {
  data() {
    return {
      email: { email: "" }
    };
  },

  methods: {
    navHeight() {
      if (process.browser) {
        var height = document.getElementById("navbar").clientHeight;

        this.$store.commit("SET_NAVHEIGHT", height - 1);
      }
    }
  },
  updated() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight();
        console.log(this.$store.state.navheight);
        console.log("default updated");
      });
    }
  },
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight();
        console.log(this.$store.state.navheight);
        console.log("default mounted");
      });
    }
  },
  computed: {
    paginate() {
return this.$store.state.pagination
    },
    blogposts() {
      return this.$store.state.blogPosts;
    },
    portfolioitems() {
      return this.$store.state.portfolioItems;
    },
    blogtitle() {
      return this.$store.state.blogTitle;
    }
  },
  components: {
    SlideOut,
    BaelHeader,
    BaelFooter
  }
};
</script>


<style>
html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "apercu", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.title-block{
  margin:1rem 8%;
  border-bottom:4px double rgba(0, 0, 0, 0.2) !important
}
.main-title {
  font-size: 3rem;
  font-family: "Apercu", "Archivo Black", sans-serif;
  font-weight: bold;
  line-height: 1;
  text-align: center;
}
.feat-wrapper {max-height:75vh;width:100%;}
.slide-left-enter,
.slide-right-leave-active {
  transform: translate(50%, 0);
  opacity:0;
  transition: all .25s;
}
.slide-left-leave-active,
.slide-right-enter {
  transform: translate(-50%, 0);
   opacity:0;
    transition: all .25s;

}
.slide-down-enter,
.slide-up-leave-active {
  transform: translate(0,50%);
  opacity:1;
  transition: all .25s;
}
.slide-down-leave-active,
.slide-up-enter {
  transform: translate(0,-50%);
   opacity:1;
    transition: all .25s;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  transition-delay: .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/*.post-content {max-width:75ch;}*/

.post-content p {
  font-size:18px;
}

.bcg-item {
  padding:3rem 8% !important;
}
</style>
