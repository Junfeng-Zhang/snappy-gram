import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

import { Button } from "@/components/ui";
import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]); // 传递多个文件，所以是数组类型
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(convertFileToUrl(acceptedFiles[0])); // 获取文件URL
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpeg", ".jpg"] },
  });

  return (
    <div
      // 上传图片显示区
      {...getRootProps()}
      className="flex flex-col cursor-pointer flex-center bg-dark-3 rounded-xl">
      <input {...getInputProps()} className="cursor-pointer" />

      {fileUrl ? (
        <>
          <div className="flex justify-center flex-1 w-full p-5 lg:p-10">
            <img src={fileUrl} alt="image" className="file_uploader-img" />
          </div>
          <p className="file_uploader-label">单击或拖动图片进行替换</p>
        </>
      ) : (
        <div className="file_uploader-box ">
          <img src="/assets/icons/file-upload.svg" width={96} height={77} alt="file upload" />
          <h3 className="mt-6 mb-2 base-medium text-light-2"> 将图片拖至此处</h3>
          <p className="mb-6 text-light-4 small-regular">SVG, PNG, JPG</p>

          <Button type="button" className="shad-button_dark_4">从电脑上传 </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
