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
            if(this.getCookie('lang')){
                if (url.indexOf("?") != -1) {
                    this.$http.get(url + '&lang=' + this.getCookie('lang')).then(data => {
                        this.totalCount = data.totalCount;
                        this.queryCallBack(data);
                    })
                }else{
                    this.$http.get(url + '?lang=' + this.getCookie('lang')).then(data => {
                        this.totalCount = data.totalCount;
                        this.queryCallBack(data);
                    })
                }
            }else{
                if (url.indexOf("?") != -1) {
                    this.$http.get(url + '&lang=CHS').then(data => {
                        this.totalCount = data.totalCount;
                        this.queryCallBack(data);
                    })
                }else{
                    this.$http.get(url + '?lang=CHS').then(data => {
                        this.totalCount = data.totalCount;
                        this.queryCallBack(data);
                    })
                }
            }
        },
    },
    computed: {
        totalPage() {
            return Math.ceil(this.totalCount / this.pageNum)
        }
    }
}