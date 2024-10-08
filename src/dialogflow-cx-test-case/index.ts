/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxTestCaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable name of the test case, unique within the agent. Limit of 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#display_name DialogflowCxTestCase#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#id DialogflowCxTestCase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Additional freeform notes about the test case. Limit of 400 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#notes DialogflowCxTestCase#notes}
  */
  readonly notes?: string;
  /**
  * The agent to create the test case for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#parent DialogflowCxTestCase#parent}
  */
  readonly parent?: string;
  /**
  * Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.
  * Each tag should start with "#" and has a limit of 30 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#tags DialogflowCxTestCase#tags}
  */
  readonly tags?: string[];
  /**
  * test_case_conversation_turns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#test_case_conversation_turns DialogflowCxTestCase#test_case_conversation_turns}
  */
  readonly testCaseConversationTurns?: DialogflowCxTestCaseTestCaseConversationTurns[] | cdktf.IResolvable;
  /**
  * test_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#test_config DialogflowCxTestCase#test_config}
  */
  readonly testConfig?: DialogflowCxTestCaseTestConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#timeouts DialogflowCxTestCase#timeouts}
  */
  readonly timeouts?: DialogflowCxTestCaseTimeouts;
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digits - computed: true, optional: false, required: false
  public get digits() {
    return this.getStringAttribute('digits');
  }

  // finish_digit - computed: true, optional: false, required: false
  public get finishDigit() {
    return this.getStringAttribute('finish_digit');
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event - computed: true, optional: false, required: false
  public get event() {
    return this.getStringAttribute('event');
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dtmf - computed: true, optional: false, required: false
  private _dtmf = new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList(this, "dtmf", false);
  public get dtmf() {
    return this._dtmf;
  }

  // event - computed: true, optional: false, required: false
  private _event = new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList(this, "event", false);
  public get event() {
    return this._event;
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // text - computed: true, optional: false, required: false
  private _text = new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList(this, "text", false);
  public get text() {
    return this._text;
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsUserInput {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsUserInputToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsUserInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsUserInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsUserInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_sentiment_analysis - computed: true, optional: false, required: false
  public get enableSentimentAnalysis() {
    return this.getBooleanAttribute('enable_sentiment_analysis');
  }

  // injected_parameters - computed: true, optional: false, required: false
  public get injectedParameters() {
    return this.getStringAttribute('injected_parameters');
  }

  // input - computed: true, optional: false, required: false
  private _input = new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList(this, "input", false);
  public get input() {
    return this._input;
  }

  // is_webhook_enabled - computed: true, optional: false, required: false
  public get isWebhookEnabled() {
    return this.getBooleanAttribute('is_webhook_enabled');
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getListAttribute('text');
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_page - computed: true, optional: false, required: false
  private _currentPage = new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList(this, "current_page", false);
  public get currentPage() {
    return this._currentPage;
  }

  // differences - computed: true, optional: false, required: false
  private _differences = new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList(this, "differences", false);
  public get differences() {
    return this._differences;
  }

  // session_parameters - computed: true, optional: false, required: false
  public get sessionParameters() {
    return this.getStringAttribute('session_parameters');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // text_responses - computed: true, optional: false, required: false
  private _textResponses = new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList(this, "text_responses", false);
  public get textResponses() {
    return this._textResponses;
  }

  // triggered_intent - computed: true, optional: false, required: false
  private _triggeredIntent = new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList(this, "triggered_intent", false);
  public get triggeredIntent() {
    return this._triggeredIntent;
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResultConversationTurns {
}

export function dialogflowCxTestCaseLastTestResultConversationTurnsToTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultConversationTurnsToHclTerraform(struct?: DialogflowCxTestCaseLastTestResultConversationTurns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResultConversationTurns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResultConversationTurns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // user_input - computed: true, optional: false, required: false
  private _userInput = new DialogflowCxTestCaseLastTestResultConversationTurnsUserInputList(this, "user_input", false);
  public get userInput() {
    return this._userInput;
  }

  // virtual_agent_output - computed: true, optional: false, required: false
  private _virtualAgentOutput = new DialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList(this, "virtual_agent_output", false);
  public get virtualAgentOutput() {
    return this._virtualAgentOutput;
  }
}

export class DialogflowCxTestCaseLastTestResultConversationTurnsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference {
    return new DialogflowCxTestCaseLastTestResultConversationTurnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseLastTestResult {
}

export function dialogflowCxTestCaseLastTestResultToTerraform(struct?: DialogflowCxTestCaseLastTestResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dialogflowCxTestCaseLastTestResultToHclTerraform(struct?: DialogflowCxTestCaseLastTestResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DialogflowCxTestCaseLastTestResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseLastTestResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseLastTestResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conversation_turns - computed: true, optional: false, required: false
  private _conversationTurns = new DialogflowCxTestCaseLastTestResultConversationTurnsList(this, "conversation_turns", false);
  public get conversationTurns() {
    return this._conversationTurns;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // test_result - computed: true, optional: false, required: false
  public get testResult() {
    return this.getStringAttribute('test_result');
  }

  // test_time - computed: true, optional: false, required: false
  public get testTime() {
    return this.getStringAttribute('test_time');
  }
}

export class DialogflowCxTestCaseLastTestResultList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseLastTestResultOutputReference {
    return new DialogflowCxTestCaseLastTestResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf {
  /**
  * The dtmf digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#digits DialogflowCxTestCase#digits}
  */
  readonly digits?: string;
  /**
  * The finish digit (if any).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#finish_digit DialogflowCxTestCase#finish_digit}
  */
  readonly finishDigit?: string;
}

export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.stringToTerraform(struct!.digits),
    finish_digit: cdktf.stringToTerraform(struct!.finishDigit),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits: {
      value: cdktf.stringToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finish_digit: {
      value: cdktf.stringToHclTerraform(struct!.finishDigit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._finishDigit !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishDigit = this._finishDigit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digits = undefined;
      this._finishDigit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digits = value.digits;
      this._finishDigit = value.finishDigit;
    }
  }

  // digits - computed: false, optional: true, required: false
  private _digits?: string; 
  public get digits() {
    return this.getStringAttribute('digits');
  }
  public set digits(value: string) {
    this._digits = value;
  }
  public resetDigits() {
    this._digits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // finish_digit - computed: false, optional: true, required: false
  private _finishDigit?: string; 
  public get finishDigit() {
    return this.getStringAttribute('finish_digit');
  }
  public set finishDigit(value: string) {
    this._finishDigit = value;
  }
  public resetFinishDigit() {
    this._finishDigit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishDigitInput() {
    return this._finishDigit;
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent {
  /**
  * Name of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#event DialogflowCxTestCase#event}
  */
  readonly event: string;
}

export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._event = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._event = value.event;
    }
  }

  // event - computed: false, optional: false, required: true
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText {
  /**
  * The natural language text to be processed. Text length must not exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}
  */
  readonly text: string;
}

export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput {
  /**
  * The language of the input. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
  * Note that queries in the same session do not necessarily need to specify the same language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#language_code DialogflowCxTestCase#language_code}
  */
  readonly languageCode?: string;
  /**
  * dtmf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#dtmf DialogflowCxTestCase#dtmf}
  */
  readonly dtmf?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf;
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#event DialogflowCxTestCase#event}
  */
  readonly event?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}
  */
  readonly text?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText;
}

export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    dtmf: dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfToTerraform(struct!.dtmf),
    event: dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventToTerraform(struct!.event),
    text: dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextToTerraform(struct!.text),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language_code: {
      value: cdktf.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dtmf: {
      value: dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfToHclTerraform(struct!.dtmf),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfList",
    },
    event: {
      value: dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventToHclTerraform(struct!.event),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventList",
    },
    text: {
      value: dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._dtmf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmf = this._dtmf?.internalValue;
    }
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._languageCode = undefined;
      this._dtmf.internalValue = undefined;
      this._event.internalValue = undefined;
      this._text.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._languageCode = value.languageCode;
      this._dtmf.internalValue = value.dtmf;
      this._event.internalValue = value.event;
      this._text.internalValue = value.text;
    }
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // dtmf - computed: false, optional: true, required: false
  private _dtmf = new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference(this, "dtmf");
  public get dtmf() {
    return this._dtmf;
  }
  public putDtmf(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf) {
    this._dtmf.internalValue = value;
  }
  public resetDtmf() {
    this._dtmf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfInput() {
    return this._dtmf.internalValue;
  }

  // event - computed: false, optional: true, required: false
  private _event = new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurnsUserInput {
  /**
  * Whether sentiment analysis is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#enable_sentiment_analysis DialogflowCxTestCase#enable_sentiment_analysis}
  */
  readonly enableSentimentAnalysis?: boolean | cdktf.IResolvable;
  /**
  * Parameters that need to be injected into the conversation during intent detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#injected_parameters DialogflowCxTestCase#injected_parameters}
  */
  readonly injectedParameters?: string;
  /**
  * If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#is_webhook_enabled DialogflowCxTestCase#is_webhook_enabled}
  */
  readonly isWebhookEnabled?: boolean | cdktf.IResolvable;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#input DialogflowCxTestCase#input}
  */
  readonly input?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput;
}

export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_sentiment_analysis: cdktf.booleanToTerraform(struct!.enableSentimentAnalysis),
    injected_parameters: cdktf.stringToTerraform(struct!.injectedParameters),
    is_webhook_enabled: cdktf.booleanToTerraform(struct!.isWebhookEnabled),
    input: dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputToTerraform(struct!.input),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsUserInputToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsUserInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_sentiment_analysis: {
      value: cdktf.booleanToHclTerraform(struct!.enableSentimentAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    injected_parameters: {
      value: cdktf.stringToHclTerraform(struct!.injectedParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_webhook_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isWebhookEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input: {
      value: dialogflowCxTestCaseTestCaseConversationTurnsUserInputInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurnsUserInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSentimentAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSentimentAnalysis = this._enableSentimentAnalysis;
    }
    if (this._injectedParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectedParameters = this._injectedParameters;
    }
    if (this._isWebhookEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWebhookEnabled = this._isWebhookEnabled;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSentimentAnalysis = undefined;
      this._injectedParameters = undefined;
      this._isWebhookEnabled = undefined;
      this._input.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSentimentAnalysis = value.enableSentimentAnalysis;
      this._injectedParameters = value.injectedParameters;
      this._isWebhookEnabled = value.isWebhookEnabled;
      this._input.internalValue = value.input;
    }
  }

  // enable_sentiment_analysis - computed: false, optional: true, required: false
  private _enableSentimentAnalysis?: boolean | cdktf.IResolvable; 
  public get enableSentimentAnalysis() {
    return this.getBooleanAttribute('enable_sentiment_analysis');
  }
  public set enableSentimentAnalysis(value: boolean | cdktf.IResolvable) {
    this._enableSentimentAnalysis = value;
  }
  public resetEnableSentimentAnalysis() {
    this._enableSentimentAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSentimentAnalysisInput() {
    return this._enableSentimentAnalysis;
  }

  // injected_parameters - computed: false, optional: true, required: false
  private _injectedParameters?: string; 
  public get injectedParameters() {
    return this.getStringAttribute('injected_parameters');
  }
  public set injectedParameters(value: string) {
    this._injectedParameters = value;
  }
  public resetInjectedParameters() {
    this._injectedParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectedParametersInput() {
    return this._injectedParameters;
  }

  // is_webhook_enabled - computed: false, optional: true, required: false
  private _isWebhookEnabled?: boolean | cdktf.IResolvable; 
  public get isWebhookEnabled() {
    return this.getBooleanAttribute('is_webhook_enabled');
  }
  public set isWebhookEnabled(value: boolean | cdktf.IResolvable) {
    this._isWebhookEnabled = value;
  }
  public resetIsWebhookEnabled() {
    this._isWebhookEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWebhookEnabledInput() {
    return this._isWebhookEnabled;
  }

  // input - computed: false, optional: true, required: false
  private _input = new DialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInputInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage {
  /**
  * The unique identifier of the page.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#name DialogflowCxTestCase#name}
  */
  readonly name?: string;
}

export function dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses {
  /**
  * A collection of text responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#text DialogflowCxTestCase#text}
  */
  readonly text?: string[];
}

export function dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.text),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.text),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string[]; 
  public get text() {
    return this.getListAttribute('text');
  }
  public set text(value: string[]) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference {
    return new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent {
  /**
  * The unique identifier of the intent.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#name DialogflowCxTestCase#name}
  */
  readonly name?: string;
}

export function dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput {
  /**
  * The session parameters available to the bot at this point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#session_parameters DialogflowCxTestCase#session_parameters}
  */
  readonly sessionParameters?: string;
  /**
  * current_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#current_page DialogflowCxTestCase#current_page}
  */
  readonly currentPage?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage;
  /**
  * text_responses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#text_responses DialogflowCxTestCase#text_responses}
  */
  readonly textResponses?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses[] | cdktf.IResolvable;
  /**
  * triggered_intent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#triggered_intent DialogflowCxTestCase#triggered_intent}
  */
  readonly triggeredIntent?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent;
}

export function dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_parameters: cdktf.stringToTerraform(struct!.sessionParameters),
    current_page: dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageToTerraform(struct!.currentPage),
    text_responses: cdktf.listMapper(dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesToTerraform, true)(struct!.textResponses),
    triggered_intent: dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentToTerraform(struct!.triggeredIntent),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference | DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_parameters: {
      value: cdktf.stringToHclTerraform(struct!.sessionParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_page: {
      value: dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageToHclTerraform(struct!.currentPage),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageList",
    },
    text_responses: {
      value: cdktf.listMapperHcl(dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesToHclTerraform, true)(struct!.textResponses),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList",
    },
    triggered_intent: {
      value: dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentToHclTerraform(struct!.triggeredIntent),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionParameters = this._sessionParameters;
    }
    if (this._currentPage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPage = this._currentPage?.internalValue;
    }
    if (this._textResponses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textResponses = this._textResponses?.internalValue;
    }
    if (this._triggeredIntent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggeredIntent = this._triggeredIntent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionParameters = undefined;
      this._currentPage.internalValue = undefined;
      this._textResponses.internalValue = undefined;
      this._triggeredIntent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionParameters = value.sessionParameters;
      this._currentPage.internalValue = value.currentPage;
      this._textResponses.internalValue = value.textResponses;
      this._triggeredIntent.internalValue = value.triggeredIntent;
    }
  }

  // session_parameters - computed: false, optional: true, required: false
  private _sessionParameters?: string; 
  public get sessionParameters() {
    return this.getStringAttribute('session_parameters');
  }
  public set sessionParameters(value: string) {
    this._sessionParameters = value;
  }
  public resetSessionParameters() {
    this._sessionParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionParametersInput() {
    return this._sessionParameters;
  }

  // current_page - computed: false, optional: true, required: false
  private _currentPage = new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference(this, "current_page");
  public get currentPage() {
    return this._currentPage;
  }
  public putCurrentPage(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage) {
    this._currentPage.internalValue = value;
  }
  public resetCurrentPage() {
    this._currentPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPageInput() {
    return this._currentPage.internalValue;
  }

  // text_responses - computed: false, optional: true, required: false
  private _textResponses = new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList(this, "text_responses", false);
  public get textResponses() {
    return this._textResponses;
  }
  public putTextResponses(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses[] | cdktf.IResolvable) {
    this._textResponses.internalValue = value;
  }
  public resetTextResponses() {
    this._textResponses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textResponsesInput() {
    return this._textResponses.internalValue;
  }

  // triggered_intent - computed: false, optional: true, required: false
  private _triggeredIntent = new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(this, "triggered_intent");
  public get triggeredIntent() {
    return this._triggeredIntent;
  }
  public putTriggeredIntent(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent) {
    this._triggeredIntent.internalValue = value;
  }
  public resetTriggeredIntent() {
    this._triggeredIntent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeredIntentInput() {
    return this._triggeredIntent.internalValue;
  }
}
export interface DialogflowCxTestCaseTestCaseConversationTurns {
  /**
  * user_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#user_input DialogflowCxTestCase#user_input}
  */
  readonly userInput?: DialogflowCxTestCaseTestCaseConversationTurnsUserInput;
  /**
  * virtual_agent_output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#virtual_agent_output DialogflowCxTestCase#virtual_agent_output}
  */
  readonly virtualAgentOutput?: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput;
}

export function dialogflowCxTestCaseTestCaseConversationTurnsToTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_input: dialogflowCxTestCaseTestCaseConversationTurnsUserInputToTerraform(struct!.userInput),
    virtual_agent_output: dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputToTerraform(struct!.virtualAgentOutput),
  }
}


export function dialogflowCxTestCaseTestCaseConversationTurnsToHclTerraform(struct?: DialogflowCxTestCaseTestCaseConversationTurns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_input: {
      value: dialogflowCxTestCaseTestCaseConversationTurnsUserInputToHclTerraform(struct!.userInput),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsUserInputList",
    },
    virtual_agent_output: {
      value: dialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputToHclTerraform(struct!.virtualAgentOutput),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestCaseConversationTurnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxTestCaseTestCaseConversationTurns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInput = this._userInput?.internalValue;
    }
    if (this._virtualAgentOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualAgentOutput = this._virtualAgentOutput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestCaseConversationTurns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userInput.internalValue = undefined;
      this._virtualAgentOutput.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userInput.internalValue = value.userInput;
      this._virtualAgentOutput.internalValue = value.virtualAgentOutput;
    }
  }

  // user_input - computed: false, optional: true, required: false
  private _userInput = new DialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference(this, "user_input");
  public get userInput() {
    return this._userInput;
  }
  public putUserInput(value: DialogflowCxTestCaseTestCaseConversationTurnsUserInput) {
    this._userInput.internalValue = value;
  }
  public resetUserInput() {
    this._userInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInputInput() {
    return this._userInput.internalValue;
  }

  // virtual_agent_output - computed: false, optional: true, required: false
  private _virtualAgentOutput = new DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference(this, "virtual_agent_output");
  public get virtualAgentOutput() {
    return this._virtualAgentOutput;
  }
  public putVirtualAgentOutput(value: DialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput) {
    this._virtualAgentOutput.internalValue = value;
  }
  public resetVirtualAgentOutput() {
    this._virtualAgentOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAgentOutputInput() {
    return this._virtualAgentOutput.internalValue;
  }
}

export class DialogflowCxTestCaseTestCaseConversationTurnsList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxTestCaseTestCaseConversationTurns[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxTestCaseTestCaseConversationTurnsOutputReference {
    return new DialogflowCxTestCaseTestCaseConversationTurnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxTestCaseTestConfig {
  /**
  * Flow name to start the test case with.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
  * Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#flow DialogflowCxTestCase#flow}
  */
  readonly flow?: string;
  /**
  * The page to start the test case with.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
  * Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#page DialogflowCxTestCase#page}
  */
  readonly page?: string;
  /**
  * Session parameters to be compared when calculating differences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#tracking_parameters DialogflowCxTestCase#tracking_parameters}
  */
  readonly trackingParameters?: string[];
}

export function dialogflowCxTestCaseTestConfigToTerraform(struct?: DialogflowCxTestCaseTestConfigOutputReference | DialogflowCxTestCaseTestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow: cdktf.stringToTerraform(struct!.flow),
    page: cdktf.stringToTerraform(struct!.page),
    tracking_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trackingParameters),
  }
}


export function dialogflowCxTestCaseTestConfigToHclTerraform(struct?: DialogflowCxTestCaseTestConfigOutputReference | DialogflowCxTestCaseTestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow: {
      value: cdktf.stringToHclTerraform(struct!.flow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page: {
      value: cdktf.stringToHclTerraform(struct!.page),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracking_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trackingParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTestConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxTestCaseTestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flow !== undefined) {
      hasAnyValues = true;
      internalValueResult.flow = this._flow;
    }
    if (this._page !== undefined) {
      hasAnyValues = true;
      internalValueResult.page = this._page;
    }
    if (this._trackingParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingParameters = this._trackingParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flow = undefined;
      this._page = undefined;
      this._trackingParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flow = value.flow;
      this._page = value.page;
      this._trackingParameters = value.trackingParameters;
    }
  }

  // flow - computed: false, optional: true, required: false
  private _flow?: string; 
  public get flow() {
    return this.getStringAttribute('flow');
  }
  public set flow(value: string) {
    this._flow = value;
  }
  public resetFlow() {
    this._flow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInput() {
    return this._flow;
  }

  // page - computed: false, optional: true, required: false
  private _page?: string; 
  public get page() {
    return this.getStringAttribute('page');
  }
  public set page(value: string) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // tracking_parameters - computed: false, optional: true, required: false
  private _trackingParameters?: string[]; 
  public get trackingParameters() {
    return this.getListAttribute('tracking_parameters');
  }
  public set trackingParameters(value: string[]) {
    this._trackingParameters = value;
  }
  public resetTrackingParameters() {
    this._trackingParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingParametersInput() {
    return this._trackingParameters;
  }
}
export interface DialogflowCxTestCaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#create DialogflowCxTestCase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#delete DialogflowCxTestCase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#update DialogflowCxTestCase#update}
  */
  readonly update?: string;
}

export function dialogflowCxTestCaseTimeoutsToTerraform(struct?: DialogflowCxTestCaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dialogflowCxTestCaseTimeoutsToHclTerraform(struct?: DialogflowCxTestCaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxTestCaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxTestCaseTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxTestCaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case google_dialogflow_cx_test_case}
*/
export class DialogflowCxTestCase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_test_case";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowCxTestCase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxTestCase to import
  * @param importFromId The id of the existing DialogflowCxTestCase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxTestCase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_test_case", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.6.0/docs/resources/dialogflow_cx_test_case google_dialogflow_cx_test_case} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxTestCaseConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxTestCaseConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_test_case',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.6.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._notes = config.notes;
    this._parent = config.parent;
    this._tags = config.tags;
    this._testCaseConversationTurns.internalValue = config.testCaseConversationTurns;
    this._testConfig.internalValue = config.testConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_test_result - computed: true, optional: false, required: false
  private _lastTestResult = new DialogflowCxTestCaseLastTestResultList(this, "last_test_result", false);
  public get lastTestResult() {
    return this._lastTestResult;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // test_case_conversation_turns - computed: false, optional: true, required: false
  private _testCaseConversationTurns = new DialogflowCxTestCaseTestCaseConversationTurnsList(this, "test_case_conversation_turns", false);
  public get testCaseConversationTurns() {
    return this._testCaseConversationTurns;
  }
  public putTestCaseConversationTurns(value: DialogflowCxTestCaseTestCaseConversationTurns[] | cdktf.IResolvable) {
    this._testCaseConversationTurns.internalValue = value;
  }
  public resetTestCaseConversationTurns() {
    this._testCaseConversationTurns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testCaseConversationTurnsInput() {
    return this._testCaseConversationTurns.internalValue;
  }

  // test_config - computed: false, optional: true, required: false
  private _testConfig = new DialogflowCxTestCaseTestConfigOutputReference(this, "test_config");
  public get testConfig() {
    return this._testConfig;
  }
  public putTestConfig(value: DialogflowCxTestCaseTestConfig) {
    this._testConfig.internalValue = value;
  }
  public resetTestConfig() {
    this._testConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testConfigInput() {
    return this._testConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxTestCaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxTestCaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      notes: cdktf.stringToTerraform(this._notes),
      parent: cdktf.stringToTerraform(this._parent),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      test_case_conversation_turns: cdktf.listMapper(dialogflowCxTestCaseTestCaseConversationTurnsToTerraform, true)(this._testCaseConversationTurns.internalValue),
      test_config: dialogflowCxTestCaseTestConfigToTerraform(this._testConfig.internalValue),
      timeouts: dialogflowCxTestCaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      test_case_conversation_turns: {
        value: cdktf.listMapperHcl(dialogflowCxTestCaseTestCaseConversationTurnsToHclTerraform, true)(this._testCaseConversationTurns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxTestCaseTestCaseConversationTurnsList",
      },
      test_config: {
        value: dialogflowCxTestCaseTestConfigToHclTerraform(this._testConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxTestCaseTestConfigList",
      },
      timeouts: {
        value: dialogflowCxTestCaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxTestCaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
