/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContactCenterInsightsAnalysisRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, apply this rule to conversations. Otherwise, this rule is
  * inactive and saved as a draft.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#active ContactCenterInsightsAnalysisRule#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Percentage of conversations that we should apply this analysis setting
  * automatically, between [0, 1]. For example, 0.1 means 10%. Conversations
  * are sampled in a determenestic way. The original runtime_percentage &
  * upload percentage will be replaced by defining filters on the conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#analysis_percentage ContactCenterInsightsAnalysisRule#analysis_percentage}
  */
  readonly analysisPercentage?: number;
  /**
  * Filter for the conversations that should apply this analysis
  * rule. An empty filter means this analysis rule applies to all
  * conversations.
  * Refer to https://cloud.google.com/contact-center/insights/docs/filtering
  * for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#conversation_filter ContactCenterInsightsAnalysisRule#conversation_filter}
  */
  readonly conversationFilter?: string;
  /**
  * Display Name of the analysis rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#display_name ContactCenterInsightsAnalysisRule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#id ContactCenterInsightsAnalysisRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#location ContactCenterInsightsAnalysisRule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#project ContactCenterInsightsAnalysisRule#project}
  */
  readonly project?: string;
  /**
  * annotator_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#annotator_selector ContactCenterInsightsAnalysisRule#annotator_selector}
  */
  readonly annotatorSelector?: ContactCenterInsightsAnalysisRuleAnnotatorSelector;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#timeouts ContactCenterInsightsAnalysisRule#timeouts}
  */
  readonly timeouts?: ContactCenterInsightsAnalysisRuleTimeouts;
}
export interface ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct {
  /**
  * List of QaScorecardRevisions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#qa_scorecard_revisions ContactCenterInsightsAnalysisRule#qa_scorecard_revisions}
  */
  readonly qaScorecardRevisions?: string[];
}

export function contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructToTerraform(struct?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference | ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qa_scorecard_revisions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.qaScorecardRevisions),
  }
}


export function contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructToHclTerraform(struct?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference | ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    qa_scorecard_revisions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.qaScorecardRevisions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qaScorecardRevisions !== undefined) {
      hasAnyValues = true;
      internalValueResult.qaScorecardRevisions = this._qaScorecardRevisions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._qaScorecardRevisions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._qaScorecardRevisions = value.qaScorecardRevisions;
    }
  }

  // qa_scorecard_revisions - computed: false, optional: true, required: false
  private _qaScorecardRevisions?: string[]; 
  public get qaScorecardRevisions() {
    return this.getListAttribute('qa_scorecard_revisions');
  }
  public set qaScorecardRevisions(value: string[]) {
    this._qaScorecardRevisions = value;
  }
  public resetQaScorecardRevisions() {
    this._qaScorecardRevisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qaScorecardRevisionsInput() {
    return this._qaScorecardRevisions;
  }
}
export interface ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig {
  /**
  * scorecard_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#scorecard_list ContactCenterInsightsAnalysisRule#scorecard_list}
  */
  readonly scorecardList?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct;
}

export function contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigToTerraform(struct?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference | ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scorecard_list: contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructToTerraform(struct!.scorecardList),
  }
}


export function contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigToHclTerraform(struct?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference | ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scorecard_list: {
      value: contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructToHclTerraform(struct!.scorecardList),
      isBlock: true,
      type: "list",
      storageClassType: "ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scorecardList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scorecardList = this._scorecardList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scorecardList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scorecardList.internalValue = value.scorecardList;
    }
  }

  // scorecard_list - computed: false, optional: true, required: false
  private _scorecardList = new ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference(this, "scorecard_list");
  public get scorecardList() {
    return this._scorecardList;
  }
  public putScorecardList(value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct) {
    this._scorecardList.internalValue = value;
  }
  public resetScorecardList() {
    this._scorecardList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scorecardListInput() {
    return this._scorecardList.internalValue;
  }
}
export interface ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig {
  /**
  * Resource name of the Dialogflow conversation profile.
  * Format:
  * projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#conversation_profile ContactCenterInsightsAnalysisRule#conversation_profile}
  */
  readonly conversationProfile?: string;
  /**
  * Default summarization model to be used.
  * Possible values:
  * SUMMARIZATION_MODEL_UNSPECIFIED
  * BASELINE_MODEL
  * BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#summarization_model ContactCenterInsightsAnalysisRule#summarization_model}
  */
  readonly summarizationModel?: string;
}

export function contactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigToTerraform(struct?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference | ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conversation_profile: cdktf.stringToTerraform(struct!.conversationProfile),
    summarization_model: cdktf.stringToTerraform(struct!.summarizationModel),
  }
}


export function contactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigToHclTerraform(struct?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference | ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conversation_profile: {
      value: cdktf.stringToHclTerraform(struct!.conversationProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summarization_model: {
      value: cdktf.stringToHclTerraform(struct!.summarizationModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conversationProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationProfile = this._conversationProfile;
    }
    if (this._summarizationModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizationModel = this._summarizationModel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conversationProfile = undefined;
      this._summarizationModel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conversationProfile = value.conversationProfile;
      this._summarizationModel = value.summarizationModel;
    }
  }

  // conversation_profile - computed: false, optional: true, required: false
  private _conversationProfile?: string; 
  public get conversationProfile() {
    return this.getStringAttribute('conversation_profile');
  }
  public set conversationProfile(value: string) {
    this._conversationProfile = value;
  }
  public resetConversationProfile() {
    this._conversationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationProfileInput() {
    return this._conversationProfile;
  }

  // summarization_model - computed: false, optional: true, required: false
  private _summarizationModel?: string; 
  public get summarizationModel() {
    return this.getStringAttribute('summarization_model');
  }
  public set summarizationModel(value: string) {
    this._summarizationModel = value;
  }
  public resetSummarizationModel() {
    this._summarizationModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationModelInput() {
    return this._summarizationModel;
  }
}
export interface ContactCenterInsightsAnalysisRuleAnnotatorSelector {
  /**
  * The issue model to run. If not provided, the most recently deployed topic
  * model will be used. The provided issue model will only be used for
  * inference if the issue model is deployed and if run_issue_model_annotator
  * is set to true. If more than one issue model is provided, only the first
  * provided issue model will be used for inference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#issue_models ContactCenterInsightsAnalysisRule#issue_models}
  */
  readonly issueModels?: string[];
  /**
  * The list of phrase matchers to run. If not provided, all active phrase
  * matchers will be used. If inactive phrase matchers are provided, they will
  * not be used. Phrase matchers will be run only if
  * run_phrase_matcher_annotator is set to true. Format:
  * projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#phrase_matchers ContactCenterInsightsAnalysisRule#phrase_matchers}
  */
  readonly phraseMatchers?: string[];
  /**
  * Whether to run the entity annotator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#run_entity_annotator ContactCenterInsightsAnalysisRule#run_entity_annotator}
  */
  readonly runEntityAnnotator?: boolean | cdktf.IResolvable;
  /**
  * Whether to run the intent annotator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#run_intent_annotator ContactCenterInsightsAnalysisRule#run_intent_annotator}
  */
  readonly runIntentAnnotator?: boolean | cdktf.IResolvable;
  /**
  * Whether to run the interruption annotator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#run_interruption_annotator ContactCenterInsightsAnalysisRule#run_interruption_annotator}
  */
  readonly runInterruptionAnnotator?: boolean | cdktf.IResolvable;
  /**
  * Whether to run the issue model annotator. A model should have already been
  * deployed for this to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#run_issue_model_annotator ContactCenterInsightsAnalysisRule#run_issue_model_annotator}
  */
  readonly runIssueModelAnnotator?: boolean | cdktf.IResolvable;
  /**
  * Whether to run the active phrase matcher annotator(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#run_phrase_matcher_annotator ContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}
  */
  readonly runPhraseMatcherAnnotator?: boolean | cdktf.IResolvable;
  /**
  * Whether to run the QA annotator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#run_qa_annotator ContactCenterInsightsAnalysisRule#run_qa_annotator}
  */
  readonly runQaAnnotator?: boolean | cdktf.IResolvable;
  /**
  * Whether to run the sentiment annotator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#run_sentiment_annotator ContactCenterInsightsAnalysisRule#run_sentiment_annotator}
  */
  readonly runSentimentAnnotator?: boolean | cdktf.IResolvable;
  /**
  * Whether to run the silence annotator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#run_silence_annotator ContactCenterInsightsAnalysisRule#run_silence_annotator}
  */
  readonly runSilenceAnnotator?: boolean | cdktf.IResolvable;
  /**
  * Whether to run the summarization annotator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#run_summarization_annotator ContactCenterInsightsAnalysisRule#run_summarization_annotator}
  */
  readonly runSummarizationAnnotator?: boolean | cdktf.IResolvable;
  /**
  * qa_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#qa_config ContactCenterInsightsAnalysisRule#qa_config}
  */
  readonly qaConfig?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig;
  /**
  * summarization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#summarization_config ContactCenterInsightsAnalysisRule#summarization_config}
  */
  readonly summarizationConfig?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig;
}

export function contactCenterInsightsAnalysisRuleAnnotatorSelectorToTerraform(struct?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference | ContactCenterInsightsAnalysisRuleAnnotatorSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issue_models: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.issueModels),
    phrase_matchers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.phraseMatchers),
    run_entity_annotator: cdktf.booleanToTerraform(struct!.runEntityAnnotator),
    run_intent_annotator: cdktf.booleanToTerraform(struct!.runIntentAnnotator),
    run_interruption_annotator: cdktf.booleanToTerraform(struct!.runInterruptionAnnotator),
    run_issue_model_annotator: cdktf.booleanToTerraform(struct!.runIssueModelAnnotator),
    run_phrase_matcher_annotator: cdktf.booleanToTerraform(struct!.runPhraseMatcherAnnotator),
    run_qa_annotator: cdktf.booleanToTerraform(struct!.runQaAnnotator),
    run_sentiment_annotator: cdktf.booleanToTerraform(struct!.runSentimentAnnotator),
    run_silence_annotator: cdktf.booleanToTerraform(struct!.runSilenceAnnotator),
    run_summarization_annotator: cdktf.booleanToTerraform(struct!.runSummarizationAnnotator),
    qa_config: contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigToTerraform(struct!.qaConfig),
    summarization_config: contactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigToTerraform(struct!.summarizationConfig),
  }
}


export function contactCenterInsightsAnalysisRuleAnnotatorSelectorToHclTerraform(struct?: ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference | ContactCenterInsightsAnalysisRuleAnnotatorSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issue_models: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.issueModels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    phrase_matchers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.phraseMatchers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    run_entity_annotator: {
      value: cdktf.booleanToHclTerraform(struct!.runEntityAnnotator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_intent_annotator: {
      value: cdktf.booleanToHclTerraform(struct!.runIntentAnnotator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_interruption_annotator: {
      value: cdktf.booleanToHclTerraform(struct!.runInterruptionAnnotator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_issue_model_annotator: {
      value: cdktf.booleanToHclTerraform(struct!.runIssueModelAnnotator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_phrase_matcher_annotator: {
      value: cdktf.booleanToHclTerraform(struct!.runPhraseMatcherAnnotator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_qa_annotator: {
      value: cdktf.booleanToHclTerraform(struct!.runQaAnnotator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_sentiment_annotator: {
      value: cdktf.booleanToHclTerraform(struct!.runSentimentAnnotator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_silence_annotator: {
      value: cdktf.booleanToHclTerraform(struct!.runSilenceAnnotator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_summarization_annotator: {
      value: cdktf.booleanToHclTerraform(struct!.runSummarizationAnnotator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qa_config: {
      value: contactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigToHclTerraform(struct!.qaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigList",
    },
    summarization_config: {
      value: contactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigToHclTerraform(struct!.summarizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContactCenterInsightsAnalysisRuleAnnotatorSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issueModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueModels = this._issueModels;
    }
    if (this._phraseMatchers !== undefined) {
      hasAnyValues = true;
      internalValueResult.phraseMatchers = this._phraseMatchers;
    }
    if (this._runEntityAnnotator !== undefined) {
      hasAnyValues = true;
      internalValueResult.runEntityAnnotator = this._runEntityAnnotator;
    }
    if (this._runIntentAnnotator !== undefined) {
      hasAnyValues = true;
      internalValueResult.runIntentAnnotator = this._runIntentAnnotator;
    }
    if (this._runInterruptionAnnotator !== undefined) {
      hasAnyValues = true;
      internalValueResult.runInterruptionAnnotator = this._runInterruptionAnnotator;
    }
    if (this._runIssueModelAnnotator !== undefined) {
      hasAnyValues = true;
      internalValueResult.runIssueModelAnnotator = this._runIssueModelAnnotator;
    }
    if (this._runPhraseMatcherAnnotator !== undefined) {
      hasAnyValues = true;
      internalValueResult.runPhraseMatcherAnnotator = this._runPhraseMatcherAnnotator;
    }
    if (this._runQaAnnotator !== undefined) {
      hasAnyValues = true;
      internalValueResult.runQaAnnotator = this._runQaAnnotator;
    }
    if (this._runSentimentAnnotator !== undefined) {
      hasAnyValues = true;
      internalValueResult.runSentimentAnnotator = this._runSentimentAnnotator;
    }
    if (this._runSilenceAnnotator !== undefined) {
      hasAnyValues = true;
      internalValueResult.runSilenceAnnotator = this._runSilenceAnnotator;
    }
    if (this._runSummarizationAnnotator !== undefined) {
      hasAnyValues = true;
      internalValueResult.runSummarizationAnnotator = this._runSummarizationAnnotator;
    }
    if (this._qaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qaConfig = this._qaConfig?.internalValue;
    }
    if (this._summarizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizationConfig = this._summarizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContactCenterInsightsAnalysisRuleAnnotatorSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issueModels = undefined;
      this._phraseMatchers = undefined;
      this._runEntityAnnotator = undefined;
      this._runIntentAnnotator = undefined;
      this._runInterruptionAnnotator = undefined;
      this._runIssueModelAnnotator = undefined;
      this._runPhraseMatcherAnnotator = undefined;
      this._runQaAnnotator = undefined;
      this._runSentimentAnnotator = undefined;
      this._runSilenceAnnotator = undefined;
      this._runSummarizationAnnotator = undefined;
      this._qaConfig.internalValue = undefined;
      this._summarizationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issueModels = value.issueModels;
      this._phraseMatchers = value.phraseMatchers;
      this._runEntityAnnotator = value.runEntityAnnotator;
      this._runIntentAnnotator = value.runIntentAnnotator;
      this._runInterruptionAnnotator = value.runInterruptionAnnotator;
      this._runIssueModelAnnotator = value.runIssueModelAnnotator;
      this._runPhraseMatcherAnnotator = value.runPhraseMatcherAnnotator;
      this._runQaAnnotator = value.runQaAnnotator;
      this._runSentimentAnnotator = value.runSentimentAnnotator;
      this._runSilenceAnnotator = value.runSilenceAnnotator;
      this._runSummarizationAnnotator = value.runSummarizationAnnotator;
      this._qaConfig.internalValue = value.qaConfig;
      this._summarizationConfig.internalValue = value.summarizationConfig;
    }
  }

  // issue_models - computed: false, optional: true, required: false
  private _issueModels?: string[]; 
  public get issueModels() {
    return this.getListAttribute('issue_models');
  }
  public set issueModels(value: string[]) {
    this._issueModels = value;
  }
  public resetIssueModels() {
    this._issueModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueModelsInput() {
    return this._issueModels;
  }

  // phrase_matchers - computed: false, optional: true, required: false
  private _phraseMatchers?: string[]; 
  public get phraseMatchers() {
    return this.getListAttribute('phrase_matchers');
  }
  public set phraseMatchers(value: string[]) {
    this._phraseMatchers = value;
  }
  public resetPhraseMatchers() {
    this._phraseMatchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phraseMatchersInput() {
    return this._phraseMatchers;
  }

  // run_entity_annotator - computed: false, optional: true, required: false
  private _runEntityAnnotator?: boolean | cdktf.IResolvable; 
  public get runEntityAnnotator() {
    return this.getBooleanAttribute('run_entity_annotator');
  }
  public set runEntityAnnotator(value: boolean | cdktf.IResolvable) {
    this._runEntityAnnotator = value;
  }
  public resetRunEntityAnnotator() {
    this._runEntityAnnotator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runEntityAnnotatorInput() {
    return this._runEntityAnnotator;
  }

  // run_intent_annotator - computed: false, optional: true, required: false
  private _runIntentAnnotator?: boolean | cdktf.IResolvable; 
  public get runIntentAnnotator() {
    return this.getBooleanAttribute('run_intent_annotator');
  }
  public set runIntentAnnotator(value: boolean | cdktf.IResolvable) {
    this._runIntentAnnotator = value;
  }
  public resetRunIntentAnnotator() {
    this._runIntentAnnotator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIntentAnnotatorInput() {
    return this._runIntentAnnotator;
  }

  // run_interruption_annotator - computed: false, optional: true, required: false
  private _runInterruptionAnnotator?: boolean | cdktf.IResolvable; 
  public get runInterruptionAnnotator() {
    return this.getBooleanAttribute('run_interruption_annotator');
  }
  public set runInterruptionAnnotator(value: boolean | cdktf.IResolvable) {
    this._runInterruptionAnnotator = value;
  }
  public resetRunInterruptionAnnotator() {
    this._runInterruptionAnnotator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInterruptionAnnotatorInput() {
    return this._runInterruptionAnnotator;
  }

  // run_issue_model_annotator - computed: false, optional: true, required: false
  private _runIssueModelAnnotator?: boolean | cdktf.IResolvable; 
  public get runIssueModelAnnotator() {
    return this.getBooleanAttribute('run_issue_model_annotator');
  }
  public set runIssueModelAnnotator(value: boolean | cdktf.IResolvable) {
    this._runIssueModelAnnotator = value;
  }
  public resetRunIssueModelAnnotator() {
    this._runIssueModelAnnotator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIssueModelAnnotatorInput() {
    return this._runIssueModelAnnotator;
  }

  // run_phrase_matcher_annotator - computed: false, optional: true, required: false
  private _runPhraseMatcherAnnotator?: boolean | cdktf.IResolvable; 
  public get runPhraseMatcherAnnotator() {
    return this.getBooleanAttribute('run_phrase_matcher_annotator');
  }
  public set runPhraseMatcherAnnotator(value: boolean | cdktf.IResolvable) {
    this._runPhraseMatcherAnnotator = value;
  }
  public resetRunPhraseMatcherAnnotator() {
    this._runPhraseMatcherAnnotator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runPhraseMatcherAnnotatorInput() {
    return this._runPhraseMatcherAnnotator;
  }

  // run_qa_annotator - computed: false, optional: true, required: false
  private _runQaAnnotator?: boolean | cdktf.IResolvable; 
  public get runQaAnnotator() {
    return this.getBooleanAttribute('run_qa_annotator');
  }
  public set runQaAnnotator(value: boolean | cdktf.IResolvable) {
    this._runQaAnnotator = value;
  }
  public resetRunQaAnnotator() {
    this._runQaAnnotator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runQaAnnotatorInput() {
    return this._runQaAnnotator;
  }

  // run_sentiment_annotator - computed: false, optional: true, required: false
  private _runSentimentAnnotator?: boolean | cdktf.IResolvable; 
  public get runSentimentAnnotator() {
    return this.getBooleanAttribute('run_sentiment_annotator');
  }
  public set runSentimentAnnotator(value: boolean | cdktf.IResolvable) {
    this._runSentimentAnnotator = value;
  }
  public resetRunSentimentAnnotator() {
    this._runSentimentAnnotator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runSentimentAnnotatorInput() {
    return this._runSentimentAnnotator;
  }

  // run_silence_annotator - computed: false, optional: true, required: false
  private _runSilenceAnnotator?: boolean | cdktf.IResolvable; 
  public get runSilenceAnnotator() {
    return this.getBooleanAttribute('run_silence_annotator');
  }
  public set runSilenceAnnotator(value: boolean | cdktf.IResolvable) {
    this._runSilenceAnnotator = value;
  }
  public resetRunSilenceAnnotator() {
    this._runSilenceAnnotator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runSilenceAnnotatorInput() {
    return this._runSilenceAnnotator;
  }

  // run_summarization_annotator - computed: false, optional: true, required: false
  private _runSummarizationAnnotator?: boolean | cdktf.IResolvable; 
  public get runSummarizationAnnotator() {
    return this.getBooleanAttribute('run_summarization_annotator');
  }
  public set runSummarizationAnnotator(value: boolean | cdktf.IResolvable) {
    this._runSummarizationAnnotator = value;
  }
  public resetRunSummarizationAnnotator() {
    this._runSummarizationAnnotator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runSummarizationAnnotatorInput() {
    return this._runSummarizationAnnotator;
  }

  // qa_config - computed: false, optional: true, required: false
  private _qaConfig = new ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference(this, "qa_config");
  public get qaConfig() {
    return this._qaConfig;
  }
  public putQaConfig(value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig) {
    this._qaConfig.internalValue = value;
  }
  public resetQaConfig() {
    this._qaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qaConfigInput() {
    return this._qaConfig.internalValue;
  }

  // summarization_config - computed: false, optional: true, required: false
  private _summarizationConfig = new ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference(this, "summarization_config");
  public get summarizationConfig() {
    return this._summarizationConfig;
  }
  public putSummarizationConfig(value: ContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig) {
    this._summarizationConfig.internalValue = value;
  }
  public resetSummarizationConfig() {
    this._summarizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizationConfigInput() {
    return this._summarizationConfig.internalValue;
  }
}
export interface ContactCenterInsightsAnalysisRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#create ContactCenterInsightsAnalysisRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#delete ContactCenterInsightsAnalysisRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#update ContactCenterInsightsAnalysisRule#update}
  */
  readonly update?: string;
}

export function contactCenterInsightsAnalysisRuleTimeoutsToTerraform(struct?: ContactCenterInsightsAnalysisRuleTimeouts | cdktf.IResolvable): any {
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


export function contactCenterInsightsAnalysisRuleTimeoutsToHclTerraform(struct?: ContactCenterInsightsAnalysisRuleTimeouts | cdktf.IResolvable): any {
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

export class ContactCenterInsightsAnalysisRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContactCenterInsightsAnalysisRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContactCenterInsightsAnalysisRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule}
*/
export class ContactCenterInsightsAnalysisRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_contact_center_insights_analysis_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContactCenterInsightsAnalysisRule to import
  * @param importFromId The id of the existing ContactCenterInsightsAnalysisRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContactCenterInsightsAnalysisRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_contact_center_insights_analysis_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContactCenterInsightsAnalysisRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ContactCenterInsightsAnalysisRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_contact_center_insights_analysis_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.44.0',
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
    this._active = config.active;
    this._analysisPercentage = config.analysisPercentage;
    this._conversationFilter = config.conversationFilter;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._annotatorSelector.internalValue = config.annotatorSelector;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // analysis_percentage - computed: false, optional: true, required: false
  private _analysisPercentage?: number; 
  public get analysisPercentage() {
    return this.getNumberAttribute('analysis_percentage');
  }
  public set analysisPercentage(value: number) {
    this._analysisPercentage = value;
  }
  public resetAnalysisPercentage() {
    this._analysisPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisPercentageInput() {
    return this._analysisPercentage;
  }

  // conversation_filter - computed: false, optional: true, required: false
  private _conversationFilter?: string; 
  public get conversationFilter() {
    return this.getStringAttribute('conversation_filter');
  }
  public set conversationFilter(value: string) {
    this._conversationFilter = value;
  }
  public resetConversationFilter() {
    this._conversationFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationFilterInput() {
    return this._conversationFilter;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // annotator_selector - computed: false, optional: true, required: false
  private _annotatorSelector = new ContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference(this, "annotator_selector");
  public get annotatorSelector() {
    return this._annotatorSelector;
  }
  public putAnnotatorSelector(value: ContactCenterInsightsAnalysisRuleAnnotatorSelector) {
    this._annotatorSelector.internalValue = value;
  }
  public resetAnnotatorSelector() {
    this._annotatorSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotatorSelectorInput() {
    return this._annotatorSelector.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContactCenterInsightsAnalysisRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContactCenterInsightsAnalysisRuleTimeouts) {
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
      active: cdktf.booleanToTerraform(this._active),
      analysis_percentage: cdktf.numberToTerraform(this._analysisPercentage),
      conversation_filter: cdktf.stringToTerraform(this._conversationFilter),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      annotator_selector: contactCenterInsightsAnalysisRuleAnnotatorSelectorToTerraform(this._annotatorSelector.internalValue),
      timeouts: contactCenterInsightsAnalysisRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      analysis_percentage: {
        value: cdktf.numberToHclTerraform(this._analysisPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conversation_filter: {
        value: cdktf.stringToHclTerraform(this._conversationFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotator_selector: {
        value: contactCenterInsightsAnalysisRuleAnnotatorSelectorToHclTerraform(this._annotatorSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContactCenterInsightsAnalysisRuleAnnotatorSelectorList",
      },
      timeouts: {
        value: contactCenterInsightsAnalysisRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContactCenterInsightsAnalysisRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
