import React,{useContext} from 'react'
import {Grid,Typography,Paper}
from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {SocketContext} from "../SocketContext"
function VideoPlayer() {
  const {name ,callAccepted,callEnded,
  myVideo,userVideo,
  stream,call}=useContext(SocketContext)
  const useStyles = makeStyles((theme) => ({
        myvideo: {
          width: '350px',
          [theme.breakpoints.down('xs')]: {
            width: '100%',
          },
        },
        uservideo: {
          width: '750px',
          [theme.breakpoints.down('xs')]: {
            width: '100%',
          },
        },
        gridContainer: {
          justifyContent: 'center',


          [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
            flexWrap:"wrap-reverse"
          },
        },
        usergridContainer: {
          justifyContent: 'center',
          [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          },
        },
        videoname:{
          width:"100%",
          textAlign:"center",

          margin:"0 auto"
        },
        mypaper: {
          padding: '10px',
          border: '2px solid black',
          margin: '10px',
          [theme.breakpoints.down('xs')]: {
            width:"55vw",
            height:"15vh",

            marginLeft:"auto"
          },
        },
        userpaper: {
          padding: '10px',
          border: '2px solid black',
          margin: '10px',
          [theme.breakpoints.down('xs')]: {
            width:"85vw",
            height:"55vh",
            margin:"2px auto"
          },
        },
    }));
    const classes=useStyles()
  return (
    <>
      <Grid container className={classes.gridContainer}>
        {/* our own video*/}
        {stream &&(
          <Paper className={classes.mypaper}>
          <Typography
            variant="h6"
            align="center"
            className={classes.videoname}
            guttterBottom
          >{name||'Name'}</Typography>
            <Grid
              item
              xs={12}
              md={6}
              >

              <video
                playsInline
                muted
                ref={myVideo}

                autoPlay
                className={classes.myvideo}

              />
              </Grid>

          </Paper>

        )}

        {callAccepted && !callEnded (
            <Paper className={classes.userpaper}>
            <Typography
            variant="h6"
            align="center"
              guttterBottom
              className={classes.videoname}
            >{call.name||'username'}</Typography>
              <Grid
                item
                xs={12}
                md={6}
                >

                <video
                  playsInline

                  ref={userVideo}
                  autoPlay
                  className={classes.uservideo}

                />
                </Grid>

            </Paper>

        )}



      </Grid>

    </>


  )
}

export default VideoPlayer
