// https://www.terraform.io/docs/providers/google/r/pubsub_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /** This value is the maximum time after a subscriber receives a message
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
will eventually redeliver the message. */
  readonly ackDeadlineSeconds?: number;
  /** If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to
the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they
may be delivered in any order. */
  readonly enableMessageOrdering?: boolean;
  /** The subscription only delivers the messages that match the filter. 
Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription, 
you can't modify the filter. */
  readonly filter?: string;
  /** A set of key/value label pairs to assign to this Subscription. */
  readonly labels?: { [key: string]: string };
  /** How long to retain unacknowledged messages in the subscription's
backlog, from the moment a message is published. If
retainAckedMessages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 7 days ('"604800s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'. */
  readonly messageRetentionDuration?: string;
  /** Name of the subscription. */
  readonly name: string;
  readonly project?: string;
  /** Indicates whether to retain acknowledged messages. If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window. */
  readonly retainAckedMessages?: boolean;
  /** A reference to a Topic resource. */
  readonly topic: string;
  /** dead_letter_policy block */
  readonly deadLetterPolicy?: PubsubSubscriptionDeadLetterPolicy[];
  /** expiration_policy block */
  readonly expirationPolicy?: PubsubSubscriptionExpirationPolicy[];
  /** push_config block */
  readonly pushConfig?: PubsubSubscriptionPushConfig[];
  /** retry_policy block */
  readonly retryPolicy?: PubsubSubscriptionRetryPolicy[];
  /** timeouts block */
  readonly timeouts?: PubsubSubscriptionTimeouts;
}
export interface PubsubSubscriptionDeadLetterPolicy {
  /** The name of the topic to which dead letter messages should be published.
Format is 'projects/{project}/topics/{topic}'.

The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e., 
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.

The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost. */
  readonly deadLetterTopic?: string;
  /** The maximum number of delivery attempts for any message. The value must be
between 5 and 100.

The number of delivery attempts is defined as 1 + (the sum of number of 
NACKs and number of times the acknowledgement deadline has been exceeded for the message).

A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.

This field will be honored on a best effort basis.

If this parameter is 0, a default value of 5 is used. */
  readonly maxDeliveryAttempts?: number;
}

function pubsubSubscriptionDeadLetterPolicyToTerraform(struct?: PubsubSubscriptionDeadLetterPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dead_letter_topic: cdktf.stringToTerraform(struct!.deadLetterTopic),
    max_delivery_attempts: cdktf.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}

export interface PubsubSubscriptionExpirationPolicy {
  /** Specifies the "time-to-live" duration for an associated resource. The
resource expires if it is not active for a period of ttl.
If ttl is not set, the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s". */
  readonly ttl: string;
}

function pubsubSubscriptionExpirationPolicyToTerraform(struct?: PubsubSubscriptionExpirationPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}

export interface PubsubSubscriptionPushConfigOidcToken {
  /** Audience to be used when generating OIDC token. The audience claim
identifies the recipients that the JWT is intended for. The audience
value is a single case-sensitive string. Having multiple values (array)
for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
Note: if not specified, the Push endpoint URL will be used. */
  readonly audience?: string;
  /** Service account email to be used for generating the OIDC token.
The caller (for subscriptions.create, subscriptions.patch, and
subscriptions.modifyPushConfig RPCs) must have the
iam.serviceAccounts.actAs permission for the service account. */
  readonly serviceAccountEmail: string;
}

function pubsubSubscriptionPushConfigOidcTokenToTerraform(struct?: PubsubSubscriptionPushConfigOidcToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}

export interface PubsubSubscriptionPushConfig {
  /** Endpoint configuration attributes.

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
- v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API. */
  readonly attributes?: { [key: string]: string };
  /** A URL locating the endpoint to which messages should be pushed.
For example, a Webhook endpoint might use
"https://example.com/push". */
  readonly pushEndpoint: string;
  /** oidc_token block */
  readonly oidcToken?: PubsubSubscriptionPushConfigOidcToken[];
}

function pubsubSubscriptionPushConfigToTerraform(struct?: PubsubSubscriptionPushConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
    push_endpoint: cdktf.stringToTerraform(struct!.pushEndpoint),
    oidc_token: cdktf.listMapper(pubsubSubscriptionPushConfigOidcTokenToTerraform)(struct!.oidcToken),
  }
}

export interface PubsubSubscriptionRetryPolicy {
  /** The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds. 
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  readonly maximumBackoff?: string;
  /** The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  readonly minimumBackoff?: string;
}

function pubsubSubscriptionRetryPolicyToTerraform(struct?: PubsubSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    maximum_backoff: cdktf.stringToTerraform(struct!.maximumBackoff),
    minimum_backoff: cdktf.stringToTerraform(struct!.minimumBackoff),
  }
}

export interface PubsubSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function pubsubSubscriptionTimeoutsToTerraform(struct?: PubsubSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PubsubSubscription extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PubsubSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_subscription',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ackDeadlineSeconds = config.ackDeadlineSeconds;
    this._enableMessageOrdering = config.enableMessageOrdering;
    this._filter = config.filter;
    this._labels = config.labels;
    this._messageRetentionDuration = config.messageRetentionDuration;
    this._name = config.name;
    this._project = config.project;
    this._retainAckedMessages = config.retainAckedMessages;
    this._topic = config.topic;
    this._deadLetterPolicy = config.deadLetterPolicy;
    this._expirationPolicy = config.expirationPolicy;
    this._pushConfig = config.pushConfig;
    this._retryPolicy = config.retryPolicy;
    this._timeouts = config.timeouts;
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
    return this._ackDeadlineSeconds
  }

  // enable_message_ordering - computed: false, optional: true, required: false
  private _enableMessageOrdering?: boolean;
  public get enableMessageOrdering() {
    return this.getBooleanAttribute('enable_message_ordering');
  }
  public set enableMessageOrdering(value: boolean ) {
    this._enableMessageOrdering = value;
  }
  public resetEnableMessageOrdering() {
    this._enableMessageOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMessageOrderingInput() {
    return this._enableMessageOrdering
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string;
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string ) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
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

  // message_retention_duration - computed: false, optional: true, required: false
  private _messageRetentionDuration?: string;
  public get messageRetentionDuration() {
    return this.getStringAttribute('message_retention_duration');
  }
  public set messageRetentionDuration(value: string ) {
    this._messageRetentionDuration = value;
  }
  public resetMessageRetentionDuration() {
    this._messageRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionDurationInput() {
    return this._messageRetentionDuration
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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
    return this._project
  }

  // retain_acked_messages - computed: false, optional: true, required: false
  private _retainAckedMessages?: boolean;
  public get retainAckedMessages() {
    return this.getBooleanAttribute('retain_acked_messages');
  }
  public set retainAckedMessages(value: boolean ) {
    this._retainAckedMessages = value;
  }
  public resetRetainAckedMessages() {
    this._retainAckedMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAckedMessagesInput() {
    return this._retainAckedMessages
  }

  // topic - computed: false, optional: false, required: true
  private _topic: string;
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic
  }

  // dead_letter_policy - computed: false, optional: true, required: false
  private _deadLetterPolicy?: PubsubSubscriptionDeadLetterPolicy[];
  public get deadLetterPolicy() {
    return this.interpolationForAttribute('dead_letter_policy') as any;
  }
  public set deadLetterPolicy(value: PubsubSubscriptionDeadLetterPolicy[] ) {
    this._deadLetterPolicy = value;
  }
  public resetDeadLetterPolicy() {
    this._deadLetterPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterPolicyInput() {
    return this._deadLetterPolicy
  }

  // expiration_policy - computed: false, optional: true, required: false
  private _expirationPolicy?: PubsubSubscriptionExpirationPolicy[];
  public get expirationPolicy() {
    return this.interpolationForAttribute('expiration_policy') as any;
  }
  public set expirationPolicy(value: PubsubSubscriptionExpirationPolicy[] ) {
    this._expirationPolicy = value;
  }
  public resetExpirationPolicy() {
    this._expirationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPolicyInput() {
    return this._expirationPolicy
  }

  // push_config - computed: false, optional: true, required: false
  private _pushConfig?: PubsubSubscriptionPushConfig[];
  public get pushConfig() {
    return this.interpolationForAttribute('push_config') as any;
  }
  public set pushConfig(value: PubsubSubscriptionPushConfig[] ) {
    this._pushConfig = value;
  }
  public resetPushConfig() {
    this._pushConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushConfigInput() {
    return this._pushConfig
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: PubsubSubscriptionRetryPolicy[];
  public get retryPolicy() {
    return this.interpolationForAttribute('retry_policy') as any;
  }
  public set retryPolicy(value: PubsubSubscriptionRetryPolicy[] ) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PubsubSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PubsubSubscriptionTimeouts ) {
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
      ack_deadline_seconds: cdktf.numberToTerraform(this._ackDeadlineSeconds),
      enable_message_ordering: cdktf.booleanToTerraform(this._enableMessageOrdering),
      filter: cdktf.stringToTerraform(this._filter),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      message_retention_duration: cdktf.stringToTerraform(this._messageRetentionDuration),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      retain_acked_messages: cdktf.booleanToTerraform(this._retainAckedMessages),
      topic: cdktf.stringToTerraform(this._topic),
      dead_letter_policy: cdktf.listMapper(pubsubSubscriptionDeadLetterPolicyToTerraform)(this._deadLetterPolicy),
      expiration_policy: cdktf.listMapper(pubsubSubscriptionExpirationPolicyToTerraform)(this._expirationPolicy),
      push_config: cdktf.listMapper(pubsubSubscriptionPushConfigToTerraform)(this._pushConfig),
      retry_policy: cdktf.listMapper(pubsubSubscriptionRetryPolicyToTerraform)(this._retryPolicy),
      timeouts: pubsubSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
