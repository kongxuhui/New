export const queryMixin = {
    data() {
        return {
            queryType: 'name',
            queryContent: '',
            curPage: 1,
            totalCount: 0,
            pageNum: 10
        }
    },
    methods: {
        handleQuery() {
            this.curPage = 1;
            this.$http.post({
                transCode: this.transCode,
                funType: 'findAll',
                pageCount: this.pageNum,
                currentPageNum: this.curPage,
                [this.queryType]: this.queryContent,
                ...this.initCondition
            }).then(data => {
                this.totalCount = data.totalCount;
                this.queryCallBack(data);
            })
        },
        getData(url) {
            this.$http.get(url).then(data => {
                // console.log(data);
                this.totalCount = data.totalCount;
                this.queryCallBack(data);
            })
        },
    },
    computed: {
        totalPage() {
            return Math.ceil(this.totalCount / this.pageNum)
        }
    }
}