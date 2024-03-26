import React from 'react';
import styled from 'styled-components';
import { certifications } from '../../data/constants';

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
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_primary};
`;

const CertificationList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const CertificationItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CertificationImage = styled.img`
    width: 300px; /* Adjust width as needed */
    height: 200px; /* Aspect ratio 3:2 */
    object-fit: contain; /* Maintain aspect ratio */
    border-radius: 8px;
    
`;

const CertificationName = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    text-align: center;
    color: ${({ theme }) => theme.text_primary};
`;

const Certifications = () => {
    return (
        <Container>
            <Title>Certifications</Title>
            <CertificationList>
                {certifications.map(certification => (
                    <CertificationItem key={certification.id}>
                        <CertificationImage src={certification.img} alt={certification.name} />
                        <CertificationName>{certification.name}</CertificationName>
                    </CertificationItem>
                ))}
            </CertificationList>
        </Container>
    );
};

export default Certifications;
