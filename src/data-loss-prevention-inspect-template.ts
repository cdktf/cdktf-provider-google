// https://www.terraform.io/docs/providers/google/r/data_loss_prevention_inspect_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionInspectTemplateConfig extends cdktf.TerraformMetaArguments {
  /** A description of the inspect template. */
  readonly description?: string;
  /** User set display name of the inspect template. */
  readonly displayName?: string;
  /** The parent of the inspect template in any of the following formats:

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}' */
  readonly parent: string;
  /** inspect_config block */
  readonly inspectConfig?: DataLossPreventionInspectTemplateInspectConfig[];
  /** timeouts block */
  readonly timeouts?: DataLossPreventionInspectTemplateTimeouts;
}
export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
  /** A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt' */
  readonly path: string;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList {
  /** Words or phrases defining the dictionary. The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits. */
  readonly words: string[];
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform)(struct!.words),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary {
  /** cloud_storage_path block */
  readonly cloudStoragePath?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath[];
  /** word_list block */
  readonly wordList?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList[];
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloud_storage_path: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform)(struct!.cloudStoragePath),
    word_list: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListToTerraform)(struct!.wordList),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType {
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex {
  /** The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
  readonly groupIndexes?: number[];
  /** Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
  readonly pattern: string;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType {
  /** Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342'
or 'projects/project-id/storedInfoTypes/432452342'. */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes {
  /** If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Possible values: ["EXCLUSION_TYPE_EXCLUDE"] */
  readonly exclusionType?: string;
  /** Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria
specified by the rule. Default value: "VERY_LIKELY" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"] */
  readonly likelihood?: string;
  /** dictionary block */
  readonly dictionary?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary[];
  /** info_type block */
  readonly infoType: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType[];
  /** regex block */
  readonly regex?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex[];
  /** stored_type block */
  readonly storedType?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType[];
}

function dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exclusion_type: cdktf.stringToTerraform(struct!.exclusionType),
    likelihood: cdktf.stringToTerraform(struct!.likelihood),
    dictionary: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryToTerraform)(struct!.dictionary),
    info_type: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeToTerraform)(struct!.infoType),
    regex: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexToTerraform)(struct!.regex),
    stored_type: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeToTerraform)(struct!.storedType),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigInfoTypes {
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType {
  /** Max findings limit for the given infoType. */
  readonly maxFindings: number;
  /** info_type block */
  readonly infoType: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType[];
}

function dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_findings: cdktf.numberToTerraform(struct!.maxFindings),
    info_type: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform)(struct!.infoType),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigLimits {
  /** Max number of findings that will be returned for each item scanned. The maximum returned is 2000. */
  readonly maxFindingsPerItem: number;
  /** Max number of findings that will be returned per request/job. The maximum returned is 2000. */
  readonly maxFindingsPerRequest: number;
  /** max_findings_per_info_type block */
  readonly maxFindingsPerInfoType?: DataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType[];
}

function dataLossPreventionInspectTemplateInspectConfigLimitsToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_findings_per_item: cdktf.numberToTerraform(struct!.maxFindingsPerItem),
    max_findings_per_request: cdktf.numberToTerraform(struct!.maxFindingsPerRequest),
    max_findings_per_info_type: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform)(struct!.maxFindingsPerInfoType),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes {
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
  /** A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt' */
  readonly path: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList {
  /** Words or phrases defining the dictionary. The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits. */
  readonly words: string[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform)(struct!.words),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary {
  /** cloud_storage_path block */
  readonly cloudStoragePath?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath[];
  /** word_list block */
  readonly wordList?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloud_storage_path: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform)(struct!.cloudStoragePath),
    word_list: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListToTerraform)(struct!.wordList),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
  /** Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type. */
  readonly name: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
  /** info_types block */
  readonly infoTypes: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform)(struct!.infoTypes),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex {
  /** The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included. */
  readonly groupIndexes?: number[];
  /** Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
  readonly pattern: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule {
  /** How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"] */
  readonly matchingType: string;
  /** dictionary block */
  readonly dictionary?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary[];
  /** exclude_info_types block */
  readonly excludeInfoTypes?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes[];
  /** regex block */
  readonly regex?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    matching_type: cdktf.stringToTerraform(struct!.matchingType),
    dictionary: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform)(struct!.dictionary),
    exclude_info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform)(struct!.excludeInfoTypes),
    regex: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexToTerraform)(struct!.regex),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
  /** The index of the submatch to extract as findings. When not specified,
the entire match is returned. No more than 3 may be included. */
  readonly groupIndexes?: number[];
  /** Pattern defining the regular expression. Its syntax
(https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. */
  readonly pattern: string;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
  /** Set the likelihood of a finding to a fixed value. Either this or relative_likelihood can be set. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"] */
  readonly fixedLikelihood?: string;
  /** Increase or decrease the likelihood by the specified number of levels. For example,
if a finding would be POSSIBLE without the detection rule and relativeLikelihood is 1,
then it is upgraded to LIKELY, while a value of -1 would downgrade it to UNLIKELY.
Likelihood may never drop below VERY_UNLIKELY or exceed VERY_LIKELY, so applying an
adjustment of 1 followed by an adjustment of -1 when base likelihood is VERY_LIKELY
will result in a final likelihood of LIKELY. Either this or fixed_likelihood can be set. */
  readonly relativeLikelihood?: number;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fixed_likelihood: cdktf.stringToTerraform(struct!.fixedLikelihood),
    relative_likelihood: cdktf.numberToTerraform(struct!.relativeLikelihood),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity {
  /** Number of characters after the finding to consider. Either this or window_before must be specified */
  readonly windowAfter?: number;
  /** Number of characters before the finding to consider. Either this or window_after must be specified */
  readonly windowBefore?: number;
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    window_after: cdktf.numberToTerraform(struct!.windowAfter),
    window_before: cdktf.numberToTerraform(struct!.windowBefore),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule {
  /** hotword_regex block */
  readonly hotwordRegex: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex[];
  /** likelihood_adjustment block */
  readonly likelihoodAdjustment: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment[];
  /** proximity block */
  readonly proximity: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hotword_regex: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform)(struct!.hotwordRegex),
    likelihood_adjustment: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform)(struct!.likelihoodAdjustment),
    proximity: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityToTerraform)(struct!.proximity),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSetRules {
  /** exclusion_rule block */
  readonly exclusionRule?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule[];
  /** hotword_rule block */
  readonly hotwordRule?: DataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetRulesToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSetRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exclusion_rule: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleToTerraform)(struct!.exclusionRule),
    hotword_rule: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleToTerraform)(struct!.hotwordRule),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfigRuleSet {
  /** info_types block */
  readonly infoTypes: DataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes[];
  /** rules block */
  readonly rules: DataLossPreventionInspectTemplateInspectConfigRuleSetRules[];
}

function dataLossPreventionInspectTemplateInspectConfigRuleSetToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfigRuleSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesToTerraform)(struct!.infoTypes),
    rules: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetRulesToTerraform)(struct!.rules),
  }
}

export interface DataLossPreventionInspectTemplateInspectConfig {
  /** List of options defining data content to scan. If empty, text, images, and other content will be included. Possible values: ["CONTENT_TEXT", "CONTENT_IMAGE"] */
  readonly contentOptions?: string[];
  /** When true, excludes type information of the findings. */
  readonly excludeInfoTypes?: boolean;
  /** When true, a contextual quote from the data that triggered a finding is included in the response. */
  readonly includeQuote?: boolean;
  /** Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info Default value: "POSSIBLE" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"] */
  readonly minLikelihood?: string;
  /** custom_info_types block */
  readonly customInfoTypes?: DataLossPreventionInspectTemplateInspectConfigCustomInfoTypes[];
  /** info_types block */
  readonly infoTypes?: DataLossPreventionInspectTemplateInspectConfigInfoTypes[];
  /** limits block */
  readonly limits?: DataLossPreventionInspectTemplateInspectConfigLimits[];
  /** rule_set block */
  readonly ruleSet?: DataLossPreventionInspectTemplateInspectConfigRuleSet[];
}

function dataLossPreventionInspectTemplateInspectConfigToTerraform(struct?: DataLossPreventionInspectTemplateInspectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.contentOptions),
    exclude_info_types: cdktf.booleanToTerraform(struct!.excludeInfoTypes),
    include_quote: cdktf.booleanToTerraform(struct!.includeQuote),
    min_likelihood: cdktf.stringToTerraform(struct!.minLikelihood),
    custom_info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigCustomInfoTypesToTerraform)(struct!.customInfoTypes),
    info_types: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigInfoTypesToTerraform)(struct!.infoTypes),
    limits: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigLimitsToTerraform)(struct!.limits),
    rule_set: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigRuleSetToTerraform)(struct!.ruleSet),
  }
}

export interface DataLossPreventionInspectTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function dataLossPreventionInspectTemplateTimeoutsToTerraform(struct?: DataLossPreventionInspectTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class DataLossPreventionInspectTemplate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataLossPreventionInspectTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_inspect_template',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._parent = config.parent;
    this._inspectConfig = config.inspectConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // inspect_config - computed: false, optional: true, required: false
  private _inspectConfig?: DataLossPreventionInspectTemplateInspectConfig[];
  public get inspectConfig() {
    return this.interpolationForAttribute('inspect_config') as any;
  }
  public set inspectConfig(value: DataLossPreventionInspectTemplateInspectConfig[] ) {
    this._inspectConfig = value;
  }
  public resetInspectConfig() {
    this._inspectConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectConfigInput() {
    return this._inspectConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataLossPreventionInspectTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataLossPreventionInspectTemplateTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      parent: cdktf.stringToTerraform(this._parent),
      inspect_config: cdktf.listMapper(dataLossPreventionInspectTemplateInspectConfigToTerraform)(this._inspectConfig),
      timeouts: dataLossPreventionInspectTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
