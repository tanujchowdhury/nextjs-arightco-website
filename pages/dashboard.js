import React, { useEffect, useRef, useState, useContext } from "react";
import { Storage } from "aws-amplify";
import { Account } from "../components/intranet/Account";
import Status from "../components/intranet/Status";
import { Auth } from "aws-amplify";
import Signup from "../components/intranet/Signup";
import ChangePassword from "../components/intranet/ChangePassword";
import ActionDropdown from "../components/intranet/ActionDropdown";

function Dashboard() {
  const ref = useRef(null);
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState();
  const [key, setKey] = useState(Math.random());
  const [currentDirectory, setCurrentDirectory] = useState(null);
  const [groupedFiles, setGroupedFiles] = useState({});
  const [directoryStack, setDirectoryStack] = useState([]);
  const [userGroup, setUserGroup] = useState("");
  const [currentPath, setCurrentPath] = useState(["Home"]);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [isGridView, setIsGridView] = useState(true);
  const [currentView, setCurrentView] = useState("default");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileType, setSelectedFileType] = useState(null);
  const [sortedEntries, setSortedEntries] = useState([]);

  // test commit
  const createNewFolder = (folderName) => {
    let fullPath = currentPath.slice(1).join("/");
    if (fullPath) {
      fullPath += "/";
    }
    fullPath += folderName + "/";

    Storage.put(fullPath, "")
      .then(() => {
        setFeedbackMessage({
          artifactName: folderName,
          fullPath: fullPath,
          message: "Folder created, refresh recommended",
        });
        loadFiles();
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const groupFiles = (files) => {
    const tree = {};
    files.results.forEach((file) => {
      const pathParts = file.key.split("/");
      let currentLevel = tree;
      pathParts.forEach((part, i) => {
        if (!currentLevel[part]) {
          // Identifying files by checking for the 'size' property in file object
          currentLevel[part] =
            i === pathParts.length - 1 && "size" in file ? file : {};
        }
        currentLevel = currentLevel[part];
      });
    });
    return tree;
  };

  const loadFiles = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userGroups =
        user.signInUserSession.accessToken.payload["cognito:groups"];
      const userGroup = userGroups ? userGroups[0] : null;
      setUserGroup(userGroup);
      let files;
      if (userGroup === "Admins") {
        files = await Storage.list("");
        // console.log(files);
      } else {
        const userFolder = userGroup;
        files = await Storage.list(userFolder);
        // console.log(userFolder);
        // console.log(files);
      }
      // console.log(userGroup);

      if (files) {
        setFiles(files);
        setGroupedFiles(groupFiles(files));
        setCurrentPath(["Home"]);
      }
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    loadFiles();
  }, [key]);

  const handleFolderRename = async (oldFolderName, newFolderName) => {
    // Create the old and new folder paths (prefixes)
    let oldPath = currentPath.slice(1).join("/");
    let newPath = currentPath.slice(1).join("/");
    if (oldPath) {
      oldPath += "/";
      newPath += "/";
    }
    oldPath += oldFolderName + "/";
    newPath += newFolderName + "/";

    try {
      // List all objects in the old folder
      const { results: objectsInOldFolder } = await Storage.list(oldPath);

      // Copy each object to the new folder
      for (const object of objectsInOldFolder) {
        const objectOldKey = object.key;
        const objectNewKey = objectOldKey.replace(oldPath, newPath);
        await Storage.copy({ key: objectOldKey }, { key: objectNewKey });
      }

      // After copying all objects to the new folder, delete objects in the old folder
      for (const object of objectsInOldFolder) {
        await Storage.remove(object.key);
      }
      setFeedbackMessage({
        artifactName: oldFolderName,
        fullPath: oldPath,
        message: `Folder renamed to ${newFolderName}, refresh recommended`,
      });
      loadFiles();
      // console.log(`Renamed folder from ${oldFolderName} to ${newFolderName}`);
    } catch (err) {
      // console.error("Error during folder rename:", err);
    }
  };

  const handleFileRename = (oldFileName, newFileName) => {
    const fileExtension = oldFileName.split(".")[1];
    let oldPath = currentPath.slice(1).join("/");
    let newPath = currentPath.slice(1).join("/");
    if (oldPath) {
      oldPath += "/";
      newPath += "/";
    }
    oldPath += oldFileName;
    newPath += newFileName + "." + fileExtension;
    Storage.copy({ key: oldPath }, { key: newPath })
      .then(() => {
        return Storage.remove(oldPath);
      })
      .then(() => {
        setFeedbackMessage({
          artifactName: oldFileName,
          fullPath: oldPath,
          message: `File renamed to ${
            newFileName + "." + fileExtension
          }, refresh recommended`,
        });
        loadFiles();
        // console.log(`Renamed file from ${oldFileName} to ${newFileName + "." + fileExtension}`);
      })
      .catch((err) => {
        // console.error("Error during file rename:", err);
      });
  };

  const handleFileDelete = (file) => {
    let fullPath = currentPath.slice(1).join("/");
    if (fullPath) {
      fullPath += "/";
    }
    fullPath += file;
    Storage.remove(fullPath)
      .then((resp) => {
        // console.log(resp);
        setFeedbackMessage({
          artifactName: file,
          fullPath: fullPath,
          message: "File deleted, refresh recommended",
        });
        loadFiles();
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const handleFolderDelete = (event, folder) => {
    event.stopPropagation();
    let fullPath = currentPath.slice(1).join("/");
    if (fullPath) {
      fullPath += "/";
    }
    fullPath += folder;
    // console.log(fullPath);
    Storage.list(fullPath)
      .then((resp) => {
        // console.log(resp.results);
        resp.results.forEach((item) => {
          Storage.remove(item.key);
          // .catch(err => console.log("Error removing item:", err));
        });
        setFeedbackMessage({
          artifactName: folder,
          fullPath: fullPath,
          message: "Folder deleted, refresh recommended",
        });
        loadFiles();
      })
      .catch
      // err => { console.log(err) }
      ();
  };

  const handleMultipleFileLoad = () => {
    const files = Array.from(ref.current.files); // Convert the FileList object to an array

    if (!files.length) return;

    // Initiate feedback as null (no message yet)
    setFeedbackMessage(null);

    setProgress("0");
    let showProgressTimeout;
    let hideProgressTimeout;

    const showProgress = () => {
      showProgressTimeout = setTimeout(() => {
        setProgress("0");
      }, 200);
    };

    const hideProgress = () => {
      hideProgressTimeout = setTimeout(() => {
        setProgress(null);
      }, 1000);
    };

    const uploadedFiles = []; // To track successfully uploaded files for feedback

    const uploadFile = (file) => {
      return new Promise((resolve, reject) => {
        const filename = file.name;
        let fullPath = currentPath.slice(1).join("/");
        if (fullPath) {
          fullPath += "/";
        }
        fullPath += filename;

        // Reset progress for each file
        setProgress("0");

        const contentType = getMimeType(filename);

        Storage.put(fullPath, file, {
          progressCallback: (progress) => {
            const currentProgress = Math.round(
              (progress.loaded / progress.total) * 100
            );

            clearTimeout(showProgressTimeout);
            clearTimeout(hideProgressTimeout);

            setProgress(currentProgress);
            showProgress();

            if (currentProgress === 100) {
              hideProgress();
              uploadedFiles.push({
                artifactName: filename,
                fullPath: fullPath,
              });
              resolve(); // Resolve the promise indicating this file is uploaded
            }
          },
          contentType: contentType
        })
          .then(() => {
            resolve();
            loadFiles();
          })
          .catch((err) => {
            reject(err); // Reject the promise indicating this file had an error
          });
      });
    };

    const getMimeType = (filename) => {
      const extension = filename.split(".").pop().toLowerCase();
      const mimeTypes = {
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'png': 'image/png',
        'gif': 'image/gif',
        'pdf': 'application/pdf',
        // ... add more file extensions and their MIME types as needed
      };
    
      return mimeTypes[extension] || 'binary/octet-stream';
    }    

    // Sequential upload using reduce
    files
      .reduce((promiseChain, file) => {
        return promiseChain.then(() => uploadFile(file));
      }, Promise.resolve())
      .then(() => {
        // All files are uploaded, update feedback message
        setFeedbackMessage({
          artifactName: "Mulitple files",
          fullPath: "Multiple paths",
          message: "Files uploaded, refresh recommended",
        });
      })
      .catch((err) => {
        // Handle any errors that occurred during upload
        // console.error("Error uploading a file:", err);
      });
  };

  const handleFolderClick = (folderName) => {
    setCurrentPath((prevPath) => [...prevPath, folderName]);
    setDirectoryStack((prevStack) => [...prevStack, groupedFiles]);
    setCurrentDirectory(folderName);
    setGroupedFiles((prevGroupedFiles) => prevGroupedFiles[folderName]);
  };

  const handleGoBack = () => {
    if (currentPath.length > 1) {
      const previousPath = currentPath.slice(0, -1);
      setCurrentPath(previousPath);

      if (directoryStack.length > 0) {
        const newGroupedFiles = directoryStack[directoryStack.length - 1];
        setDirectoryStack(directoryStack.slice(0, -1));
        setCurrentDirectory(previousPath[previousPath.length - 1]);
        setGroupedFiles(newGroupedFiles);
      }
    }
  };

  const handlePathClick = (index) => {
    const newPath = currentPath.slice(0, index + 1);
    const stepsBack = currentPath.length - newPath.length;

    if (stepsBack > 0) {
      setCurrentPath(newPath);
      const newGroupedFiles = directoryStack[directoryStack.length - stepsBack];
      setDirectoryStack(directoryStack.slice(0, -stepsBack));
      setCurrentDirectory(newPath[newPath.length - 1]);
      setGroupedFiles(newGroupedFiles);
    }
  };

  const handleDownload = (file) => {
    Storage.get(file)
      .then((url) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = file; // This sets the downloaded file's name
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((err) => {
        // handle the error
      });
  };

  const ImageViewer = ({ imageUrl }) => {
    return (
      <div>
        <img src={imageUrl} alt="Preview" />
      </div>
    );
  };

  const PDFViewer = ({ pdfUrl }) => {
    return (
      <object data={pdfUrl} type="application/pdf" width="100%" height="500px">
        <p>It appears you don't have a PDF plugin for this browser. You can <a href={pdfUrl}>click here to download the PDF file.</a></p>
      </object>
    );
  }

  const FileViewer = ({ fileUrl, fileType }) => {
    if (["jpg", "jpeg", "png", "gif"].includes(fileType)) {
      return <ImageViewer imageUrl={fileUrl} />;
    }
    else if (fileType === 'pdf') {
      return <PDFViewer pdfUrl={fileUrl} />;
    }
    else {
      return <div>File type not supported for preview.</div>;
    }
  };

  const handleFileClick = (fileKey) => {
    // console.log(fileKey)
    Storage.get(fileKey, { download: false })
      .then((result) => {
        setSelectedFile(result);
        setSelectedFileType(fileKey.split(".").pop().toLowerCase());
        // console.log(result)
      })
      .catch
      // err => console.log(err)
      ();
  };

  useEffect(() => {
    // Step 1: Separate entries into folders and files.
    const entries = Object.entries(groupedFiles).slice(
      currentPath.length > 1 ? 1 : 0
    );
    const folderEntries = entries.filter(
      ([name, content]) => !("size" in content)
    );
    const fileEntries = entries.filter(([name, content]) => "size" in content);

    // Step 2: Sort the folders and files individually (alphabetically).
    const sortedFolders = folderEntries.sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    const sortedFiles = fileEntries.sort((a, b) => a[0].localeCompare(b[0]));

    // Step 3: Merge the sorted arrays.
    const newSortedEntries = [...sortedFolders, ...sortedFiles];

    setSortedEntries(newSortedEntries);
  }, [groupedFiles, currentPath]);

  const handleDefaultView = () => {
    // console.log(currentPath.slice(-1));
    if (currentView != "default") {
      setCurrentView("default");
    }
  };

  const handleAccountSettings = () => {
    if (currentView === "accountSettings") {
      setCurrentView("default");
    } else {
      setCurrentView("accountSettings");
    }
  };

  const handleAddNewUser = () => {
    if (currentView === "addNewUser") {
      setCurrentView("default");
    } else {
      setCurrentView("addNewUser");
    }
  };

  useEffect(() => {
    // console.log(currentPath);
  }, [currentPath]);

  return (
    <Account>
      <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between p-6 bg-slate-200">
          <div
            onClick={handleDefaultView}
            className="flex items-center space-x-4 cursor-pointer"
          >
            <img src="/favicon.png" alt="Logo" className="w-12 h-12" />{" "}
            {/* Adjust as per your logo's aspect ratio */}
            <h1 className="text-2xl font-semibold text-black">
              ArightCo Client Portal
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {userGroup === "Admins" && (
              <button
                onClick={handleAddNewUser}
                className="text-green-500 px-4 py-2 border border-green-500 rounded hover:bg-green-100 focus:outline-none focus:bg-green-200 transition-colors duration-150"
              >
                Add New User
              </button>
            )}
            {userGroup !== "" && (
              <button
                onClick={handleAccountSettings}
                className="text-blue-500 px-4 py-2 border border-blue-500 rounded hover:bg-blue-100 focus:outline-none focus:bg-blue-200 transition-colors duration-150"
              >
                Change Password
              </button>
            )}

            <Status />
          </div>
        </header>

        <div className="flex flex-grow">
          {currentView === "addNewUser" && <Signup />}

          {currentView === "accountSettings" && <ChangePassword />}

          {currentView === "default" && (
            <main className="flex-grow p-4">
              <div className="flex justify-between items-center">
                {/* File path as Breadcrumbs */}
                <div className="flex flex-wrap items-center space-x-2 mb-6">
                  {currentPath.map((folder, index) => (
                    <React.Fragment key={folder}>
                      <button
                        onClick={() => handlePathClick(index)}
                        className="text-sm md:text-base hover:bg-gray-200 px-2 py-1 rounded-full bg-gray-100 hover:text-gray-700 transition-colors duration-150"
                      >
                        {folder}
                      </button>
                      {index !== currentPath.length - 1 && (
                        <span className="hidden md:inline text-gray-500">
                          ＞
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                {/* Switch for Grid and List Views */}

                <div className="flex items-center space-x-2 mb-6">
                  <div>Change View:</div>
                  <div
                    onClick={() => setIsGridView(!isGridView)}
                    className={`relative cursor-pointer w-12 h-6 transition-all duration-200 ease-in-out rounded-full border ${
                      isGridView
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-300 bg-gray-200"
                    }`}
                  >
                    <div
                      className={`absolute custom-centering left-1 w-4 h-4 transition-transform duration-200 ease-in-out transform ${
                        isGridView
                          ? "translate-x-6 bg-white"
                          : "translate-x-0 bg-white"
                      } rounded-full`}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Admin Actions */}
              <div className="flex items-center space-x-4 mb-4">
                {userGroup === "Admins" && (
                  <>
                    {/* "Upload File" button */}
                    <div>
                      <input
                        ref={ref}
                        type="file"
                        onChange={handleMultipleFileLoad}
                        multiple
                        className="hidden"
                      />
                      <button
                        onClick={() => ref.current.click()}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition-colors duration-150"
                      >
                        Upload Files to {currentPath[currentPath.length - 1]}
                      </button>
                    </div>
                    {/* "Create Folder" button */}
                    <div>
                      <button
                        onClick={() => {
                          const folderName = prompt("Enter the folder name:");
                          if (folderName) {
                            createNewFolder(folderName);
                          }
                        }}
                        className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg shadow-md transition-colors duration-150"
                      >
                        Create Folder in {currentPath[currentPath.length - 1]}
                      </button>
                    </div>
                    {/* Testing */}
                    <div>
                      <button
                        onClick={() => {
                          // console.log(groupedFiles);
                          // console.log(currentPath);
                        }}
                        className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg shadow-md transition-colors duration-150"
                      >
                        Do Something
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Feedback Modal */}
              {/* {feedbackMessage && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl max-w-lg transform transition-transform duration-150">
                    <h2 className="text-3xl font-bold mb-6">Feedback</h2>
                    <p className="text-lg mb-4 leading-relaxed">
                      {feedbackMessage.message}
                    </p>
                    <div className="mb-4 space-y-2">
                      <p className="text-gray-700">
                        <span className="font-semibold">Artifact Name:</span>{" "}
                        {feedbackMessage.artifactName}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Full Path:</span>{" "}
                        {feedbackMessage.fullPath}
                      </p>
                    </div>
                    <div className="flex justify-end space-x-4">
                      <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                      >
                        Refresh Page
                      </button>
                      <button
                        onClick={() => setFeedbackMessage(null)}
                        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                      >
                        Close
                      </button>
                    </div>
                  </div> */}
              {/* Overlay */}
              {/* <div
                    className="absolute inset-0 bg-black opacity-50 transition-opacity duration-150"
                    onClick={() => setFeedbackMessage(null)}
                  ></div>
                </div>
              )} */}

              {/* Progress Bar */}
              {progress && (
                <div className="fixed bottom-0 left-1/4 w-1/2 p-4 bg-white border-t border-gray-300 shadow-md">
                  <label className="block font-semibold mb-2">
                    File Upload Progress:
                  </label>
                  <div className="bg-gray-200 rounded">
                    <div
                      style={{ width: `${progress}%` }}
                      className="bg-blue-500 text-xs text-white text-center py-1 rounded"
                    >
                      {progress}%
                    </div>
                  </div>
                </div>
              )}
              <h2 className="mt-10 text-2xl md:text-3xl font-semibold mb-6 border-b-2 border-gray-300">
                {currentPath.slice(-1)}
              </h2>
              {sortedEntries.length === 0 ? (
                <>
                  <div className="mt-10 text-xl md:text-2xl text-gray-600 mb-4">
                    This Folder is Empty
                  </div>
                  <button
                    onClick={() => handleGoBack()}
                    className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-colors duration-150"
                  >
                    <span className="mr-1">↑</span> Go Back
                  </button>
                </>
              ) : isGridView ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sortedEntries.map(([name, content]) => {
                    if ("size" in content) {
                      // If it is a file
                      return (
                        <div
                          key={name}
                          onClick={() => handleFileClick(content.key)}
                          className="flex items-center justify-between m-2 p-2 border border-gray-400 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-150 cursor-pointer"
                        >
                          <span className="text-xl md:text-2xl mb-2">📄</span>
                          <div className="text-sm md:font-semibold text-gray-700 mb-2">
                            {name}
                          </div>

                          <ActionDropdown
                            actions={[
                              {
                                label: "Download",
                                handler: () => handleDownload(content.key),
                              },
                              ...(userGroup === "Admins"
                                ? [
                                    {
                                      label: "Rename",
                                      handler: () => {
                                        const newName =
                                          prompt("Rename file to:");
                                        if (newName && newName !== name) {
                                          handleFileRename(name, newName);
                                        }
                                      },
                                    },
                                    {
                                      label: "Delete",
                                      handler: () => handleFileDelete(name),
                                    },
                                  ]
                                : []),
                            ]}
                          />
                        </div>
                      );
                    } else {
                      // If it is a folder
                      return (
                        <div
                          key={name}
                          onClick={() => handleFolderClick(name)}
                          className="flex items-center justify-between m-2 p-2 border border-blue-400 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors duration-150"
                        >
                          <span className="text-xl md:text-2xl mr-2">📁</span>
                          <div className="text-sm md:font-semibold text-blue-700">
                            {name}
                          </div>

                          {userGroup === "Admins" && (
                            <div className="ml-2">
                              <ActionDropdown
                                actions={[
                                  {
                                    label: "Rename",
                                    handler: (e) => {
                                      e.preventDefault();
                                      const newFolderName = prompt(
                                        "Enter new folder name:"
                                      );
                                      if (
                                        newFolderName &&
                                        newFolderName !== name
                                      ) {
                                        handleFolderRename(name, newFolderName);
                                      }
                                    },
                                  },
                                  {
                                    label: "Delete",
                                    handler: (e) => handleFolderDelete(e, name),
                                  },
                                ]}
                              />
                            </div>
                          )}
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                <table className="w-full text-left border-collapse mt-2">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border-b p-2 font-semibold">Name</th>
                      <th className="border-b p-2 font-semibold w-2/5">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedEntries.map(([name, content], i) => {
                      if ("size" in content) {
                        // It's a file
                        return (
                          <tr key={name} className="hover:bg-gray-100">
                            <td className="border p-2">📄 {name}</td>
                            <td className="border p-2">
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handleDownload(content.key)}
                                  className="bg-blue-500 hover:bg-blue-600 border border-blue-700 px-2 py-1 mb-1 rounded text-white transition-colors duration-150"
                                >
                                  Download
                                </button>

                                {userGroup === "Admins" && (
                                  <>
                                    <button
                                      onClick={() => {
                                        const newName =
                                          prompt("Rename file to:");
                                        if (newName && newName !== name) {
                                          handleFileRename(name, newName);
                                        }
                                      }}
                                      className="bg-green-500 hover:bg-green-600 border border-green-700 px-2 py-1 rounded text-white transition-colors duration-150"
                                    >
                                      Rename
                                    </button>

                                    <button
                                      onClick={() => handleFileDelete(name)}
                                      className="bg-red-500 hover:bg-red-600 border border-red-700 px-2 py-1 rounded text-white transition-colors duration-150"
                                    >
                                      Delete
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      } else {
                        // It's a folder
                        return (
                          <tr key={name} className="hover:bg-gray-100">
                            <td className="border p-2">
                              <div className="flex items-center space-x-2">
                                <span className="text-xl md:text-2xl">📁</span>
                                <span>{name}</span>
                              </div>
                            </td>
                            <td className="border p-2">
                              <div className="flex items-center space-x-2">
                                <button
                                  className="bg-purple-200 border-purple-400 px-3 py-1 m-1 rounded"
                                  onClick={() => handleFolderClick(name)}
                                >
                                  Open Folder
                                </button>

                                {userGroup === "Admins" && (
                                  <>
                                    <button
                                      onClick={() => {
                                        const newFolderName = prompt(
                                          "Enter new folder name:"
                                        );
                                        if (
                                          newFolderName &&
                                          newFolderName !== name
                                        ) {
                                          handleFolderRename(
                                            name,
                                            newFolderName
                                          );
                                        }
                                      }}
                                      className="bg-green-500 hover:bg-green-600 border border-green-700 px-2 py-1 rounded text-white transition-colors duration-150"
                                    >
                                      Rename
                                    </button>
                                    <button
                                      onClick={(e) =>
                                        handleFolderDelete(e, name)
                                      }
                                      className="bg-red-500 hover:bg-red-600 border border-red-700 px-2 py-1 rounded text-white transition-colors duration-150"
                                    >
                                      Delete
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              )}
              {selectedFile ? (
                <>
                  <button onClick={() => setSelectedFile(null)}>
                    Close Preview
                  </button>
                  <FileViewer
                    fileUrl={selectedFile}
                    fileType={selectedFileType}
                  />
                </>
              ) : (
                <div>Click on a file to view</div>
              )}
            </main>
          )}
        </div>
      </div>
    </Account>
  );
}

export default Dashboard;
