import React from 'react';
import { Container } from './styled/Container.styled';
import {
    Attribution,
    AttributionA,
    BGsliderbar,
    Document,
    Folder,
    Gigsleft,
    Gigspreader,
    Leftsider,
    Logo,
    Rightsider,
    Sliderbar,
    Slidercircle,
    SpreadIcon,
    Styledflyodata,
    Triangle,
    Upload
} from './styled/Fylodata.styled';
import logo from './images/logo.svg';
import document from './images/icon-document.svg';
import folder from './images/icon-folder.svg';
import upload from './images/icon-upload.svg';

export const FyloDataStorage = () => {
  return (
    <Container>
        <Styledflyodata>
            <Leftsider>
                <Logo src={logo} alt='logo' />
                <SpreadIcon>
                    <Document src={document} alt='document'/>
                    <Folder src={folder} alt='folder'/>
                    <Upload src={upload} alt='upload'/>
                </SpreadIcon>
            </Leftsider>
            <Rightsider>
                <p className='maininfostorage'>
                    You’ve used <span>815 GB</span> of your storage
                </p>
                <BGsliderbar>
                    <Sliderbar>
                        <Slidercircle/>
                    </Sliderbar>
                    <Gigsleft>
                        <p className='gigsleft'>
                            185
                        </p>
                        <p className='GBleft'>
                            GB Left
                        </p>
                    </Gigsleft>
                    <Triangle/>
                </BGsliderbar>
                <Gigspreader>
                    <p>
                        0 GB
                    </p>
                    <p>
                        1000 GB
                    </p>
                </Gigspreader>
            </Rightsider>
        </Styledflyodata>
        <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/fylo-data-storage-component-1dZPRbV5n/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Fylo Data Storage.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
        </footer>
    </Container>
  )
}
