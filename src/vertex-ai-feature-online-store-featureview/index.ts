/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VertexAiFeatureOnlineStoreFeatureviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the FeatureOnlineStore to use for the featureview.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#feature_online_store VertexAiFeatureOnlineStoreFeatureview#feature_online_store}
  */
  readonly featureOnlineStore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#id VertexAiFeatureOnlineStoreFeatureview#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to this FeatureView.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#labels VertexAiFeatureOnlineStoreFeatureview#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#name VertexAiFeatureOnlineStoreFeatureview#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#project VertexAiFeatureOnlineStoreFeatureview#project}
  */
  readonly project?: string;
  /**
  * The region for the resource. It should be the same as the featureonlinestore region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#region VertexAiFeatureOnlineStoreFeatureview#region}
  */
  readonly region: string;
  /**
  * big_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#big_query_source VertexAiFeatureOnlineStoreFeatureview#big_query_source}
  */
  readonly bigQuerySource?: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource;
  /**
  * sync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#sync_config VertexAiFeatureOnlineStoreFeatureview#sync_config}
  */
  readonly syncConfig?: VertexAiFeatureOnlineStoreFeatureviewSyncConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#timeouts VertexAiFeatureOnlineStoreFeatureview#timeouts}
  */
  readonly timeouts?: VertexAiFeatureOnlineStoreFeatureviewTimeouts;
}
export interface VertexAiFeatureOnlineStoreFeatureviewBigQuerySource {
  /**
  * Columns to construct entityId / row keys. Start by supporting 1 only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#entity_id_columns VertexAiFeatureOnlineStoreFeatureview#entity_id_columns}
  */
  readonly entityIdColumns: string[];
  /**
  * The BigQuery view URI that will be materialized on each sync trigger based on FeatureView.SyncConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#uri VertexAiFeatureOnlineStoreFeatureview#uri}
  */
  readonly uri: string;
}

export function vertexAiFeatureOnlineStoreFeatureviewBigQuerySourceToTerraform(struct?: VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference | VertexAiFeatureOnlineStoreFeatureviewBigQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityIdColumns),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function vertexAiFeatureOnlineStoreFeatureviewBigQuerySourceToHclTerraform(struct?: VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference | VertexAiFeatureOnlineStoreFeatureviewBigQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityIdColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreFeatureviewBigQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdColumns = this._entityIdColumns;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityIdColumns = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityIdColumns = value.entityIdColumns;
      this._uri = value.uri;
    }
  }

  // entity_id_columns - computed: false, optional: false, required: true
  private _entityIdColumns?: string[]; 
  public get entityIdColumns() {
    return this.getListAttribute('entity_id_columns');
  }
  public set entityIdColumns(value: string[]) {
    this._entityIdColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdColumnsInput() {
    return this._entityIdColumns;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface VertexAiFeatureOnlineStoreFeatureviewSyncConfig {
  /**
  * Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs.
  * To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or "TZ=${IANA_TIME_ZONE}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#cron VertexAiFeatureOnlineStoreFeatureview#cron}
  */
  readonly cron?: string;
}

export function vertexAiFeatureOnlineStoreFeatureviewSyncConfigToTerraform(struct?: VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference | VertexAiFeatureOnlineStoreFeatureviewSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron: cdktf.stringToTerraform(struct!.cron),
  }
}


export function vertexAiFeatureOnlineStoreFeatureviewSyncConfigToHclTerraform(struct?: VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference | VertexAiFeatureOnlineStoreFeatureviewSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron: {
      value: cdktf.stringToHclTerraform(struct!.cron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreFeatureviewSyncConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cron !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiFeatureOnlineStoreFeatureviewSyncConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cron = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cron = value.cron;
    }
  }

  // cron - computed: true, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }
}
export interface VertexAiFeatureOnlineStoreFeatureviewTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#create VertexAiFeatureOnlineStoreFeatureview#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#delete VertexAiFeatureOnlineStoreFeatureview#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#update VertexAiFeatureOnlineStoreFeatureview#update}
  */
  readonly update?: string;
}

export function vertexAiFeatureOnlineStoreFeatureviewTimeoutsToTerraform(struct?: VertexAiFeatureOnlineStoreFeatureviewTimeouts | cdktf.IResolvable): any {
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


export function vertexAiFeatureOnlineStoreFeatureviewTimeoutsToHclTerraform(struct?: VertexAiFeatureOnlineStoreFeatureviewTimeouts | cdktf.IResolvable): any {
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

export class VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiFeatureOnlineStoreFeatureviewTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VertexAiFeatureOnlineStoreFeatureviewTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview google_vertex_ai_feature_online_store_featureview}
*/
export class VertexAiFeatureOnlineStoreFeatureview extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_feature_online_store_featureview";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VertexAiFeatureOnlineStoreFeatureview resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiFeatureOnlineStoreFeatureview to import
  * @param importFromId The id of the existing VertexAiFeatureOnlineStoreFeatureview that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiFeatureOnlineStoreFeatureview to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_feature_online_store_featureview", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/vertex_ai_feature_online_store_featureview google_vertex_ai_feature_online_store_featureview} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiFeatureOnlineStoreFeatureviewConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiFeatureOnlineStoreFeatureviewConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_feature_online_store_featureview',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.16.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureOnlineStore = config.featureOnlineStore;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._bigQuerySource.internalValue = config.bigQuerySource;
    this._syncConfig.internalValue = config.syncConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // feature_online_store - computed: false, optional: false, required: true
  private _featureOnlineStore?: string; 
  public get featureOnlineStore() {
    return this.getStringAttribute('feature_online_store');
  }
  public set featureOnlineStore(value: string) {
    this._featureOnlineStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureOnlineStoreInput() {
    return this._featureOnlineStore;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // big_query_source - computed: false, optional: true, required: false
  private _bigQuerySource = new VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceOutputReference(this, "big_query_source");
  public get bigQuerySource() {
    return this._bigQuerySource;
  }
  public putBigQuerySource(value: VertexAiFeatureOnlineStoreFeatureviewBigQuerySource) {
    this._bigQuerySource.internalValue = value;
  }
  public resetBigQuerySource() {
    this._bigQuerySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQuerySourceInput() {
    return this._bigQuerySource.internalValue;
  }

  // sync_config - computed: false, optional: true, required: false
  private _syncConfig = new VertexAiFeatureOnlineStoreFeatureviewSyncConfigOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: VertexAiFeatureOnlineStoreFeatureviewSyncConfig) {
    this._syncConfig.internalValue = value;
  }
  public resetSyncConfig() {
    this._syncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConfigInput() {
    return this._syncConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiFeatureOnlineStoreFeatureviewTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiFeatureOnlineStoreFeatureviewTimeouts) {
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
      feature_online_store: cdktf.stringToTerraform(this._featureOnlineStore),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      big_query_source: vertexAiFeatureOnlineStoreFeatureviewBigQuerySourceToTerraform(this._bigQuerySource.internalValue),
      sync_config: vertexAiFeatureOnlineStoreFeatureviewSyncConfigToTerraform(this._syncConfig.internalValue),
      timeouts: vertexAiFeatureOnlineStoreFeatureviewTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_online_store: {
        value: cdktf.stringToHclTerraform(this._featureOnlineStore),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      big_query_source: {
        value: vertexAiFeatureOnlineStoreFeatureviewBigQuerySourceToHclTerraform(this._bigQuerySource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiFeatureOnlineStoreFeatureviewBigQuerySourceList",
      },
      sync_config: {
        value: vertexAiFeatureOnlineStoreFeatureviewSyncConfigToHclTerraform(this._syncConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiFeatureOnlineStoreFeatureviewSyncConfigList",
      },
      timeouts: {
        value: vertexAiFeatureOnlineStoreFeatureviewTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiFeatureOnlineStoreFeatureviewTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
