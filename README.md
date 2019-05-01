![](https://user-gold-cdn.xitu.io/2019/5/1/16a7380734ed8dae?w=1952&h=1690&f=png&s=1548614)

###### [详解](https://juejin.im/post/5cc814d86fb9a031f90d60b8)
- actionType
```
export const HOMEPAGE_SHOWSEARCHBAR = 'HOMEPAGE/SHOWSEARCHBAR';

export const HOMEPAGE_MENU_PAGECHANGE = 'HOMEPAGE/MENU/PAGECHANGE';

```
- action
``` 
export const searchBarFetch = (text) => ({
  type: HOMEPAGE_FETCH_SEARCHBAR,
  text: text
});

export const updateHomePageMenuPage = (page) => ({
  type: HOMEPAGE_MENU_PAGECHANGE,
  currentPage: page
});
```

- State （我自认为不是很扁平，懒着改了）
```
const initialState = {
    homepage: {
        menuInfo: {
            items: common.menuInfos,
            currentPage: 0
        },
        gridInfos: [],
        sections: [{
            title: '',
            data: []
        }],
    },

    searchBar: {
        text: '搜一下'
    }
};
```
- Reducer
Reducer 可以是多个，一般一个模块一个 Reducer 
```

export default (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_FETCH_SEARCHBAR:
            {
                return {
                    ...state,
                    searchBar: {
                        text: action.text
                    }
                };
            }

        case HOMEPAGE_MENU_PAGECHANGE:
            {
                return {
                    ...state,
                    homepage: {
                        menuInfo: {
                            items: state.homepage.menuInfo.items,
                            currentPage: action.currentPage
                        },
                        gridInfos: state.homepage.gridInfos,
                        sections: state.homepage.sections
                    }
                }
            }
    }
    return state;
};
```
- Store 
react-redux 提供了 合并多个 **Rducer** 的方法，和创建 **Store** 的方法
```
const reducers = combineReducers({
    homepageReudcer
});

export default createStore(reducers);
```
- 展示组件
```
class HomeMenu extends Component {

    render() {

        const {menuInfos, currentPage} = this.props;

        const items = menuInfos.map(({title, icon}) => (<HomeMenuItem title={title} icon={icon} key={title}/>));

        const pageCount = Math.ceil(items.length / 10);
        let menuViews = [];
        for (let i = 0; i < pageCount; i++) {
            const itemSlices = items.slice(i * 10, i * 10 + 10);
            const view = <View style={styles.itemsView} key={i}>
                {itemSlices}
            </View>
            menuViews.push(view);
        }

        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={this._onScroll}>
                    {menuViews}
                </ScrollView>
                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={currentPage}
                    currentPageIndicatorTintColor={color.primary}
                    pageIndicatorTintColor={color.gray}/>
                <View style={styles.line}/>
                <HomeGridView/>
                <View style={styles.line}/>
            </View>

        );
    }

    _onScroll = (event) => {
        const x = event.nativeEvent.contentOffset.x;
        const page = Math.round(x / common.screen.width);

        const {currentPage, setCurrentPage} = this.props;
        if (currentPage !== page) {
            setCurrentPage(page);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: common.screen.width
    },
    pageControl: {
        margin: 10
    },
    line: {
        backgroundColor: color.paper,
        width: common.screen.width,
        height: 10,
    }
});

const mapStateToProps = (state) => ({menuInfos: state.homepageReudcer.homepage.menuInfo.items, currentPage: state.homepageReudcer.homepage.menuInfo.currentPage});
const mapDispatchToProps = (dispatch) => ({
    setCurrentPage: (page) => {
        dispatch(updateHomePageMenuPage(page));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu)

```






