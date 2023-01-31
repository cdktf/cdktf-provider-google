// https://www.terraform.io/docs/providers/google/d/pubsub_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGooglePubsubSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/pubsub_subscription#id DataGooglePubsubSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the subscription.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/pubsub_subscription#name DataGooglePubsubSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/pubsub_subscription#project DataGooglePubsubSubscription#project}
  */
  readonly project?: string;
}
export interface DataGooglePubsubSubscriptionBigqueryConfig {
}

export function dataGooglePubsubSubscriptionBigqueryConfigToTerraform(struct?: DataGooglePubsubSubscriptionBigqueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePubsubSubscriptionBigqueryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubSubscriptionBigqueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubSubscriptionBigqueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drop_unknown_fields - computed: true, optional: false, required: false
  public get dropUnknownFields() {
    return this.getBooleanAttribute('drop_unknown_fields');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // use_topic_schema - computed: true, optional: false, required: false
  public get useTopicSchema() {
    return this.getBooleanAttribute('use_topic_schema');
  }

  // write_metadata - computed: true, optional: false, required: false
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
}

export class DataGooglePubsubSubscriptionBigqueryConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubSubscriptionBigqueryConfigOutputReference {
    return new DataGooglePubsubSubscriptionBigqueryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubSubscriptionDeadLetterPolicy {
}

export function dataGooglePubsubSubscriptionDeadLetterPolicyToTerraform(struct?: DataGooglePubsubSubscriptionDeadLetterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubSubscriptionDeadLetterPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubSubscriptionDeadLetterPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dead_letter_topic - computed: true, optional: false, required: false
  public get deadLetterTopic() {
    return this.getStringAttribute('dead_letter_topic');
  }

  // max_delivery_attempts - computed: true, optional: false, required: false
  public get maxDeliveryAttempts() {
    return this.getNumberAttribute('max_delivery_attempts');
  }
}

export class DataGooglePubsubSubscriptionDeadLetterPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference {
    return new DataGooglePubsubSubscriptionDeadLetterPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubSubscriptionExpirationPolicy {
}

export function dataGooglePubsubSubscriptionExpirationPolicyToTerraform(struct?: DataGooglePubsubSubscriptionExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePubsubSubscriptionExpirationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubSubscriptionExpirationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubSubscriptionExpirationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
}

export class DataGooglePubsubSubscriptionExpirationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubSubscriptionExpirationPolicyOutputReference {
    return new DataGooglePubsubSubscriptionExpirationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubSubscriptionPushConfigOidcToken {
}

export function dataGooglePubsubSubscriptionPushConfigOidcTokenToTerraform(struct?: DataGooglePubsubSubscriptionPushConfigOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubSubscriptionPushConfigOidcToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubSubscriptionPushConfigOidcToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
}

export class DataGooglePubsubSubscriptionPushConfigOidcTokenList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference {
    return new DataGooglePubsubSubscriptionPushConfigOidcTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubSubscriptionPushConfig {
}

export function dataGooglePubsubSubscriptionPushConfigToTerraform(struct?: DataGooglePubsubSubscriptionPushConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePubsubSubscriptionPushConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubSubscriptionPushConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubSubscriptionPushConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktf.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // oidc_token - computed: true, optional: false, required: false
  private _oidcToken = new DataGooglePubsubSubscriptionPushConfigOidcTokenList(this, "oidc_token", false);
  public get oidcToken() {
    return this._oidcToken;
  }

  // push_endpoint - computed: true, optional: false, required: false
  public get pushEndpoint() {
    return this.getStringAttribute('push_endpoint');
  }
}

export class DataGooglePubsubSubscriptionPushConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubSubscriptionPushConfigOutputReference {
    return new DataGooglePubsubSubscriptionPushConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubSubscriptionRetryPolicy {
}

export function dataGooglePubsubSubscriptionRetryPolicyToTerraform(struct?: DataGooglePubsubSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePubsubSubscriptionRetryPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubSubscriptionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubSubscriptionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maximum_backoff - computed: true, optional: false, required: false
  public get maximumBackoff() {
    return this.getStringAttribute('maximum_backoff');
  }

  // minimum_backoff - computed: true, optional: false, required: false
  public get minimumBackoff() {
    return this.getStringAttribute('minimum_backoff');
  }
}

export class DataGooglePubsubSubscriptionRetryPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubSubscriptionRetryPolicyOutputReference {
    return new DataGooglePubsubSubscriptionRetryPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/pubsub_subscription google_pubsub_subscription}
*/
export class DataGooglePubsubSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/pubsub_subscription google_pubsub_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGooglePubsubSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataGooglePubsubSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_subscription',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.51.0',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_deadline_seconds - computed: true, optional: false, required: false
  public get ackDeadlineSeconds() {
    return this.getNumberAttribute('ack_deadline_seconds');
  }

  // bigquery_config - computed: true, optional: false, required: false
  private _bigqueryConfig = new DataGooglePubsubSubscriptionBigqueryConfigList(this, "bigquery_config", false);
  public get bigqueryConfig() {
    return this._bigqueryConfig;
  }

  // dead_letter_policy - computed: true, optional: false, required: false
  private _deadLetterPolicy = new DataGooglePubsubSubscriptionDeadLetterPolicyList(this, "dead_letter_policy", false);
  public get deadLetterPolicy() {
    return this._deadLetterPolicy;
  }

  // enable_exactly_once_delivery - computed: true, optional: false, required: false
  public get enableExactlyOnceDelivery() {
    return this.getBooleanAttribute('enable_exactly_once_delivery');
  }

  // enable_message_ordering - computed: true, optional: false, required: false
  public get enableMessageOrdering() {
    return this.getBooleanAttribute('enable_message_ordering');
  }

  // expiration_policy - computed: true, optional: false, required: false
  private _expirationPolicy = new DataGooglePubsubSubscriptionExpirationPolicyList(this, "expiration_policy", false);
  public get expirationPolicy() {
    return this._expirationPolicy;
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // message_retention_duration - computed: true, optional: false, required: false
  public get messageRetentionDuration() {
    return this.getStringAttribute('message_retention_duration');
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

  // project - computed: false, optional: true, required: false
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

  // push_config - computed: true, optional: false, required: false
  private _pushConfig = new DataGooglePubsubSubscriptionPushConfigList(this, "push_config", false);
  public get pushConfig() {
    return this._pushConfig;
  }

  // retain_acked_messages - computed: true, optional: false, required: false
  public get retainAckedMessages() {
    return this.getBooleanAttribute('retain_acked_messages');
  }

  // retry_policy - computed: true, optional: false, required: false
  private _retryPolicy = new DataGooglePubsubSubscriptionRetryPolicyList(this, "retry_policy", false);
  public get retryPolicy() {
    return this._retryPolicy;
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
