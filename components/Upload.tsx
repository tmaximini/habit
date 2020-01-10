import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import styled from "@emotion/styled";

const getColor = props => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const uploadFileMutation = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

const Upload = () => {
  const [preview, setPreview] = useState();
  const [uploadFile] = useMutation(uploadFileMutation);
  const onDrop = useCallback(
    ([file]) => {
      console.info({ file });
      uploadFile({ variables: { file } });
      setPreview(URL.createObjectURL(file));
    },
    [uploadFile]
  );
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
    maxSize: 1024000
  });

  const thumbsContainer = {
    display: "flex",
    marginTop: 16
  };

  const thumbStyle = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%"
  };

  const thumb = (
    <div style={thumbStyle}>
      <div style={thumbInner}>
        <img src={preview} style={img} />
      </div>
    </div>
  );

  return (
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      <aside style={thumbsContainer}>{thumb}</aside>
    </Container>
  );
};

export default Upload;
