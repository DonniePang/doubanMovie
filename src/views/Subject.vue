<template>
  <div class="movieDetail">
    <loading v-bind:loading="loading"></loading>
    <back></back>
    <div class="movie">
      <div class="subjectCover">
        <h2 class="subjectTitle">{{subject.title}}</h2>
        <div class="subjectImg">
          <img v-bind:src="subject.images.large" alt="">
        </div>
      </div>
      <div class="subjectInfo">
        <div class="directors">导演：
          <span v-for="item in subject.directors" v-bind:key="item.id">{{item.name}}/</span>
        </div>
        <div class="casts">演员：
          <span v-for="item in subject.casts" v-bind:key="item.id">{{item.name}}/</span>
        </div>
        <div class="genres">类型：
          <span v-for="item in subject.genres" v-bind:key="item.id">{{item}}/</span>
        </div>
        <div class="countries">国家：
          <span v-for="item in subject.countries" v-bind:key="item.id">{{item}}/</span>
        </div>
        <div class="year">年份：{{subject.year}}</div>
        <div class="rating">评分：{{subject.rating.average}}</div>
      </div>
      <div class="subjectSum">
        简介：{{subject.summary}}
      </div>
    </div>
  </div>
</template>
<script>
import Back from '@/views/partials/Back.vue';
import Loading from '@/views/partials/Loading.vue';

import api from '@/api/index';

export default {
  data() {
    return {
      subject: {},
      loading: false
    }
  },
  components: {
    Back,
    Loading
  },
  methods: {
    async fetchSubject() {
      this.loading = true;
      this.subject = await api.fetchMovieDetail(this.$route.params.id).then((res) => {
        return res.data
      });
      this.loading = false;
    }
  },
  created() {
    this.fetchSubject()
  }
}
</script>
<style lang="scss" scoped>
.movieDetail {
  min-height: calc(100vh - 120px);
}

.movie {
  display: flex;
  flex-wrap: wrap;
  &>div {
    margin-bottom: 20px;
  }
  .subjectCover {
    flex: 100%;
    h2 {
      text-align: center;
    }
    .subjectImg {
      display: flex;
      img {
        margin: auto;
      }
    }
  }
  .subjectInfo {
    flex: 100%
  }
  .subjectSum {
    flex: 100%
  }
  @media screen and (min-width: 992px) {
    .subjectCover {
      flex: 50%;
    }
    .subjectInfo {
      flex: 50%
    }
    .subjectSum {
      flex: 100%
    }
  }
  @media screen and (min-width: 1200px) {
    .subjectCover {
      flex: 33.3333%
    }
    .subjectInfo {
      flex: 33.3333%
    }
    .subjectSum {
      flex: 33.3333%
    }
  }
}
</style>

