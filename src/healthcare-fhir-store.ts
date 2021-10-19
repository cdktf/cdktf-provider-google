// https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareFhirStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#dataset HealthcareFhirStore#dataset}
  */
  readonly dataset: string;
  /**
  * Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#disable_referential_integrity HealthcareFhirStore#disable_referential_integrity}
  */
  readonly disableReferentialIntegrity?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#disable_resource_versioning HealthcareFhirStore#disable_resource_versioning}
  */
  readonly disableResourceVersioning?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow the bulk import API to accept history bundles and directly insert historical resource
versions into the FHIR store. Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#enable_history_import HealthcareFhirStore#enable_history_import}
  */
  readonly enableHistoryImport?: boolean | cdktf.IResolvable;
  /**
  * Whether this FHIR store has the updateCreate capability. This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#enable_update_create HealthcareFhirStore#enable_update_create}
  */
  readonly enableUpdateCreate?: boolean | cdktf.IResolvable;
  /**
  * User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#labels HealthcareFhirStore#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#name HealthcareFhirStore#name}
  */
  readonly name: string;
  /**
  * The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#version HealthcareFhirStore#version}
  */
  readonly version: string;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#notification_config HealthcareFhirStore#notification_config}
  */
  readonly notificationConfig?: HealthcareFhirStoreNotificationConfig;
  /**
  * stream_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#stream_configs HealthcareFhirStore#stream_configs}
  */
  readonly streamConfigs?: HealthcareFhirStoreStreamConfigs[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#timeouts HealthcareFhirStore#timeouts}
  */
  readonly timeouts?: HealthcareFhirStoreTimeouts;
}
export interface HealthcareFhirStoreNotificationConfig {
  /**
  * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#pubsub_topic HealthcareFhirStore#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

function healthcareFhirStoreNotificationConfigToTerraform(struct?: HealthcareFhirStoreNotificationConfigOutputReference | HealthcareFhirStoreNotificationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}

export class HealthcareFhirStoreNotificationConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic
  }
}
export interface HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig {
  /**
  * The depth for all recursive structures in the output analytics schema. For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#recursive_structure_depth HealthcareFhirStore#recursive_structure_depth}
  */
  readonly recursiveStructureDepth: number;
  /**
  * Specifies the output schema type. Only ANALYTICS is supported at this time.
 * ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md. Default value: "ANALYTICS" Possible values: ["ANALYTICS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#schema_type HealthcareFhirStore#schema_type}
  */
  readonly schemaType?: string;
}

function healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recursive_structure_depth: cdktf.numberToTerraform(struct!.recursiveStructureDepth),
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
  }
}

export class HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // recursive_structure_depth - computed: false, optional: false, required: true
  private _recursiveStructureDepth?: number; 
  public get recursiveStructureDepth() {
    return this.getNumberAttribute('recursive_structure_depth');
  }
  public set recursiveStructureDepth(value: number) {
    this._recursiveStructureDepth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveStructureDepthInput() {
    return this._recursiveStructureDepth
  }

  // schema_type - computed: false, optional: true, required: false
  private _schemaType?: string | undefined; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string | undefined) {
    this._schemaType = value;
  }
  public resetSchemaType() {
    this._schemaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType
  }
}
export interface HealthcareFhirStoreStreamConfigsBigqueryDestination {
  /**
  * BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#dataset_uri HealthcareFhirStore#dataset_uri}
  */
  readonly datasetUri: string;
  /**
  * schema_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#schema_config HealthcareFhirStore#schema_config}
  */
  readonly schemaConfig: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
}

function healthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_uri: cdktf.stringToTerraform(struct!.datasetUri),
    schema_config: healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform(struct!.schemaConfig),
  }
}

export class HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dataset_uri - computed: false, optional: false, required: true
  private _datasetUri?: string; 
  public get datasetUri() {
    return this.getStringAttribute('dataset_uri');
  }
  public set datasetUri(value: string) {
    this._datasetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUriInput() {
    return this._datasetUri
  }

  // schema_config - computed: false, optional: false, required: true
  private _schemaConfig?: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig; 
  private __schemaConfigOutput = new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(this as any, "schema_config", true);
  public get schemaConfig() {
    return this.__schemaConfigOutput;
  }
  public putSchemaConfig(value: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig) {
    this._schemaConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConfigInput() {
    return this._schemaConfig
  }
}
export interface HealthcareFhirStoreStreamConfigs {
  /**
  * Supply a FHIR resource type (such as "Patient" or "Observation"). See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#resource_types HealthcareFhirStore#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * bigquery_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#bigquery_destination HealthcareFhirStore#bigquery_destination}
  */
  readonly bigqueryDestination: HealthcareFhirStoreStreamConfigsBigqueryDestination;
}

function healthcareFhirStoreStreamConfigsToTerraform(struct?: HealthcareFhirStoreStreamConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceTypes),
    bigquery_destination: healthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform(struct!.bigqueryDestination),
  }
}

export interface HealthcareFhirStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#create HealthcareFhirStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#delete HealthcareFhirStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html#update HealthcareFhirStore#update}
  */
  readonly update?: string;
}

function healthcareFhirStoreTimeoutsToTerraform(struct?: HealthcareFhirStoreTimeoutsOutputReference | HealthcareFhirStoreTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class HealthcareFhirStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html google_healthcare_fhir_store}
*/
export class HealthcareFhirStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_healthcare_fhir_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html google_healthcare_fhir_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareFhirStoreConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareFhirStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_fhir_store',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataset = config.dataset;
    this._disableReferentialIntegrity = config.disableReferentialIntegrity;
    this._disableResourceVersioning = config.disableResourceVersioning;
    this._enableHistoryImport = config.enableHistoryImport;
    this._enableUpdateCreate = config.enableUpdateCreate;
    this._labels = config.labels;
    this._name = config.name;
    this._version = config.version;
    this._notificationConfig = config.notificationConfig;
    this._streamConfigs = config.streamConfigs;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset
  }

  // disable_referential_integrity - computed: false, optional: true, required: false
  private _disableReferentialIntegrity?: boolean | cdktf.IResolvable | undefined; 
  public get disableReferentialIntegrity() {
    return this.getBooleanAttribute('disable_referential_integrity') as any;
  }
  public set disableReferentialIntegrity(value: boolean | cdktf.IResolvable | undefined) {
    this._disableReferentialIntegrity = value;
  }
  public resetDisableReferentialIntegrity() {
    this._disableReferentialIntegrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReferentialIntegrityInput() {
    return this._disableReferentialIntegrity
  }

  // disable_resource_versioning - computed: false, optional: true, required: false
  private _disableResourceVersioning?: boolean | cdktf.IResolvable | undefined; 
  public get disableResourceVersioning() {
    return this.getBooleanAttribute('disable_resource_versioning') as any;
  }
  public set disableResourceVersioning(value: boolean | cdktf.IResolvable | undefined) {
    this._disableResourceVersioning = value;
  }
  public resetDisableResourceVersioning() {
    this._disableResourceVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResourceVersioningInput() {
    return this._disableResourceVersioning
  }

  // enable_history_import - computed: false, optional: true, required: false
  private _enableHistoryImport?: boolean | cdktf.IResolvable | undefined; 
  public get enableHistoryImport() {
    return this.getBooleanAttribute('enable_history_import') as any;
  }
  public set enableHistoryImport(value: boolean | cdktf.IResolvable | undefined) {
    this._enableHistoryImport = value;
  }
  public resetEnableHistoryImport() {
    this._enableHistoryImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHistoryImportInput() {
    return this._enableHistoryImport
  }

  // enable_update_create - computed: false, optional: true, required: false
  private _enableUpdateCreate?: boolean | cdktf.IResolvable | undefined; 
  public get enableUpdateCreate() {
    return this.getBooleanAttribute('enable_update_create') as any;
  }
  public set enableUpdateCreate(value: boolean | cdktf.IResolvable | undefined) {
    this._enableUpdateCreate = value;
  }
  public resetEnableUpdateCreate() {
    this._enableUpdateCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpdateCreateInput() {
    return this._enableUpdateCreate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig?: HealthcareFhirStoreNotificationConfig | undefined; 
  private __notificationConfigOutput = new HealthcareFhirStoreNotificationConfigOutputReference(this as any, "notification_config", true);
  public get notificationConfig() {
    return this.__notificationConfigOutput;
  }
  public putNotificationConfig(value: HealthcareFhirStoreNotificationConfig | undefined) {
    this._notificationConfig = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig
  }

  // stream_configs - computed: false, optional: true, required: false
  private _streamConfigs?: HealthcareFhirStoreStreamConfigs[] | undefined; 
  public get streamConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stream_configs') as any;
  }
  public set streamConfigs(value: HealthcareFhirStoreStreamConfigs[] | undefined) {
    this._streamConfigs = value;
  }
  public resetStreamConfigs() {
    this._streamConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamConfigsInput() {
    return this._streamConfigs
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthcareFhirStoreTimeouts | undefined; 
  private __timeoutsOutput = new HealthcareFhirStoreTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: HealthcareFhirStoreTimeouts | undefined) {
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
      dataset: cdktf.stringToTerraform(this._dataset),
      disable_referential_integrity: cdktf.booleanToTerraform(this._disableReferentialIntegrity),
      disable_resource_versioning: cdktf.booleanToTerraform(this._disableResourceVersioning),
      enable_history_import: cdktf.booleanToTerraform(this._enableHistoryImport),
      enable_update_create: cdktf.booleanToTerraform(this._enableUpdateCreate),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
      notification_config: healthcareFhirStoreNotificationConfigToTerraform(this._notificationConfig),
      stream_configs: cdktf.listMapper(healthcareFhirStoreStreamConfigsToTerraform)(this._streamConfigs),
      timeouts: healthcareFhirStoreTimeoutsToTerraform(this._timeouts),
    };
  }
}
