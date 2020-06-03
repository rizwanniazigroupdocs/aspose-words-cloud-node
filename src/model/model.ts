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
import { Readable } from "stream";
import { IncomingMessage } from 'http';
import * as importedApiError from './apiError';
import * as importedAvailableFontsResponse from './availableFontsResponse';
import * as importedBmpSaveOptionsData from './bmpSaveOptionsData';
import * as importedBody from './body';
import * as importedBody1 from './body1';
import * as importedBody10 from './body10';
import * as importedBody11 from './body11';
import * as importedBody2 from './body2';
import * as importedBody3 from './body3';
import * as importedBody4 from './body4';
import * as importedBody5 from './body5';
import * as importedBody6 from './body6';
import * as importedBody7 from './body7';
import * as importedBody8 from './body8';
import * as importedBody9 from './body9';
import * as importedBookmark from './bookmark';
import * as importedBookmarkData from './bookmarkData';
import * as importedBookmarkResponse from './bookmarkResponse';
import * as importedBookmarks from './bookmarks';
import * as importedBookmarksOutlineLevelData from './bookmarksOutlineLevelData';
import * as importedBookmarksResponse from './bookmarksResponse';
import * as importedBorder from './border';
import * as importedBorderResponse from './borderResponse';
import * as importedBordersCollection from './bordersCollection';
import * as importedBordersResponse from './bordersResponse';
import * as importedClassificationResponse from './classificationResponse';
import * as importedClassificationResult from './classificationResult';
import * as importedComment from './comment';
import * as importedCommentBase from './commentBase';
import * as importedCommentInsert from './commentInsert';
import * as importedCommentLink from './commentLink';
import * as importedCommentResponse from './commentResponse';
import * as importedCommentUpdate from './commentUpdate';
import * as importedCommentsCollection from './commentsCollection';
import * as importedCommentsResponse from './commentsResponse';
import * as importedCompareData from './compareData';
import * as importedCompareOptions from './compareOptions';
import * as importedCsvDataLoadOptions from './csvDataLoadOptions';
import * as importedDocSaveOptionsData from './docSaveOptionsData';
import * as importedDocument from './document';
import * as importedDocumentEntry from './documentEntry';
import * as importedDocumentEntryList from './documentEntryList';
import * as importedDocumentPosition from './documentPosition';
import * as importedDocumentProperties from './documentProperties';
import * as importedDocumentPropertiesResponse from './documentPropertiesResponse';
import * as importedDocumentProperty from './documentProperty';
import * as importedDocumentPropertyBase from './documentPropertyBase';
import * as importedDocumentPropertyCreateOrUpdate from './documentPropertyCreateOrUpdate';
import * as importedDocumentPropertyResponse from './documentPropertyResponse';
import * as importedDocumentResponse from './documentResponse';
import * as importedDocumentStatData from './documentStatData';
import * as importedDownsampleOptionsData from './downsampleOptionsData';
import * as importedDrawingObject from './drawingObject';
import * as importedDrawingObjectCollection from './drawingObjectCollection';
import * as importedDrawingObjectInsert from './drawingObjectInsert';
import * as importedDrawingObjectLink from './drawingObjectLink';
import * as importedDrawingObjectResponse from './drawingObjectResponse';
import * as importedDrawingObjectUpdate from './drawingObjectUpdate';
import * as importedDrawingObjectsResponse from './drawingObjectsResponse';
import * as importedEmfSaveOptionsData from './emfSaveOptionsData';
import * as importedEpubSaveOptionsData from './epubSaveOptionsData';
import * as importedErrorDetails from './errorDetails';
import * as importedField from './field';
import * as importedFieldBase from './fieldBase';
import * as importedFieldCollection from './fieldCollection';
import * as importedFieldInsert from './fieldInsert';
import * as importedFieldLink from './fieldLink';
import * as importedFieldNames from './fieldNames';
import * as importedFieldNamesResponse from './fieldNamesResponse';
import * as importedFieldResponse from './fieldResponse';
import * as importedFieldUpdate from './fieldUpdate';
import * as importedFieldsResponse from './fieldsResponse';
import * as importedFileLink from './fileLink';
import * as importedFilesList from './filesList';
import * as importedFilesUploadResult from './filesUploadResult';
import * as importedFixedPageSaveOptionsData from './fixedPageSaveOptionsData';
import * as importedFont from './font';
import * as importedFontInfo from './fontInfo';
import * as importedFontResponse from './fontResponse';
import * as importedFootnote from './footnote';
import * as importedFootnoteBase from './footnoteBase';
import * as importedFootnoteCollection from './footnoteCollection';
import * as importedFootnoteInsert from './footnoteInsert';
import * as importedFootnoteLink from './footnoteLink';
import * as importedFootnoteResponse from './footnoteResponse';
import * as importedFootnoteUpdate from './footnoteUpdate';
import * as importedFootnotesResponse from './footnotesResponse';
import * as importedFootnotesStatData from './footnotesStatData';
import * as importedFormField from './formField';
import * as importedFormFieldCheckbox from './formFieldCheckbox';
import * as importedFormFieldCollection from './formFieldCollection';
import * as importedFormFieldDropDown from './formFieldDropDown';
import * as importedFormFieldResponse from './formFieldResponse';
import * as importedFormFieldTextInput from './formFieldTextInput';
import * as importedFormFieldsResponse from './formFieldsResponse';
import * as importedGifSaveOptionsData from './gifSaveOptionsData';
import * as importedGraphicsQualityOptionsData from './graphicsQualityOptionsData';
import * as importedHeaderFooter from './headerFooter';
import * as importedHeaderFooterLink from './headerFooterLink';
import * as importedHeaderFooterLinkCollection from './headerFooterLinkCollection';
import * as importedHeaderFooterResponse from './headerFooterResponse';
import * as importedHeaderFootersResponse from './headerFootersResponse';
import * as importedHtmlFixedSaveOptionsData from './htmlFixedSaveOptionsData';
import * as importedHtmlSaveOptionsData from './htmlSaveOptionsData';
import * as importedHyperlink from './hyperlink';
import * as importedHyperlinkResponse from './hyperlinkResponse';
import * as importedHyperlinks from './hyperlinks';
import * as importedHyperlinksResponse from './hyperlinksResponse';
import * as importedImageSaveOptionsData from './imageSaveOptionsData';
import * as importedJpegSaveOptionsData from './jpegSaveOptionsData';
import * as importedLink from './link';
import * as importedLinkElement from './linkElement';
import * as importedListFormat from './listFormat';
import * as importedListFormatUpdate from './listFormatUpdate';
import * as importedListInfo from './listInfo';
import * as importedListInsert from './listInsert';
import * as importedListLevel from './listLevel';
import * as importedListLevelUpdate from './listLevelUpdate';
import * as importedListLevels from './listLevels';
import * as importedListResponse from './listResponse';
import * as importedListUpdate from './listUpdate';
import * as importedLists from './lists';
import * as importedListsResponse from './listsResponse';
import * as importedLoadWebDocumentData from './loadWebDocumentData';
import * as importedMetafileRenderingOptionsData from './metafileRenderingOptionsData';
import * as importedMhtmlSaveOptionsData from './mhtmlSaveOptionsData';
import * as importedModelError from './modelError';
import * as importedModificationOperationResult from './modificationOperationResult';
import * as importedNodeLink from './nodeLink';
import * as importedOdtSaveOptionsData from './odtSaveOptionsData';
import * as importedOfficeMathLink from './officeMathLink';
import * as importedOfficeMathObject from './officeMathObject';
import * as importedOfficeMathObjectResponse from './officeMathObjectResponse';
import * as importedOfficeMathObjectsCollection from './officeMathObjectsCollection';
import * as importedOfficeMathObjectsResponse from './officeMathObjectsResponse';
import * as importedOoxmlSaveOptionsData from './ooxmlSaveOptionsData';
import * as importedOutlineOptionsData from './outlineOptionsData';
import * as importedPageNumber from './pageNumber';
import * as importedPageSetup from './pageSetup';
import * as importedPageStatData from './pageStatData';
import * as importedParagraph from './paragraph';
import * as importedParagraphFormat from './paragraphFormat';
import * as importedParagraphFormatResponse from './paragraphFormatResponse';
import * as importedParagraphInsert from './paragraphInsert';
import * as importedParagraphLink from './paragraphLink';
import * as importedParagraphLinkCollection from './paragraphLinkCollection';
import * as importedParagraphLinkCollectionResponse from './paragraphLinkCollectionResponse';
import * as importedParagraphListFormatResponse from './paragraphListFormatResponse';
import * as importedParagraphResponse from './paragraphResponse';
import * as importedPclSaveOptionsData from './pclSaveOptionsData';
import * as importedPdfDigitalSignatureDetailsData from './pdfDigitalSignatureDetailsData';
import * as importedPdfEncryptionDetailsData from './pdfEncryptionDetailsData';
import * as importedPdfSaveOptionsData from './pdfSaveOptionsData';
import * as importedPngSaveOptionsData from './pngSaveOptionsData';
import * as importedPreferredWidth from './preferredWidth';
import * as importedProtectionData from './protectionData';
import * as importedProtectionDataResponse from './protectionDataResponse';
import * as importedProtectionRequest from './protectionRequest';
import * as importedPsSaveOptionsData from './psSaveOptionsData';
import * as importedRangeDocument from './rangeDocument';
import * as importedRangeTextResponse from './rangeTextResponse';
import * as importedReplaceRange from './replaceRange';
import * as importedReplaceTextParameters from './replaceTextParameters';
import * as importedReplaceTextResponse from './replaceTextResponse';
import * as importedReportBuildOptions from './reportBuildOptions';
import * as importedReportEngineSettings from './reportEngineSettings';
import * as importedRevisionsModificationResponse from './revisionsModificationResponse';
import * as importedRtfSaveOptionsData from './rtfSaveOptionsData';
import * as importedRun from './run';
import * as importedRunBase from './runBase';
import * as importedRunInsert from './runInsert';
import * as importedRunLink from './runLink';
import * as importedRunResponse from './runResponse';
import * as importedRunUpdate from './runUpdate';
import * as importedRuns from './runs';
import * as importedRunsResponse from './runsResponse';
import * as importedSaveOptionsData from './saveOptionsData';
import * as importedSaveResponse from './saveResponse';
import * as importedSaveResult from './saveResult';
import * as importedSearchResponse from './searchResponse';
import * as importedSearchResult from './searchResult';
import * as importedSearchResultsCollection from './searchResultsCollection';
import * as importedSection from './section';
import * as importedSectionLink from './sectionLink';
import * as importedSectionLinkCollection from './sectionLinkCollection';
import * as importedSectionLinkCollectionResponse from './sectionLinkCollectionResponse';
import * as importedSectionPageSetupResponse from './sectionPageSetupResponse';
import * as importedSectionResponse from './sectionResponse';
import * as importedShading from './shading';
import * as importedSplitDocumentResponse from './splitDocumentResponse';
import * as importedSplitDocumentResult from './splitDocumentResult';
import * as importedStatDataResponse from './statDataResponse';
import * as importedStorageFile from './storageFile';
import * as importedStoryChildNodes from './storyChildNodes';
import * as importedStringFormatData from './stringFormatData';
import * as importedStyle from './style';
import * as importedStyleApply from './styleApply';
import * as importedStyleCopy from './styleCopy';
import * as importedStyleInsert from './styleInsert';
import * as importedStyleResponse from './styleResponse';
import * as importedStyleUpdate from './styleUpdate';
import * as importedStylesResponse from './stylesResponse';
import * as importedSvgSaveOptionsData from './svgSaveOptionsData';
import * as importedTabStop from './tabStop';
import * as importedTabStopBase from './tabStopBase';
import * as importedTabStopInsert from './tabStopInsert';
import * as importedTabStopsResponse from './tabStopsResponse';
import * as importedTable from './table';
import * as importedTableCell from './tableCell';
import * as importedTableCellFormat from './tableCellFormat';
import * as importedTableCellFormatResponse from './tableCellFormatResponse';
import * as importedTableCellInsert from './tableCellInsert';
import * as importedTableCellResponse from './tableCellResponse';
import * as importedTableInsert from './tableInsert';
import * as importedTableLink from './tableLink';
import * as importedTableLinkCollection from './tableLinkCollection';
import * as importedTableLinkCollectionResponse from './tableLinkCollectionResponse';
import * as importedTableProperties from './tableProperties';
import * as importedTablePropertiesResponse from './tablePropertiesResponse';
import * as importedTableResponse from './tableResponse';
import * as importedTableRow from './tableRow';
import * as importedTableRowFormat from './tableRowFormat';
import * as importedTableRowFormatResponse from './tableRowFormatResponse';
import * as importedTableRowInsert from './tableRowInsert';
import * as importedTableRowResponse from './tableRowResponse';
import * as importedTextSaveOptionsData from './textSaveOptionsData';
import * as importedTiffSaveOptionsData from './tiffSaveOptionsData';
import * as importedWatermarkText from './watermarkText';
import * as importedWordMLSaveOptionsData from './wordMLSaveOptionsData';
import * as importedWordsApiErrorResponse from './wordsApiErrorResponse';
import * as importedWordsApiLink from './wordsApiLink';
import * as importedWordsResponse from './wordsResponse';
import * as importedXamlFixedSaveOptionsData from './xamlFixedSaveOptionsData';
import * as importedXamlFlowSaveOptionsData from './xamlFlowSaveOptionsData';
import * as importedXmlColor from './xmlColor';
import * as importedXpsSaveOptionsData from './xpsSaveOptionsData';

export { AttributeInfo } from '../internal/attributeInfo';
export * from './apiError';
export * from './availableFontsResponse';
export * from './bmpSaveOptionsData';
export * from './body';
export * from './body1';
export * from './body10';
export * from './body11';
export * from './body2';
export * from './body3';
export * from './body4';
export * from './body5';
export * from './body6';
export * from './body7';
export * from './body8';
export * from './body9';
export * from './bookmark';
export * from './bookmarkData';
export * from './bookmarkResponse';
export * from './bookmarks';
export * from './bookmarksOutlineLevelData';
export * from './bookmarksResponse';
export * from './border';
export * from './borderResponse';
export * from './bordersCollection';
export * from './bordersResponse';
export * from './classificationResponse';
export * from './classificationResult';
export * from './comment';
export * from './commentBase';
export * from './commentInsert';
export * from './commentLink';
export * from './commentResponse';
export * from './commentUpdate';
export * from './commentsCollection';
export * from './commentsResponse';
export * from './compareData';
export * from './compareOptions';
export * from './csvDataLoadOptions';
export * from './docSaveOptionsData';
export * from './document';
export * from './documentEntry';
export * from './documentEntryList';
export * from './documentPosition';
export * from './documentProperties';
export * from './documentPropertiesResponse';
export * from './documentProperty';
export * from './documentPropertyBase';
export * from './documentPropertyCreateOrUpdate';
export * from './documentPropertyResponse';
export * from './documentResponse';
export * from './documentStatData';
export * from './downsampleOptionsData';
export * from './drawingObject';
export * from './drawingObjectCollection';
export * from './drawingObjectInsert';
export * from './drawingObjectLink';
export * from './drawingObjectResponse';
export * from './drawingObjectUpdate';
export * from './drawingObjectsResponse';
export * from './emfSaveOptionsData';
export * from './epubSaveOptionsData';
export * from './errorDetails';
export * from './field';
export * from './fieldBase';
export * from './fieldCollection';
export * from './fieldInsert';
export * from './fieldLink';
export * from './fieldNames';
export * from './fieldNamesResponse';
export * from './fieldResponse';
export * from './fieldUpdate';
export * from './fieldsResponse';
export * from './fileLink';
export * from './filesList';
export * from './filesUploadResult';
export * from './fixedPageSaveOptionsData';
export * from './font';
export * from './fontInfo';
export * from './fontResponse';
export * from './footnote';
export * from './footnoteBase';
export * from './footnoteCollection';
export * from './footnoteInsert';
export * from './footnoteLink';
export * from './footnoteResponse';
export * from './footnoteUpdate';
export * from './footnotesResponse';
export * from './footnotesStatData';
export * from './formField';
export * from './formFieldCheckbox';
export * from './formFieldCollection';
export * from './formFieldDropDown';
export * from './formFieldResponse';
export * from './formFieldTextInput';
export * from './formFieldsResponse';
export * from './gifSaveOptionsData';
export * from './graphicsQualityOptionsData';
export * from './headerFooter';
export * from './headerFooterLink';
export * from './headerFooterLinkCollection';
export * from './headerFooterResponse';
export * from './headerFootersResponse';
export * from './htmlFixedSaveOptionsData';
export * from './htmlSaveOptionsData';
export * from './hyperlink';
export * from './hyperlinkResponse';
export * from './hyperlinks';
export * from './hyperlinksResponse';
export * from './imageSaveOptionsData';
export * from './jpegSaveOptionsData';
export * from './link';
export * from './linkElement';
export * from './listFormat';
export * from './listFormatUpdate';
export * from './listInfo';
export * from './listInsert';
export * from './listLevel';
export * from './listLevelUpdate';
export * from './listLevels';
export * from './listResponse';
export * from './listUpdate';
export * from './lists';
export * from './listsResponse';
export * from './loadWebDocumentData';
export * from './metafileRenderingOptionsData';
export * from './mhtmlSaveOptionsData';
export * from './modelError';
export * from './modificationOperationResult';
export * from './nodeLink';
export * from './odtSaveOptionsData';
export * from './officeMathLink';
export * from './officeMathObject';
export * from './officeMathObjectResponse';
export * from './officeMathObjectsCollection';
export * from './officeMathObjectsResponse';
export * from './ooxmlSaveOptionsData';
export * from './outlineOptionsData';
export * from './pageNumber';
export * from './pageSetup';
export * from './pageStatData';
export * from './paragraph';
export * from './paragraphFormat';
export * from './paragraphFormatResponse';
export * from './paragraphInsert';
export * from './paragraphLink';
export * from './paragraphLinkCollection';
export * from './paragraphLinkCollectionResponse';
export * from './paragraphListFormatResponse';
export * from './paragraphResponse';
export * from './pclSaveOptionsData';
export * from './pdfDigitalSignatureDetailsData';
export * from './pdfEncryptionDetailsData';
export * from './pdfSaveOptionsData';
export * from './pngSaveOptionsData';
export * from './preferredWidth';
export * from './protectionData';
export * from './protectionDataResponse';
export * from './protectionRequest';
export * from './psSaveOptionsData';
export * from './rangeDocument';
export * from './rangeTextResponse';
export * from './replaceRange';
export * from './replaceTextParameters';
export * from './replaceTextResponse';
export * from './reportBuildOptions';
export * from './reportEngineSettings';
export * from './revisionsModificationResponse';
export * from './rtfSaveOptionsData';
export * from './run';
export * from './runBase';
export * from './runInsert';
export * from './runLink';
export * from './runResponse';
export * from './runUpdate';
export * from './runs';
export * from './runsResponse';
export * from './saveOptionsData';
export * from './saveResponse';
export * from './saveResult';
export * from './searchResponse';
export * from './searchResult';
export * from './searchResultsCollection';
export * from './section';
export * from './sectionLink';
export * from './sectionLinkCollection';
export * from './sectionLinkCollectionResponse';
export * from './sectionPageSetupResponse';
export * from './sectionResponse';
export * from './shading';
export * from './splitDocumentResponse';
export * from './splitDocumentResult';
export * from './statDataResponse';
export * from './storageFile';
export * from './storyChildNodes';
export * from './stringFormatData';
export * from './style';
export * from './styleApply';
export * from './styleCopy';
export * from './styleInsert';
export * from './styleResponse';
export * from './styleUpdate';
export * from './stylesResponse';
export * from './svgSaveOptionsData';
export * from './tabStop';
export * from './tabStopBase';
export * from './tabStopInsert';
export * from './tabStopsResponse';
export * from './table';
export * from './tableCell';
export * from './tableCellFormat';
export * from './tableCellFormatResponse';
export * from './tableCellInsert';
export * from './tableCellResponse';
export * from './tableInsert';
export * from './tableLink';
export * from './tableLinkCollection';
export * from './tableLinkCollectionResponse';
export * from './tableProperties';
export * from './tablePropertiesResponse';
export * from './tableResponse';
export * from './tableRow';
export * from './tableRowFormat';
export * from './tableRowFormatResponse';
export * from './tableRowInsert';
export * from './tableRowResponse';
export * from './textSaveOptionsData';
export * from './tiffSaveOptionsData';
export * from './watermarkText';
export * from './wordMLSaveOptionsData';
export * from './wordsApiErrorResponse';
export * from './wordsApiLink';
export * from './wordsResponse';
export * from './xamlFixedSaveOptionsData';
export * from './xamlFlowSaveOptionsData';
export * from './xmlColor';
export * from './xpsSaveOptionsData';

/**
 * WordsIncomingMessage
 */
export class WordsIncomingMessage<T> {
    /**
     * Gets or sets raw response
     */
    public response: IncomingMessage;
    
    /**
     * Get or set parsed response
     */
    public body: T;
}

const enumsMap = {
    "Border.BorderTypeEnum": importedBorder.Border.BorderTypeEnum,
    "Border.LineStyleEnum": importedBorder.Border.LineStyleEnum,
    "CompareOptions.TargetEnum": importedCompareOptions.CompareOptions.TargetEnum,
    "Document.SourceFormatEnum": importedDocument.Document.SourceFormatEnum,
    "DrawingObject.RelativeHorizontalPositionEnum": importedDrawingObject.DrawingObject.RelativeHorizontalPositionEnum,
    "DrawingObject.RelativeVerticalPositionEnum": importedDrawingObject.DrawingObject.RelativeVerticalPositionEnum,
    "DrawingObject.WrapTypeEnum": importedDrawingObject.DrawingObject.WrapTypeEnum,
    "DrawingObjectInsert.RelativeHorizontalPositionEnum": importedDrawingObjectInsert.DrawingObjectInsert.RelativeHorizontalPositionEnum,
    "DrawingObjectInsert.RelativeVerticalPositionEnum": importedDrawingObjectInsert.DrawingObjectInsert.RelativeVerticalPositionEnum,
    "DrawingObjectInsert.WrapTypeEnum": importedDrawingObjectInsert.DrawingObjectInsert.WrapTypeEnum,
    "DrawingObjectUpdate.RelativeHorizontalPositionEnum": importedDrawingObjectUpdate.DrawingObjectUpdate.RelativeHorizontalPositionEnum,
    "DrawingObjectUpdate.RelativeVerticalPositionEnum": importedDrawingObjectUpdate.DrawingObjectUpdate.RelativeVerticalPositionEnum,
    "DrawingObjectUpdate.WrapTypeEnum": importedDrawingObjectUpdate.DrawingObjectUpdate.WrapTypeEnum,
    "Font.StyleIdentifierEnum": importedFont.Font.StyleIdentifierEnum,
    "Font.TextEffectEnum": importedFont.Font.TextEffectEnum,
    "Font.UnderlineEnum": importedFont.Font.UnderlineEnum,
    "Footnote.FootnoteTypeEnum": importedFootnote.Footnote.FootnoteTypeEnum,
    "FootnoteBase.FootnoteTypeEnum": importedFootnoteBase.FootnoteBase.FootnoteTypeEnum,
    "FormFieldTextInput.TextInputTypeEnum": importedFormFieldTextInput.FormFieldTextInput.TextInputTypeEnum,
    "GraphicsQualityOptionsData.CompositingModeEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.CompositingModeEnum,
    "GraphicsQualityOptionsData.CompositingQualityEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.CompositingQualityEnum,
    "GraphicsQualityOptionsData.InterpolationModeEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.InterpolationModeEnum,
    "GraphicsQualityOptionsData.SmoothingModeEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.SmoothingModeEnum,
    "GraphicsQualityOptionsData.TextRenderingHintEnum": importedGraphicsQualityOptionsData.GraphicsQualityOptionsData.TextRenderingHintEnum,
    "HeaderFooterLink.TypeEnum": importedHeaderFooterLink.HeaderFooterLink.TypeEnum,
    "HtmlSaveOptionsData.HtmlVersionEnum": importedHtmlSaveOptionsData.HtmlSaveOptionsData.HtmlVersionEnum,
    "HtmlSaveOptionsData.MetafileFormatEnum": importedHtmlSaveOptionsData.HtmlSaveOptionsData.MetafileFormatEnum,
    "HtmlSaveOptionsData.OfficeMathOutputModeEnum": importedHtmlSaveOptionsData.HtmlSaveOptionsData.OfficeMathOutputModeEnum,
    "ListInsert.TemplateEnum": importedListInsert.ListInsert.TemplateEnum,
    "ListLevel.AlignmentEnum": importedListLevel.ListLevel.AlignmentEnum,
    "ListLevel.NumberStyleEnum": importedListLevel.ListLevel.NumberStyleEnum,
    "ListLevel.TrailingCharacterEnum": importedListLevel.ListLevel.TrailingCharacterEnum,
    "ListLevelUpdate.NumberStyleEnum": importedListLevelUpdate.ListLevelUpdate.NumberStyleEnum,
    "ListLevelUpdate.AlignmentEnum": importedListLevelUpdate.ListLevelUpdate.AlignmentEnum,
    "ListLevelUpdate.TrailingCharacterEnum": importedListLevelUpdate.ListLevelUpdate.TrailingCharacterEnum,
    "OdtSaveOptionsData.MeasureUnitEnum": importedOdtSaveOptionsData.OdtSaveOptionsData.MeasureUnitEnum,
    "OfficeMathObject.DisplayTypeEnum": importedOfficeMathObject.OfficeMathObject.DisplayTypeEnum,
    "OfficeMathObject.JustificationEnum": importedOfficeMathObject.OfficeMathObject.JustificationEnum,
    "OfficeMathObject.MathObjectTypeEnum": importedOfficeMathObject.OfficeMathObject.MathObjectTypeEnum,
    "OoxmlSaveOptionsData.CompressionLevelEnum": importedOoxmlSaveOptionsData.OoxmlSaveOptionsData.CompressionLevelEnum,
    "PageSetup.BorderAppliesToEnum": importedPageSetup.PageSetup.BorderAppliesToEnum,
    "PageSetup.BorderDistanceFromEnum": importedPageSetup.PageSetup.BorderDistanceFromEnum,
    "PageSetup.LineNumberRestartModeEnum": importedPageSetup.PageSetup.LineNumberRestartModeEnum,
    "PageSetup.OrientationEnum": importedPageSetup.PageSetup.OrientationEnum,
    "PageSetup.PageNumberStyleEnum": importedPageSetup.PageSetup.PageNumberStyleEnum,
    "PageSetup.PaperSizeEnum": importedPageSetup.PageSetup.PaperSizeEnum,
    "PageSetup.SectionStartEnum": importedPageSetup.PageSetup.SectionStartEnum,
    "PageSetup.VerticalAlignmentEnum": importedPageSetup.PageSetup.VerticalAlignmentEnum,
    "ParagraphFormat.AlignmentEnum": importedParagraphFormat.ParagraphFormat.AlignmentEnum,
    "ParagraphFormat.DropCapPositionEnum": importedParagraphFormat.ParagraphFormat.DropCapPositionEnum,
    "ParagraphFormat.LineSpacingRuleEnum": importedParagraphFormat.ParagraphFormat.LineSpacingRuleEnum,
    "ParagraphFormat.OutlineLevelEnum": importedParagraphFormat.ParagraphFormat.OutlineLevelEnum,
    "ParagraphFormat.StyleIdentifierEnum": importedParagraphFormat.ParagraphFormat.StyleIdentifierEnum,
    "PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum": importedPdfSaveOptionsData.PdfSaveOptionsData.HeaderFooterBookmarksExportModeEnum,
    "PreferredWidth.TypeEnum": importedPreferredWidth.PreferredWidth.TypeEnum,
    "ReplaceRange.TextTypeEnum": importedReplaceRange.ReplaceRange.TextTypeEnum,
    "ReportEngineSettings.DataSourceTypeEnum": importedReportEngineSettings.ReportEngineSettings.DataSourceTypeEnum,
    "SaveOptionsData.Dml3DEffectsRenderingModeEnum": importedSaveOptionsData.SaveOptionsData.Dml3DEffectsRenderingModeEnum,
    "Shading.TextureEnum": importedShading.Shading.TextureEnum,
    "StringFormatData.AlignmentEnum": importedStringFormatData.StringFormatData.AlignmentEnum,
    "StringFormatData.FormatFlagsEnum": importedStringFormatData.StringFormatData.FormatFlagsEnum,
    "StringFormatData.HotkeyPrefixEnum": importedStringFormatData.StringFormatData.HotkeyPrefixEnum,
    "StringFormatData.LineAlignmentEnum": importedStringFormatData.StringFormatData.LineAlignmentEnum,
    "StringFormatData.TrimmingEnum": importedStringFormatData.StringFormatData.TrimmingEnum,
    "Style.StyleIdentifierEnum": importedStyle.Style.StyleIdentifierEnum,
    "Style.TypeEnum": importedStyle.Style.TypeEnum,
    "StyleInsert.StyleTypeEnum": importedStyleInsert.StyleInsert.StyleTypeEnum,
    "TabStopBase.AlignmentEnum": importedTabStopBase.TabStopBase.AlignmentEnum,
    "TabStopBase.LeaderEnum": importedTabStopBase.TabStopBase.LeaderEnum,
    "TableCellFormat.HorizontalMergeEnum": importedTableCellFormat.TableCellFormat.HorizontalMergeEnum,
    "TableCellFormat.OrientationEnum": importedTableCellFormat.TableCellFormat.OrientationEnum,
    "TableCellFormat.VerticalAlignmentEnum": importedTableCellFormat.TableCellFormat.VerticalAlignmentEnum,
    "TableCellFormat.VerticalMergeEnum": importedTableCellFormat.TableCellFormat.VerticalMergeEnum,
    "TableProperties.AlignmentEnum": importedTableProperties.TableProperties.AlignmentEnum,
    "TableProperties.StyleIdentifierEnum": importedTableProperties.TableProperties.StyleIdentifierEnum,
    "TableProperties.StyleOptionsEnum": importedTableProperties.TableProperties.StyleOptionsEnum,
    "TableProperties.TextWrappingEnum": importedTableProperties.TableProperties.TextWrappingEnum,
    "TableRowFormat.HeightRuleEnum": importedTableRowFormat.TableRowFormat.HeightRuleEnum,
    "TextSaveOptionsData.ExportHeadersFootersModeEnum": importedTextSaveOptionsData.TextSaveOptionsData.ExportHeadersFootersModeEnum,
};

const typeMap = {
    ApiError: importedApiError.ApiError,
    AvailableFontsResponse: importedAvailableFontsResponse.AvailableFontsResponse,
    BmpSaveOptionsData: importedBmpSaveOptionsData.BmpSaveOptionsData,
    Body: importedBody.Body,
    Body1: importedBody1.Body1,
    Body10: importedBody10.Body10,
    Body11: importedBody11.Body11,
    Body2: importedBody2.Body2,
    Body3: importedBody3.Body3,
    Body4: importedBody4.Body4,
    Body5: importedBody5.Body5,
    Body6: importedBody6.Body6,
    Body7: importedBody7.Body7,
    Body8: importedBody8.Body8,
    Body9: importedBody9.Body9,
    Bookmark: importedBookmark.Bookmark,
    BookmarkData: importedBookmarkData.BookmarkData,
    BookmarkResponse: importedBookmarkResponse.BookmarkResponse,
    Bookmarks: importedBookmarks.Bookmarks,
    BookmarksOutlineLevelData: importedBookmarksOutlineLevelData.BookmarksOutlineLevelData,
    BookmarksResponse: importedBookmarksResponse.BookmarksResponse,
    Border: importedBorder.Border,
    BorderResponse: importedBorderResponse.BorderResponse,
    BordersCollection: importedBordersCollection.BordersCollection,
    BordersResponse: importedBordersResponse.BordersResponse,
    ClassificationResponse: importedClassificationResponse.ClassificationResponse,
    ClassificationResult: importedClassificationResult.ClassificationResult,
    Comment: importedComment.Comment,
    CommentBase: importedCommentBase.CommentBase,
    CommentInsert: importedCommentInsert.CommentInsert,
    CommentLink: importedCommentLink.CommentLink,
    CommentResponse: importedCommentResponse.CommentResponse,
    CommentUpdate: importedCommentUpdate.CommentUpdate,
    CommentsCollection: importedCommentsCollection.CommentsCollection,
    CommentsResponse: importedCommentsResponse.CommentsResponse,
    CompareData: importedCompareData.CompareData,
    CompareOptions: importedCompareOptions.CompareOptions,
    CsvDataLoadOptions: importedCsvDataLoadOptions.CsvDataLoadOptions,
    DocSaveOptionsData: importedDocSaveOptionsData.DocSaveOptionsData,
    Document: importedDocument.Document,
    DocumentEntry: importedDocumentEntry.DocumentEntry,
    DocumentEntryList: importedDocumentEntryList.DocumentEntryList,
    DocumentPosition: importedDocumentPosition.DocumentPosition,
    DocumentProperties: importedDocumentProperties.DocumentProperties,
    DocumentPropertiesResponse: importedDocumentPropertiesResponse.DocumentPropertiesResponse,
    DocumentProperty: importedDocumentProperty.DocumentProperty,
    DocumentPropertyBase: importedDocumentPropertyBase.DocumentPropertyBase,
    DocumentPropertyCreateOrUpdate: importedDocumentPropertyCreateOrUpdate.DocumentPropertyCreateOrUpdate,
    DocumentPropertyResponse: importedDocumentPropertyResponse.DocumentPropertyResponse,
    DocumentResponse: importedDocumentResponse.DocumentResponse,
    DocumentStatData: importedDocumentStatData.DocumentStatData,
    DownsampleOptionsData: importedDownsampleOptionsData.DownsampleOptionsData,
    DrawingObject: importedDrawingObject.DrawingObject,
    DrawingObjectCollection: importedDrawingObjectCollection.DrawingObjectCollection,
    DrawingObjectInsert: importedDrawingObjectInsert.DrawingObjectInsert,
    DrawingObjectLink: importedDrawingObjectLink.DrawingObjectLink,
    DrawingObjectResponse: importedDrawingObjectResponse.DrawingObjectResponse,
    DrawingObjectUpdate: importedDrawingObjectUpdate.DrawingObjectUpdate,
    DrawingObjectsResponse: importedDrawingObjectsResponse.DrawingObjectsResponse,
    EmfSaveOptionsData: importedEmfSaveOptionsData.EmfSaveOptionsData,
    EpubSaveOptionsData: importedEpubSaveOptionsData.EpubSaveOptionsData,
    ErrorDetails: importedErrorDetails.ErrorDetails,
    Field: importedField.Field,
    FieldBase: importedFieldBase.FieldBase,
    FieldCollection: importedFieldCollection.FieldCollection,
    FieldInsert: importedFieldInsert.FieldInsert,
    FieldLink: importedFieldLink.FieldLink,
    FieldNames: importedFieldNames.FieldNames,
    FieldNamesResponse: importedFieldNamesResponse.FieldNamesResponse,
    FieldResponse: importedFieldResponse.FieldResponse,
    FieldUpdate: importedFieldUpdate.FieldUpdate,
    FieldsResponse: importedFieldsResponse.FieldsResponse,
    FileLink: importedFileLink.FileLink,
    FilesList: importedFilesList.FilesList,
    FilesUploadResult: importedFilesUploadResult.FilesUploadResult,
    FixedPageSaveOptionsData: importedFixedPageSaveOptionsData.FixedPageSaveOptionsData,
    Font: importedFont.Font,
    FontInfo: importedFontInfo.FontInfo,
    FontResponse: importedFontResponse.FontResponse,
    Footnote: importedFootnote.Footnote,
    FootnoteBase: importedFootnoteBase.FootnoteBase,
    FootnoteCollection: importedFootnoteCollection.FootnoteCollection,
    FootnoteInsert: importedFootnoteInsert.FootnoteInsert,
    FootnoteLink: importedFootnoteLink.FootnoteLink,
    FootnoteResponse: importedFootnoteResponse.FootnoteResponse,
    FootnoteUpdate: importedFootnoteUpdate.FootnoteUpdate,
    FootnotesResponse: importedFootnotesResponse.FootnotesResponse,
    FootnotesStatData: importedFootnotesStatData.FootnotesStatData,
    FormField: importedFormField.FormField,
    FormFieldCheckbox: importedFormFieldCheckbox.FormFieldCheckbox,
    FormFieldCollection: importedFormFieldCollection.FormFieldCollection,
    FormFieldDropDown: importedFormFieldDropDown.FormFieldDropDown,
    FormFieldResponse: importedFormFieldResponse.FormFieldResponse,
    FormFieldTextInput: importedFormFieldTextInput.FormFieldTextInput,
    FormFieldsResponse: importedFormFieldsResponse.FormFieldsResponse,
    GifSaveOptionsData: importedGifSaveOptionsData.GifSaveOptionsData,
    GraphicsQualityOptionsData: importedGraphicsQualityOptionsData.GraphicsQualityOptionsData,
    HeaderFooter: importedHeaderFooter.HeaderFooter,
    HeaderFooterLink: importedHeaderFooterLink.HeaderFooterLink,
    HeaderFooterLinkCollection: importedHeaderFooterLinkCollection.HeaderFooterLinkCollection,
    HeaderFooterResponse: importedHeaderFooterResponse.HeaderFooterResponse,
    HeaderFootersResponse: importedHeaderFootersResponse.HeaderFootersResponse,
    HtmlFixedSaveOptionsData: importedHtmlFixedSaveOptionsData.HtmlFixedSaveOptionsData,
    HtmlSaveOptionsData: importedHtmlSaveOptionsData.HtmlSaveOptionsData,
    Hyperlink: importedHyperlink.Hyperlink,
    HyperlinkResponse: importedHyperlinkResponse.HyperlinkResponse,
    Hyperlinks: importedHyperlinks.Hyperlinks,
    HyperlinksResponse: importedHyperlinksResponse.HyperlinksResponse,
    ImageSaveOptionsData: importedImageSaveOptionsData.ImageSaveOptionsData,
    JpegSaveOptionsData: importedJpegSaveOptionsData.JpegSaveOptionsData,
    Link: importedLink.Link,
    LinkElement: importedLinkElement.LinkElement,
    ListFormat: importedListFormat.ListFormat,
    ListFormatUpdate: importedListFormatUpdate.ListFormatUpdate,
    ListInfo: importedListInfo.ListInfo,
    ListInsert: importedListInsert.ListInsert,
    ListLevel: importedListLevel.ListLevel,
    ListLevelUpdate: importedListLevelUpdate.ListLevelUpdate,
    ListLevels: importedListLevels.ListLevels,
    ListResponse: importedListResponse.ListResponse,
    ListUpdate: importedListUpdate.ListUpdate,
    Lists: importedLists.Lists,
    ListsResponse: importedListsResponse.ListsResponse,
    LoadWebDocumentData: importedLoadWebDocumentData.LoadWebDocumentData,
    MetafileRenderingOptionsData: importedMetafileRenderingOptionsData.MetafileRenderingOptionsData,
    MhtmlSaveOptionsData: importedMhtmlSaveOptionsData.MhtmlSaveOptionsData,
    ModelError: importedModelError.ModelError,
    ModificationOperationResult: importedModificationOperationResult.ModificationOperationResult,
    NodeLink: importedNodeLink.NodeLink,
    OdtSaveOptionsData: importedOdtSaveOptionsData.OdtSaveOptionsData,
    OfficeMathLink: importedOfficeMathLink.OfficeMathLink,
    OfficeMathObject: importedOfficeMathObject.OfficeMathObject,
    OfficeMathObjectResponse: importedOfficeMathObjectResponse.OfficeMathObjectResponse,
    OfficeMathObjectsCollection: importedOfficeMathObjectsCollection.OfficeMathObjectsCollection,
    OfficeMathObjectsResponse: importedOfficeMathObjectsResponse.OfficeMathObjectsResponse,
    OoxmlSaveOptionsData: importedOoxmlSaveOptionsData.OoxmlSaveOptionsData,
    OutlineOptionsData: importedOutlineOptionsData.OutlineOptionsData,
    PageNumber: importedPageNumber.PageNumber,
    PageSetup: importedPageSetup.PageSetup,
    PageStatData: importedPageStatData.PageStatData,
    Paragraph: importedParagraph.Paragraph,
    ParagraphFormat: importedParagraphFormat.ParagraphFormat,
    ParagraphFormatResponse: importedParagraphFormatResponse.ParagraphFormatResponse,
    ParagraphInsert: importedParagraphInsert.ParagraphInsert,
    ParagraphLink: importedParagraphLink.ParagraphLink,
    ParagraphLinkCollection: importedParagraphLinkCollection.ParagraphLinkCollection,
    ParagraphLinkCollectionResponse: importedParagraphLinkCollectionResponse.ParagraphLinkCollectionResponse,
    ParagraphListFormatResponse: importedParagraphListFormatResponse.ParagraphListFormatResponse,
    ParagraphResponse: importedParagraphResponse.ParagraphResponse,
    PclSaveOptionsData: importedPclSaveOptionsData.PclSaveOptionsData,
    PdfDigitalSignatureDetailsData: importedPdfDigitalSignatureDetailsData.PdfDigitalSignatureDetailsData,
    PdfEncryptionDetailsData: importedPdfEncryptionDetailsData.PdfEncryptionDetailsData,
    PdfSaveOptionsData: importedPdfSaveOptionsData.PdfSaveOptionsData,
    PngSaveOptionsData: importedPngSaveOptionsData.PngSaveOptionsData,
    PreferredWidth: importedPreferredWidth.PreferredWidth,
    ProtectionData: importedProtectionData.ProtectionData,
    ProtectionDataResponse: importedProtectionDataResponse.ProtectionDataResponse,
    ProtectionRequest: importedProtectionRequest.ProtectionRequest,
    PsSaveOptionsData: importedPsSaveOptionsData.PsSaveOptionsData,
    RangeDocument: importedRangeDocument.RangeDocument,
    RangeTextResponse: importedRangeTextResponse.RangeTextResponse,
    ReplaceRange: importedReplaceRange.ReplaceRange,
    ReplaceTextParameters: importedReplaceTextParameters.ReplaceTextParameters,
    ReplaceTextResponse: importedReplaceTextResponse.ReplaceTextResponse,
    ReportBuildOptions: importedReportBuildOptions.ReportBuildOptions,
    ReportEngineSettings: importedReportEngineSettings.ReportEngineSettings,
    RevisionsModificationResponse: importedRevisionsModificationResponse.RevisionsModificationResponse,
    RtfSaveOptionsData: importedRtfSaveOptionsData.RtfSaveOptionsData,
    Run: importedRun.Run,
    RunBase: importedRunBase.RunBase,
    RunInsert: importedRunInsert.RunInsert,
    RunLink: importedRunLink.RunLink,
    RunResponse: importedRunResponse.RunResponse,
    RunUpdate: importedRunUpdate.RunUpdate,
    Runs: importedRuns.Runs,
    RunsResponse: importedRunsResponse.RunsResponse,
    SaveOptionsData: importedSaveOptionsData.SaveOptionsData,
    SaveResponse: importedSaveResponse.SaveResponse,
    SaveResult: importedSaveResult.SaveResult,
    SearchResponse: importedSearchResponse.SearchResponse,
    SearchResult: importedSearchResult.SearchResult,
    SearchResultsCollection: importedSearchResultsCollection.SearchResultsCollection,
    Section: importedSection.Section,
    SectionLink: importedSectionLink.SectionLink,
    SectionLinkCollection: importedSectionLinkCollection.SectionLinkCollection,
    SectionLinkCollectionResponse: importedSectionLinkCollectionResponse.SectionLinkCollectionResponse,
    SectionPageSetupResponse: importedSectionPageSetupResponse.SectionPageSetupResponse,
    SectionResponse: importedSectionResponse.SectionResponse,
    Shading: importedShading.Shading,
    SplitDocumentResponse: importedSplitDocumentResponse.SplitDocumentResponse,
    SplitDocumentResult: importedSplitDocumentResult.SplitDocumentResult,
    StatDataResponse: importedStatDataResponse.StatDataResponse,
    StorageFile: importedStorageFile.StorageFile,
    StoryChildNodes: importedStoryChildNodes.StoryChildNodes,
    StringFormatData: importedStringFormatData.StringFormatData,
    Style: importedStyle.Style,
    StyleApply: importedStyleApply.StyleApply,
    StyleCopy: importedStyleCopy.StyleCopy,
    StyleInsert: importedStyleInsert.StyleInsert,
    StyleResponse: importedStyleResponse.StyleResponse,
    StyleUpdate: importedStyleUpdate.StyleUpdate,
    StylesResponse: importedStylesResponse.StylesResponse,
    SvgSaveOptionsData: importedSvgSaveOptionsData.SvgSaveOptionsData,
    TabStop: importedTabStop.TabStop,
    TabStopBase: importedTabStopBase.TabStopBase,
    TabStopInsert: importedTabStopInsert.TabStopInsert,
    TabStopsResponse: importedTabStopsResponse.TabStopsResponse,
    Table: importedTable.Table,
    TableCell: importedTableCell.TableCell,
    TableCellFormat: importedTableCellFormat.TableCellFormat,
    TableCellFormatResponse: importedTableCellFormatResponse.TableCellFormatResponse,
    TableCellInsert: importedTableCellInsert.TableCellInsert,
    TableCellResponse: importedTableCellResponse.TableCellResponse,
    TableInsert: importedTableInsert.TableInsert,
    TableLink: importedTableLink.TableLink,
    TableLinkCollection: importedTableLinkCollection.TableLinkCollection,
    TableLinkCollectionResponse: importedTableLinkCollectionResponse.TableLinkCollectionResponse,
    TableProperties: importedTableProperties.TableProperties,
    TablePropertiesResponse: importedTablePropertiesResponse.TablePropertiesResponse,
    TableResponse: importedTableResponse.TableResponse,
    TableRow: importedTableRow.TableRow,
    TableRowFormat: importedTableRowFormat.TableRowFormat,
    TableRowFormatResponse: importedTableRowFormatResponse.TableRowFormatResponse,
    TableRowInsert: importedTableRowInsert.TableRowInsert,
    TableRowResponse: importedTableRowResponse.TableRowResponse,
    TextSaveOptionsData: importedTextSaveOptionsData.TextSaveOptionsData,
    TiffSaveOptionsData: importedTiffSaveOptionsData.TiffSaveOptionsData,
    WatermarkText: importedWatermarkText.WatermarkText,
    WordMLSaveOptionsData: importedWordMLSaveOptionsData.WordMLSaveOptionsData,
    WordsApiErrorResponse: importedWordsApiErrorResponse.WordsApiErrorResponse,
    WordsApiLink: importedWordsApiLink.WordsApiLink,
    WordsResponse: importedWordsResponse.WordsResponse,
    XamlFixedSaveOptionsData: importedXamlFixedSaveOptionsData.XamlFixedSaveOptionsData,
    XamlFlowSaveOptionsData: importedXamlFlowSaveOptionsData.XamlFlowSaveOptionsData,
    XmlColor: importedXmlColor.XmlColor,
    XpsSaveOptionsData: importedXpsSaveOptionsData.XpsSaveOptionsData,
};

export {enumsMap, typeMap};

/**
 * Request model for AcceptAllRevisions operation.
 */
export class AcceptAllRevisionsRequest {
    
    public constructor(init?: Partial<AcceptAllRevisionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for AppendDocument operation.
 */
export class AppendDocumentRequest {
    
    public constructor(init?: Partial<AppendDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ApplyStyleToDocumentElement operation.
 */
export class ApplyStyleToDocumentElementRequest {
    
    public constructor(init?: Partial<ApplyStyleToDocumentElementRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for BuildReport operation.
 */
export class BuildReportRequest {
    
    public constructor(init?: Partial<BuildReportRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for BuildReportOnline operation.
 */
export class BuildReportOnlineRequest {
    
    public constructor(init?: Partial<BuildReportOnlineRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Classify operation.
 */
export class ClassifyRequest {
    
    public constructor(init?: Partial<ClassifyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ClassifyDocument operation.
 */
export class ClassifyDocumentRequest {
    
    public constructor(init?: Partial<ClassifyDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CompareDocument operation.
 */
export class CompareDocumentRequest {
    
    public constructor(init?: Partial<CompareDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ConvertDocument operation.
 */
export class ConvertDocumentRequest {
    
    public constructor(init?: Partial<ConvertDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    
    public constructor(init?: Partial<CopyFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    
    public constructor(init?: Partial<CopyFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CopyStyle operation.
 */
export class CopyStyleRequest {
    
    public constructor(init?: Partial<CopyStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CreateDocument operation.
 */
export class CreateDocumentRequest {
    
    public constructor(init?: Partial<CreateDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    
    public constructor(init?: Partial<CreateFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for CreateOrUpdateDocumentProperty operation.
 */
export class CreateOrUpdateDocumentPropertyRequest {
    
    public constructor(init?: Partial<CreateOrUpdateDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteAllParagraphTabStops operation.
 */
export class DeleteAllParagraphTabStopsRequest {
    
    public constructor(init?: Partial<DeleteAllParagraphTabStopsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteAllParagraphTabStopsWithoutNodePath operation.
 */
export class DeleteAllParagraphTabStopsWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteAllParagraphTabStopsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteBorder operation.
 */
export class DeleteBorderRequest {
    
    public constructor(init?: Partial<DeleteBorderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteBorders operation.
 */
export class DeleteBordersRequest {
    
    public constructor(init?: Partial<DeleteBordersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteComment operation.
 */
export class DeleteCommentRequest {
    
    public constructor(init?: Partial<DeleteCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteDocumentProperty operation.
 */
export class DeleteDocumentPropertyRequest {
    
    public constructor(init?: Partial<DeleteDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteDrawingObject operation.
 */
export class DeleteDrawingObjectRequest {
    
    public constructor(init?: Partial<DeleteDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteDrawingObjectWithoutNodePath operation.
 */
export class DeleteDrawingObjectWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteDrawingObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteField operation.
 */
export class DeleteFieldRequest {
    
    public constructor(init?: Partial<DeleteFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFieldWithoutNodePath operation.
 */
export class DeleteFieldWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFields operation.
 */
export class DeleteFieldsRequest {
    
    public constructor(init?: Partial<DeleteFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFieldsWithoutNodePath operation.
 */
export class DeleteFieldsWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteFieldsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    
    public constructor(init?: Partial<DeleteFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    
    public constructor(init?: Partial<DeleteFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFootnote operation.
 */
export class DeleteFootnoteRequest {
    
    public constructor(init?: Partial<DeleteFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFootnoteWithoutNodePath operation.
 */
export class DeleteFootnoteWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteFootnoteWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFormField operation.
 */
export class DeleteFormFieldRequest {
    
    public constructor(init?: Partial<DeleteFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteFormFieldWithoutNodePath operation.
 */
export class DeleteFormFieldWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteFormFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteHeaderFooter operation.
 */
export class DeleteHeaderFooterRequest {
    
    public constructor(init?: Partial<DeleteHeaderFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteHeadersFooters operation.
 */
export class DeleteHeadersFootersRequest {
    
    public constructor(init?: Partial<DeleteHeadersFootersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteMacros operation.
 */
export class DeleteMacrosRequest {
    
    public constructor(init?: Partial<DeleteMacrosRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteOfficeMathObject operation.
 */
export class DeleteOfficeMathObjectRequest {
    
    public constructor(init?: Partial<DeleteOfficeMathObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteOfficeMathObjectWithoutNodePath operation.
 */
export class DeleteOfficeMathObjectWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteOfficeMathObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteParagraph operation.
 */
export class DeleteParagraphRequest {
    
    public constructor(init?: Partial<DeleteParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteParagraphListFormat operation.
 */
export class DeleteParagraphListFormatRequest {
    
    public constructor(init?: Partial<DeleteParagraphListFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteParagraphListFormatWithoutNodePath operation.
 */
export class DeleteParagraphListFormatWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteParagraphListFormatWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteParagraphTabStop operation.
 */
export class DeleteParagraphTabStopRequest {
    
    public constructor(init?: Partial<DeleteParagraphTabStopRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteParagraphTabStopWithoutNodePath operation.
 */
export class DeleteParagraphTabStopWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteParagraphTabStopWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteParagraphWithoutNodePath operation.
 */
export class DeleteParagraphWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteParagraphWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteRun operation.
 */
export class DeleteRunRequest {
    
    public constructor(init?: Partial<DeleteRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteSection operation.
 */
export class DeleteSectionRequest {
    
    public constructor(init?: Partial<DeleteSectionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteTable operation.
 */
export class DeleteTableRequest {
    
    public constructor(init?: Partial<DeleteTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteTableCell operation.
 */
export class DeleteTableCellRequest {
    
    public constructor(init?: Partial<DeleteTableCellRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteTableRow operation.
 */
export class DeleteTableRowRequest {
    
    public constructor(init?: Partial<DeleteTableRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteTableWithoutNodePath operation.
 */
export class DeleteTableWithoutNodePathRequest {
    
    public constructor(init?: Partial<DeleteTableWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DeleteWatermark operation.
 */
export class DeleteWatermarkRequest {
    
    public constructor(init?: Partial<DeleteWatermarkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    
    public constructor(init?: Partial<DownloadFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ExecuteMailMerge operation.
 */
export class ExecuteMailMergeRequest {
    
    public constructor(init?: Partial<ExecuteMailMergeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ExecuteMailMergeOnline operation.
 */
export class ExecuteMailMergeOnlineRequest {
    
    public constructor(init?: Partial<ExecuteMailMergeOnlineRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetAvailableFonts operation.
 */
export class GetAvailableFontsRequest {
    
    public constructor(init?: Partial<GetAvailableFontsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetBookmarkByName operation.
 */
export class GetBookmarkByNameRequest {
    
    public constructor(init?: Partial<GetBookmarkByNameRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetBookmarks operation.
 */
export class GetBookmarksRequest {
    
    public constructor(init?: Partial<GetBookmarksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetBorder operation.
 */
export class GetBorderRequest {
    
    public constructor(init?: Partial<GetBorderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetBorders operation.
 */
export class GetBordersRequest {
    
    public constructor(init?: Partial<GetBordersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetComment operation.
 */
export class GetCommentRequest {
    
    public constructor(init?: Partial<GetCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetComments operation.
 */
export class GetCommentsRequest {
    
    public constructor(init?: Partial<GetCommentsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocument operation.
 */
export class GetDocumentRequest {
    
    public constructor(init?: Partial<GetDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectByIndex operation.
 */
export class GetDocumentDrawingObjectByIndexRequest {
    
    public constructor(init?: Partial<GetDocumentDrawingObjectByIndexRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectByIndexWithoutNodePath operation.
 */
export class GetDocumentDrawingObjectByIndexWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetDocumentDrawingObjectByIndexWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectImageData operation.
 */
export class GetDocumentDrawingObjectImageDataRequest {
    
    public constructor(init?: Partial<GetDocumentDrawingObjectImageDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectImageDataWithoutNodePath operation.
 */
export class GetDocumentDrawingObjectImageDataWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetDocumentDrawingObjectImageDataWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectOleData operation.
 */
export class GetDocumentDrawingObjectOleDataRequest {
    
    public constructor(init?: Partial<GetDocumentDrawingObjectOleDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectOleDataWithoutNodePath operation.
 */
export class GetDocumentDrawingObjectOleDataWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetDocumentDrawingObjectOleDataWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjects operation.
 */
export class GetDocumentDrawingObjectsRequest {
    
    public constructor(init?: Partial<GetDocumentDrawingObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentDrawingObjectsWithoutNodePath operation.
 */
export class GetDocumentDrawingObjectsWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetDocumentDrawingObjectsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentFieldNames operation.
 */
export class GetDocumentFieldNamesRequest {
    
    public constructor(init?: Partial<GetDocumentFieldNamesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentFieldNamesOnline operation.
 */
export class GetDocumentFieldNamesOnlineRequest {
    
    public constructor(init?: Partial<GetDocumentFieldNamesOnlineRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentHyperlinkByIndex operation.
 */
export class GetDocumentHyperlinkByIndexRequest {
    
    public constructor(init?: Partial<GetDocumentHyperlinkByIndexRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentHyperlinks operation.
 */
export class GetDocumentHyperlinksRequest {
    
    public constructor(init?: Partial<GetDocumentHyperlinksRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentProperties operation.
 */
export class GetDocumentPropertiesRequest {
    
    public constructor(init?: Partial<GetDocumentPropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentProperty operation.
 */
export class GetDocumentPropertyRequest {
    
    public constructor(init?: Partial<GetDocumentPropertyRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentProtection operation.
 */
export class GetDocumentProtectionRequest {
    
    public constructor(init?: Partial<GetDocumentProtectionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentStatistics operation.
 */
export class GetDocumentStatisticsRequest {
    
    public constructor(init?: Partial<GetDocumentStatisticsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetDocumentWithFormat operation.
 */
export class GetDocumentWithFormatRequest {
    
    public constructor(init?: Partial<GetDocumentWithFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetField operation.
 */
export class GetFieldRequest {
    
    public constructor(init?: Partial<GetFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFieldWithoutNodePath operation.
 */
export class GetFieldWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFields operation.
 */
export class GetFieldsRequest {
    
    public constructor(init?: Partial<GetFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFieldsWithoutNodePath operation.
 */
export class GetFieldsWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetFieldsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    
    public constructor(init?: Partial<GetFilesListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnote operation.
 */
export class GetFootnoteRequest {
    
    public constructor(init?: Partial<GetFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnoteWithoutNodePath operation.
 */
export class GetFootnoteWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetFootnoteWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnotes operation.
 */
export class GetFootnotesRequest {
    
    public constructor(init?: Partial<GetFootnotesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFootnotesWithoutNodePath operation.
 */
export class GetFootnotesWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetFootnotesWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormField operation.
 */
export class GetFormFieldRequest {
    
    public constructor(init?: Partial<GetFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormFieldWithoutNodePath operation.
 */
export class GetFormFieldWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetFormFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormFields operation.
 */
export class GetFormFieldsRequest {
    
    public constructor(init?: Partial<GetFormFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetFormFieldsWithoutNodePath operation.
 */
export class GetFormFieldsWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetFormFieldsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetHeaderFooter operation.
 */
export class GetHeaderFooterRequest {
    
    public constructor(init?: Partial<GetHeaderFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetHeaderFooterOfSection operation.
 */
export class GetHeaderFooterOfSectionRequest {
    
    public constructor(init?: Partial<GetHeaderFooterOfSectionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetHeaderFooters operation.
 */
export class GetHeaderFootersRequest {
    
    public constructor(init?: Partial<GetHeaderFootersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetList operation.
 */
export class GetListRequest {
    
    public constructor(init?: Partial<GetListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetLists operation.
 */
export class GetListsRequest {
    
    public constructor(init?: Partial<GetListsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetOfficeMathObject operation.
 */
export class GetOfficeMathObjectRequest {
    
    public constructor(init?: Partial<GetOfficeMathObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetOfficeMathObjectWithoutNodePath operation.
 */
export class GetOfficeMathObjectWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetOfficeMathObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetOfficeMathObjects operation.
 */
export class GetOfficeMathObjectsRequest {
    
    public constructor(init?: Partial<GetOfficeMathObjectsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetOfficeMathObjectsWithoutNodePath operation.
 */
export class GetOfficeMathObjectsWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetOfficeMathObjectsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraph operation.
 */
export class GetParagraphRequest {
    
    public constructor(init?: Partial<GetParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphFormat operation.
 */
export class GetParagraphFormatRequest {
    
    public constructor(init?: Partial<GetParagraphFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphFormatWithoutNodePath operation.
 */
export class GetParagraphFormatWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetParagraphFormatWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphListFormat operation.
 */
export class GetParagraphListFormatRequest {
    
    public constructor(init?: Partial<GetParagraphListFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphListFormatWithoutNodePath operation.
 */
export class GetParagraphListFormatWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetParagraphListFormatWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphTabStops operation.
 */
export class GetParagraphTabStopsRequest {
    
    public constructor(init?: Partial<GetParagraphTabStopsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphTabStopsWithoutNodePath operation.
 */
export class GetParagraphTabStopsWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetParagraphTabStopsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphWithoutNodePath operation.
 */
export class GetParagraphWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetParagraphWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphs operation.
 */
export class GetParagraphsRequest {
    
    public constructor(init?: Partial<GetParagraphsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetParagraphsWithoutNodePath operation.
 */
export class GetParagraphsWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetParagraphsWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetRangeText operation.
 */
export class GetRangeTextRequest {
    
    public constructor(init?: Partial<GetRangeTextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetRun operation.
 */
export class GetRunRequest {
    
    public constructor(init?: Partial<GetRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetRunFont operation.
 */
export class GetRunFontRequest {
    
    public constructor(init?: Partial<GetRunFontRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetRuns operation.
 */
export class GetRunsRequest {
    
    public constructor(init?: Partial<GetRunsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSection operation.
 */
export class GetSectionRequest {
    
    public constructor(init?: Partial<GetSectionRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSectionPageSetup operation.
 */
export class GetSectionPageSetupRequest {
    
    public constructor(init?: Partial<GetSectionPageSetupRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetSections operation.
 */
export class GetSectionsRequest {
    
    public constructor(init?: Partial<GetSectionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetStyle operation.
 */
export class GetStyleRequest {
    
    public constructor(init?: Partial<GetStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetStyleFromDocumentElement operation.
 */
export class GetStyleFromDocumentElementRequest {
    
    public constructor(init?: Partial<GetStyleFromDocumentElementRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetStyles operation.
 */
export class GetStylesRequest {
    
    public constructor(init?: Partial<GetStylesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTable operation.
 */
export class GetTableRequest {
    
    public constructor(init?: Partial<GetTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableCell operation.
 */
export class GetTableCellRequest {
    
    public constructor(init?: Partial<GetTableCellRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableCellFormat operation.
 */
export class GetTableCellFormatRequest {
    
    public constructor(init?: Partial<GetTableCellFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableProperties operation.
 */
export class GetTablePropertiesRequest {
    
    public constructor(init?: Partial<GetTablePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTablePropertiesWithoutNodePath operation.
 */
export class GetTablePropertiesWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetTablePropertiesWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableRow operation.
 */
export class GetTableRowRequest {
    
    public constructor(init?: Partial<GetTableRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableRowFormat operation.
 */
export class GetTableRowFormatRequest {
    
    public constructor(init?: Partial<GetTableRowFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTableWithoutNodePath operation.
 */
export class GetTableWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetTableWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTables operation.
 */
export class GetTablesRequest {
    
    public constructor(init?: Partial<GetTablesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for GetTablesWithoutNodePath operation.
 */
export class GetTablesWithoutNodePathRequest {
    
    public constructor(init?: Partial<GetTablesWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertComment operation.
 */
export class InsertCommentRequest {
    
    public constructor(init?: Partial<InsertCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertDrawingObject operation.
 */
export class InsertDrawingObjectRequest {
    
    public constructor(init?: Partial<InsertDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertDrawingObjectWithoutNodePath operation.
 */
export class InsertDrawingObjectWithoutNodePathRequest {
    
    public constructor(init?: Partial<InsertDrawingObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertField operation.
 */
export class InsertFieldRequest {
    
    public constructor(init?: Partial<InsertFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFieldWithoutNodePath operation.
 */
export class InsertFieldWithoutNodePathRequest {
    
    public constructor(init?: Partial<InsertFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFootnote operation.
 */
export class InsertFootnoteRequest {
    
    public constructor(init?: Partial<InsertFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFootnoteWithoutNodePath operation.
 */
export class InsertFootnoteWithoutNodePathRequest {
    
    public constructor(init?: Partial<InsertFootnoteWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFormField operation.
 */
export class InsertFormFieldRequest {
    
    public constructor(init?: Partial<InsertFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertFormFieldWithoutNodePath operation.
 */
export class InsertFormFieldWithoutNodePathRequest {
    
    public constructor(init?: Partial<InsertFormFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertHeaderFooter operation.
 */
export class InsertHeaderFooterRequest {
    
    public constructor(init?: Partial<InsertHeaderFooterRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertList operation.
 */
export class InsertListRequest {
    
    public constructor(init?: Partial<InsertListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertOrUpdateParagraphTabStop operation.
 */
export class InsertOrUpdateParagraphTabStopRequest {
    
    public constructor(init?: Partial<InsertOrUpdateParagraphTabStopRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertOrUpdateParagraphTabStopWithoutNodePath operation.
 */
export class InsertOrUpdateParagraphTabStopWithoutNodePathRequest {
    
    public constructor(init?: Partial<InsertOrUpdateParagraphTabStopWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertPageNumbers operation.
 */
export class InsertPageNumbersRequest {
    
    public constructor(init?: Partial<InsertPageNumbersRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertParagraph operation.
 */
export class InsertParagraphRequest {
    
    public constructor(init?: Partial<InsertParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertParagraphWithoutNodePath operation.
 */
export class InsertParagraphWithoutNodePathRequest {
    
    public constructor(init?: Partial<InsertParagraphWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertRun operation.
 */
export class InsertRunRequest {
    
    public constructor(init?: Partial<InsertRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertStyle operation.
 */
export class InsertStyleRequest {
    
    public constructor(init?: Partial<InsertStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTable operation.
 */
export class InsertTableRequest {
    
    public constructor(init?: Partial<InsertTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTableCell operation.
 */
export class InsertTableCellRequest {
    
    public constructor(init?: Partial<InsertTableCellRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTableRow operation.
 */
export class InsertTableRowRequest {
    
    public constructor(init?: Partial<InsertTableRowRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertTableWithoutNodePath operation.
 */
export class InsertTableWithoutNodePathRequest {
    
    public constructor(init?: Partial<InsertTableWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertWatermarkImage operation.
 */
export class InsertWatermarkImageRequest {
    
    public constructor(init?: Partial<InsertWatermarkImageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for InsertWatermarkText operation.
 */
export class InsertWatermarkTextRequest {
    
    public constructor(init?: Partial<InsertWatermarkTextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for LoadWebDocument operation.
 */
export class LoadWebDocumentRequest {
    
    public constructor(init?: Partial<LoadWebDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    
    public constructor(init?: Partial<MoveFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    
    public constructor(init?: Partial<MoveFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ProtectDocument operation.
 */
export class ProtectDocumentRequest {
    
    public constructor(init?: Partial<ProtectDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RejectAllRevisions operation.
 */
export class RejectAllRevisionsRequest {
    
    public constructor(init?: Partial<RejectAllRevisionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RemoveRange operation.
 */
export class RemoveRangeRequest {
    
    public constructor(init?: Partial<RemoveRangeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderDrawingObject operation.
 */
export class RenderDrawingObjectRequest {
    
    public constructor(init?: Partial<RenderDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderDrawingObjectWithoutNodePath operation.
 */
export class RenderDrawingObjectWithoutNodePathRequest {
    
    public constructor(init?: Partial<RenderDrawingObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderMathObject operation.
 */
export class RenderMathObjectRequest {
    
    public constructor(init?: Partial<RenderMathObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderMathObjectWithoutNodePath operation.
 */
export class RenderMathObjectWithoutNodePathRequest {
    
    public constructor(init?: Partial<RenderMathObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderPage operation.
 */
export class RenderPageRequest {
    
    public constructor(init?: Partial<RenderPageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderParagraph operation.
 */
export class RenderParagraphRequest {
    
    public constructor(init?: Partial<RenderParagraphRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderParagraphWithoutNodePath operation.
 */
export class RenderParagraphWithoutNodePathRequest {
    
    public constructor(init?: Partial<RenderParagraphWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderTable operation.
 */
export class RenderTableRequest {
    
    public constructor(init?: Partial<RenderTableRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for RenderTableWithoutNodePath operation.
 */
export class RenderTableWithoutNodePathRequest {
    
    public constructor(init?: Partial<RenderTableWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ReplaceText operation.
 */
export class ReplaceTextRequest {
    
    public constructor(init?: Partial<ReplaceTextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ReplaceWithText operation.
 */
export class ReplaceWithTextRequest {
    
    public constructor(init?: Partial<ReplaceWithTextRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for ResetCache operation.
 */
export class ResetCacheRequest {
    
    public constructor(init?: Partial<ResetCacheRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for SaveAs operation.
 */
export class SaveAsRequest {
    
    public constructor(init?: Partial<SaveAsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for SaveAsRange operation.
 */
export class SaveAsRangeRequest {
    
    public constructor(init?: Partial<SaveAsRangeRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for SaveAsTiff operation.
 */
export class SaveAsTiffRequest {
    
    public constructor(init?: Partial<SaveAsTiffRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for Search operation.
 */
export class SearchRequest {
    
    public constructor(init?: Partial<SearchRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for SplitDocument operation.
 */
export class SplitDocumentRequest {
    
    public constructor(init?: Partial<SplitDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UnprotectDocument operation.
 */
export class UnprotectDocumentRequest {
    
    public constructor(init?: Partial<UnprotectDocumentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateBookmark operation.
 */
export class UpdateBookmarkRequest {
    
    public constructor(init?: Partial<UpdateBookmarkRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateBorder operation.
 */
export class UpdateBorderRequest {
    
    public constructor(init?: Partial<UpdateBorderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateComment operation.
 */
export class UpdateCommentRequest {
    
    public constructor(init?: Partial<UpdateCommentRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateDrawingObject operation.
 */
export class UpdateDrawingObjectRequest {
    
    public constructor(init?: Partial<UpdateDrawingObjectRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateDrawingObjectWithoutNodePath operation.
 */
export class UpdateDrawingObjectWithoutNodePathRequest {
    
    public constructor(init?: Partial<UpdateDrawingObjectWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateField operation.
 */
export class UpdateFieldRequest {
    
    public constructor(init?: Partial<UpdateFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFields operation.
 */
export class UpdateFieldsRequest {
    
    public constructor(init?: Partial<UpdateFieldsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFootnote operation.
 */
export class UpdateFootnoteRequest {
    
    public constructor(init?: Partial<UpdateFootnoteRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFootnoteWithoutNodePath operation.
 */
export class UpdateFootnoteWithoutNodePathRequest {
    
    public constructor(init?: Partial<UpdateFootnoteWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFormField operation.
 */
export class UpdateFormFieldRequest {
    
    public constructor(init?: Partial<UpdateFormFieldRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateFormFieldWithoutNodePath operation.
 */
export class UpdateFormFieldWithoutNodePathRequest {
    
    public constructor(init?: Partial<UpdateFormFieldWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateList operation.
 */
export class UpdateListRequest {
    
    public constructor(init?: Partial<UpdateListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateListLevel operation.
 */
export class UpdateListLevelRequest {
    
    public constructor(init?: Partial<UpdateListLevelRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateParagraphFormat operation.
 */
export class UpdateParagraphFormatRequest {
    
    public constructor(init?: Partial<UpdateParagraphFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateParagraphFormatWithoutNodePath operation.
 */
export class UpdateParagraphFormatWithoutNodePathRequest {
    
    public constructor(init?: Partial<UpdateParagraphFormatWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateParagraphListFormat operation.
 */
export class UpdateParagraphListFormatRequest {
    
    public constructor(init?: Partial<UpdateParagraphListFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateParagraphListFormatWithoutNodePath operation.
 */
export class UpdateParagraphListFormatWithoutNodePathRequest {
    
    public constructor(init?: Partial<UpdateParagraphListFormatWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateRun operation.
 */
export class UpdateRunRequest {
    
    public constructor(init?: Partial<UpdateRunRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateRunFont operation.
 */
export class UpdateRunFontRequest {
    
    public constructor(init?: Partial<UpdateRunFontRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateSectionPageSetup operation.
 */
export class UpdateSectionPageSetupRequest {
    
    public constructor(init?: Partial<UpdateSectionPageSetupRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateStyle operation.
 */
export class UpdateStyleRequest {
    
    public constructor(init?: Partial<UpdateStyleRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateTableCellFormat operation.
 */
export class UpdateTableCellFormatRequest {
    
    public constructor(init?: Partial<UpdateTableCellFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateTableProperties operation.
 */
export class UpdateTablePropertiesRequest {
    
    public constructor(init?: Partial<UpdateTablePropertiesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateTablePropertiesWithoutNodePath operation.
 */
export class UpdateTablePropertiesWithoutNodePathRequest {
    
    public constructor(init?: Partial<UpdateTablePropertiesWithoutNodePathRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UpdateTableRowFormat operation.
 */
export class UpdateTableRowFormatRequest {
    
    public constructor(init?: Partial<UpdateTableRowFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    
    public constructor(init?: Partial<UploadFileRequest>) {        
        Object.assign(this, init);
    } 
}
