import { Button, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Home.css'

const arr = [0, 1, 2, 3, 4, 5]

const solutions = [
    ['1', '0', '+', '2', '4', '=', '3', '4'],
    ['1', '+', '2', '*', '8', '=', '1', '7'],
]
let solution = solutions[Math.floor(Math.random() * solutions.length)]

function Home() {
    const [active, setActive] = useState(0)
    const [userInput, setUserInput] = useState([[], [], [], [], [], [], [], []])

    const handleSubmit = () => {
        if (userInput[active].length < 5) return;

        let flag = 1
        console.log(userInput)
        let str = ''
        for (let i = 0; i < 8; i++) {
            str += userInput[active][i][0]
            if (userInput[active][i][0] === solution[i]) {
                userInput[active][i][1] = '#4ee44e'
                continue
            };
            for (const x of solution) {

                if (x === userInput[active][i][0]) {
                    userInput[active][i][1] = 'yellow'
                    continue
                };
            }
            flag = 0

        }

        console.log(eval(str.split('=')))
        console.log(eval(str.split('=')[0]) === eval(str.split('=')[1]))

        if (eval(str.split('=')[0]) !== eval(str.split('=')[1])) {
            handleClear()
            return
        }

        if (active < 5) setActive(active + 1);

        if (flag) {
            alert('you won')
            setActive(active - 1);

            solution = solutions[Math.floor(Math.random() * solutions.length)]

            return
        }

    }

    const handleNumbers = (num) => {
        setUserInput([...userInput, userInput[active].push([num])])
    }

    const handleClear = () => {
        setUserInput([...userInput, userInput[active].pop()])
    }


    return (
        <div>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={1} md={9}>
                    <Container sx={{ margin: '50px' }}>
                        {
                            arr.map((elem, ky) => (
                                <Grid justifyContent="center" container spacing={1} sx={{ margin: '10px' }}>
                                    <Grid item>
                                        <Button sx={{ minHeight: '50px', backgroundColor: userInput[ky][0] && userInput[ky][0][1] ? userInput[ky][0][1] : active === ky ? 'aqua' : ky < active ? 'rgba(24, 141, 141, 0.329)' : '' }} variant="outlined" disabled={ky < active}>
                                            <Typography variant="h6">
                                                {userInput[ky][0] ? userInput[ky][0][0] : ''}
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{ minHeight: '50px', backgroundColor: userInput[ky][1] && userInput[ky][1][1] ? userInput[ky][1][1] : active === ky ? 'aqua' : ky < active ? 'rgba(24, 141, 141, 0.329)' : '' }} variant="outlined" disabled={ky < active}>
                                            <Typography variant="h6">
                                                {userInput[ky][1] ? userInput[ky][1][0] : ''}
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{ minHeight: '50px', backgroundColor: userInput[ky][2] && userInput[ky][2][1] ? userInput[ky][2][1] : active === ky ? 'aqua' : ky < active ? 'rgba(24, 141, 141, 0.329)' : '' }} variant="outlined" disabled={ky < active}>
                                            <Typography variant="h6">
                                                {userInput[ky][2] ? userInput[ky][2][0] : ''}
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{ minHeight: '50px', backgroundColor: userInput[ky][3] && userInput[ky][3][1] ? userInput[ky][3][1] : active === ky ? 'aqua' : ky < active ? 'rgba(24, 141, 141, 0.329)' : '' }} variant="outlined" disabled={ky < active}>
                                            <Typography variant="h6">
                                                {userInput[ky][3] ? userInput[ky][3][0] : ''}
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{ minHeight: '50px', backgroundColor: userInput[ky][4] && userInput[ky][4][1] ? userInput[ky][4][1] : active === ky ? 'aqua' : ky < active ? 'rgba(24, 141, 141, 0.329)' : '' }} variant="outlined" disabled={ky < active}>
                                            <Typography variant="h6">
                                                {userInput[ky][4] ? userInput[ky][4][0] : ''}
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{ minHeight: '50px', backgroundColor: userInput[ky][5] && userInput[ky][5][1] ? userInput[ky][5][1] : active === ky ? 'aqua' : ky < active ? 'rgba(24, 141, 141, 0.329)' : '' }} variant="outlined" disabled={ky < active}>
                                            <Typography variant="h6">
                                                {userInput[ky][5] ? userInput[ky][5][0] : ''}
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{ minHeight: '50px', backgroundColor: userInput[ky][6] && userInput[ky][6][1] ? userInput[ky][6][1] : active === ky ? 'aqua' : ky < active ? 'rgba(24, 141, 141, 0.329)' : '' }} variant="outlined" disabled={ky < active}>
                                            <Typography variant="h6">
                                                {userInput[ky][6] ? userInput[ky][6][0] : ''}
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button sx={{ minHeight: '50px', backgroundColor: userInput[ky][7] && userInput[ky][7][1] ? userInput[ky][7][1] : active === ky ? 'aqua' : ky < active ? 'rgba(24, 141, 141, 0.329)' : '' }} variant="outlined" disabled={ky < active}>
                                            <Typography variant="h6">
                                                {userInput[ky][7] ? userInput[ky][7][0] : ''}
                                            </Typography>
                                        </Button>
                                    </Grid>

                                </Grid>
                            )
                            )
                        }


                    </Container>

                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('1')}>
                            <Typography variant="h6">
                                1
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('2')}>
                            <Typography variant="h6">
                                2
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('3')}>
                            <Typography variant="h6">
                                3
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('4')}>
                            <Typography variant="h6">
                                4
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('5')}>
                            <Typography variant="h6">
                                5
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('6')}>
                            <Typography variant="h6">
                                6
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('7')}>
                            <Typography variant="h6">
                                7
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('8')}>
                            <Typography variant="h6">
                                8
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('9')}>
                            <Typography variant="h6">
                                9
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('0')}>
                            <Typography variant="h6">
                                0
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('+')}>
                            <Typography variant="h6">
                                +
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('-')}>
                            <Typography variant="h6">
                                -
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('*')}>
                            <Typography variant="h6">
                                *
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('/')}>
                            <Typography variant="h6">
                                /
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => handleNumbers('=')}>
                            <Typography variant="h6">
                                =
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleSubmit} variant="outlined">
                            <Typography variant="h6">
                                Enter
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={handleClear}>
                            <Typography variant="h6">
                                clear
                            </Typography>
                        </Button>
                    </Grid>

                </Grid>
            </Container >
        </div >
    )
}

export default Home