/*
 * --------------------------------------------------------------------------------
 * <copyright company="Aspose" file="stylesTests.ts">
 *   Copyright (c) 2020 Aspose.Words for Cloud
 * </copyright>
 * <summary>
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 * 
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 * 
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 * </summary>
 * --------------------------------------------------------------------------------
 */

import { expect } from "chai";
import "mocha";

import * as fs from "fs";
import * as model from "../../src/model/model";
import * as BaseTest from "../baseTest";

// Example of how to work with styles.
describe("styles", () => {
    expect(fs);
    const remoteDataFolder = BaseTest.remoteBaseTestDataFolder + "/DocumentElements/Styles";
    const localFile = "DocumentElements/Styles/GetStyles.docx";

    // Test for getting styles from document.
    describe("getStyles test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetStyles.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetStylesRequest({
                    name: remoteFileName,
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getStyles(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.styles).to.exist;
                    expect(resultApi.body.styles).to.have.lengthOf(22);
                    expect(resultApi.body.styles[0].name).startsWith("Default Paragraph Font").to.true;
                });

            });

       });
    });

    // Test for getting style from document.
    describe("getStyle test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetStyle.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetStyleRequest({
                    name: remoteFileName,
                    styleName: "Heading 1",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getStyle(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.style).to.exist;
                    expect(resultApi.body.style.name).startsWith("Heading 1").to.true;
                });

            });

       });
    });

    // Test for updating style from document.
    describe("updateStyle test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestUpdateStyle.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.UpdateStyleRequest({
                    name: remoteFileName,
                    styleUpdate: new model.StyleUpdate({
                        name: "My Style"
                    }),
                    styleName: "Heading 1",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.updateStyle(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.style).to.exist;
                    expect(resultApi.body.style.name).startsWith("My Style").to.true;
                });

            });

       });
    });

    // Test for inserting style from document.
    describe("insertStyle test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestInsertStyle.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.InsertStyleRequest({
                    name: remoteFileName,
                    styleInsert: new model.StyleInsert({
                        styleName: "My Style",
                        styleType: model.StyleInsert.StyleTypeEnum.Paragraph
                    }),
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.insertStyle(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.style).to.exist;
                    expect(resultApi.body.style.name).startsWith("My Style").to.true;
                });

            });

       });
    });

    // Test for coping style from document.
    describe("copyStyle test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestCopyStyle.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.CopyStyleRequest({
                    name: remoteFileName,
                    styleCopy: new model.StyleCopy({
                        styleName: "Heading 1"
                    }),
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.copyStyle(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.style).to.exist;
                    expect(resultApi.body.style.name).startsWith("Heading 1_0").to.true;
                });

            });

       });
    });

    // Test for getting style from document element.
    describe("getStyleFromDocumentElement test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestGetStyleFromDocumentElement.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.GetStyleFromDocumentElementRequest({
                    name: remoteFileName,
                    styledNodePath: "paragraphs/1/paragraphFormat",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.getStyleFromDocumentElement(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                    expect(resultApi.body.style).to.exist;
                    expect(resultApi.body.style.name).startsWith("TOC 1").to.true;
                });

            });

       });
    });

    // Test for applying style to document element.
    describe("applyStyleToDocumentElement test", () => {
        it("should return response with code 200", () => {
            const wordsApi = BaseTest.initializeWordsApi();
            const remoteFileName = "TestApplyStyleToDocumentElement.docx";

            return wordsApi.uploadFileToStorage(
                remoteDataFolder + "/" + remoteFileName,
                BaseTest.localBaseTestDataFolder + localFile
            ).then((result0) => {
                expect(result0.response.statusMessage).to.equal("OK");
                const request = new model.ApplyStyleToDocumentElementRequest({
                    name: remoteFileName,
                    styleApply: new model.StyleApply({
                        styleName: "Heading 1"
                    }),
                    styledNodePath: "paragraphs/1/paragraphFormat",
                    folder: remoteDataFolder
                });

                // Act
                return wordsApi.applyStyleToDocumentElement(request)
                .then((resultApi) => {
                    // Assert
                    expect(resultApi.response.statusCode).to.equal(200);
                });

            });

       });
    });
});
