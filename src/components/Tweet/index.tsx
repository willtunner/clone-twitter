import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon,

 } from './styles';


export default function index() {
    return (
        <Container>
            <Retweeted>
                <RocketseatIcon/>
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar/>
                <Content>
                    <Header>
                        <strong>William</strong>
                        <span>@willtunner</span>
                        <Dot/>
                        <time>22 de jul</time>
                    </Header>

                    <Description>Foguete não tem ré</Description>

                    <ImageContent/>

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}
