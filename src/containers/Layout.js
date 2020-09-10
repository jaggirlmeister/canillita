import React from 'react'
import SearchAppBar from '../components/SearchAppbar'
import { LinearProgress } from '@material-ui/core'
 
const Layout = ({children, loading}) => {
 
    return (
        <>
            <SearchAppBar />
            {loading && <LinearProgress color="secondary" /> }
            <div className="inner">
                {children}
            </div>
        </>
    )
}
 
export default Layout