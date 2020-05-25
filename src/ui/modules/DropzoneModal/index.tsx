import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Image } from 'react-feather';
import { Box, Flex } from 'rebass/styled-components';
// import { UploadCloud } from 'react-feather';
// import { Trans } from '@lingui/macro';
import styled from 'ui/themes/styled';
import { useInstanceInfoQuery } from 'fe/instance/info/useInstanceInfo.generated';
import { Trans } from '@lingui/react';
import Alert from 'ui/elements/Alert';
import { AlertWrapper } from '../Modal';

// const ThumbsContainer = styled.aside`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   margin-top: 16;
// `;

const WrapperIcon = styled(Flex)`
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 100px;
  position: absolute;
  left: 50%;
  margin-left: -20px;
  top: 50%;
  margin-top: -20px;
  z-index: 9;
  &:hover {
    background: #ffffff4a;
  }
`;

const WrapperFile = styled.div`
  padding: 20px 10px;
`;

const Thumb = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  height: 120px;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 4px;
    display: block;
    background: rgba(0, 0, 0, 0.3);
  }
  svg {
    width: 40px;
  }
`;

// const ThumbInner = styled.div`
//   // display: flex;
//   min-width: 0;
//   overflow: hidden;
// `;

const Img = styled(Box)`
    display: block;
    border-radius: 4px;
    height: inherit;
    background-size: cover;
}
`;

interface Props {
  initialUrl: string | undefined | null;
  onFileSelect(file: File | undefined): unknown;
  uploadType?: 'resource' | string;
  filePattern?: FilePattern;
}

type FilePattern = 'image/*' | '*';

const DropzoneArea: React.FC<Props> = ({
  initialUrl,
  uploadType,
  onFileSelect,
  filePattern
}) => {
  const [fileUrl, setFileUrl] = useState<undefined | null | string>();
  const { data: instanceInfoData } = useInstanceInfoQuery();
  const uploadMaxBytes = instanceInfoData?.instance?.uploadMaxBytes || 0;

  const [currentFile, setCurrentFile] = useState<{
    file: File;
    localUrl: string;
  }>();

  useEffect(
    () => () => {
      fileUrl && URL.revokeObjectURL(fileUrl);
    },
    [fileUrl]
  );

  useEffect(() => {
    setFileUrl(initialUrl);
  }, [initialUrl]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    rejectedFiles,
    acceptedFiles
  } = useDropzone({
    accept: filePattern,
    maxSize: uploadMaxBytes,
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      if (!file) {
        onFileSelect(void 0);
        setCurrentFile(void 0);
        return;
      }
      onFileSelect(file);
      setCurrentFile({ file, localUrl: URL.createObjectURL(file) });
    }
  });
  const rejectedFile = rejectedFiles[0];
  console.log({ rejectedFiles, acceptedFiles });
  return (
    <>
      <Box sx={{ height: '100%' }} {...getRootProps({ className: 'dropzone' })}>
        <InfoContainer className={isDragActive ? 'active' : 'none'}>
          {uploadType !== 'resource' ? (
            <Thumb className="thumb">
              <WrapperIcon>
                <Image
                  size={30}
                  strokeWidth={1}
                  color={'rgba(250,250,250, .5)'}
                />
              </WrapperIcon>
              <Img
                style={{
                  backgroundImage: `url(${
                    currentFile ? currentFile.localUrl : fileUrl
                  })`
                }}
              />
            </Thumb>
          ) : null}
          {!currentFile ? null : uploadType === 'resource' ? (
            currentFile.file.type.indexOf('image') == -1 ? (
              <WrapperFile>
                <FileText size={20} />
                {currentFile && <FileName>{currentFile.file.name}</FileName>}
              </WrapperFile>
            ) : (
              <WrapperFile>
                <Thumb>
                  <WrapperIcon>
                    <Image
                      size={30}
                      strokeWidth={1}
                      color={'rgba(250,250,250, .5)'}
                    />
                  </WrapperIcon>
                  <Img
                    style={{ backgroundImage: `url(${currentFile.localUrl})` }}
                  />
                </Thumb>
                <FileName>{currentFile && currentFile.file.name}</FileName>
              </WrapperFile>
            )
          ) : null}

          <input {...getInputProps()} />

          {/* <UploadCloud size={30} strokeWidth={1} />
          {isDragActive ? (
            <Info>
              <Trans>Drop the file here ...</Trans>
            </Info>
          ) : (
            <Info>
              <Trans>Drag 'n' drop a file here, or click to select file</Trans>
            </Info>
          )} */}
          {rejectedFile ? (
            <AlertWrapper>
              <Alert variant="bad">
                <Trans>
                  File {rejectedFile.name} too big, can't exceed{' '}
                  {Math.floor(uploadMaxBytes / 1024 / 1024)}MB
                </Trans>
              </Alert>
            </AlertWrapper>
          ) : null}
        </InfoContainer>
      </Box>
    </>
  );
};

export default DropzoneArea;

const InfoContainer = styled.div`
  background: ${props => props.theme.colors.lighter};
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  height: inherit;
  margin: 0px;
  &.active {
    border: 1px dashed ${props => props.theme.colors.primary};
  }
  .;
`;

const FileName = styled.p`
  margin-bottom: 0px;
  margin-top: 5px;
  font-weight: bold;
  text-align: center;
  font-style: italic;
`;

// const Info = styled.p`
//   margin-top: 0px;
//   margin-bottom: 5px;
// `;

// const ClearButton = styled.button`
//   width: 100px;
//   cursor: pointer;
//   border: 1px solid ${props => props.theme.colors.medium};
//   margin-left: 20px;
//   padding: 10px;
//   border-radius: 2px;
// `;
