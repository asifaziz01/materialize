import React, { useEffect, useState, useRef } from 'react'

// ** MUI Imports
import { Grid, Card, CardHeader, CardContent, Button, Box, Link, Typography } from '@mui/material'

// ** Core Imports
import PageHeader from 'src/@core/components/page-header'

// ** Module Specific Imports
import TestList from 'src/pages/tests/views/index'
import TestApis from 'src/pages/tests/components/apis'

const Page = () => {
  const [allTests, setAllTests] = useState([])

  // view all listing Using API
  const getTests = useRef(async () => {
    const response = await TestApis.getAllTests()
    if (response.success === true) {
      setAllTests(response.payload.data)
    }
    console.log(response)
  })
  useEffect(() => {
    getTests.current()
  }, [])

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant='h5'>React</Typography>}
        subtitle={
          <Typography variant='body2'>
            A declarative, efficient, and flexible JavaScript library for building user interfaces.
          </Typography>
        }
      />
      <Grid item xs={12}>
        <Card>
          <TestList data={allTests} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Page

//import Toolbar from 'src/global-component/toolbar'
