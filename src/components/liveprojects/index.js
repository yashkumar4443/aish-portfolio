import React from 'react';
import styled from 'styled-components';
import { liveProjects } from '../../data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
`;

const Title = styled.h2`
    font-size: 42px;
    font-weight: 600;
    margin: 50px;
    color: ${({ theme }) => theme.text_primary};
`;

const ProjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const ProjectItem = styled.div`
    width: 300px; /* Width of each project item */
    height: ${({ id }) => (id === 0 ? '400px' : '200px')}; /* Height of each project item */
    overflow: hidden; /* Hide overflow to crop images */
    border-radius: 8px;
    position: relative;
`;

const ProjectImage = styled.img`
    width: 100%; /* Take up full width of container */
    height: 100%; /* Take up full height of container */
    object-fit: cover; /* Maintain aspect ratio and crop */
`;

const ProjectName = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    text-align: center;
    color: ${({ theme }) => theme.text_primary};
`;

const Button = styled.a`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.button_background};
    color: ${({ theme }) => theme.button_text};
    border: none;
    border-radius: 4px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
`;

const LiveProjects = () => {
    return (
        <Container>
            <Title>Live Projects</Title>
            <ProjectList>
                {liveProjects.map(project => (
                    <ProjectItem key={project.id} id={project.id}>
                        <ProjectImage src={project.img} alt={project.name} />
                        <ProjectName>{project.name}</ProjectName>
                        {project.reportLink && (
                            <Button href={project.reportLink} target="_blank"  className="mybutton" rel="noopener noreferrer">
                                View Report
                            </Button>
                        )}
                    </ProjectItem>
                ))}
            </ProjectList>
        </Container>
    );
};

export default LiveProjects;
