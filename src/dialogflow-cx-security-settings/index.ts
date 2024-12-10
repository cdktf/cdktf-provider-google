// https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxSecuritySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text.
  * Note: deidentifyTemplate must be located in the same region as the SecuritySettings.
  * Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#deidentify_template DialogflowCxSecuritySettings#deidentify_template}
  */
  readonly deidentifyTemplate?: string;
  /**
  * The human-readable name of the security settings, unique within the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#display_name DialogflowCxSecuritySettings#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#id DialogflowCxSecuritySettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config.
  * Note: inspectTemplate must be located in the same region as the SecuritySettings.
  * Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#inspect_template DialogflowCxSecuritySettings#inspect_template}
  */
  readonly inspectTemplate?: string;
  /**
  * The location these settings are located in. Settings can only be applied to an agent in the same location.
  * See [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#location DialogflowCxSecuritySettings#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#project DialogflowCxSecuritySettings#project}
  */
  readonly project?: string;
  /**
  * List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#purge_data_types DialogflowCxSecuritySettings#purge_data_types}
  */
  readonly purgeDataTypes?: string[];
  /**
  * Defines what types of data to redact. If not set, defaults to not redacting any kind of data.
  * * REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk. Possible values: ["REDACT_DISK_STORAGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#redaction_scope DialogflowCxSecuritySettings#redaction_scope}
  */
  readonly redactionScope?: string;
  /**
  * Defines how we redact data. If not set, defaults to not redacting.
  * * REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted. Possible values: ["REDACT_WITH_SERVICE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#redaction_strategy DialogflowCxSecuritySettings#redaction_strategy}
  */
  readonly redactionStrategy?: string;
  /**
  * Defines how long we retain persisted data that contains sensitive info. Only one of 'retention_window_days' and 'retention_strategy' may be set.
  * * REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends. Possible values: ["REMOVE_AFTER_CONVERSATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#retention_strategy DialogflowCxSecuritySettings#retention_strategy}
  */
  readonly retentionStrategy?: string;
  /**
  * Retains the data for the specified number of days. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
  * Only one of 'retention_window_days' and 'retention_strategy' may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#retention_window_days DialogflowCxSecuritySettings#retention_window_days}
  */
  readonly retentionWindowDays?: number;
  /**
  * audio_export_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#audio_export_settings DialogflowCxSecuritySettings#audio_export_settings}
  */
  readonly audioExportSettings?: DialogflowCxSecuritySettingsAudioExportSettings;
  /**
  * insights_export_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#insights_export_settings DialogflowCxSecuritySettings#insights_export_settings}
  */
  readonly insightsExportSettings?: DialogflowCxSecuritySettingsInsightsExportSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#timeouts DialogflowCxSecuritySettings#timeouts}
  */
  readonly timeouts?: DialogflowCxSecuritySettingsTimeouts;
}
export interface DialogflowCxSecuritySettingsAudioExportSettings {
  /**
  * Filename pattern for exported audio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#audio_export_pattern DialogflowCxSecuritySettings#audio_export_pattern}
  */
  readonly audioExportPattern?: string;
  /**
  * File format for exported audio file. Currently only in telephony recordings.
  * * MULAW: G.711 mu-law PCM with 8kHz sample rate.
  * * MP3: MP3 file format.
  * * OGG: OGG Vorbis. Possible values: ["MULAW", "MP3", "OGG"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#audio_format DialogflowCxSecuritySettings#audio_format}
  */
  readonly audioFormat?: string;
  /**
  * Enable audio redaction if it is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#enable_audio_redaction DialogflowCxSecuritySettings#enable_audio_redaction}
  */
  readonly enableAudioRedaction?: boolean | cdktf.IResolvable;
  /**
  * Cloud Storage bucket to export audio record to. Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#gcs_bucket DialogflowCxSecuritySettings#gcs_bucket}
  */
  readonly gcsBucket?: string;
}

export function dialogflowCxSecuritySettingsAudioExportSettingsToTerraform(struct?: DialogflowCxSecuritySettingsAudioExportSettingsOutputReference | DialogflowCxSecuritySettingsAudioExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_export_pattern: cdktf.stringToTerraform(struct!.audioExportPattern),
    audio_format: cdktf.stringToTerraform(struct!.audioFormat),
    enable_audio_redaction: cdktf.booleanToTerraform(struct!.enableAudioRedaction),
    gcs_bucket: cdktf.stringToTerraform(struct!.gcsBucket),
  }
}


export function dialogflowCxSecuritySettingsAudioExportSettingsToHclTerraform(struct?: DialogflowCxSecuritySettingsAudioExportSettingsOutputReference | DialogflowCxSecuritySettingsAudioExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_export_pattern: {
      value: cdktf.stringToHclTerraform(struct!.audioExportPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audio_format: {
      value: cdktf.stringToHclTerraform(struct!.audioFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_audio_redaction: {
      value: cdktf.booleanToHclTerraform(struct!.enableAudioRedaction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gcs_bucket: {
      value: cdktf.stringToHclTerraform(struct!.gcsBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxSecuritySettingsAudioExportSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxSecuritySettingsAudioExportSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExportPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExportPattern = this._audioExportPattern;
    }
    if (this._audioFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioFormat = this._audioFormat;
    }
    if (this._enableAudioRedaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAudioRedaction = this._enableAudioRedaction;
    }
    if (this._gcsBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucket = this._gcsBucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxSecuritySettingsAudioExportSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioExportPattern = undefined;
      this._audioFormat = undefined;
      this._enableAudioRedaction = undefined;
      this._gcsBucket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioExportPattern = value.audioExportPattern;
      this._audioFormat = value.audioFormat;
      this._enableAudioRedaction = value.enableAudioRedaction;
      this._gcsBucket = value.gcsBucket;
    }
  }

  // audio_export_pattern - computed: false, optional: true, required: false
  private _audioExportPattern?: string; 
  public get audioExportPattern() {
    return this.getStringAttribute('audio_export_pattern');
  }
  public set audioExportPattern(value: string) {
    this._audioExportPattern = value;
  }
  public resetAudioExportPattern() {
    this._audioExportPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExportPatternInput() {
    return this._audioExportPattern;
  }

  // audio_format - computed: false, optional: true, required: false
  private _audioFormat?: string; 
  public get audioFormat() {
    return this.getStringAttribute('audio_format');
  }
  public set audioFormat(value: string) {
    this._audioFormat = value;
  }
  public resetAudioFormat() {
    this._audioFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioFormatInput() {
    return this._audioFormat;
  }

  // enable_audio_redaction - computed: false, optional: true, required: false
  private _enableAudioRedaction?: boolean | cdktf.IResolvable; 
  public get enableAudioRedaction() {
    return this.getBooleanAttribute('enable_audio_redaction');
  }
  public set enableAudioRedaction(value: boolean | cdktf.IResolvable) {
    this._enableAudioRedaction = value;
  }
  public resetEnableAudioRedaction() {
    this._enableAudioRedaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAudioRedactionInput() {
    return this._enableAudioRedaction;
  }

  // gcs_bucket - computed: false, optional: true, required: false
  private _gcsBucket?: string; 
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }
  public set gcsBucket(value: string) {
    this._gcsBucket = value;
  }
  public resetGcsBucket() {
    this._gcsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketInput() {
    return this._gcsBucket;
  }
}
export interface DialogflowCxSecuritySettingsInsightsExportSettings {
  /**
  * If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#enable_insights_export DialogflowCxSecuritySettings#enable_insights_export}
  */
  readonly enableInsightsExport: boolean | cdktf.IResolvable;
}

export function dialogflowCxSecuritySettingsInsightsExportSettingsToTerraform(struct?: DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference | DialogflowCxSecuritySettingsInsightsExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_insights_export: cdktf.booleanToTerraform(struct!.enableInsightsExport),
  }
}


export function dialogflowCxSecuritySettingsInsightsExportSettingsToHclTerraform(struct?: DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference | DialogflowCxSecuritySettingsInsightsExportSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_insights_export: {
      value: cdktf.booleanToHclTerraform(struct!.enableInsightsExport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxSecuritySettingsInsightsExportSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInsightsExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInsightsExport = this._enableInsightsExport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxSecuritySettingsInsightsExportSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInsightsExport = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInsightsExport = value.enableInsightsExport;
    }
  }

  // enable_insights_export - computed: false, optional: false, required: true
  private _enableInsightsExport?: boolean | cdktf.IResolvable; 
  public get enableInsightsExport() {
    return this.getBooleanAttribute('enable_insights_export');
  }
  public set enableInsightsExport(value: boolean | cdktf.IResolvable) {
    this._enableInsightsExport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInsightsExportInput() {
    return this._enableInsightsExport;
  }
}
export interface DialogflowCxSecuritySettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#create DialogflowCxSecuritySettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#delete DialogflowCxSecuritySettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#update DialogflowCxSecuritySettings#update}
  */
  readonly update?: string;
}

export function dialogflowCxSecuritySettingsTimeoutsToTerraform(struct?: DialogflowCxSecuritySettingsTimeouts | cdktf.IResolvable): any {
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


export function dialogflowCxSecuritySettingsTimeoutsToHclTerraform(struct?: DialogflowCxSecuritySettingsTimeouts | cdktf.IResolvable): any {
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

export class DialogflowCxSecuritySettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxSecuritySettingsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxSecuritySettingsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings google_dialogflow_cx_security_settings}
*/
export class DialogflowCxSecuritySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_security_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowCxSecuritySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxSecuritySettings to import
  * @param importFromId The id of the existing DialogflowCxSecuritySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxSecuritySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_security_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/dialogflow_cx_security_settings google_dialogflow_cx_security_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxSecuritySettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxSecuritySettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_security_settings',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.13.0',
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
    this._deidentifyTemplate = config.deidentifyTemplate;
    this._displayName = config.displayName;
    this._id = config.id;
    this._inspectTemplate = config.inspectTemplate;
    this._location = config.location;
    this._project = config.project;
    this._purgeDataTypes = config.purgeDataTypes;
    this._redactionScope = config.redactionScope;
    this._redactionStrategy = config.redactionStrategy;
    this._retentionStrategy = config.retentionStrategy;
    this._retentionWindowDays = config.retentionWindowDays;
    this._audioExportSettings.internalValue = config.audioExportSettings;
    this._insightsExportSettings.internalValue = config.insightsExportSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deidentify_template - computed: false, optional: true, required: false
  private _deidentifyTemplate?: string; 
  public get deidentifyTemplate() {
    return this.getStringAttribute('deidentify_template');
  }
  public set deidentifyTemplate(value: string) {
    this._deidentifyTemplate = value;
  }
  public resetDeidentifyTemplate() {
    this._deidentifyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deidentifyTemplateInput() {
    return this._deidentifyTemplate;
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

  // inspect_template - computed: false, optional: true, required: false
  private _inspectTemplate?: string; 
  public get inspectTemplate() {
    return this.getStringAttribute('inspect_template');
  }
  public set inspectTemplate(value: string) {
    this._inspectTemplate = value;
  }
  public resetInspectTemplate() {
    this._inspectTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateInput() {
    return this._inspectTemplate;
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

  // purge_data_types - computed: false, optional: true, required: false
  private _purgeDataTypes?: string[]; 
  public get purgeDataTypes() {
    return this.getListAttribute('purge_data_types');
  }
  public set purgeDataTypes(value: string[]) {
    this._purgeDataTypes = value;
  }
  public resetPurgeDataTypes() {
    this._purgeDataTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDataTypesInput() {
    return this._purgeDataTypes;
  }

  // redaction_scope - computed: false, optional: true, required: false
  private _redactionScope?: string; 
  public get redactionScope() {
    return this.getStringAttribute('redaction_scope');
  }
  public set redactionScope(value: string) {
    this._redactionScope = value;
  }
  public resetRedactionScope() {
    this._redactionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionScopeInput() {
    return this._redactionScope;
  }

  // redaction_strategy - computed: false, optional: true, required: false
  private _redactionStrategy?: string; 
  public get redactionStrategy() {
    return this.getStringAttribute('redaction_strategy');
  }
  public set redactionStrategy(value: string) {
    this._redactionStrategy = value;
  }
  public resetRedactionStrategy() {
    this._redactionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionStrategyInput() {
    return this._redactionStrategy;
  }

  // retention_strategy - computed: false, optional: true, required: false
  private _retentionStrategy?: string; 
  public get retentionStrategy() {
    return this.getStringAttribute('retention_strategy');
  }
  public set retentionStrategy(value: string) {
    this._retentionStrategy = value;
  }
  public resetRetentionStrategy() {
    this._retentionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionStrategyInput() {
    return this._retentionStrategy;
  }

  // retention_window_days - computed: false, optional: true, required: false
  private _retentionWindowDays?: number; 
  public get retentionWindowDays() {
    return this.getNumberAttribute('retention_window_days');
  }
  public set retentionWindowDays(value: number) {
    this._retentionWindowDays = value;
  }
  public resetRetentionWindowDays() {
    this._retentionWindowDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionWindowDaysInput() {
    return this._retentionWindowDays;
  }

  // audio_export_settings - computed: false, optional: true, required: false
  private _audioExportSettings = new DialogflowCxSecuritySettingsAudioExportSettingsOutputReference(this, "audio_export_settings");
  public get audioExportSettings() {
    return this._audioExportSettings;
  }
  public putAudioExportSettings(value: DialogflowCxSecuritySettingsAudioExportSettings) {
    this._audioExportSettings.internalValue = value;
  }
  public resetAudioExportSettings() {
    this._audioExportSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExportSettingsInput() {
    return this._audioExportSettings.internalValue;
  }

  // insights_export_settings - computed: false, optional: true, required: false
  private _insightsExportSettings = new DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference(this, "insights_export_settings");
  public get insightsExportSettings() {
    return this._insightsExportSettings;
  }
  public putInsightsExportSettings(value: DialogflowCxSecuritySettingsInsightsExportSettings) {
    this._insightsExportSettings.internalValue = value;
  }
  public resetInsightsExportSettings() {
    this._insightsExportSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsExportSettingsInput() {
    return this._insightsExportSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxSecuritySettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxSecuritySettingsTimeouts) {
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
      deidentify_template: cdktf.stringToTerraform(this._deidentifyTemplate),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      inspect_template: cdktf.stringToTerraform(this._inspectTemplate),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      purge_data_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._purgeDataTypes),
      redaction_scope: cdktf.stringToTerraform(this._redactionScope),
      redaction_strategy: cdktf.stringToTerraform(this._redactionStrategy),
      retention_strategy: cdktf.stringToTerraform(this._retentionStrategy),
      retention_window_days: cdktf.numberToTerraform(this._retentionWindowDays),
      audio_export_settings: dialogflowCxSecuritySettingsAudioExportSettingsToTerraform(this._audioExportSettings.internalValue),
      insights_export_settings: dialogflowCxSecuritySettingsInsightsExportSettingsToTerraform(this._insightsExportSettings.internalValue),
      timeouts: dialogflowCxSecuritySettingsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deidentify_template: {
        value: cdktf.stringToHclTerraform(this._deidentifyTemplate),
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
      inspect_template: {
        value: cdktf.stringToHclTerraform(this._inspectTemplate),
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
      purge_data_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._purgeDataTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      redaction_scope: {
        value: cdktf.stringToHclTerraform(this._redactionScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redaction_strategy: {
        value: cdktf.stringToHclTerraform(this._redactionStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_strategy: {
        value: cdktf.stringToHclTerraform(this._retentionStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_window_days: {
        value: cdktf.numberToHclTerraform(this._retentionWindowDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audio_export_settings: {
        value: dialogflowCxSecuritySettingsAudioExportSettingsToHclTerraform(this._audioExportSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxSecuritySettingsAudioExportSettingsList",
      },
      insights_export_settings: {
        value: dialogflowCxSecuritySettingsInsightsExportSettingsToHclTerraform(this._insightsExportSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxSecuritySettingsInsightsExportSettingsList",
      },
      timeouts: {
        value: dialogflowCxSecuritySettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxSecuritySettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
