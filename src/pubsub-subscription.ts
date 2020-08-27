// https://www.terraform.io/docs/providers/google/r/pubsub_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PubsubSubscriptionConfig extends TerraformMetaArguments {
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
export interface PubsubSubscriptionExpirationPolicy {
  /** Specifies the "time-to-live" duration for an associated resource. The
resource expires if it is not active for a period of ttl.
If ttl is not set, the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s". */
  readonly ttl: string;
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
export interface PubsubSubscriptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class PubsubSubscription extends TerraformResource {

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_deadline_seconds - computed: true, optional: true, required: false
  private _ackDeadlineSeconds?: number;
  public get ackDeadlineSeconds() {
    return this._ackDeadlineSeconds ?? this.getNumberAttribute('ack_deadline_seconds');
  }
  public set ackDeadlineSeconds(value: number | undefined) {
    this._ackDeadlineSeconds = value;
  }

  // enable_message_ordering - computed: false, optional: true, required: false
  private _enableMessageOrdering?: boolean;
  public get enableMessageOrdering() {
    return this._enableMessageOrdering;
  }
  public set enableMessageOrdering(value: boolean | undefined) {
    this._enableMessageOrdering = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string;
  public get filter() {
    return this._filter;
  }
  public set filter(value: string | undefined) {
    this._filter = value;
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

  // message_retention_duration - computed: false, optional: true, required: false
  private _messageRetentionDuration?: string;
  public get messageRetentionDuration() {
    return this._messageRetentionDuration;
  }
  public set messageRetentionDuration(value: string | undefined) {
    this._messageRetentionDuration = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // retain_acked_messages - computed: false, optional: true, required: false
  private _retainAckedMessages?: boolean;
  public get retainAckedMessages() {
    return this._retainAckedMessages;
  }
  public set retainAckedMessages(value: boolean | undefined) {
    this._retainAckedMessages = value;
  }

  // topic - computed: false, optional: false, required: true
  private _topic: string;
  public get topic() {
    return this._topic;
  }
  public set topic(value: string) {
    this._topic = value;
  }

  // dead_letter_policy - computed: false, optional: true, required: false
  private _deadLetterPolicy?: PubsubSubscriptionDeadLetterPolicy[];
  public get deadLetterPolicy() {
    return this._deadLetterPolicy;
  }
  public set deadLetterPolicy(value: PubsubSubscriptionDeadLetterPolicy[] | undefined) {
    this._deadLetterPolicy = value;
  }

  // expiration_policy - computed: false, optional: true, required: false
  private _expirationPolicy?: PubsubSubscriptionExpirationPolicy[];
  public get expirationPolicy() {
    return this._expirationPolicy;
  }
  public set expirationPolicy(value: PubsubSubscriptionExpirationPolicy[] | undefined) {
    this._expirationPolicy = value;
  }

  // push_config - computed: false, optional: true, required: false
  private _pushConfig?: PubsubSubscriptionPushConfig[];
  public get pushConfig() {
    return this._pushConfig;
  }
  public set pushConfig(value: PubsubSubscriptionPushConfig[] | undefined) {
    this._pushConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PubsubSubscriptionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: PubsubSubscriptionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack_deadline_seconds: this._ackDeadlineSeconds,
      enable_message_ordering: this._enableMessageOrdering,
      filter: this._filter,
      labels: this._labels,
      message_retention_duration: this._messageRetentionDuration,
      name: this._name,
      project: this._project,
      retain_acked_messages: this._retainAckedMessages,
      topic: this._topic,
      dead_letter_policy: this._deadLetterPolicy,
      expiration_policy: this._expirationPolicy,
      push_config: this._pushConfig,
      timeouts: this._timeouts,
    };
  }
}
