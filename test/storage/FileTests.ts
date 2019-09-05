/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";
import fs = require("fs");

import { UploadFileRequest } from "../../src/model/model";
import * as BaseTest from "../baseTest";

const testFolder = "document";

describe("Storage file operations", () => {
    describe("Test for uploading file", () => {
        it("should return response with code 200 and name of uploaded file", () => {

            const wordsApi = BaseTest.initializeWordsApi(true);

            const localPath = BaseTest.localCommonTestDataFolder + "test_multi_pages.docx";
            const remoteFileName = "TestGetParagraphs.docx";
            const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

            const request: UploadFileRequest = {
                file: fs.readFileSync(localPath),
                path: remotePath + "/" + remoteFileName,
                storageName: null
            };

            return new Promise((resolve) => {
                wordsApi.uploadFile(request)
                    .then((result) => {
                        expect(result.response.statusCode).to.equal(200);
                        expect(result.body.uploaded.length).to.equal(1);
                        resolve();
                    });
            });
        });
    });

    describe("Test for copy file", () => {

        const wordsApi = BaseTest.initializeWordsApi(true);

        const localName = "test_multi_pages.docx";
        const remoteBasePathSrc = BaseTest.remoteBaseTestDataFolder + "TestCopyFileSrc.docx";
        var remoteBasePathDest = BaseTest.remoteBaseTestDataFolder + "TestCopyFileDest{Guid.NewGuid()}.docx";

        const remoteFileName = "TestGetParagraphs.docx";
        const remotePath = BaseTest.remoteBaseTestDataFolder + testFolder;

        const request: UploadFileRequest = {
            file: fs.readFileSync(localPath),
            path: remotePath + "/" + remoteFileName,
            storageName: null
        };

        return new Promise((resolve) => {
            wordsApi.uploadFile(request)
                .then((result) => {
                    expect(result.response.statusCode).to.equal(200);
                    expect(result.body.uploaded.length).to.equal(1);
                    resolve();
                });
        });
    });
});
