import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

import { setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator, setFirstUserActionCreator, setLastUserActionCreator, setPageSizeActionCreator, setAllUsersActionCreator} from './../../redux/users-reducer';
import Users from './../../components/Users/Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3000/users`)
            .then(response => {
                this.props.setAllUsers(response.data);
                this.props.setUsers(response.data.slice(0, this.props.pageSize));
                this.props.setTotalUsersCount(response.data.length);
            });
    }

    onPageChanged = (pageNumber, currentPage, pageSize) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setPageSize(pageSize);
        axios.get(`http://localhost:3000/users`)
            .then(response => {
                this.props.setUsers(response.data.slice((this.props.currentPage * this.props.pageSize) - this.props.pageSize, this.props.currentPage * this.props.pageSize));
            });
    }

    render() {
        return <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    allUsers={this.props.allUsers}
                    onPageChanged={this.onPageChanged}
                    onLastUserChanged={this.onLastUserChanged}
                    onFirstUserChanged={this.onFirstUserChanged}
                    randomUser={this.randomUser}
                />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        allUsers: state.usersPage.allUsers,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setAllUsers: (allUsers) => {
            setInterval(() => {
                dispatch(setAllUsersActionCreator(allUsers));
            }, 8000);
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },
        setFirstUser: (indexOfFirstUser) => {
            dispatch(setFirstUserActionCreator(indexOfFirstUser));
        },
        setLastUser: (indexOfLastUser) => {
            dispatch(setLastUserActionCreator(indexOfLastUser));
        },
        setPageSize: (pageSize) => {
            dispatch(setPageSizeActionCreator(pageSize))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
