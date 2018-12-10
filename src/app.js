import { DefineMap, route } from 'can';
import RoutePushstate from 'can-route-pushstate';
import debug from 'can-debug#?./is-dev';

//!steal-remove-start
if(debug) {
    debug();
}
//!steal-remove-end

const AppViewModel = DefineMap.extend("AppViewModel", {
    page: 'string',
    env: {
        default: () => ({NODE_ENV:'development'})
    },
    title: {
        default: 'tupi-ecommerce-store'
    },
    routeData: {
        default: () => route.data
    },
    get pageComponent() {
        console.log(this.routeData.page);
        switch(this.routeData.page) {
            case 'home': {

                // console.log('Im Home!');
                return steal.import('~/pages/home/').then(({default: Home}) => {
                    return new Home();
                });
            }
        }
    }
});

route.urlData = new RoutePushstate();
route.register("{page}", { page: "home" });

export default AppViewModel;
