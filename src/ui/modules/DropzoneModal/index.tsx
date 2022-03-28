import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image, File } from 'react-feather';
import { Box, Flex } from 'rebass/styled-components';
// import { UploadCloud } from 'react-feather';
// import { Trans } from '@lingui/macro';
import styled from 'ui/themes/styled';
// import { useInstanceInfoQuery } from 'fe/instance/info/useInstanceInfo.generated';
// import { Trans } from '@lingui/macro';
// import Alert from 'ui/elements/Alert';
// import { AlertWrapper } from '../Modal';

interface Props {
  initialUrl: string | undefined | null;
  onFileSelect(file: File | undefined): unknown;
  uploadType?: 'resource' | string;
  filePattern?: FilePattern;
}

type FilePattern = 'image/*' | '*';

const DropzoneArea: React.FC<Props> = ({ initialUrl, uploadType, onFileSelect, filePattern }) => {
  const [fileUrl, setFileUrl] = useState<undefined | null | string>();
  // const { data: instanceInfoData } = useInstanceInfoQuery();
  // const uploadMaxBytes = instanceInfoData?.instance?.uploadMaxBytes || 0;

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
    isDragActive
    // rejectedFiles,
    // acceptedFiles
  } = useDropzone({
    accept: filePattern,
    // maxSize: uploadMaxBytes,
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

  return (
    <>
      <Box sx={{ height: '100%' }} {...getRootProps({ className: 'dropzone' })}>
        <InfoContainer className={isDragActive ? 'active' : 'none'}>
          {!currentFile && uploadType === 'resource' ? (
            <Thumb className="thumb">
              <WrapperIcon>
                <File size={30} strokeWidth={1} color={'rgba(250,250,250, .5)'} />
              </WrapperIcon>
            </Thumb>
          ) : null}
          {uploadType !== 'resource' ? (
            <Thumb className="thumb">
              <WrapperIcon>
                <Image size={30} strokeWidth={1} color={'rgba(250,250,250, .5)'} />
              </WrapperIcon>
              <Img
                style={{
                  backgroundImage: `url("${currentFile ? currentFile.localUrl : fileUrl}")`
                }}
              />
            </Thumb>
          ) : null}
          {!currentFile ? null : uploadType === 'resource' ? (
            currentFile.file.type.indexOf('image') === -1 ? (
              // <WrapperFile>
              <FileThumb>
                <File size={20} />
                {currentFile && <FileName>{currentFile.file.name}</FileName>}
              </FileThumb>
            ) : (
              // </WrapperFile>
              <WrapperFile>
                <Thumb>
                  <WrapperIcon>
                    <Image size={30} strokeWidth={1} color={'rgba(250,250,250, .5)'} />
                  </WrapperIcon>
                  <Img
                    style={{
                      backgroundImage: `url("${currentFile.localUrl}")`
                    }}
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
          {/* rejectedFile ? (
            <AlertWrapper>
              <Alert variant="negative">
                <Trans>
                  File {rejectedFile.name} too big, can't exceed{' '}
                  {Math.floor(uploadMaxBytes / 1024 / 1024)}MB
                </Trans>
              </Alert>
            </AlertWrapper>
          ) : null */}
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
`;

const WrapperFile = styled.div`
  padding: 20px 10px;
  border-radius: 4px;
`;

const FileThumb = styled.div`
  padding: 20px 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Thumb = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  height: 114px;
  object-fit: cover;
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
  &:hover {
    &:after {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  svg {
    width: 40px;
  }
`;

const Img = styled(Box)`
    display: block;
    border-radius: 4px;
    height: inherit;
    background-size: cover;
}
`;
