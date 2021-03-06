import React, { Component } from 'react';
import { 
    createDrawerNavigator, 
    createStackNavigator 
} from 'react-navigation';

import MainView from '../MainView';
import PlansViewList from '../PlansViewList';
import PlanCreate from '../PlanCreate';
import ExpensesViewList from '../ExpensesViewList';
import ExpenseCreate from '../ExpenseCreate';
import ReportView from '../ReportView';
import SettingsView from '../SettingsView'

const AppNavigator = createDrawerNavigator({
    Main: {
        screen: MainView,
    },
    Budget: {
        screen: createStackNavigator({
            PlanList: PlansViewList,
            PlanCreate: PlanCreate,
            // navigationOptions: {
            //     header: { visivle: false }
            // }
        })
    },
    Expense: {
        screen: createStackNavigator({
            ExpenseList: ExpensesViewList,
            ExpenseCreate: ExpenseCreate,
        }) 
    },
    Report: {
        screen: ReportView,
    },
    Setting: {
        screen: SettingsView,
    },
});

export default AppNavigator;