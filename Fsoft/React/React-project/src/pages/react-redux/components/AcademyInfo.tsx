import { Button, Grid, TextField } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../types/model'
import { changeAcademyName, swapAcademyAddress } from '../actions/academy.action'
import { useDispatch } from 'react-redux'

const AcademyInfo = () => {
    const academyInfo = useSelector((state: RootState) => state.academyReducer)
    const [academyName, setAcademyName] = useState<string>(academyInfo.name)
    const dispatch = useDispatch()
  return (
    <Fragment>
        <TitleBlock>
            <Grid container>
                <Grid item xs={6}>
                    <h2>Academy Info</h2>
                </Grid>
                <Grid item xs={6} className='text-end'>
                    <Button variant='contained' onClick={() => dispatch(swapAcademyAddress())}>Swap</Button>
                </Grid>
                <Grid item xs={6}>
                    <TextField label='Academy name' defaultValue={academyName} onChange={(event:React.ChangeEvent<HTMLInputElement>) => setAcademyName(event.target.value)}></TextField>
                </Grid>
                <Grid item xs={6}>
                    <Button variant='contained' onClick={() => dispatch(changeAcademyName(academyName))}>Change name</Button>
                </Grid>
            </Grid>
        </TitleBlock>
        <TableInfo>
            <tbody>
                <tr>
                    <th>Academy name</th>
                    <td>{academyName}</td>
                </tr>
                <tr>
                    {academyInfo.address.map((item, index) => (
                        <tr key={index}>
                            <th>Address {index + 1}</th>
                            <td>{`${item.number} ${item.street} ${item.ward}`}</td>
                        </tr>
                    ))}
                </tr>
            </tbody>
        </TableInfo>
    </Fragment>
  )
}

export default AcademyInfo

const TitleBlock = styled.div`
    border: 1px solid blue;
    width: 50vw;
    &th, td {
        border: 1px solid blue;
        padding: 10px;
    }
`
const TableInfo = styled.div`
    width: 50vw;`