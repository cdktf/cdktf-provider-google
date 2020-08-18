// https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface HealthcareFhirStoreConfig extends TerraformMetaArguments {
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
export interface HealthcareFhirStoreStreamConfigsBigqueryDestination {
  /** BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId */
  readonly datasetUri: string;
  /** schema_config block */
  readonly schemaConfig: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig[];
}
export interface HealthcareFhirStoreStreamConfigs {
  /** Supply a FHIR resource type (such as "Patient" or "Observation"). See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store. */
  readonly resourceTypes?: string[];
  /** bigquery_destination block */
  readonly bigqueryDestination: HealthcareFhirStoreStreamConfigsBigqueryDestination[];
}
export interface HealthcareFhirStoreTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class HealthcareFhirStore extends TerraformResource {

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
    return this._dataset;
  }
  public set dataset(value: string) {
    this._dataset = value;
  }

  // disable_referential_integrity - computed: false, optional: true, required: false
  private _disableReferentialIntegrity?: boolean;
  public get disableReferentialIntegrity() {
    return this._disableReferentialIntegrity;
  }
  public set disableReferentialIntegrity(value: boolean | undefined) {
    this._disableReferentialIntegrity = value;
  }

  // disable_resource_versioning - computed: false, optional: true, required: false
  private _disableResourceVersioning?: boolean;
  public get disableResourceVersioning() {
    return this._disableResourceVersioning;
  }
  public set disableResourceVersioning(value: boolean | undefined) {
    this._disableResourceVersioning = value;
  }

  // enable_history_import - computed: false, optional: true, required: false
  private _enableHistoryImport?: boolean;
  public get enableHistoryImport() {
    return this._enableHistoryImport;
  }
  public set enableHistoryImport(value: boolean | undefined) {
    this._enableHistoryImport = value;
  }

  // enable_update_create - computed: false, optional: true, required: false
  private _enableUpdateCreate?: boolean;
  public get enableUpdateCreate() {
    return this._enableUpdateCreate;
  }
  public set enableUpdateCreate(value: boolean | undefined) {
    this._enableUpdateCreate = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this._version;
  }
  public set version(value: string) {
    this._version = value;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig?: HealthcareFhirStoreNotificationConfig[];
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public set notificationConfig(value: HealthcareFhirStoreNotificationConfig[] | undefined) {
    this._notificationConfig = value;
  }

  // stream_configs - computed: false, optional: true, required: false
  private _streamConfigs?: HealthcareFhirStoreStreamConfigs[];
  public get streamConfigs() {
    return this._streamConfigs;
  }
  public set streamConfigs(value: HealthcareFhirStoreStreamConfigs[] | undefined) {
    this._streamConfigs = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthcareFhirStoreTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HealthcareFhirStoreTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      dataset: this._dataset,
      disable_referential_integrity: this._disableReferentialIntegrity,
      disable_resource_versioning: this._disableResourceVersioning,
      enable_history_import: this._enableHistoryImport,
      enable_update_create: this._enableUpdateCreate,
      labels: this._labels,
      name: this._name,
      version: this._version,
      notification_config: this._notificationConfig,
      stream_configs: this._streamConfigs,
      timeouts: this._timeouts,
    };
  }
}
