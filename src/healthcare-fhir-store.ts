// https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcareFhirStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#dataset HealthcareFhirStore#dataset}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#disable_referential_integrity HealthcareFhirStore#disable_referential_integrity}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#disable_resource_versioning HealthcareFhirStore#disable_resource_versioning}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#enable_history_import HealthcareFhirStore#enable_history_import}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#enable_update_create HealthcareFhirStore#enable_update_create}
  */
  readonly enableUpdateCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#id HealthcareFhirStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#labels HealthcareFhirStore#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#name HealthcareFhirStore#name}
  */
  readonly name: string;
  /**
  * The FHIR specification version. Possible values: ["DSTU2", "STU3", "R4"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#version HealthcareFhirStore#version}
  */
  readonly version: string;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#notification_config HealthcareFhirStore#notification_config}
  */
  readonly notificationConfig?: HealthcareFhirStoreNotificationConfig;
  /**
  * stream_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#stream_configs HealthcareFhirStore#stream_configs}
  */
  readonly streamConfigs?: HealthcareFhirStoreStreamConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#timeouts HealthcareFhirStore#timeouts}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#pubsub_topic HealthcareFhirStore#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

export function healthcareFhirStoreNotificationConfigToTerraform(struct?: HealthcareFhirStoreNotificationConfigOutputReference | HealthcareFhirStoreNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}

export class HealthcareFhirStoreNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareFhirStoreNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsubTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsubTopic = value.pubsubTopic;
    }
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
    return this._pubsubTopic;
  }
}
export interface HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig {
  /**
  * The depth for all recursive structures in the output analytics schema. For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#recursive_structure_depth HealthcareFhirStore#recursive_structure_depth}
  */
  readonly recursiveStructureDepth: number;
  /**
  * Specifies the output schema type.
 * ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
 * ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
 * LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#schema_type HealthcareFhirStore#schema_type}
  */
  readonly schemaType?: string;
}

export function healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recursive_structure_depth: cdktf.numberToTerraform(struct!.recursiveStructureDepth),
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
  }
}

export class HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recursiveStructureDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveStructureDepth = this._recursiveStructureDepth;
    }
    if (this._schemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaType = this._schemaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recursiveStructureDepth = undefined;
      this._schemaType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recursiveStructureDepth = value.recursiveStructureDepth;
      this._schemaType = value.schemaType;
    }
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
    return this._recursiveStructureDepth;
  }

  // schema_type - computed: false, optional: true, required: false
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  public resetSchemaType() {
    this._schemaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
  }
}
export interface HealthcareFhirStoreStreamConfigsBigqueryDestination {
  /**
  * BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#dataset_uri HealthcareFhirStore#dataset_uri}
  */
  readonly datasetUri: string;
  /**
  * schema_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#schema_config HealthcareFhirStore#schema_config}
  */
  readonly schemaConfig: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
}

export function healthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform(struct?: HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference | HealthcareFhirStoreStreamConfigsBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_uri: cdktf.stringToTerraform(struct!.datasetUri),
    schema_config: healthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform(struct!.schemaConfig),
  }
}

export class HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareFhirStoreStreamConfigsBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUri = this._datasetUri;
    }
    if (this._schemaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaConfig = this._schemaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreStreamConfigsBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetUri = undefined;
      this._schemaConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetUri = value.datasetUri;
      this._schemaConfig.internalValue = value.schemaConfig;
    }
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
    return this._datasetUri;
  }

  // schema_config - computed: false, optional: false, required: true
  private _schemaConfig = new HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(this, "schema_config");
  public get schemaConfig() {
    return this._schemaConfig;
  }
  public putSchemaConfig(value: HealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig) {
    this._schemaConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConfigInput() {
    return this._schemaConfig.internalValue;
  }
}
export interface HealthcareFhirStoreStreamConfigs {
  /**
  * Supply a FHIR resource type (such as "Patient" or "Observation"). See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#resource_types HealthcareFhirStore#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * bigquery_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#bigquery_destination HealthcareFhirStore#bigquery_destination}
  */
  readonly bigqueryDestination: HealthcareFhirStoreStreamConfigsBigqueryDestination;
}

export function healthcareFhirStoreStreamConfigsToTerraform(struct?: HealthcareFhirStoreStreamConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
    bigquery_destination: healthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform(struct!.bigqueryDestination),
  }
}

export class HealthcareFhirStoreStreamConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthcareFhirStoreStreamConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._bigqueryDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestination = this._bigqueryDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcareFhirStoreStreamConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypes = undefined;
      this._bigqueryDestination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypes = value.resourceTypes;
      this._bigqueryDestination.internalValue = value.bigqueryDestination;
    }
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // bigquery_destination - computed: false, optional: false, required: true
  private _bigqueryDestination = new HealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference(this, "bigquery_destination");
  public get bigqueryDestination() {
    return this._bigqueryDestination;
  }
  public putBigqueryDestination(value: HealthcareFhirStoreStreamConfigsBigqueryDestination) {
    this._bigqueryDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationInput() {
    return this._bigqueryDestination.internalValue;
  }
}

export class HealthcareFhirStoreStreamConfigsList extends cdktf.ComplexList {
  public internalValue? : HealthcareFhirStoreStreamConfigs[] | cdktf.IResolvable

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
  public get(index: number): HealthcareFhirStoreStreamConfigsOutputReference {
    return new HealthcareFhirStoreStreamConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthcareFhirStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#create HealthcareFhirStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#delete HealthcareFhirStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store#update HealthcareFhirStore#update}
  */
  readonly update?: string;
}

export function healthcareFhirStoreTimeoutsToTerraform(struct?: HealthcareFhirStoreTimeoutsOutputReference | HealthcareFhirStoreTimeouts | cdktf.IResolvable): any {
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

export class HealthcareFhirStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcareFhirStoreTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HealthcareFhirStoreTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store google_healthcare_fhir_store}
*/
export class HealthcareFhirStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_healthcare_fhir_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store google_healthcare_fhir_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcareFhirStoreConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcareFhirStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_fhir_store',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataset = config.dataset;
    this._disableReferentialIntegrity = config.disableReferentialIntegrity;
    this._disableResourceVersioning = config.disableResourceVersioning;
    this._enableHistoryImport = config.enableHistoryImport;
    this._enableUpdateCreate = config.enableUpdateCreate;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._version = config.version;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._streamConfigs.internalValue = config.streamConfigs;
    this._timeouts.internalValue = config.timeouts;
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
    return this._dataset;
  }

  // disable_referential_integrity - computed: false, optional: true, required: false
  private _disableReferentialIntegrity?: boolean | cdktf.IResolvable; 
  public get disableReferentialIntegrity() {
    return this.getBooleanAttribute('disable_referential_integrity');
  }
  public set disableReferentialIntegrity(value: boolean | cdktf.IResolvable) {
    this._disableReferentialIntegrity = value;
  }
  public resetDisableReferentialIntegrity() {
    this._disableReferentialIntegrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReferentialIntegrityInput() {
    return this._disableReferentialIntegrity;
  }

  // disable_resource_versioning - computed: false, optional: true, required: false
  private _disableResourceVersioning?: boolean | cdktf.IResolvable; 
  public get disableResourceVersioning() {
    return this.getBooleanAttribute('disable_resource_versioning');
  }
  public set disableResourceVersioning(value: boolean | cdktf.IResolvable) {
    this._disableResourceVersioning = value;
  }
  public resetDisableResourceVersioning() {
    this._disableResourceVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResourceVersioningInput() {
    return this._disableResourceVersioning;
  }

  // enable_history_import - computed: false, optional: true, required: false
  private _enableHistoryImport?: boolean | cdktf.IResolvable; 
  public get enableHistoryImport() {
    return this.getBooleanAttribute('enable_history_import');
  }
  public set enableHistoryImport(value: boolean | cdktf.IResolvable) {
    this._enableHistoryImport = value;
  }
  public resetEnableHistoryImport() {
    this._enableHistoryImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHistoryImportInput() {
    return this._enableHistoryImport;
  }

  // enable_update_create - computed: false, optional: true, required: false
  private _enableUpdateCreate?: boolean | cdktf.IResolvable; 
  public get enableUpdateCreate() {
    return this.getBooleanAttribute('enable_update_create');
  }
  public set enableUpdateCreate(value: boolean | cdktf.IResolvable) {
    this._enableUpdateCreate = value;
  }
  public resetEnableUpdateCreate() {
    this._enableUpdateCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpdateCreateInput() {
    return this._enableUpdateCreate;
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
    return this._name;
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
    return this._version;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new HealthcareFhirStoreNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: HealthcareFhirStoreNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // stream_configs - computed: false, optional: true, required: false
  private _streamConfigs = new HealthcareFhirStoreStreamConfigsList(this, "stream_configs", false);
  public get streamConfigs() {
    return this._streamConfigs;
  }
  public putStreamConfigs(value: HealthcareFhirStoreStreamConfigs[] | cdktf.IResolvable) {
    this._streamConfigs.internalValue = value;
  }
  public resetStreamConfigs() {
    this._streamConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamConfigsInput() {
    return this._streamConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HealthcareFhirStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HealthcareFhirStoreTimeouts) {
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
      dataset: cdktf.stringToTerraform(this._dataset),
      disable_referential_integrity: cdktf.booleanToTerraform(this._disableReferentialIntegrity),
      disable_resource_versioning: cdktf.booleanToTerraform(this._disableResourceVersioning),
      enable_history_import: cdktf.booleanToTerraform(this._enableHistoryImport),
      enable_update_create: cdktf.booleanToTerraform(this._enableUpdateCreate),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
      notification_config: healthcareFhirStoreNotificationConfigToTerraform(this._notificationConfig.internalValue),
      stream_configs: cdktf.listMapper(healthcareFhirStoreStreamConfigsToTerraform, true)(this._streamConfigs.internalValue),
      timeouts: healthcareFhirStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
