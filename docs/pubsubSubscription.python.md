# `pubsubSubscription` Submodule <a name="`pubsubSubscription` Submodule" id="@cdktf/provider-google.pubsubSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubSubscription <a name="PubsubSubscription" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription google_pubsub_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  topic: str,
  ack_deadline_seconds: typing.Union[int, float] = None,
  bigquery_config: PubsubSubscriptionBigqueryConfig = None,
  cloud_storage_config: PubsubSubscriptionCloudStorageConfig = None,
  dead_letter_policy: PubsubSubscriptionDeadLetterPolicy = None,
  enable_exactly_once_delivery: typing.Union[bool, IResolvable] = None,
  enable_message_ordering: typing.Union[bool, IResolvable] = None,
  expiration_policy: PubsubSubscriptionExpirationPolicy = None,
  filter: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  message_retention_duration: str = None,
  project: str = None,
  push_config: PubsubSubscriptionPushConfig = None,
  retain_acked_messages: typing.Union[bool, IResolvable] = None,
  retry_policy: PubsubSubscriptionRetryPolicy = None,
  timeouts: PubsubSubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.topic">topic</a></code> | <code>str</code> | A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.ackDeadlineSeconds">ack_deadline_seconds</a></code> | <code>typing.Union[int, float]</code> | This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.bigqueryConfig">bigquery_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.cloudStorageConfig">cloud_storage_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.deadLetterPolicy">dead_letter_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.enableExactlyOnceDelivery">enable_exactly_once_delivery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.enableMessageOrdering">enable_message_ordering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.expirationPolicy">expiration_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.filter">filter</a></code> | <code>str</code> | The subscription only delivers the messages that match the filter. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#id PubsubSubscription#id}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Subscription. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#project PubsubSubscription#project}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.pushConfig">push_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.retainAckedMessages">retain_acked_messages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.name"></a>

- *Type:* str

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#name PubsubSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.topic"></a>

- *Type:* str

A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#topic PubsubSubscription#topic}

---

##### `ack_deadline_seconds`<sup>Optional</sup> <a name="ack_deadline_seconds" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.ackDeadlineSeconds"></a>

- *Type:* typing.Union[int, float]

This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message.

After message
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#ack_deadline_seconds PubsubSubscription#ack_deadline_seconds}

---

##### `bigquery_config`<sup>Optional</sup> <a name="bigquery_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.bigqueryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#bigquery_config PubsubSubscription#bigquery_config}

---

##### `cloud_storage_config`<sup>Optional</sup> <a name="cloud_storage_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.cloudStorageConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#cloud_storage_config PubsubSubscription#cloud_storage_config}

---

##### `dead_letter_policy`<sup>Optional</sup> <a name="dead_letter_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.deadLetterPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#dead_letter_policy PubsubSubscription#dead_letter_policy}

---

##### `enable_exactly_once_delivery`<sup>Optional</sup> <a name="enable_exactly_once_delivery" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.enableExactlyOnceDelivery"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

* An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#enable_exactly_once_delivery PubsubSubscription#enable_exactly_once_delivery}

---

##### `enable_message_ordering`<sup>Optional</sup> <a name="enable_message_ordering" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.enableMessageOrdering"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they
may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#enable_message_ordering PubsubSubscription#enable_message_ordering}

---

##### `expiration_policy`<sup>Optional</sup> <a name="expiration_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.expirationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#expiration_policy PubsubSubscription#expiration_policy}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.filter"></a>

- *Type:* str

The subscription only delivers the messages that match the filter.

Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#filter PubsubSubscription#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#id PubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Subscription.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#labels PubsubSubscription#labels}

---

##### `message_retention_duration`<sup>Optional</sup> <a name="message_retention_duration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.messageRetentionDuration"></a>

- *Type:* str

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 7 days ('"604800s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#message_retention_duration PubsubSubscription#message_retention_duration}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#project PubsubSubscription#project}.

---

##### `push_config`<sup>Optional</sup> <a name="push_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.pushConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#push_config PubsubSubscription#push_config}

---

##### `retain_acked_messages`<sup>Optional</sup> <a name="retain_acked_messages" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.retainAckedMessages"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to retain acknowledged messages.

If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#retain_acked_messages PubsubSubscription#retain_acked_messages}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#retry_policy PubsubSubscription#retry_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#timeouts PubsubSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig">put_bigquery_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig">put_cloud_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy">put_dead_letter_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putExpirationPolicy">put_expiration_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig">put_push_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetAckDeadlineSeconds">reset_ack_deadline_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetBigqueryConfig">reset_bigquery_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetCloudStorageConfig">reset_cloud_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetDeadLetterPolicy">reset_dead_letter_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetEnableExactlyOnceDelivery">reset_enable_exactly_once_delivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetEnableMessageOrdering">reset_enable_message_ordering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetExpirationPolicy">reset_expiration_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetMessageRetentionDuration">reset_message_retention_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetPushConfig">reset_push_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetRetainAckedMessages">reset_retain_acked_messages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bigquery_config` <a name="put_bigquery_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig"></a>

```python
def put_bigquery_config(
  table: str,
  drop_unknown_fields: typing.Union[bool, IResolvable] = None,
  use_table_schema: typing.Union[bool, IResolvable] = None,
  use_topic_schema: typing.Union[bool, IResolvable] = None,
  write_metadata: typing.Union[bool, IResolvable] = None
) -> None
```

###### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig.parameter.table"></a>

- *Type:* str

The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#table PubsubSubscription#table}

---

###### `drop_unknown_fields`<sup>Optional</sup> <a name="drop_unknown_fields" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig.parameter.dropUnknownFields"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#drop_unknown_fields PubsubSubscription#drop_unknown_fields}

---

###### `use_table_schema`<sup>Optional</sup> <a name="use_table_schema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig.parameter.useTableSchema"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

Messages
must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#use_table_schema PubsubSubscription#use_table_schema}

---

###### `use_topic_schema`<sup>Optional</sup> <a name="use_topic_schema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig.parameter.useTopicSchema"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#use_topic_schema PubsubSubscription#use_topic_schema}

---

###### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putBigqueryConfig.parameter.writeMetadata"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.

The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

##### `put_cloud_storage_config` <a name="put_cloud_storage_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig"></a>

```python
def put_cloud_storage_config(
  bucket: str,
  avro_config: PubsubSubscriptionCloudStorageConfigAvroConfig = None,
  filename_prefix: str = None,
  filename_suffix: str = None,
  max_bytes: typing.Union[int, float] = None,
  max_duration: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig.parameter.bucket"></a>

- *Type:* str

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user. The bucket name must be without any prefix like "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#bucket PubsubSubscription#bucket}

---

###### `avro_config`<sup>Optional</sup> <a name="avro_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig.parameter.avroConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#avro_config PubsubSubscription#avro_config}

---

###### `filename_prefix`<sup>Optional</sup> <a name="filename_prefix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig.parameter.filenamePrefix"></a>

- *Type:* str

User-provided prefix for Cloud Storage filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#filename_prefix PubsubSubscription#filename_prefix}

---

###### `filename_suffix`<sup>Optional</sup> <a name="filename_suffix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig.parameter.filenameSuffix"></a>

- *Type:* str

User-provided suffix for Cloud Storage filename. Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#filename_suffix PubsubSubscription#filename_suffix}

---

###### `max_bytes`<sup>Optional</sup> <a name="max_bytes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig.parameter.maxBytes"></a>

- *Type:* typing.Union[int, float]

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB.
The maxBytes limit may be exceeded in cases where messages are larger than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#max_bytes PubsubSubscription#max_bytes}

---

###### `max_duration`<sup>Optional</sup> <a name="max_duration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putCloudStorageConfig.parameter.maxDuration"></a>

- *Type:* str

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes.
May not exceed the subscription's acknowledgement deadline.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#max_duration PubsubSubscription#max_duration}

---

##### `put_dead_letter_policy` <a name="put_dead_letter_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy"></a>

```python
def put_dead_letter_policy(
  dead_letter_topic: str = None,
  max_delivery_attempts: typing.Union[int, float] = None
) -> None
```

###### `dead_letter_topic`<sup>Optional</sup> <a name="dead_letter_topic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy.parameter.deadLetterTopic"></a>

- *Type:* str

The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'.

The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.

The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#dead_letter_topic PubsubSubscription#dead_letter_topic}

---

###### `max_delivery_attempts`<sup>Optional</sup> <a name="max_delivery_attempts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putDeadLetterPolicy.parameter.maxDeliveryAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of delivery attempts for any message. The value must be between 5 and 100.

The number of delivery attempts is defined as 1 + (the sum of number of
NACKs and number of times the acknowledgement deadline has been exceeded for the message).

A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.

This field will be honored on a best effort basis.

If this parameter is 0, a default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#max_delivery_attempts PubsubSubscription#max_delivery_attempts}

---

##### `put_expiration_policy` <a name="put_expiration_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putExpirationPolicy"></a>

```python
def put_expiration_policy(
  ttl: str
) -> None
```

###### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putExpirationPolicy.parameter.ttl"></a>

- *Type:* str

Specifies the "time-to-live" duration for an associated resource.

The
resource expires if it is not active for a period of ttl.
If ttl is set to "", the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#ttl PubsubSubscription#ttl}

---

##### `put_push_config` <a name="put_push_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig"></a>

```python
def put_push_config(
  push_endpoint: str,
  attributes: typing.Mapping[str] = None,
  no_wrapper: PubsubSubscriptionPushConfigNoWrapper = None,
  oidc_token: PubsubSubscriptionPushConfigOidcToken = None
) -> None
```

###### `push_endpoint`<sup>Required</sup> <a name="push_endpoint" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig.parameter.pushEndpoint"></a>

- *Type:* str

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#push_endpoint PubsubSubscription#push_endpoint}

---

###### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Endpoint configuration attributes.

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

* v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
* v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#attributes PubsubSubscription#attributes}

---

###### `no_wrapper`<sup>Optional</sup> <a name="no_wrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig.parameter.noWrapper"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#no_wrapper PubsubSubscription#no_wrapper}

---

###### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putPushConfig.parameter.oidcToken"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#oidc_token PubsubSubscription#oidc_token}

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy"></a>

```python
def put_retry_policy(
  maximum_backoff: str = None,
  minimum_backoff: str = None
) -> None
```

###### `maximum_backoff`<sup>Optional</sup> <a name="maximum_backoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy.parameter.maximumBackoff"></a>

- *Type:* str

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#maximum_backoff PubsubSubscription#maximum_backoff}

---

###### `minimum_backoff`<sup>Optional</sup> <a name="minimum_backoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putRetryPolicy.parameter.minimumBackoff"></a>

- *Type:* str

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#minimum_backoff PubsubSubscription#minimum_backoff}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#create PubsubSubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#delete PubsubSubscription#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#update PubsubSubscription#update}.

---

##### `reset_ack_deadline_seconds` <a name="reset_ack_deadline_seconds" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetAckDeadlineSeconds"></a>

```python
def reset_ack_deadline_seconds() -> None
```

##### `reset_bigquery_config` <a name="reset_bigquery_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetBigqueryConfig"></a>

```python
def reset_bigquery_config() -> None
```

##### `reset_cloud_storage_config` <a name="reset_cloud_storage_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetCloudStorageConfig"></a>

```python
def reset_cloud_storage_config() -> None
```

##### `reset_dead_letter_policy` <a name="reset_dead_letter_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetDeadLetterPolicy"></a>

```python
def reset_dead_letter_policy() -> None
```

##### `reset_enable_exactly_once_delivery` <a name="reset_enable_exactly_once_delivery" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetEnableExactlyOnceDelivery"></a>

```python
def reset_enable_exactly_once_delivery() -> None
```

##### `reset_enable_message_ordering` <a name="reset_enable_message_ordering" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetEnableMessageOrdering"></a>

```python
def reset_enable_message_ordering() -> None
```

##### `reset_expiration_policy` <a name="reset_expiration_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetExpirationPolicy"></a>

```python
def reset_expiration_policy() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_message_retention_duration` <a name="reset_message_retention_duration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetMessageRetentionDuration"></a>

```python
def reset_message_retention_duration() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_push_config` <a name="reset_push_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetPushConfig"></a>

```python
def reset_push_config() -> None
```

##### `reset_retain_acked_messages` <a name="reset_retain_acked_messages" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetRetainAckedMessages"></a>

```python
def reset_retain_acked_messages() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PubsubSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscription.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PubsubSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PubsubSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PubsubSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PubsubSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfig">bigquery_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference">PubsubSubscriptionBigqueryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfig">cloud_storage_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference">PubsubSubscriptionCloudStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicy">dead_letter_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference">PubsubSubscriptionDeadLetterPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicy">expiration_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference">PubsubSubscriptionExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfig">push_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference">PubsubSubscriptionPushConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference">PubsubSubscriptionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference">PubsubSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSecondsInput">ack_deadline_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfigInput">bigquery_config_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfigInput">cloud_storage_config_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicyInput">dead_letter_policy_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDeliveryInput">enable_exactly_once_delivery_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrderingInput">enable_message_ordering_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicyInput">expiration_policy_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDurationInput">message_retention_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfigInput">push_config_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessagesInput">retain_acked_messages_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSeconds">ack_deadline_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDelivery">enable_exactly_once_delivery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrdering">enable_message_ordering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessages">retain_acked_messages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.topic">topic</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_config`<sup>Required</sup> <a name="bigquery_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfig"></a>

```python
bigquery_config: PubsubSubscriptionBigqueryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference">PubsubSubscriptionBigqueryConfigOutputReference</a>

---

##### `cloud_storage_config`<sup>Required</sup> <a name="cloud_storage_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfig"></a>

```python
cloud_storage_config: PubsubSubscriptionCloudStorageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference">PubsubSubscriptionCloudStorageConfigOutputReference</a>

---

##### `dead_letter_policy`<sup>Required</sup> <a name="dead_letter_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicy"></a>

```python
dead_letter_policy: PubsubSubscriptionDeadLetterPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference">PubsubSubscriptionDeadLetterPolicyOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `expiration_policy`<sup>Required</sup> <a name="expiration_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicy"></a>

```python
expiration_policy: PubsubSubscriptionExpirationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference">PubsubSubscriptionExpirationPolicyOutputReference</a>

---

##### `push_config`<sup>Required</sup> <a name="push_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfig"></a>

```python
push_config: PubsubSubscriptionPushConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference">PubsubSubscriptionPushConfigOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicy"></a>

```python
retry_policy: PubsubSubscriptionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference">PubsubSubscriptionRetryPolicyOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.timeouts"></a>

```python
timeouts: PubsubSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference">PubsubSubscriptionTimeoutsOutputReference</a>

---

##### `ack_deadline_seconds_input`<sup>Optional</sup> <a name="ack_deadline_seconds_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSecondsInput"></a>

```python
ack_deadline_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bigquery_config_input`<sup>Optional</sup> <a name="bigquery_config_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.bigqueryConfigInput"></a>

```python
bigquery_config_input: PubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

---

##### `cloud_storage_config_input`<sup>Optional</sup> <a name="cloud_storage_config_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.cloudStorageConfigInput"></a>

```python
cloud_storage_config_input: PubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

---

##### `dead_letter_policy_input`<sup>Optional</sup> <a name="dead_letter_policy_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.deadLetterPolicyInput"></a>

```python
dead_letter_policy_input: PubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

---

##### `enable_exactly_once_delivery_input`<sup>Optional</sup> <a name="enable_exactly_once_delivery_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDeliveryInput"></a>

```python
enable_exactly_once_delivery_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_message_ordering_input`<sup>Optional</sup> <a name="enable_message_ordering_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrderingInput"></a>

```python
enable_message_ordering_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_policy_input`<sup>Optional</sup> <a name="expiration_policy_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.expirationPolicyInput"></a>

```python
expiration_policy_input: PubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `message_retention_duration_input`<sup>Optional</sup> <a name="message_retention_duration_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDurationInput"></a>

```python
message_retention_duration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `push_config_input`<sup>Optional</sup> <a name="push_config_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.pushConfigInput"></a>

```python
push_config_input: PubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

---

##### `retain_acked_messages_input`<sup>Optional</sup> <a name="retain_acked_messages_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessagesInput"></a>

```python
retain_acked_messages_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retryPolicyInput"></a>

```python
retry_policy_input: PubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PubsubSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>]

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `ack_deadline_seconds`<sup>Required</sup> <a name="ack_deadline_seconds" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.ackDeadlineSeconds"></a>

```python
ack_deadline_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_exactly_once_delivery`<sup>Required</sup> <a name="enable_exactly_once_delivery" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableExactlyOnceDelivery"></a>

```python
enable_exactly_once_delivery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_message_ordering`<sup>Required</sup> <a name="enable_message_ordering" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.enableMessageOrdering"></a>

```python
enable_message_ordering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `message_retention_duration`<sup>Required</sup> <a name="message_retention_duration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.messageRetentionDuration"></a>

```python
message_retention_duration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `retain_acked_messages`<sup>Required</sup> <a name="retain_acked_messages" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.retainAckedMessages"></a>

```python
retain_acked_messages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubSubscriptionBigqueryConfig <a name="PubsubSubscriptionBigqueryConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionBigqueryConfig(
  table: str,
  drop_unknown_fields: typing.Union[bool, IResolvable] = None,
  use_table_schema: typing.Union[bool, IResolvable] = None,
  use_topic_schema: typing.Union[bool, IResolvable] = None,
  write_metadata: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.table">table</a></code> | <code>str</code> | The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.dropUnknownFields">drop_unknown_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTableSchema">use_table_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, use the BigQuery table's schema as the columns to write to in BigQuery. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTopicSchema">use_topic_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, use the topic's schema as the columns to write to in BigQuery, if it exists. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.writeMetadata">write_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table. |

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.table"></a>

```python
table: str
```

- *Type:* str

The name of the table to which to write data, of the form {projectId}:{datasetId}.{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#table PubsubSubscription#table}

---

##### `drop_unknown_fields`<sup>Optional</sup> <a name="drop_unknown_fields" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.dropUnknownFields"></a>

```python
drop_unknown_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that are not part of the BigQuery table schema are dropped when writing to BigQuery.

Otherwise, the schemas must be kept in sync
and any messages with extra fields are not written and remain in the subscription's backlog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#drop_unknown_fields PubsubSubscription#drop_unknown_fields}

---

##### `use_table_schema`<sup>Optional</sup> <a name="use_table_schema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTableSchema"></a>

```python
use_table_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, use the BigQuery table's schema as the columns to write to in BigQuery.

Messages
must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#use_table_schema PubsubSubscription#use_table_schema}

---

##### `use_topic_schema`<sup>Optional</sup> <a name="use_topic_schema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.useTopicSchema"></a>

```python
use_topic_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, use the topic's schema as the columns to write to in BigQuery, if it exists.

Only one of use_topic_schema and use_table_schema can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#use_topic_schema PubsubSubscription#use_topic_schema}

---

##### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig.property.writeMetadata"></a>

```python
write_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.

The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

### PubsubSubscriptionCloudStorageConfig <a name="PubsubSubscriptionCloudStorageConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionCloudStorageConfig(
  bucket: str,
  avro_config: PubsubSubscriptionCloudStorageConfigAvroConfig = None,
  filename_prefix: str = None,
  filename_suffix: str = None,
  max_bytes: typing.Union[int, float] = None,
  max_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.bucket">bucket</a></code> | <code>str</code> | User-provided name for the Cloud Storage bucket. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.avroConfig">avro_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | avro_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenamePrefix">filename_prefix</a></code> | <code>str</code> | User-provided prefix for Cloud Storage filename. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameSuffix">filename_suffix</a></code> | <code>str</code> | User-provided suffix for Cloud Storage filename. Must not end in "/". |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxBytes">max_bytes</a></code> | <code>typing.Union[int, float]</code> | The maximum bytes that can be written to a Cloud Storage file before a new file is created. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxDuration">max_duration</a></code> | <code>str</code> | The maximum duration that can elapse before a new Cloud Storage file is created. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

User-provided name for the Cloud Storage bucket.

The bucket must be created by the user. The bucket name must be without any prefix like "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#bucket PubsubSubscription#bucket}

---

##### `avro_config`<sup>Optional</sup> <a name="avro_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.avroConfig"></a>

```python
avro_config: PubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

avro_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#avro_config PubsubSubscription#avro_config}

---

##### `filename_prefix`<sup>Optional</sup> <a name="filename_prefix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenamePrefix"></a>

```python
filename_prefix: str
```

- *Type:* str

User-provided prefix for Cloud Storage filename.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#filename_prefix PubsubSubscription#filename_prefix}

---

##### `filename_suffix`<sup>Optional</sup> <a name="filename_suffix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.filenameSuffix"></a>

```python
filename_suffix: str
```

- *Type:* str

User-provided suffix for Cloud Storage filename. Must not end in "/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#filename_suffix PubsubSubscription#filename_suffix}

---

##### `max_bytes`<sup>Optional</sup> <a name="max_bytes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxBytes"></a>

```python
max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum bytes that can be written to a Cloud Storage file before a new file is created.

Min 1 KB, max 10 GiB.
The maxBytes limit may be exceeded in cases where messages are larger than the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#max_bytes PubsubSubscription#max_bytes}

---

##### `max_duration`<sup>Optional</sup> <a name="max_duration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig.property.maxDuration"></a>

```python
max_duration: str
```

- *Type:* str

The maximum duration that can elapse before a new Cloud Storage file is created.

Min 1 minute, max 10 minutes, default 5 minutes.
May not exceed the subscription's acknowledgement deadline.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#max_duration PubsubSubscription#max_duration}

---

### PubsubSubscriptionCloudStorageConfigAvroConfig <a name="PubsubSubscriptionCloudStorageConfigAvroConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig(
  write_metadata: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata">write_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output. |

---

##### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig.property.writeMetadata"></a>

```python
write_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

### PubsubSubscriptionConfig <a name="PubsubSubscriptionConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  topic: str,
  ack_deadline_seconds: typing.Union[int, float] = None,
  bigquery_config: PubsubSubscriptionBigqueryConfig = None,
  cloud_storage_config: PubsubSubscriptionCloudStorageConfig = None,
  dead_letter_policy: PubsubSubscriptionDeadLetterPolicy = None,
  enable_exactly_once_delivery: typing.Union[bool, IResolvable] = None,
  enable_message_ordering: typing.Union[bool, IResolvable] = None,
  expiration_policy: PubsubSubscriptionExpirationPolicy = None,
  filter: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  message_retention_duration: str = None,
  project: str = None,
  push_config: PubsubSubscriptionPushConfig = None,
  retain_acked_messages: typing.Union[bool, IResolvable] = None,
  retry_policy: PubsubSubscriptionRetryPolicy = None,
  timeouts: PubsubSubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.name">name</a></code> | <code>str</code> | Name of the subscription. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.topic">topic</a></code> | <code>str</code> | A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.ackDeadlineSeconds">ack_deadline_seconds</a></code> | <code>typing.Union[int, float]</code> | This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.bigqueryConfig">bigquery_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | bigquery_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.cloudStorageConfig">cloud_storage_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | cloud_storage_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.deadLetterPolicy">dead_letter_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | dead_letter_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableExactlyOnceDelivery">enable_exactly_once_delivery</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableMessageOrdering">enable_message_ordering</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.expirationPolicy">expiration_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | expiration_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.filter">filter</a></code> | <code>str</code> | The subscription only delivers the messages that match the filter. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#id PubsubSubscription#id}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Subscription. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#project PubsubSubscription#project}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.pushConfig">push_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | push_config block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retainAckedMessages">retain_acked_messages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to retain acknowledged messages. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#name PubsubSubscription#name}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.topic"></a>

```python
topic: str
```

- *Type:* str

A reference to a Topic resource, of the form projects/{project}/topics/{{name}} (as in the id property of a google_pubsub_topic), or just a topic name if the topic is in the same project as the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#topic PubsubSubscription#topic}

---

##### `ack_deadline_seconds`<sup>Optional</sup> <a name="ack_deadline_seconds" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.ackDeadlineSeconds"></a>

```python
ack_deadline_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message.

After message
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#ack_deadline_seconds PubsubSubscription#ack_deadline_seconds}

---

##### `bigquery_config`<sup>Optional</sup> <a name="bigquery_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.bigqueryConfig"></a>

```python
bigquery_config: PubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

bigquery_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#bigquery_config PubsubSubscription#bigquery_config}

---

##### `cloud_storage_config`<sup>Optional</sup> <a name="cloud_storage_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.cloudStorageConfig"></a>

```python
cloud_storage_config: PubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

cloud_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#cloud_storage_config PubsubSubscription#cloud_storage_config}

---

##### `dead_letter_policy`<sup>Optional</sup> <a name="dead_letter_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.deadLetterPolicy"></a>

```python
dead_letter_policy: PubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

dead_letter_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#dead_letter_policy PubsubSubscription#dead_letter_policy}

---

##### `enable_exactly_once_delivery`<sup>Optional</sup> <a name="enable_exactly_once_delivery" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableExactlyOnceDelivery"></a>

```python
enable_exactly_once_delivery: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If 'true', Pub/Sub provides the following guarantees for the delivery of a message with a given value of messageId on this Subscriptions':  - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.

* An acknowledged message will not be resent to a subscriber.

Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#enable_exactly_once_delivery PubsubSubscription#enable_exactly_once_delivery}

---

##### `enable_message_ordering`<sup>Optional</sup> <a name="enable_message_ordering" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.enableMessageOrdering"></a>

```python
enable_message_ordering: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

Otherwise, they
may be delivered in any order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#enable_message_ordering PubsubSubscription#enable_message_ordering}

---

##### `expiration_policy`<sup>Optional</sup> <a name="expiration_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.expirationPolicy"></a>

```python
expiration_policy: PubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#expiration_policy PubsubSubscription#expiration_policy}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

The subscription only delivers the messages that match the filter.

Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
you can't modify the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#filter PubsubSubscription#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#id PubsubSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Subscription.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#labels PubsubSubscription#labels}

---

##### `message_retention_duration`<sup>Optional</sup> <a name="message_retention_duration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.messageRetentionDuration"></a>

```python
message_retention_duration: str
```

- *Type:* str

How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published.

If
retain_acked_messages is true, then this also configures the retention
of acknowledged messages, and thus configures how far back in time a
subscriptions.seek can be done. Defaults to 7 days. Cannot be more
than 7 days ('"604800s"') or less than 10 minutes ('"600s"').

A duration in seconds with up to nine fractional digits, terminated
by 's'. Example: '"600.5s"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#message_retention_duration PubsubSubscription#message_retention_duration}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#project PubsubSubscription#project}.

---

##### `push_config`<sup>Optional</sup> <a name="push_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.pushConfig"></a>

```python
push_config: PubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

push_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#push_config PubsubSubscription#push_config}

---

##### `retain_acked_messages`<sup>Optional</sup> <a name="retain_acked_messages" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retainAckedMessages"></a>

```python
retain_acked_messages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to retain acknowledged messages.

If 'true', then
messages are not expunged from the subscription's backlog, even if
they are acknowledged, until they fall out of the
messageRetentionDuration window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#retain_acked_messages PubsubSubscription#retain_acked_messages}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.retryPolicy"></a>

```python
retry_policy: PubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#retry_policy PubsubSubscription#retry_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionConfig.property.timeouts"></a>

```python
timeouts: PubsubSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#timeouts PubsubSubscription#timeouts}

---

### PubsubSubscriptionDeadLetterPolicy <a name="PubsubSubscriptionDeadLetterPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionDeadLetterPolicy(
  dead_letter_topic: str = None,
  max_delivery_attempts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic">dead_letter_topic</a></code> | <code>str</code> | The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts">max_delivery_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of delivery attempts for any message. The value must be between 5 and 100. |

---

##### `dead_letter_topic`<sup>Optional</sup> <a name="dead_letter_topic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.deadLetterTopic"></a>

```python
dead_letter_topic: str
```

- *Type:* str

The name of the topic to which dead letter messages should be published. Format is 'projects/{project}/topics/{topic}'.

The Cloud Pub/Sub service account associated with the enclosing subscription's
parent project (i.e.,
service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
permission to Publish() to this topic.

The operation will fail if the topic does not exist.
Users should ensure that there is a subscription attached to this topic
since messages published to a topic with no subscriptions are lost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#dead_letter_topic PubsubSubscription#dead_letter_topic}

---

##### `max_delivery_attempts`<sup>Optional</sup> <a name="max_delivery_attempts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy.property.maxDeliveryAttempts"></a>

```python
max_delivery_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of delivery attempts for any message. The value must be between 5 and 100.

The number of delivery attempts is defined as 1 + (the sum of number of
NACKs and number of times the acknowledgement deadline has been exceeded for the message).

A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
client libraries may automatically extend ack_deadlines.

This field will be honored on a best effort basis.

If this parameter is 0, a default value of 5 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#max_delivery_attempts PubsubSubscription#max_delivery_attempts}

---

### PubsubSubscriptionExpirationPolicy <a name="PubsubSubscriptionExpirationPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionExpirationPolicy(
  ttl: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy.property.ttl">ttl</a></code> | <code>str</code> | Specifies the "time-to-live" duration for an associated resource. |

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Specifies the "time-to-live" duration for an associated resource.

The
resource expires if it is not active for a period of ttl.
If ttl is set to "", the associated resource never expires.
A duration in seconds with up to nine fractional digits, terminated by 's'.
Example - "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#ttl PubsubSubscription#ttl}

---

### PubsubSubscriptionPushConfig <a name="PubsubSubscriptionPushConfig" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionPushConfig(
  push_endpoint: str,
  attributes: typing.Mapping[str] = None,
  no_wrapper: PubsubSubscriptionPushConfigNoWrapper = None,
  oidc_token: PubsubSubscriptionPushConfigOidcToken = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.pushEndpoint">push_endpoint</a></code> | <code>str</code> | A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push". |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Endpoint configuration attributes. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.noWrapper">no_wrapper</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a></code> | no_wrapper block. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a></code> | oidc_token block. |

---

##### `push_endpoint`<sup>Required</sup> <a name="push_endpoint" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.pushEndpoint"></a>

```python
push_endpoint: str
```

- *Type:* str

A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use "https://example.com/push".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#push_endpoint PubsubSubscription#push_endpoint}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Endpoint configuration attributes.

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

* v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
* v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#attributes PubsubSubscription#attributes}

---

##### `no_wrapper`<sup>Optional</sup> <a name="no_wrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.noWrapper"></a>

```python
no_wrapper: PubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

no_wrapper block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#no_wrapper PubsubSubscription#no_wrapper}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig.property.oidcToken"></a>

```python
oidc_token: PubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#oidc_token PubsubSubscription#oidc_token}

---

### PubsubSubscriptionPushConfigNoWrapper <a name="PubsubSubscriptionPushConfigNoWrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper(
  write_metadata: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper.property.writeMetadata">write_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. |

---

##### `write_metadata`<sup>Required</sup> <a name="write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper.property.writeMetadata"></a>

```python
write_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the
Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

### PubsubSubscriptionPushConfigOidcToken <a name="PubsubSubscriptionPushConfigOidcToken" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionPushConfigOidcToken(
  service_account_email: str,
  audience: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Service account email to be used for generating the OIDC token. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.audience">audience</a></code> | <code>str</code> | Audience to be used when generating OIDC token. |

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Service account email to be used for generating the OIDC token.

The caller (for subscriptions.create, subscriptions.patch, and
subscriptions.modifyPushConfig RPCs) must have the
iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken.property.audience"></a>

```python
audience: str
```

- *Type:* str

Audience to be used when generating OIDC token.

The audience claim
identifies the recipients that the JWT is intended for. The audience
value is a single case-sensitive string. Having multiple values (array)
for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
Note: if not specified, the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#audience PubsubSubscription#audience}

---

### PubsubSubscriptionRetryPolicy <a name="PubsubSubscriptionRetryPolicy" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionRetryPolicy(
  maximum_backoff: str = None,
  minimum_backoff: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.maximumBackoff">maximum_backoff</a></code> | <code>str</code> | The maximum delay between consecutive deliveries of a given message. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.minimumBackoff">minimum_backoff</a></code> | <code>str</code> | The minimum delay between consecutive deliveries of a given message. |

---

##### `maximum_backoff`<sup>Optional</sup> <a name="maximum_backoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.maximumBackoff"></a>

```python
maximum_backoff: str
```

- *Type:* str

The maximum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#maximum_backoff PubsubSubscription#maximum_backoff}

---

##### `minimum_backoff`<sup>Optional</sup> <a name="minimum_backoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy.property.minimumBackoff"></a>

```python
minimum_backoff: str
```

- *Type:* str

The minimum delay between consecutive deliveries of a given message.

Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#minimum_backoff PubsubSubscription#minimum_backoff}

---

### PubsubSubscriptionTimeouts <a name="PubsubSubscriptionTimeouts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#create PubsubSubscription#create}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#delete PubsubSubscription#delete}. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#update PubsubSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#create PubsubSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#delete PubsubSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#update PubsubSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubSubscriptionBigqueryConfigOutputReference <a name="PubsubSubscriptionBigqueryConfigOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields">reset_drop_unknown_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema">reset_use_table_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema">reset_use_topic_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata">reset_write_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_drop_unknown_fields` <a name="reset_drop_unknown_fields" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetDropUnknownFields"></a>

```python
def reset_drop_unknown_fields() -> None
```

##### `reset_use_table_schema` <a name="reset_use_table_schema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTableSchema"></a>

```python
def reset_use_table_schema() -> None
```

##### `reset_use_topic_schema` <a name="reset_use_topic_schema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetUseTopicSchema"></a>

```python
def reset_use_topic_schema() -> None
```

##### `reset_write_metadata` <a name="reset_write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.resetWriteMetadata"></a>

```python
def reset_write_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput">drop_unknown_fields_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput">use_table_schema_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput">use_topic_schema_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput">write_metadata_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields">drop_unknown_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.table">table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema">use_table_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema">use_topic_schema</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata">write_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `drop_unknown_fields_input`<sup>Optional</sup> <a name="drop_unknown_fields_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFieldsInput"></a>

```python
drop_unknown_fields_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `use_table_schema_input`<sup>Optional</sup> <a name="use_table_schema_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchemaInput"></a>

```python
use_table_schema_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_topic_schema_input`<sup>Optional</sup> <a name="use_topic_schema_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchemaInput"></a>

```python
use_topic_schema_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write_metadata_input`<sup>Optional</sup> <a name="write_metadata_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadataInput"></a>

```python
write_metadata_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `drop_unknown_fields`<sup>Required</sup> <a name="drop_unknown_fields" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.dropUnknownFields"></a>

```python
drop_unknown_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.table"></a>

```python
table: str
```

- *Type:* str

---

##### `use_table_schema`<sup>Required</sup> <a name="use_table_schema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTableSchema"></a>

```python
use_table_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_topic_schema`<sup>Required</sup> <a name="use_topic_schema" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.useTopicSchema"></a>

```python
use_topic_schema: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write_metadata`<sup>Required</sup> <a name="write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.writeMetadata"></a>

```python
write_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfigOutputReference.property.internalValue"></a>

```python
internal_value: PubsubSubscriptionBigqueryConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionBigqueryConfig">PubsubSubscriptionBigqueryConfig</a>

---


### PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference <a name="PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata">reset_write_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_write_metadata` <a name="reset_write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.resetWriteMetadata"></a>

```python
def reset_write_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput">write_metadata_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata">write_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `write_metadata_input`<sup>Optional</sup> <a name="write_metadata_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadataInput"></a>

```python
write_metadata_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write_metadata`<sup>Required</sup> <a name="write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.writeMetadata"></a>

```python
write_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference.property.internalValue"></a>

```python
internal_value: PubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

---


### PubsubSubscriptionCloudStorageConfigOutputReference <a name="PubsubSubscriptionCloudStorageConfigOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig">put_avro_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig">reset_avro_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix">reset_filename_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix">reset_filename_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes">reset_max_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration">reset_max_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro_config` <a name="put_avro_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig"></a>

```python
def put_avro_config(
  write_metadata: typing.Union[bool, IResolvable] = None
) -> None
```

###### `write_metadata`<sup>Optional</sup> <a name="write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.putAvroConfig.parameter.writeMetadata"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

##### `reset_avro_config` <a name="reset_avro_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetAvroConfig"></a>

```python
def reset_avro_config() -> None
```

##### `reset_filename_prefix` <a name="reset_filename_prefix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenamePrefix"></a>

```python
def reset_filename_prefix() -> None
```

##### `reset_filename_suffix` <a name="reset_filename_suffix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetFilenameSuffix"></a>

```python
def reset_filename_suffix() -> None
```

##### `reset_max_bytes` <a name="reset_max_bytes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxBytes"></a>

```python
def reset_max_bytes() -> None
```

##### `reset_max_duration` <a name="reset_max_duration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.resetMaxDuration"></a>

```python
def reset_max_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig">avro_config</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput">avro_config_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput">filename_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput">filename_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput">max_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput">max_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix">filename_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix">filename_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes">max_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration">max_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro_config`<sup>Required</sup> <a name="avro_config" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfig"></a>

```python
avro_config: PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference">PubsubSubscriptionCloudStorageConfigAvroConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `avro_config_input`<sup>Optional</sup> <a name="avro_config_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.avroConfigInput"></a>

```python
avro_config_input: PubsubSubscriptionCloudStorageConfigAvroConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigAvroConfig">PubsubSubscriptionCloudStorageConfigAvroConfig</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `filename_prefix_input`<sup>Optional</sup> <a name="filename_prefix_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefixInput"></a>

```python
filename_prefix_input: str
```

- *Type:* str

---

##### `filename_suffix_input`<sup>Optional</sup> <a name="filename_suffix_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffixInput"></a>

```python
filename_suffix_input: str
```

- *Type:* str

---

##### `max_bytes_input`<sup>Optional</sup> <a name="max_bytes_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytesInput"></a>

```python
max_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_duration_input`<sup>Optional</sup> <a name="max_duration_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDurationInput"></a>

```python
max_duration_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `filename_prefix`<sup>Required</sup> <a name="filename_prefix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenamePrefix"></a>

```python
filename_prefix: str
```

- *Type:* str

---

##### `filename_suffix`<sup>Required</sup> <a name="filename_suffix" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.filenameSuffix"></a>

```python
filename_suffix: str
```

- *Type:* str

---

##### `max_bytes`<sup>Required</sup> <a name="max_bytes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxBytes"></a>

```python
max_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_duration`<sup>Required</sup> <a name="max_duration" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.maxDuration"></a>

```python
max_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: PubsubSubscriptionCloudStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionCloudStorageConfig">PubsubSubscriptionCloudStorageConfig</a>

---


### PubsubSubscriptionDeadLetterPolicyOutputReference <a name="PubsubSubscriptionDeadLetterPolicyOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic">reset_dead_letter_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts">reset_max_delivery_attempts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dead_letter_topic` <a name="reset_dead_letter_topic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetDeadLetterTopic"></a>

```python
def reset_dead_letter_topic() -> None
```

##### `reset_max_delivery_attempts` <a name="reset_max_delivery_attempts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.resetMaxDeliveryAttempts"></a>

```python
def reset_max_delivery_attempts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput">dead_letter_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput">max_delivery_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic">dead_letter_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts">max_delivery_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dead_letter_topic_input`<sup>Optional</sup> <a name="dead_letter_topic_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopicInput"></a>

```python
dead_letter_topic_input: str
```

- *Type:* str

---

##### `max_delivery_attempts_input`<sup>Optional</sup> <a name="max_delivery_attempts_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttemptsInput"></a>

```python
max_delivery_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dead_letter_topic`<sup>Required</sup> <a name="dead_letter_topic" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.deadLetterTopic"></a>

```python
dead_letter_topic: str
```

- *Type:* str

---

##### `max_delivery_attempts`<sup>Required</sup> <a name="max_delivery_attempts" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.maxDeliveryAttempts"></a>

```python
max_delivery_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicyOutputReference.property.internalValue"></a>

```python
internal_value: PubsubSubscriptionDeadLetterPolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionDeadLetterPolicy">PubsubSubscriptionDeadLetterPolicy</a>

---


### PubsubSubscriptionExpirationPolicyOutputReference <a name="PubsubSubscriptionExpirationPolicyOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: PubsubSubscriptionExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionExpirationPolicy">PubsubSubscriptionExpirationPolicy</a>

---


### PubsubSubscriptionPushConfigNoWrapperOutputReference <a name="PubsubSubscriptionPushConfigNoWrapperOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput">write_metadata_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata">write_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `write_metadata_input`<sup>Optional</sup> <a name="write_metadata_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadataInput"></a>

```python
write_metadata_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write_metadata`<sup>Required</sup> <a name="write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.writeMetadata"></a>

```python
write_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference.property.internalValue"></a>

```python
internal_value: PubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

---


### PubsubSubscriptionPushConfigOidcTokenOutputReference <a name="PubsubSubscriptionPushConfigOidcTokenOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience">reset_audience</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.resetAudience"></a>

```python
def reset_audience() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference.property.internalValue"></a>

```python
internal_value: PubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

---


### PubsubSubscriptionPushConfigOutputReference <a name="PubsubSubscriptionPushConfigOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionPushConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putNoWrapper">put_no_wrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken">put_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetNoWrapper">reset_no_wrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetOidcToken">reset_oidc_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_no_wrapper` <a name="put_no_wrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putNoWrapper"></a>

```python
def put_no_wrapper(
  write_metadata: typing.Union[bool, IResolvable]
) -> None
```

###### `write_metadata`<sup>Required</sup> <a name="write_metadata" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putNoWrapper.parameter.writeMetadata"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request.

Writes the
Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#write_metadata PubsubSubscription#write_metadata}

---

##### `put_oidc_token` <a name="put_oidc_token" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken"></a>

```python
def put_oidc_token(
  service_account_email: str,
  audience: str = None
) -> None
```

###### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.serviceAccountEmail"></a>

- *Type:* str

Service account email to be used for generating the OIDC token.

The caller (for subscriptions.create, subscriptions.patch, and
subscriptions.modifyPushConfig RPCs) must have the
iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#service_account_email PubsubSubscription#service_account_email}

---

###### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.putOidcToken.parameter.audience"></a>

- *Type:* str

Audience to be used when generating OIDC token.

The audience claim
identifies the recipients that the JWT is intended for. The audience
value is a single case-sensitive string. Having multiple values (array)
for the audience field is not supported. More info about the OIDC JWT
token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
Note: if not specified, the Push endpoint URL will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/pubsub_subscription#audience PubsubSubscription#audience}

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_no_wrapper` <a name="reset_no_wrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetNoWrapper"></a>

```python
def reset_no_wrapper() -> None
```

##### `reset_oidc_token` <a name="reset_oidc_token" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.resetOidcToken"></a>

```python
def reset_oidc_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapper">no_wrapper</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference">PubsubSubscriptionPushConfigNoWrapperOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcToken">oidc_token</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference">PubsubSubscriptionPushConfigOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapperInput">no_wrapper_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput">oidc_token_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput">push_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpoint">push_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_wrapper`<sup>Required</sup> <a name="no_wrapper" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapper"></a>

```python
no_wrapper: PubsubSubscriptionPushConfigNoWrapperOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapperOutputReference">PubsubSubscriptionPushConfigNoWrapperOutputReference</a>

---

##### `oidc_token`<sup>Required</sup> <a name="oidc_token" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcToken"></a>

```python
oidc_token: PubsubSubscriptionPushConfigOidcTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcTokenOutputReference">PubsubSubscriptionPushConfigOidcTokenOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `no_wrapper_input`<sup>Optional</sup> <a name="no_wrapper_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.noWrapperInput"></a>

```python
no_wrapper_input: PubsubSubscriptionPushConfigNoWrapper
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigNoWrapper">PubsubSubscriptionPushConfigNoWrapper</a>

---

##### `oidc_token_input`<sup>Optional</sup> <a name="oidc_token_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.oidcTokenInput"></a>

```python
oidc_token_input: PubsubSubscriptionPushConfigOidcToken
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOidcToken">PubsubSubscriptionPushConfigOidcToken</a>

---

##### `push_endpoint_input`<sup>Optional</sup> <a name="push_endpoint_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpointInput"></a>

```python
push_endpoint_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `push_endpoint`<sup>Required</sup> <a name="push_endpoint" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.pushEndpoint"></a>

```python
push_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfigOutputReference.property.internalValue"></a>

```python
internal_value: PubsubSubscriptionPushConfig
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionPushConfig">PubsubSubscriptionPushConfig</a>

---


### PubsubSubscriptionRetryPolicyOutputReference <a name="PubsubSubscriptionRetryPolicyOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff">reset_maximum_backoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff">reset_minimum_backoff</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_backoff` <a name="reset_maximum_backoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMaximumBackoff"></a>

```python
def reset_maximum_backoff() -> None
```

##### `reset_minimum_backoff` <a name="reset_minimum_backoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.resetMinimumBackoff"></a>

```python
def reset_minimum_backoff() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput">maximum_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput">minimum_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff">maximum_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff">minimum_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_backoff_input`<sup>Optional</sup> <a name="maximum_backoff_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoffInput"></a>

```python
maximum_backoff_input: str
```

- *Type:* str

---

##### `minimum_backoff_input`<sup>Optional</sup> <a name="minimum_backoff_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoffInput"></a>

```python
minimum_backoff_input: str
```

- *Type:* str

---

##### `maximum_backoff`<sup>Required</sup> <a name="maximum_backoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.maximumBackoff"></a>

```python
maximum_backoff: str
```

- *Type:* str

---

##### `minimum_backoff`<sup>Required</sup> <a name="minimum_backoff" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.minimumBackoff"></a>

```python
minimum_backoff: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: PubsubSubscriptionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionRetryPolicy">PubsubSubscriptionRetryPolicy</a>

---


### PubsubSubscriptionTimeoutsOutputReference <a name="PubsubSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_subscription

pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PubsubSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubSubscription.PubsubSubscriptionTimeouts">PubsubSubscriptionTimeouts</a>]

---



