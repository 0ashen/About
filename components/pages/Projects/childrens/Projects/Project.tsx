import React from 'react'
import YouTube from 'react-youtube'
import { ProjectWrapper } from './Project.styles'

export const Project = ({ video_id }) => {
    return (
        <ProjectWrapper>
            <YouTube
                videoId={video_id}
                className="player"
                opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                        autoplay: 0,
                        controls: 1,
                        color: 'white',
                        loop: 1,
                        mute: 1,
                    },
                }}
            />
        </ProjectWrapper>
    )
}
