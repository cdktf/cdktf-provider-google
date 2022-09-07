// https://www.terraform.io/docs/providers/google/r/pubsub_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * This value is the maximum time after a subscriber receives a message
before the subscriber should acknowledge the message. After message
delivery but before the ack deadline expires and before the message is
acknowledged, it is an outstanding message and will not be delivered
again during that time (on a best-effort basis).

For pull subscriptions, this value is used as the initial value for
the ack deadline. To override this value for a given message, call
subscriptions.modifyAckDeadline with the corresponding ackId if using
pull. The minimum custom deadline you can specify is 10 seconds. The
maximum custom deadline you can specify is 600 seconds (10 minutes).
If this parameter is 0, a default value of 10 seconds is used.

For push delivery, this value is also used to set the request timeout
for the call to the push endpoint.

If the subscriber never acknowledges the message, the Pub/Sub system
will eventually redeliver the message.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#ack_deadline_seconds PubsubSubscription#ack_deadline_seconds}
  */
  readonly ackDeadlineSeconds?: number;
  /**
  * If 'true', Pub/Sub provides the following guarantees for the delivery
of a message with a given value of messageId on this Subscriptions':

- The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

- An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#enable_exactly_once_delivery PubsubSubscription#enable_exactly_once_delivery}
  */
  readonly enableExactlyOnceDelivery?: boolean | cdktf.IResolvable;
  /**
  * If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to
the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they
may be delivered in any order.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#enable_message_ordering PubsubSubscription#enable_message_ordering}
  */
  readonly enableMessageOrdering?: boolean | cdktf.IResolvable;
  /**
  * The subscription only delivers the messages that match the filter. 
Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription, 
you can't modify the filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#filter PubsubSubscription#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#id PubsubSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to this Subscription.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#labels PubsubSubscription#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * How long to retain unacknowledged messages in the subscription's
backlog, from the moment a message is published. If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 7 days ('"604800s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#message_retention_duration PubsubSubscription#message_retention_duration}
  */
  readonly messageRetentionDuration?: string;
  /**
  * Name of the subscription.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#name PubsubSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#project PubsubSubscription#project}
  */
  readonly project?: string;
  /**
  * Indicates whether to retain acknowledged messages. If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#retain_acked_messages PubsubSubscription#retain_acked_messages}
  */
  readonly retainAckedMessages?: boolean | cdktf.IResolvable;
  /**
  * A reference to a Topic resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#topic PubsubSubscription#topic}
  */
  readonly topic: string;
  /**
  * bigquery_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#bigquery_config PubsubSubscription#bigquery_config}
  */
  readonly bigqueryConfig?: PubsubSubscriptionBigqueryConfig;
  /**
  * dead_letter_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#dead_letter_policy PubsubSubscription#dead_letter_policy}
  */
  readonly deadLetterPolicy?: PubsubSubscriptionDeadLetterPolicy;
  /**
  * expiration_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#expiration_policy PubsubSubscription#expiration_policy}
  */
  readonly expirationPolicy?: PubsubSubscriptionExpirationPolicy;
  /**
  * push_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#push_config PubsubSubscription#push_config}
  */
  readonly pushConfig?: PubsubSubscriptionPushConfig;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#retry_policy PubsubSubscription#retry_policy}
  */
  readonly retryPolicy?: PubsubSubscriptionRetryPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#timeouts PubsubSubscription#timeouts}
  */
  readonly timeouts?: PubsubSubscriptionTimeouts;
}
export interface PubsubSubscriptionBigqueryConfig {
  /**
  * When true and useTopicSchema is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.
Otherwise, the schemas must be kept in sync and any messages with extra fields are not written and remain in the subscription's backlog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#drop_unknown_fields PubsubSubscription#drop_unknown_fields}
  */
  readonly dropUnknownFields?: boolean | cdktf.IResolvable;
  /**
  * The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#table PubsubSubscription#table}
  */
  readonly table: string;
  /**
  * When true, use the topic's schema as the columns to write to in BigQuery, if it exists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#use_topic_schema PubsubSubscription#use_topic_schema}
  */
  readonly useTopicSchema?: boolean | cdktf.IResolvable;
  /**
  * When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.
The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}
  */
  readonly writeMetadata?: boolean | cdktf.IResolvable;
}

export function pubsubSubscriptionBigqueryConfigToTerraform(struct?: PubsubSubscriptionBigqueryConfigOutputReference | PubsubSubscriptionBigqueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_unknown_fields: cdktf.booleanToTerraform(struct!.dropUnknownFields),
    table: cdktf.stringToTerraform(struct!.table),
    use_topic_schema: cdktf.booleanToTerraform(struct!.useTopicSchema),
    write_metadata: cdktf.booleanToTerraform(struct!.writeMetadata),
  }
}

export class PubsubSubscriptionBigqueryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionBigqueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropUnknownFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropUnknownFields = this._dropUnknownFields;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._useTopicSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTopicSchema = this._useTopicSchema;
    }
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionBigqueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropUnknownFields = undefined;
      this._table = undefined;
      this._useTopicSchema = undefined;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropUnknownFields = value.dropUnknownFields;
      this._table = value.table;
      this._useTopicSchema = value.useTopicSchema;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // drop_unknown_fields - computed: false, optional: true, required: false
  private _dropUnknownFields?: boolean | cdktf.IResolvable; 
  public get dropUnknownFields() {
    return this.getBooleanAttribute('drop_unknown_fields');
  }
  public set dropUnknownFields(value: boolean | cdktf.IResolvable) {
    this._dropUnknownFields = value;
  }
  public resetDropUnknownFields() {
    this._dropUnknownFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUnknownFieldsInput() {
    return this._dropUnknownFields;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // use_topic_schema - computed: false, optional: true, required: false
  private _useTopicSchema?: boolean | cdktf.IResolvable; 
  public get useTopicSchema() {
    return this.getBooleanAttribute('use_topic_schema');
  }
  public set useTopicSchema(value: boolean | cdktf.IResolvable) {
    this._useTopicSchema = value;
  }
  public resetUseTopicSchema() {
    this._useTopicSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTopicSchemaInput() {
    return this._useTopicSchema;
  }

  // write_metadata - computed: false, optional: true, required: false
  private _writeMetadata?: boolean | cdktf.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktf.IResolvable) {
    this._writeMetadata = value;
  }
  public resetWriteMetadata() {
    this._writeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface PubsubSubscriptionDeadLetterPolicy {
  /**
  * The name of the topic to which dead letter messages should be published.
Format is 'projects/{project}/topics/{topic}'.

The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e., 
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.

The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#dead_letter_topic PubsubSubscription#dead_letter_topic}
  */
  readonly deadLetterTopic?: string;
  /**
  * The maximum number of delivery attempts for any message. The value must be
between 5 and 100.

The number of delivery attempts is defined as 1 + (the sum of number of 
NACKs and number of times the acknowledgement deadline has been exceeded for the message).

A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.

This field will be honored on a best effort basis.

If this parameter is 0, a default value of 5 is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#max_delivery_attempts PubsubSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts?: number;
}

export function pubsubSubscriptionDeadLetterPolicyToTerraform(struct?: PubsubSubscriptionDeadLetterPolicyOutputReference | PubsubSubscriptionDeadLetterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_letter_topic: cdktf.stringToTerraform(struct!.deadLetterTopic),
    max_delivery_attempts: cdktf.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}

export class PubsubSubscriptionDeadLetterPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionDeadLetterPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadLetterTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterTopic = this._deadLetterTopic;
    }
    if (this._maxDeliveryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryAttempts = this._maxDeliveryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionDeadLetterPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deadLetterTopic = undefined;
      this._maxDeliveryAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deadLetterTopic = value.deadLetterTopic;
      this._maxDeliveryAttempts = value.maxDeliveryAttempts;
    }
  }

  // dead_letter_topic - computed: false, optional: true, required: false
  private _deadLetterTopic?: string; 
  public get deadLetterTopic() {
    return this.getStringAttribute('dead_letter_topic');
  }
  public set deadLetterTopic(value: string) {
    this._deadLetterTopic = value;
  }
  public resetDeadLetterTopic() {
    this._deadLetterTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterTopicInput() {
    return this._deadLetterTopic;
  }

  // max_delivery_attempts - computed: false, optional: true, required: false
  private _maxDeliveryAttempts?: number; 
  public get maxDeliveryAttempts() {
    return this.getNumberAttribute('max_delivery_attempts');
  }
  public set maxDeliveryAttempts(value: number) {
    this._maxDeliveryAttempts = value;
  }
  public resetMaxDeliveryAttempts() {
    this._maxDeliveryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryAttemptsInput() {
    return this._maxDeliveryAttempts;
  }
}
export interface PubsubSubscriptionExpirationPolicy {
  /**
  * Specifies the "time-to-live" duration for an associated resource. The
resource expires if it is not active for a period of ttl.
If ttl is not set, the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#ttl PubsubSubscription#ttl}
  */
  readonly ttl: string;
}

export function pubsubSubscriptionExpirationPolicyToTerraform(struct?: PubsubSubscriptionExpirationPolicyOutputReference | PubsubSubscriptionExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}

export class PubsubSubscriptionExpirationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionExpirationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionExpirationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ttl = value.ttl;
    }
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface PubsubSubscriptionPushConfigOidcToken {
  /**
  * Audience to be used when generating OIDC token. The audience claim
identifies the recipients that the JWT is intended for. The audience
value is a single case-sensitive string. Having multiple values (array)
for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
Note: if not specified, the Push endpoint URL will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#audience PubsubSubscription#audience}
  */
  readonly audience?: string;
  /**
  * Service account email to be used for generating the OIDC token.
The caller (for subscriptions.create, subscriptions.patch, and
subscriptions.modifyPushConfig RPCs) must have the
iam.serviceAccounts.actAs permission for the service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function pubsubSubscriptionPushConfigOidcTokenToTerraform(struct?: PubsubSubscriptionPushConfigOidcTokenOutputReference | PubsubSubscriptionPushConfigOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}

export class PubsubSubscriptionPushConfigOidcTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionPushConfigOidcToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionPushConfigOidcToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._serviceAccountEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface PubsubSubscriptionPushConfig {
  /**
  * Endpoint configuration attributes.

Every endpoint has a set of API supported attributes that can
be used to control different aspects of the message delivery.

The currently supported attribute is x-goog-version, which you
can use to change the format of the pushed message. This
attribute indicates the version of the data expected by
the endpoint. This controls the shape of the pushed message
(i.e., its fields and metadata). The endpoint version is
based on the version of the Pub/Sub API.

If not present during the subscriptions.create call,
it will default to the version of the API used to make
such call. If not present during a subscriptions.modifyPushConfig
call, its value will not be changed. subscriptions.get
calls will always return a valid version, even if the
subscription was created without this attribute.

The possible values for this attribute are:

- v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
- v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#attributes PubsubSubscription#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A URL locating the endpoint to which messages should be pushed.
For example, a Webhook endpoint might use
"https://example.com/push".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#push_endpoint PubsubSubscription#push_endpoint}
  */
  readonly pushEndpoint: string;
  /**
  * oidc_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#oidc_token PubsubSubscription#oidc_token}
  */
  readonly oidcToken?: PubsubSubscriptionPushConfigOidcToken;
}

export function pubsubSubscriptionPushConfigToTerraform(struct?: PubsubSubscriptionPushConfigOutputReference | PubsubSubscriptionPushConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    push_endpoint: cdktf.stringToTerraform(struct!.pushEndpoint),
    oidc_token: pubsubSubscriptionPushConfigOidcTokenToTerraform(struct!.oidcToken),
  }
}

export class PubsubSubscriptionPushConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionPushConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._pushEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushEndpoint = this._pushEndpoint;
    }
    if (this._oidcToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcToken = this._oidcToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionPushConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._pushEndpoint = undefined;
      this._oidcToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._pushEndpoint = value.pushEndpoint;
      this._oidcToken.internalValue = value.oidcToken;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // push_endpoint - computed: false, optional: false, required: true
  private _pushEndpoint?: string; 
  public get pushEndpoint() {
    return this.getStringAttribute('push_endpoint');
  }
  public set pushEndpoint(value: string) {
    this._pushEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEndpointInput() {
    return this._pushEndpoint;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken = new PubsubSubscriptionPushConfigOidcTokenOutputReference(this, "oidc_token");
  public get oidcToken() {
    return this._oidcToken;
  }
  public putOidcToken(value: PubsubSubscriptionPushConfigOidcToken) {
    this._oidcToken.internalValue = value;
  }
  public resetOidcToken() {
    this._oidcToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken.internalValue;
  }
}
export interface PubsubSubscriptionRetryPolicy {
  /**
  * The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds. 
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#maximum_backoff PubsubSubscription#maximum_backoff}
  */
  readonly maximumBackoff?: string;
  /**
  * The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#minimum_backoff PubsubSubscription#minimum_backoff}
  */
  readonly minimumBackoff?: string;
}

export function pubsubSubscriptionRetryPolicyToTerraform(struct?: PubsubSubscriptionRetryPolicyOutputReference | PubsubSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_backoff: cdktf.stringToTerraform(struct!.maximumBackoff),
    minimum_backoff: cdktf.stringToTerraform(struct!.minimumBackoff),
  }
}

export class PubsubSubscriptionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBackoff = this._maximumBackoff;
    }
    if (this._minimumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBackoff = this._minimumBackoff;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubSubscriptionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumBackoff = undefined;
      this._minimumBackoff = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumBackoff = value.maximumBackoff;
      this._minimumBackoff = value.minimumBackoff;
    }
  }

  // maximum_backoff - computed: true, optional: true, required: false
  private _maximumBackoff?: string; 
  public get maximumBackoff() {
    return this.getStringAttribute('maximum_backoff');
  }
  public set maximumBackoff(value: string) {
    this._maximumBackoff = value;
  }
  public resetMaximumBackoff() {
    this._maximumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBackoffInput() {
    return this._maximumBackoff;
  }

  // minimum_backoff - computed: true, optional: true, required: false
  private _minimumBackoff?: string; 
  public get minimumBackoff() {
    return this.getStringAttribute('minimum_backoff');
  }
  public set minimumBackoff(value: string) {
    this._minimumBackoff = value;
  }
  public resetMinimumBackoff() {
    this._minimumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBackoffInput() {
    return this._minimumBackoff;
  }
}
export interface PubsubSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#create PubsubSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#delete PubsubSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription#update PubsubSubscription#update}
  */
  readonly update?: string;
}

export function pubsubSubscriptionTimeoutsToTerraform(struct?: PubsubSubscriptionTimeoutsOutputReference | PubsubSubscriptionTimeouts | cdktf.IResolvable): any {
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

export class PubsubSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubSubscriptionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PubsubSubscriptionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription google_pubsub_subscription}
*/
export class PubsubSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/pubsub_subscription google_pubsub_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PubsubSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: PubsubSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_subscription',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._ackDeadlineSeconds = config.ackDeadlineSeconds;
    this._enableExactlyOnceDelivery = config.enableExactlyOnceDelivery;
    this._enableMessageOrdering = config.enableMessageOrdering;
    this._filter = config.filter;
    this._id = config.id;
    this._labels = config.labels;
    this._messageRetentionDuration = config.messageRetentionDuration;
    this._name = config.name;
    this._project = config.project;
    this._retainAckedMessages = config.retainAckedMessages;
    this._topic = config.topic;
    this._bigqueryConfig.internalValue = config.bigqueryConfig;
    this._deadLetterPolicy.internalValue = config.deadLetterPolicy;
    this._expirationPolicy.internalValue = config.expirationPolicy;
    this._pushConfig.internalValue = config.pushConfig;
    this._retryPolicy.internalValue = config.retryPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_deadline_seconds - computed: true, optional: true, required: false
  private _ackDeadlineSeconds?: number; 
  public get ackDeadlineSeconds() {
    return this.getNumberAttribute('ack_deadline_seconds');
  }
  public set ackDeadlineSeconds(value: number) {
    this._ackDeadlineSeconds = value;
  }
  public resetAckDeadlineSeconds() {
    this._ackDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackDeadlineSecondsInput() {
    return this._ackDeadlineSeconds;
  }

  // enable_exactly_once_delivery - computed: false, optional: true, required: false
  private _enableExactlyOnceDelivery?: boolean | cdktf.IResolvable; 
  public get enableExactlyOnceDelivery() {
    return this.getBooleanAttribute('enable_exactly_once_delivery');
  }
  public set enableExactlyOnceDelivery(value: boolean | cdktf.IResolvable) {
    this._enableExactlyOnceDelivery = value;
  }
  public resetEnableExactlyOnceDelivery() {
    this._enableExactlyOnceDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExactlyOnceDeliveryInput() {
    return this._enableExactlyOnceDelivery;
  }

  // enable_message_ordering - computed: false, optional: true, required: false
  private _enableMessageOrdering?: boolean | cdktf.IResolvable; 
  public get enableMessageOrdering() {
    return this.getBooleanAttribute('enable_message_ordering');
  }
  public set enableMessageOrdering(value: boolean | cdktf.IResolvable) {
    this._enableMessageOrdering = value;
  }
  public resetEnableMessageOrdering() {
    this._enableMessageOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMessageOrderingInput() {
    return this._enableMessageOrdering;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // message_retention_duration - computed: false, optional: true, required: false
  private _messageRetentionDuration?: string; 
  public get messageRetentionDuration() {
    return this.getStringAttribute('message_retention_duration');
  }
  public set messageRetentionDuration(value: string) {
    this._messageRetentionDuration = value;
  }
  public resetMessageRetentionDuration() {
    this._messageRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionDurationInput() {
    return this._messageRetentionDuration;
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

  // retain_acked_messages - computed: false, optional: true, required: false
  private _retainAckedMessages?: boolean | cdktf.IResolvable; 
  public get retainAckedMessages() {
    return this.getBooleanAttribute('retain_acked_messages');
  }
  public set retainAckedMessages(value: boolean | cdktf.IResolvable) {
    this._retainAckedMessages = value;
  }
  public resetRetainAckedMessages() {
    this._retainAckedMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAckedMessagesInput() {
    return this._retainAckedMessages;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // bigquery_config - computed: false, optional: true, required: false
  private _bigqueryConfig = new PubsubSubscriptionBigqueryConfigOutputReference(this, "bigquery_config");
  public get bigqueryConfig() {
    return this._bigqueryConfig;
  }
  public putBigqueryConfig(value: PubsubSubscriptionBigqueryConfig) {
    this._bigqueryConfig.internalValue = value;
  }
  public resetBigqueryConfig() {
    this._bigqueryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryConfigInput() {
    return this._bigqueryConfig.internalValue;
  }

  // dead_letter_policy - computed: false, optional: true, required: false
  private _deadLetterPolicy = new PubsubSubscriptionDeadLetterPolicyOutputReference(this, "dead_letter_policy");
  public get deadLetterPolicy() {
    return this._deadLetterPolicy;
  }
  public putDeadLetterPolicy(value: PubsubSubscriptionDeadLetterPolicy) {
    this._deadLetterPolicy.internalValue = value;
  }
  public resetDeadLetterPolicy() {
    this._deadLetterPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterPolicyInput() {
    return this._deadLetterPolicy.internalValue;
  }

  // expiration_policy - computed: false, optional: true, required: false
  private _expirationPolicy = new PubsubSubscriptionExpirationPolicyOutputReference(this, "expiration_policy");
  public get expirationPolicy() {
    return this._expirationPolicy;
  }
  public putExpirationPolicy(value: PubsubSubscriptionExpirationPolicy) {
    this._expirationPolicy.internalValue = value;
  }
  public resetExpirationPolicy() {
    this._expirationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPolicyInput() {
    return this._expirationPolicy.internalValue;
  }

  // push_config - computed: false, optional: true, required: false
  private _pushConfig = new PubsubSubscriptionPushConfigOutputReference(this, "push_config");
  public get pushConfig() {
    return this._pushConfig;
  }
  public putPushConfig(value: PubsubSubscriptionPushConfig) {
    this._pushConfig.internalValue = value;
  }
  public resetPushConfig() {
    this._pushConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushConfigInput() {
    return this._pushConfig.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new PubsubSubscriptionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: PubsubSubscriptionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PubsubSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PubsubSubscriptionTimeouts) {
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
      ack_deadline_seconds: cdktf.numberToTerraform(this._ackDeadlineSeconds),
      enable_exactly_once_delivery: cdktf.booleanToTerraform(this._enableExactlyOnceDelivery),
      enable_message_ordering: cdktf.booleanToTerraform(this._enableMessageOrdering),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      message_retention_duration: cdktf.stringToTerraform(this._messageRetentionDuration),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      retain_acked_messages: cdktf.booleanToTerraform(this._retainAckedMessages),
      topic: cdktf.stringToTerraform(this._topic),
      bigquery_config: pubsubSubscriptionBigqueryConfigToTerraform(this._bigqueryConfig.internalValue),
      dead_letter_policy: pubsubSubscriptionDeadLetterPolicyToTerraform(this._deadLetterPolicy.internalValue),
      expiration_policy: pubsubSubscriptionExpirationPolicyToTerraform(this._expirationPolicy.internalValue),
      push_config: pubsubSubscriptionPushConfigToTerraform(this._pushConfig.internalValue),
      retry_policy: pubsubSubscriptionRetryPolicyToTerraform(this._retryPolicy.internalValue),
      timeouts: pubsubSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
