// https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareFhirStoreConfig extends cdktf.TerraformMetaArguments {
  /** Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}' */
  readonly dataset: string;
  /** Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) ** */
  readonly disableReferentialIntegrity?: boolean;
  /** Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) ** */
  readonly disableResourceVersioning?: boolean;
  /** Whether to allow the bulk import API to accept history bundles and directly insert historical resource
versions into the FHIR store. Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store ** */
  readonly enableHistoryImport?: boolean;
  /** Whether this FHIR store has the updateCreate capability. This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications. */
  readonly enableUpdateCreate?: boolean;
  /** User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. */
  readonly labels?: { [key: string]: string };
  /** The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) ** */
  readonly name: string;
  /** The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"] */
  readonly version: string;
  /** notification_config block */
  readonly notificationConfig?: HealthcareFhirStoreNotificationConfig[];
  /** stream_configs block */
  readonly streamConfigs?: HealthcareFhirStoreStreamConfigs[];
  /** timeouts block */
  readonly timeouts?: HealthcareFhirStoreTimeouts;
}
export interface HealthcareFhirStoreNotificationConfig {
  /** The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. cloud-healthcare@system.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail. */
  readonly pubsubTopic: string;
}

function healthcareFhirStoreNotificationConfigToTerraform(struct?: HealthcareFhirStoreNotificationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}

export interface HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig {
  /** The depth for all recursive structures in the output analytics schema. For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5. */
  readonly recursiveStructureDepth: number;
  /** Specifies the output schema type. Only ANALYTICS is supported at this time.
 * ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md. Default value: "ANALYTICS" Possible values: ["ANALYTICS"] */
  readonly schemaType?: string;
}

function healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    recursive_structure_depth: cdktf.numberToTerraform(struct!.recursiveStructureDepth),
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
  }
}

export interface HealthcareFhirStoreStreamConfigsBigqueryDestination {
  /** BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId */
  readonly datasetUri: string;
  /** schema_config block */
  readonly schemaConfig: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig[];
}

function healthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_uri: cdktf.stringToTerraform(struct!.datasetUri),
    schema_config: cdktf.listMapper(healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform)(struct!.schemaConfig),
  }
}

export interface HealthcareFhirStoreStreamConfigs {
  /** Supply a FHIR resource type (such as "Patient" or "Observation"). See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store. */
  readonly resourceTypes?: string[];
  /** bigquery_destination block */
  readonly bigqueryDestination: HealthcareFhirStoreStreamConfigsBigqueryDestination[];
}

function healthcareFhirStoreStreamConfigsToTerraform(struct?: HealthcareFhirStoreStreamConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceTypes),
    bigquery_destination: cdktf.listMapper(healthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform)(struct!.bigqueryDestination),
  }
}

export interface HealthcareFhirStoreTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function healthcareFhirStoreTimeoutsToTerraform(struct?: HealthcareFhirStoreTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class HealthcareFhirStore extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _dataset: string;
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
  private _disableReferentialIntegrity?: boolean;
  public get disableReferentialIntegrity() {
    return this.getBooleanAttribute('disable_referential_integrity');
  }
  public set disableReferentialIntegrity(value: boolean ) {
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
  private _disableResourceVersioning?: boolean;
  public get disableResourceVersioning() {
    return this.getBooleanAttribute('disable_resource_versioning');
  }
  public set disableResourceVersioning(value: boolean ) {
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
  private _enableHistoryImport?: boolean;
  public get enableHistoryImport() {
    return this.getBooleanAttribute('enable_history_import');
  }
  public set enableHistoryImport(value: boolean ) {
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
  private _enableUpdateCreate?: boolean;
  public get enableUpdateCreate() {
    return this.getBooleanAttribute('enable_update_create');
  }
  public set enableUpdateCreate(value: boolean ) {
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
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
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
  private _name: string;
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
  private _version: string;
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
  private _notificationConfig?: HealthcareFhirStoreNotificationConfig[];
  public get notificationConfig() {
    return this.interpolationForAttribute('notification_config') as any;
  }
  public set notificationConfig(value: HealthcareFhirStoreNotificationConfig[] ) {
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
  private _streamConfigs?: HealthcareFhirStoreStreamConfigs[];
  public get streamConfigs() {
    return this.interpolationForAttribute('stream_configs') as any;
  }
  public set streamConfigs(value: HealthcareFhirStoreStreamConfigs[] ) {
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
  private _timeouts?: HealthcareFhirStoreTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: HealthcareFhirStoreTimeouts ) {
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
      notification_config: cdktf.listMapper(healthcareFhirStoreNotificationConfigToTerraform)(this._notificationConfig),
      stream_configs: cdktf.listMapper(healthcareFhirStoreStreamConfigsToTerraform)(this._streamConfigs),
      timeouts: healthcareFhirStoreTimeoutsToTerraform(this._timeouts),
    };
  }
}
