# `pubsubTopic` Submodule <a name="`pubsubTopic` Submodule" id="@cdktf/provider-google.pubsubTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubTopic <a name="PubsubTopic" id="@cdktf/provider-google.pubsubTopic.PubsubTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic google_pubsub_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopic(
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
  id: str = None,
  ingestion_data_source_settings: PubsubTopicIngestionDataSourceSettings = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  message_retention_duration: str = None,
  message_storage_policy: PubsubTopicMessageStoragePolicy = None,
  message_transforms: typing.Union[IResolvable, typing.List[PubsubTopicMessageTransforms]] = None,
  project: str = None,
  schema_settings: PubsubTopicSchemaSettings = None,
  timeouts: PubsubTopicTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#id PubsubTopic#id}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.ingestionDataSourceSettings">ingestion_data_source_settings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | ingestion_data_source_settings block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | Indicates the minimum duration to retain a message after it is published to the topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageStoragePolicy">message_storage_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | message_storage_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageTransforms">message_transforms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]]</code> | message_transforms block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#project PubsubTopic#project}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.schemaSettings">schema_settings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | schema_settings block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.name"></a>

- *Type:* str

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#name PubsubTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#id PubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestion_data_source_settings`<sup>Optional</sup> <a name="ingestion_data_source_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.ingestionDataSourceSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

ingestion_data_source_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#ingestion_data_source_settings PubsubTopic#ingestion_data_source_settings}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.

Your project's PubSub service account
('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#kms_key_name PubsubTopic#kms_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Topic.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#labels PubsubTopic#labels}

---

##### `message_retention_duration`<sup>Optional</sup> <a name="message_retention_duration" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageRetentionDuration"></a>

- *Type:* str

Indicates the minimum duration to retain a message after it is published to the topic.

If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
The rotation period has the format of a decimal number, followed by the
letter 's' (seconds). Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#message_retention_duration PubsubTopic#message_retention_duration}

---

##### `message_storage_policy`<sup>Optional</sup> <a name="message_storage_policy" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageStoragePolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

message_storage_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#message_storage_policy PubsubTopic#message_storage_policy}

---

##### `message_transforms`<sup>Optional</sup> <a name="message_transforms" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.messageTransforms"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]]

message_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#message_transforms PubsubTopic#message_transforms}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#project PubsubTopic#project}.

---

##### `schema_settings`<sup>Optional</sup> <a name="schema_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.schemaSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

schema_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#schema_settings PubsubTopic#schema_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#timeouts PubsubTopic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings">put_ingestion_data_source_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy">put_message_storage_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageTransforms">put_message_transforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings">put_schema_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetIngestionDataSourceSettings">reset_ingestion_data_source_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageRetentionDuration">reset_message_retention_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageStoragePolicy">reset_message_storage_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageTransforms">reset_message_transforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetSchemaSettings">reset_schema_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ingestion_data_source_settings` <a name="put_ingestion_data_source_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings"></a>

```python
def put_ingestion_data_source_settings(
  aws_kinesis: PubsubTopicIngestionDataSourceSettingsAwsKinesis = None,
  aws_msk: PubsubTopicIngestionDataSourceSettingsAwsMsk = None,
  azure_event_hubs: PubsubTopicIngestionDataSourceSettingsAzureEventHubs = None,
  cloud_storage: PubsubTopicIngestionDataSourceSettingsCloudStorage = None,
  confluent_cloud: PubsubTopicIngestionDataSourceSettingsConfluentCloud = None,
  platform_logs_settings: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings = None
) -> None
```

###### `aws_kinesis`<sup>Optional</sup> <a name="aws_kinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings.parameter.awsKinesis"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

aws_kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#aws_kinesis PubsubTopic#aws_kinesis}

---

###### `aws_msk`<sup>Optional</sup> <a name="aws_msk" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings.parameter.awsMsk"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

aws_msk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#aws_msk PubsubTopic#aws_msk}

---

###### `azure_event_hubs`<sup>Optional</sup> <a name="azure_event_hubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings.parameter.azureEventHubs"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

azure_event_hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#azure_event_hubs PubsubTopic#azure_event_hubs}

---

###### `cloud_storage`<sup>Optional</sup> <a name="cloud_storage" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings.parameter.cloudStorage"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#cloud_storage PubsubTopic#cloud_storage}

---

###### `confluent_cloud`<sup>Optional</sup> <a name="confluent_cloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings.parameter.confluentCloud"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

confluent_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#confluent_cloud PubsubTopic#confluent_cloud}

---

###### `platform_logs_settings`<sup>Optional</sup> <a name="platform_logs_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putIngestionDataSourceSettings.parameter.platformLogsSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

platform_logs_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#platform_logs_settings PubsubTopic#platform_logs_settings}

---

##### `put_message_storage_policy` <a name="put_message_storage_policy" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy"></a>

```python
def put_message_storage_policy(
  allowed_persistence_regions: typing.List[str],
  enforce_in_transit: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_persistence_regions`<sup>Required</sup> <a name="allowed_persistence_regions" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy.parameter.allowedPersistenceRegions"></a>

- *Type:* typing.List[str]

A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage.

Messages published by
publishers running in non-allowed GCP regions (or running outside
of GCP altogether) will be routed for storage in one of the
allowed regions. An empty list means that no regions are allowed,
and is not a valid configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#allowed_persistence_regions PubsubTopic#allowed_persistence_regions}

---

###### `enforce_in_transit`<sup>Optional</sup> <a name="enforce_in_transit" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageStoragePolicy.parameter.enforceInTransit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, 'allowedPersistenceRegions' is also used to enforce in-transit guarantees for messages.

That is, Pub/Sub will fail topics.publish
operations on this topic and subscribe operations on any subscription
attached to this topic in any region that is not in 'allowedPersistenceRegions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#enforce_in_transit PubsubTopic#enforce_in_transit}

---

##### `put_message_transforms` <a name="put_message_transforms" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageTransforms"></a>

```python
def put_message_transforms(
  value: typing.Union[IResolvable, typing.List[PubsubTopicMessageTransforms]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putMessageTransforms.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]]

---

##### `put_schema_settings` <a name="put_schema_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings"></a>

```python
def put_schema_settings(
  schema: str,
  encoding: str = None
) -> None
```

###### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings.parameter.schema"></a>

- *Type:* str

The name of the schema that messages published should be validated against.

Format is projects/{project}/schemas/{schema}.
The value of this field will be *deleted-schema*
if the schema has been deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#schema PubsubTopic#schema}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putSchemaSettings.parameter.encoding"></a>

- *Type:* str

The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#encoding PubsubTopic#encoding}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#create PubsubTopic#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#delete PubsubTopic#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#update PubsubTopic#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingestion_data_source_settings` <a name="reset_ingestion_data_source_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetIngestionDataSourceSettings"></a>

```python
def reset_ingestion_data_source_settings() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_message_retention_duration` <a name="reset_message_retention_duration" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageRetentionDuration"></a>

```python
def reset_message_retention_duration() -> None
```

##### `reset_message_storage_policy` <a name="reset_message_storage_policy" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageStoragePolicy"></a>

```python
def reset_message_storage_policy() -> None
```

##### `reset_message_transforms` <a name="reset_message_transforms" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetMessageTransforms"></a>

```python
def reset_message_transforms() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_schema_settings` <a name="reset_schema_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetSchemaSettings"></a>

```python
def reset_schema_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PubsubTopic resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PubsubTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PubsubTopic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PubsubTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PubsubTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettings">ingestion_data_source_settings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicy">message_storage_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference">PubsubTopicMessageStoragePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageTransforms">message_transforms</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList">PubsubTopicMessageTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.schemaSettings">schema_settings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference">PubsubTopicSchemaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference">PubsubTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettingsInput">ingestion_data_source_settings_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDurationInput">message_retention_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicyInput">message_storage_policy_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageTransformsInput">message_transforms_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.schemaSettingsInput">schema_settings_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ingestion_data_source_settings`<sup>Required</sup> <a name="ingestion_data_source_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettings"></a>

```python
ingestion_data_source_settings: PubsubTopicIngestionDataSourceSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsOutputReference</a>

---

##### `message_storage_policy`<sup>Required</sup> <a name="message_storage_policy" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicy"></a>

```python
message_storage_policy: PubsubTopicMessageStoragePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference">PubsubTopicMessageStoragePolicyOutputReference</a>

---

##### `message_transforms`<sup>Required</sup> <a name="message_transforms" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageTransforms"></a>

```python
message_transforms: PubsubTopicMessageTransformsList
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList">PubsubTopicMessageTransformsList</a>

---

##### `schema_settings`<sup>Required</sup> <a name="schema_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.schemaSettings"></a>

```python
schema_settings: PubsubTopicSchemaSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference">PubsubTopicSchemaSettingsOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.timeouts"></a>

```python
timeouts: PubsubTopicTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference">PubsubTopicTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingestion_data_source_settings_input`<sup>Optional</sup> <a name="ingestion_data_source_settings_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.ingestionDataSourceSettingsInput"></a>

```python
ingestion_data_source_settings_input: PubsubTopicIngestionDataSourceSettings
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `message_retention_duration_input`<sup>Optional</sup> <a name="message_retention_duration_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDurationInput"></a>

```python
message_retention_duration_input: str
```

- *Type:* str

---

##### `message_storage_policy_input`<sup>Optional</sup> <a name="message_storage_policy_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageStoragePolicyInput"></a>

```python
message_storage_policy_input: PubsubTopicMessageStoragePolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---

##### `message_transforms_input`<sup>Optional</sup> <a name="message_transforms_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageTransformsInput"></a>

```python
message_transforms_input: typing.Union[IResolvable, typing.List[PubsubTopicMessageTransforms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `schema_settings_input`<sup>Optional</sup> <a name="schema_settings_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.schemaSettingsInput"></a>

```python
schema_settings_input: PubsubTopicSchemaSettings
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PubsubTopicTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `message_retention_duration`<sup>Required</sup> <a name="message_retention_duration" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.messageRetentionDuration"></a>

```python
message_retention_duration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.pubsubTopic.PubsubTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubTopicConfig <a name="PubsubTopicConfig" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  ingestion_data_source_settings: PubsubTopicIngestionDataSourceSettings = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  message_retention_duration: str = None,
  message_storage_policy: PubsubTopicMessageStoragePolicy = None,
  message_transforms: typing.Union[IResolvable, typing.List[PubsubTopicMessageTransforms]] = None,
  project: str = None,
  schema_settings: PubsubTopicSchemaSettings = None,
  timeouts: PubsubTopicTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.name">name</a></code> | <code>str</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#id PubsubTopic#id}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.ingestionDataSourceSettings">ingestion_data_source_settings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | ingestion_data_source_settings block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageRetentionDuration">message_retention_duration</a></code> | <code>str</code> | Indicates the minimum duration to retain a message after it is published to the topic. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageStoragePolicy">message_storage_policy</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | message_storage_policy block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageTransforms">message_transforms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]]</code> | message_transforms block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#project PubsubTopic#project}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.schemaSettings">schema_settings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | schema_settings block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#name PubsubTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#id PubsubTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestion_data_source_settings`<sup>Optional</sup> <a name="ingestion_data_source_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.ingestionDataSourceSettings"></a>

```python
ingestion_data_source_settings: PubsubTopicIngestionDataSourceSettings
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

ingestion_data_source_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#ingestion_data_source_settings PubsubTopic#ingestion_data_source_settings}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.

Your project's PubSub service account
('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#kms_key_name PubsubTopic#kms_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Topic.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#labels PubsubTopic#labels}

---

##### `message_retention_duration`<sup>Optional</sup> <a name="message_retention_duration" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageRetentionDuration"></a>

```python
message_retention_duration: str
```

- *Type:* str

Indicates the minimum duration to retain a message after it is published to the topic.

If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
The rotation period has the format of a decimal number, followed by the
letter 's' (seconds). Cannot be more than 31 days or less than 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#message_retention_duration PubsubTopic#message_retention_duration}

---

##### `message_storage_policy`<sup>Optional</sup> <a name="message_storage_policy" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageStoragePolicy"></a>

```python
message_storage_policy: PubsubTopicMessageStoragePolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

message_storage_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#message_storage_policy PubsubTopic#message_storage_policy}

---

##### `message_transforms`<sup>Optional</sup> <a name="message_transforms" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.messageTransforms"></a>

```python
message_transforms: typing.Union[IResolvable, typing.List[PubsubTopicMessageTransforms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]]

message_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#message_transforms PubsubTopic#message_transforms}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#project PubsubTopic#project}.

---

##### `schema_settings`<sup>Optional</sup> <a name="schema_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.schemaSettings"></a>

```python
schema_settings: PubsubTopicSchemaSettings
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

schema_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#schema_settings PubsubTopic#schema_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopicConfig.property.timeouts"></a>

```python
timeouts: PubsubTopicTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#timeouts PubsubTopic#timeouts}

---

### PubsubTopicIngestionDataSourceSettings <a name="PubsubTopicIngestionDataSourceSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettings(
  aws_kinesis: PubsubTopicIngestionDataSourceSettingsAwsKinesis = None,
  aws_msk: PubsubTopicIngestionDataSourceSettingsAwsMsk = None,
  azure_event_hubs: PubsubTopicIngestionDataSourceSettingsAzureEventHubs = None,
  cloud_storage: PubsubTopicIngestionDataSourceSettingsCloudStorage = None,
  confluent_cloud: PubsubTopicIngestionDataSourceSettingsConfluentCloud = None,
  platform_logs_settings: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsKinesis">aws_kinesis</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | aws_kinesis block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsMsk">aws_msk</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | aws_msk block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.azureEventHubs">azure_event_hubs</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | azure_event_hubs block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.cloudStorage">cloud_storage</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | cloud_storage block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.confluentCloud">confluent_cloud</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | confluent_cloud block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.platformLogsSettings">platform_logs_settings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | platform_logs_settings block. |

---

##### `aws_kinesis`<sup>Optional</sup> <a name="aws_kinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsKinesis"></a>

```python
aws_kinesis: PubsubTopicIngestionDataSourceSettingsAwsKinesis
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

aws_kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#aws_kinesis PubsubTopic#aws_kinesis}

---

##### `aws_msk`<sup>Optional</sup> <a name="aws_msk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.awsMsk"></a>

```python
aws_msk: PubsubTopicIngestionDataSourceSettingsAwsMsk
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

aws_msk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#aws_msk PubsubTopic#aws_msk}

---

##### `azure_event_hubs`<sup>Optional</sup> <a name="azure_event_hubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.azureEventHubs"></a>

```python
azure_event_hubs: PubsubTopicIngestionDataSourceSettingsAzureEventHubs
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

azure_event_hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#azure_event_hubs PubsubTopic#azure_event_hubs}

---

##### `cloud_storage`<sup>Optional</sup> <a name="cloud_storage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.cloudStorage"></a>

```python
cloud_storage: PubsubTopicIngestionDataSourceSettingsCloudStorage
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

cloud_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#cloud_storage PubsubTopic#cloud_storage}

---

##### `confluent_cloud`<sup>Optional</sup> <a name="confluent_cloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.confluentCloud"></a>

```python
confluent_cloud: PubsubTopicIngestionDataSourceSettingsConfluentCloud
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

confluent_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#confluent_cloud PubsubTopic#confluent_cloud}

---

##### `platform_logs_settings`<sup>Optional</sup> <a name="platform_logs_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings.property.platformLogsSettings"></a>

```python
platform_logs_settings: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

platform_logs_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#platform_logs_settings PubsubTopic#platform_logs_settings}

---

### PubsubTopicIngestionDataSourceSettingsAwsKinesis <a name="PubsubTopicIngestionDataSourceSettingsAwsKinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis(
  aws_role_arn: str,
  consumer_arn: str,
  gcp_service_account: str,
  stream_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | AWS role ARN to be used for Federated Identity authentication with Kinesis. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn">consumer_arn</a></code> | <code>str</code> | The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn">stream_arn</a></code> | <code>str</code> | The Kinesis stream ARN to ingest data from. |

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

AWS role ARN to be used for Federated Identity authentication with Kinesis.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

##### `consumer_arn`<sup>Required</sup> <a name="consumer_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.consumerArn"></a>

```python
consumer_arn: str
```

- *Type:* str

The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode.

The consumer must be already
created and ready to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#consumer_arn PubsubTopic#consumer_arn}

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

The Kinesis stream ARN to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#stream_arn PubsubTopic#stream_arn}

---

### PubsubTopicIngestionDataSourceSettingsAwsMsk <a name="PubsubTopicIngestionDataSourceSettingsAwsMsk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk(
  aws_role_arn: str,
  cluster_arn: str,
  gcp_service_account: str,
  topic: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | AWS role ARN to be used for Federated Identity authentication with MSK. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.clusterArn">cluster_arn</a></code> | <code>str</code> | ARN that uniquely identifies the MSK cluster. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | The GCP service account to be used for Federated Identity authentication with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.topic">topic</a></code> | <code>str</code> | The name of the MSK topic that Pub/Sub will import from. |

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

AWS role ARN to be used for Federated Identity authentication with MSK.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

ARN that uniquely identifies the MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#cluster_arn PubsubTopic#cluster_arn}

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

The GCP service account to be used for Federated Identity authentication with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk.property.topic"></a>

```python
topic: str
```

- *Type:* str

The name of the MSK topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

### PubsubTopicIngestionDataSourceSettingsAzureEventHubs <a name="PubsubTopicIngestionDataSourceSettingsAzureEventHubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs(
  client_id: str = None,
  event_hub: str = None,
  gcp_service_account: str = None,
  namespace: str = None,
  resource_group: str = None,
  subscription_id: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.clientId">client_id</a></code> | <code>str</code> | The Azure event hub client ID to use for ingestion. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.eventHub">event_hub</a></code> | <code>str</code> | The Azure event hub to ingest data from. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | The GCP service account to be used for Federated Identity authentication with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided role). |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.namespace">namespace</a></code> | <code>str</code> | The Azure event hub namespace to ingest data from. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.resourceGroup">resource_group</a></code> | <code>str</code> | The name of the resource group within an Azure subscription. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.subscriptionId">subscription_id</a></code> | <code>str</code> | The Azure event hub subscription ID to use for ingestion. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.tenantId">tenant_id</a></code> | <code>str</code> | The Azure event hub tenant ID to use for ingestion. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The Azure event hub client ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#client_id PubsubTopic#client_id}

---

##### `event_hub`<sup>Optional</sup> <a name="event_hub" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.eventHub"></a>

```python
event_hub: str
```

- *Type:* str

The Azure event hub to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#event_hub PubsubTopic#event_hub}

---

##### `gcp_service_account`<sup>Optional</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

The GCP service account to be used for Federated Identity authentication with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The Azure event hub namespace to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#namespace PubsubTopic#namespace}

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

The name of the resource group within an Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#resource_group PubsubTopic#resource_group}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

The Azure event hub subscription ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#subscription_id PubsubTopic#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The Azure event hub tenant ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#tenant_id PubsubTopic#tenant_id}

---

### PubsubTopicIngestionDataSourceSettingsCloudStorage <a name="PubsubTopicIngestionDataSourceSettingsCloudStorage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage(
  bucket: str,
  avro_format: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat = None,
  match_glob: str = None,
  minimum_object_create_time: str = None,
  pubsub_avro_format: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat = None,
  text_format: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket">bucket</a></code> | <code>str</code> | Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat">avro_format</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | avro_format block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob">match_glob</a></code> | <code>str</code> | Glob pattern used to match objects that will be ingested. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime">minimum_object_create_time</a></code> | <code>str</code> | The timestamp set in RFC3339 text format. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat">pubsub_avro_format</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | pubsub_avro_format block. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat">text_format</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | text_format block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#bucket PubsubTopic#bucket}

---

##### `avro_format`<sup>Optional</sup> <a name="avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.avroFormat"></a>

```python
avro_format: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#avro_format PubsubTopic#avro_format}

---

##### `match_glob`<sup>Optional</sup> <a name="match_glob" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.matchGlob"></a>

```python
match_glob: str
```

- *Type:* str

Glob pattern used to match objects that will be ingested.

If unset, all
objects will be ingested. See the supported patterns:
https://cloud.google.com/storage/docs/json_api/v1/objects/list#list-objects-and-prefixes-using-glob

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#match_glob PubsubTopic#match_glob}

---

##### `minimum_object_create_time`<sup>Optional</sup> <a name="minimum_object_create_time" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.minimumObjectCreateTime"></a>

```python
minimum_object_create_time: str
```

- *Type:* str

The timestamp set in RFC3339 text format.

If set, only objects with a
larger or equal timestamp will be ingested. Unset by default, meaning
all objects will be ingested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#minimum_object_create_time PubsubTopic#minimum_object_create_time}

---

##### `pubsub_avro_format`<sup>Optional</sup> <a name="pubsub_avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.pubsubAvroFormat"></a>

```python
pubsub_avro_format: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

pubsub_avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#pubsub_avro_format PubsubTopic#pubsub_avro_format}

---

##### `text_format`<sup>Optional</sup> <a name="text_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage.property.textFormat"></a>

```python
text_format: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

text_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#text_format PubsubTopic#text_format}

---

### PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat()
```


### PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat()
```


### PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat(
  delimiter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter">delimiter</a></code> | <code>str</code> | The delimiter to use when using the 'text' format. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

The delimiter to use when using the 'text' format.

Each line of text as
specified by the delimiter will be set to the 'data' field of a Pub/Sub
message. When unset, '\n' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#delimiter PubsubTopic#delimiter}

---

### PubsubTopicIngestionDataSourceSettingsConfluentCloud <a name="PubsubTopicIngestionDataSourceSettingsConfluentCloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud(
  bootstrap_server: str,
  gcp_service_account: str,
  identity_pool_id: str,
  topic: str,
  cluster_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.bootstrapServer">bootstrap_server</a></code> | <code>str</code> | The Confluent Cloud bootstrap server. The format is url:port. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | The GCP service account to be used for Federated Identity authentication with Confluent Cloud. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Identity pool ID to be used for Federated Identity authentication with Confluent Cloud. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.topic">topic</a></code> | <code>str</code> | Name of the Confluent Cloud topic that Pub/Sub will import from. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.clusterId">cluster_id</a></code> | <code>str</code> | The Confluent Cloud cluster ID. |

---

##### `bootstrap_server`<sup>Required</sup> <a name="bootstrap_server" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.bootstrapServer"></a>

```python
bootstrap_server: str
```

- *Type:* str

The Confluent Cloud bootstrap server. The format is url:port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#bootstrap_server PubsubTopic#bootstrap_server}

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

The GCP service account to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

Identity pool ID to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#identity_pool_id PubsubTopic#identity_pool_id}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.topic"></a>

```python
topic: str
```

- *Type:* str

Name of the Confluent Cloud topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

The Confluent Cloud cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#cluster_id PubsubTopic#cluster_id}

---

### PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings <a name="PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings(
  severity: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity">severity</a></code> | <code>str</code> | The minimum severity level of Platform Logs that will be written. |

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings.property.severity"></a>

```python
severity: str
```

- *Type:* str

The minimum severity level of Platform Logs that will be written.

If unspecified,
no Platform Logs will be written. Default value: "SEVERITY_UNSPECIFIED" Possible values: ["SEVERITY_UNSPECIFIED", "DISABLED", "DEBUG", "INFO", "WARNING", "ERROR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#severity PubsubTopic#severity}

---

### PubsubTopicMessageStoragePolicy <a name="PubsubTopicMessageStoragePolicy" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicMessageStoragePolicy(
  allowed_persistence_regions: typing.List[str],
  enforce_in_transit: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions">allowed_persistence_regions</a></code> | <code>typing.List[str]</code> | A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.enforceInTransit">enforce_in_transit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, 'allowedPersistenceRegions' is also used to enforce in-transit guarantees for messages. |

---

##### `allowed_persistence_regions`<sup>Required</sup> <a name="allowed_persistence_regions" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.allowedPersistenceRegions"></a>

```python
allowed_persistence_regions: typing.List[str]
```

- *Type:* typing.List[str]

A list of IDs of GCP regions where messages that are published to the topic may be persisted in storage.

Messages published by
publishers running in non-allowed GCP regions (or running outside
of GCP altogether) will be routed for storage in one of the
allowed regions. An empty list means that no regions are allowed,
and is not a valid configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#allowed_persistence_regions PubsubTopic#allowed_persistence_regions}

---

##### `enforce_in_transit`<sup>Optional</sup> <a name="enforce_in_transit" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy.property.enforceInTransit"></a>

```python
enforce_in_transit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, 'allowedPersistenceRegions' is also used to enforce in-transit guarantees for messages.

That is, Pub/Sub will fail topics.publish
operations on this topic and subscribe operations on any subscription
attached to this topic in any region that is not in 'allowedPersistenceRegions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#enforce_in_transit PubsubTopic#enforce_in_transit}

---

### PubsubTopicMessageTransforms <a name="PubsubTopicMessageTransforms" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicMessageTransforms(
  disabled: typing.Union[bool, IResolvable] = None,
  javascript_udf: PubsubTopicMessageTransformsJavascriptUdf = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether or not to use this transform. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.javascriptUdf">javascript_udf</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a></code> | javascript_udf block. |

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether or not to use this transform.

If not set or 'false',
the transform will be applied to messages. Default: 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#disabled PubsubTopic#disabled}

---

##### `javascript_udf`<sup>Optional</sup> <a name="javascript_udf" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms.property.javascriptUdf"></a>

```python
javascript_udf: PubsubTopicMessageTransformsJavascriptUdf
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

javascript_udf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#javascript_udf PubsubTopic#javascript_udf}

---

### PubsubTopicMessageTransformsJavascriptUdf <a name="PubsubTopicMessageTransformsJavascriptUdf" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf(
  code: str,
  function_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.code">code</a></code> | <code>str</code> | JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.functionName">function_name</a></code> | <code>str</code> | Name of the JavaScript function that should be applied to Pub/Sub messages. |

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.code"></a>

```python
code: str
```

- *Type:* str

JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message.

* *

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Name of the JavaScript function that should be applied to Pub/Sub messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#function_name PubsubTopic#function_name}

---

### PubsubTopicSchemaSettings <a name="PubsubTopicSchemaSettings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicSchemaSettings(
  schema: str,
  encoding: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.schema">schema</a></code> | <code>str</code> | The name of the schema that messages published should be validated against. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.encoding">encoding</a></code> | <code>str</code> | The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]. |

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.schema"></a>

```python
schema: str
```

- *Type:* str

The name of the schema that messages published should be validated against.

Format is projects/{project}/schemas/{schema}.
The value of this field will be *deleted-schema*
if the schema has been deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#schema PubsubTopic#schema}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#encoding PubsubTopic#encoding}

---

### PubsubTopicTimeouts <a name="PubsubTopicTimeouts" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#create PubsubTopic#create}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#delete PubsubTopic#delete}. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#update PubsubTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#create PubsubTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#delete PubsubTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#update PubsubTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput">aws_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput">consumer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput">gcp_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn">consumer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_role_arn_input`<sup>Optional</sup> <a name="aws_role_arn_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArnInput"></a>

```python
aws_role_arn_input: str
```

- *Type:* str

---

##### `consumer_arn_input`<sup>Optional</sup> <a name="consumer_arn_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArnInput"></a>

```python
consumer_arn_input: str
```

- *Type:* str

---

##### `gcp_service_account_input`<sup>Optional</sup> <a name="gcp_service_account_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccountInput"></a>

```python
gcp_service_account_input: str
```

- *Type:* str

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

---

##### `consumer_arn`<sup>Required</sup> <a name="consumer_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.consumerArn"></a>

```python
consumer_arn: str
```

- *Type:* str

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettingsAwsKinesis
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---


### PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArnInput">aws_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccountInput">gcp_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_role_arn_input`<sup>Optional</sup> <a name="aws_role_arn_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArnInput"></a>

```python
aws_role_arn_input: str
```

- *Type:* str

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `gcp_service_account_input`<sup>Optional</sup> <a name="gcp_service_account_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccountInput"></a>

```python
gcp_service_account_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettingsAwsMsk
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---


### PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetEventHub">reset_event_hub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetGcpServiceAccount">reset_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_event_hub` <a name="reset_event_hub" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetEventHub"></a>

```python
def reset_event_hub() -> None
```

##### `reset_gcp_service_account` <a name="reset_gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetGcpServiceAccount"></a>

```python
def reset_gcp_service_account() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHubInput">event_hub_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccountInput">gcp_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub">event_hub</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `event_hub_input`<sup>Optional</sup> <a name="event_hub_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHubInput"></a>

```python
event_hub_input: str
```

- *Type:* str

---

##### `gcp_service_account_input`<sup>Optional</sup> <a name="gcp_service_account_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccountInput"></a>

```python
gcp_service_account_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `event_hub`<sup>Required</sup> <a name="event_hub" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.eventHub"></a>

```python
event_hub: str
```

- *Type:* str

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettingsAzureEventHubs
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat">put_avro_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat">put_pubsub_avro_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat">put_text_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat">reset_avro_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob">reset_match_glob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime">reset_minimum_object_create_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat">reset_pubsub_avro_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat">reset_text_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_avro_format` <a name="put_avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putAvroFormat"></a>

```python
def put_avro_format() -> None
```

##### `put_pubsub_avro_format` <a name="put_pubsub_avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putPubsubAvroFormat"></a>

```python
def put_pubsub_avro_format() -> None
```

##### `put_text_format` <a name="put_text_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat"></a>

```python
def put_text_format(
  delimiter: str = None
) -> None
```

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.putTextFormat.parameter.delimiter"></a>

- *Type:* str

The delimiter to use when using the 'text' format.

Each line of text as
specified by the delimiter will be set to the 'data' field of a Pub/Sub
message. When unset, '\n' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#delimiter PubsubTopic#delimiter}

---

##### `reset_avro_format` <a name="reset_avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetAvroFormat"></a>

```python
def reset_avro_format() -> None
```

##### `reset_match_glob` <a name="reset_match_glob" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMatchGlob"></a>

```python
def reset_match_glob() -> None
```

##### `reset_minimum_object_create_time` <a name="reset_minimum_object_create_time" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetMinimumObjectCreateTime"></a>

```python
def reset_minimum_object_create_time() -> None
```

##### `reset_pubsub_avro_format` <a name="reset_pubsub_avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetPubsubAvroFormat"></a>

```python
def reset_pubsub_avro_format() -> None
```

##### `reset_text_format` <a name="reset_text_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.resetTextFormat"></a>

```python
def reset_text_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat">avro_format</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat">pubsub_avro_format</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat">text_format</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput">avro_format_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput">match_glob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput">minimum_object_create_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput">pubsub_avro_format_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput">text_format_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob">match_glob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime">minimum_object_create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avro_format`<sup>Required</sup> <a name="avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormat"></a>

```python
avro_format: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference</a>

---

##### `pubsub_avro_format`<sup>Required</sup> <a name="pubsub_avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormat"></a>

```python
pubsub_avro_format: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference</a>

---

##### `text_format`<sup>Required</sup> <a name="text_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormat"></a>

```python
text_format: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference</a>

---

##### `avro_format_input`<sup>Optional</sup> <a name="avro_format_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.avroFormatInput"></a>

```python
avro_format_input: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `match_glob_input`<sup>Optional</sup> <a name="match_glob_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlobInput"></a>

```python
match_glob_input: str
```

- *Type:* str

---

##### `minimum_object_create_time_input`<sup>Optional</sup> <a name="minimum_object_create_time_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTimeInput"></a>

```python
minimum_object_create_time_input: str
```

- *Type:* str

---

##### `pubsub_avro_format_input`<sup>Optional</sup> <a name="pubsub_avro_format_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.pubsubAvroFormatInput"></a>

```python
pubsub_avro_format_input: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---

##### `text_format_input`<sup>Optional</sup> <a name="text_format_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.textFormatInput"></a>

```python
text_format_input: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `match_glob`<sup>Required</sup> <a name="match_glob" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.matchGlob"></a>

```python
match_glob: str
```

- *Type:* str

---

##### `minimum_object_create_time`<sup>Required</sup> <a name="minimum_object_create_time" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.minimumObjectCreateTime"></a>

```python
minimum_object_create_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettingsCloudStorage
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference <a name="PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

---


### PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference <a name="PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resetClusterId">reset_cluster_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServerInput">bootstrap_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccountInput">gcp_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolIdInput">identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer">bootstrap_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount">gcp_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bootstrap_server_input`<sup>Optional</sup> <a name="bootstrap_server_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServerInput"></a>

```python
bootstrap_server_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `gcp_service_account_input`<sup>Optional</sup> <a name="gcp_service_account_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccountInput"></a>

```python
gcp_service_account_input: str
```

- *Type:* str

---

##### `identity_pool_id_input`<sup>Optional</sup> <a name="identity_pool_id_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolIdInput"></a>

```python
identity_pool_id_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `bootstrap_server`<sup>Required</sup> <a name="bootstrap_server" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.bootstrapServer"></a>

```python
bootstrap_server: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.gcpServiceAccount"></a>

```python
gcp_service_account: str
```

- *Type:* str

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettingsConfluentCloud
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---


### PubsubTopicIngestionDataSourceSettingsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis">put_aws_kinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk">put_aws_msk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs">put_azure_event_hubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage">put_cloud_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud">put_confluent_cloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings">put_platform_logs_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis">reset_aws_kinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsMsk">reset_aws_msk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAzureEventHubs">reset_azure_event_hubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage">reset_cloud_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetConfluentCloud">reset_confluent_cloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings">reset_platform_logs_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_kinesis` <a name="put_aws_kinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis"></a>

```python
def put_aws_kinesis(
  aws_role_arn: str,
  consumer_arn: str,
  gcp_service_account: str,
  stream_arn: str
) -> None
```

###### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis.parameter.awsRoleArn"></a>

- *Type:* str

AWS role ARN to be used for Federated Identity authentication with Kinesis.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

###### `consumer_arn`<sup>Required</sup> <a name="consumer_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis.parameter.consumerArn"></a>

- *Type:* str

The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode.

The consumer must be already
created and ready to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#consumer_arn PubsubTopic#consumer_arn}

---

###### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis.parameter.gcpServiceAccount"></a>

- *Type:* str

The GCP service account to be used for Federated Identity authentication with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

###### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsKinesis.parameter.streamArn"></a>

- *Type:* str

The Kinesis stream ARN to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#stream_arn PubsubTopic#stream_arn}

---

##### `put_aws_msk` <a name="put_aws_msk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk"></a>

```python
def put_aws_msk(
  aws_role_arn: str,
  cluster_arn: str,
  gcp_service_account: str,
  topic: str
) -> None
```

###### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk.parameter.awsRoleArn"></a>

- *Type:* str

AWS role ARN to be used for Federated Identity authentication with MSK.

Check the Pub/Sub docs for how to set up this role and the
required permissions that need to be attached to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}

---

###### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk.parameter.clusterArn"></a>

- *Type:* str

ARN that uniquely identifies the MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#cluster_arn PubsubTopic#cluster_arn}

---

###### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk.parameter.gcpServiceAccount"></a>

- *Type:* str

The GCP service account to be used for Federated Identity authentication with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided role).

The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
equals to this service account number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

###### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAwsMsk.parameter.topic"></a>

- *Type:* str

The name of the MSK topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

##### `put_azure_event_hubs` <a name="put_azure_event_hubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs"></a>

```python
def put_azure_event_hubs(
  client_id: str = None,
  event_hub: str = None,
  gcp_service_account: str = None,
  namespace: str = None,
  resource_group: str = None,
  subscription_id: str = None,
  tenant_id: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.clientId"></a>

- *Type:* str

The Azure event hub client ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#client_id PubsubTopic#client_id}

---

###### `event_hub`<sup>Optional</sup> <a name="event_hub" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.eventHub"></a>

- *Type:* str

The Azure event hub to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#event_hub PubsubTopic#event_hub}

---

###### `gcp_service_account`<sup>Optional</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.gcpServiceAccount"></a>

- *Type:* str

The GCP service account to be used for Federated Identity authentication with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.namespace"></a>

- *Type:* str

The Azure event hub namespace to ingest data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#namespace PubsubTopic#namespace}

---

###### `resource_group`<sup>Optional</sup> <a name="resource_group" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.resourceGroup"></a>

- *Type:* str

The name of the resource group within an Azure subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#resource_group PubsubTopic#resource_group}

---

###### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.subscriptionId"></a>

- *Type:* str

The Azure event hub subscription ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#subscription_id PubsubTopic#subscription_id}

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putAzureEventHubs.parameter.tenantId"></a>

- *Type:* str

The Azure event hub tenant ID to use for ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#tenant_id PubsubTopic#tenant_id}

---

##### `put_cloud_storage` <a name="put_cloud_storage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage"></a>

```python
def put_cloud_storage(
  bucket: str,
  avro_format: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat = None,
  match_glob: str = None,
  minimum_object_create_time: str = None,
  pubsub_avro_format: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat = None,
  text_format: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.bucket"></a>

- *Type:* str

Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements: https://cloud.google.com/storage/docs/buckets#naming.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#bucket PubsubTopic#bucket}

---

###### `avro_format`<sup>Optional</sup> <a name="avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.avroFormat"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat</a>

avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#avro_format PubsubTopic#avro_format}

---

###### `match_glob`<sup>Optional</sup> <a name="match_glob" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.matchGlob"></a>

- *Type:* str

Glob pattern used to match objects that will be ingested.

If unset, all
objects will be ingested. See the supported patterns:
https://cloud.google.com/storage/docs/json_api/v1/objects/list#list-objects-and-prefixes-using-glob

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#match_glob PubsubTopic#match_glob}

---

###### `minimum_object_create_time`<sup>Optional</sup> <a name="minimum_object_create_time" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.minimumObjectCreateTime"></a>

- *Type:* str

The timestamp set in RFC3339 text format.

If set, only objects with a
larger or equal timestamp will be ingested. Unset by default, meaning
all objects will be ingested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#minimum_object_create_time PubsubTopic#minimum_object_create_time}

---

###### `pubsub_avro_format`<sup>Optional</sup> <a name="pubsub_avro_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.pubsubAvroFormat"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat">PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat</a>

pubsub_avro_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#pubsub_avro_format PubsubTopic#pubsub_avro_format}

---

###### `text_format`<sup>Optional</sup> <a name="text_format" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putCloudStorage.parameter.textFormat"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat">PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat</a>

text_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#text_format PubsubTopic#text_format}

---

##### `put_confluent_cloud` <a name="put_confluent_cloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud"></a>

```python
def put_confluent_cloud(
  bootstrap_server: str,
  gcp_service_account: str,
  identity_pool_id: str,
  topic: str,
  cluster_id: str = None
) -> None
```

###### `bootstrap_server`<sup>Required</sup> <a name="bootstrap_server" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud.parameter.bootstrapServer"></a>

- *Type:* str

The Confluent Cloud bootstrap server. The format is url:port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#bootstrap_server PubsubTopic#bootstrap_server}

---

###### `gcp_service_account`<sup>Required</sup> <a name="gcp_service_account" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud.parameter.gcpServiceAccount"></a>

- *Type:* str

The GCP service account to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}

---

###### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud.parameter.identityPoolId"></a>

- *Type:* str

Identity pool ID to be used for Federated Identity authentication with Confluent Cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#identity_pool_id PubsubTopic#identity_pool_id}

---

###### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud.parameter.topic"></a>

- *Type:* str

Name of the Confluent Cloud topic that Pub/Sub will import from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#topic PubsubTopic#topic}

---

###### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putConfluentCloud.parameter.clusterId"></a>

- *Type:* str

The Confluent Cloud cluster ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#cluster_id PubsubTopic#cluster_id}

---

##### `put_platform_logs_settings` <a name="put_platform_logs_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings"></a>

```python
def put_platform_logs_settings(
  severity: str = None
) -> None
```

###### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.putPlatformLogsSettings.parameter.severity"></a>

- *Type:* str

The minimum severity level of Platform Logs that will be written.

If unspecified,
no Platform Logs will be written. Default value: "SEVERITY_UNSPECIFIED" Possible values: ["SEVERITY_UNSPECIFIED", "DISABLED", "DEBUG", "INFO", "WARNING", "ERROR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#severity PubsubTopic#severity}

---

##### `reset_aws_kinesis` <a name="reset_aws_kinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsKinesis"></a>

```python
def reset_aws_kinesis() -> None
```

##### `reset_aws_msk` <a name="reset_aws_msk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAwsMsk"></a>

```python
def reset_aws_msk() -> None
```

##### `reset_azure_event_hubs` <a name="reset_azure_event_hubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetAzureEventHubs"></a>

```python
def reset_azure_event_hubs() -> None
```

##### `reset_cloud_storage` <a name="reset_cloud_storage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetCloudStorage"></a>

```python
def reset_cloud_storage() -> None
```

##### `reset_confluent_cloud` <a name="reset_confluent_cloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetConfluentCloud"></a>

```python
def reset_confluent_cloud() -> None
```

##### `reset_platform_logs_settings` <a name="reset_platform_logs_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.resetPlatformLogsSettings"></a>

```python
def reset_platform_logs_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis">aws_kinesis</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk">aws_msk</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference">PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs">azure_event_hubs</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference">PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage">cloud_storage</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud">confluent_cloud</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference">PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings">platform_logs_settings</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput">aws_kinesis_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMskInput">aws_msk_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubsInput">azure_event_hubs_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput">cloud_storage_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloudInput">confluent_cloud_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput">platform_logs_settings_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_kinesis`<sup>Required</sup> <a name="aws_kinesis" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesis"></a>

```python
aws_kinesis: PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference">PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference</a>

---

##### `aws_msk`<sup>Required</sup> <a name="aws_msk" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMsk"></a>

```python
aws_msk: PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference">PubsubTopicIngestionDataSourceSettingsAwsMskOutputReference</a>

---

##### `azure_event_hubs`<sup>Required</sup> <a name="azure_event_hubs" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubs"></a>

```python
azure_event_hubs: PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference">PubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference</a>

---

##### `cloud_storage`<sup>Required</sup> <a name="cloud_storage" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorage"></a>

```python
cloud_storage: PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference">PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference</a>

---

##### `confluent_cloud`<sup>Required</sup> <a name="confluent_cloud" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloud"></a>

```python
confluent_cloud: PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference">PubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference</a>

---

##### `platform_logs_settings`<sup>Required</sup> <a name="platform_logs_settings" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettings"></a>

```python
platform_logs_settings: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference</a>

---

##### `aws_kinesis_input`<sup>Optional</sup> <a name="aws_kinesis_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsKinesisInput"></a>

```python
aws_kinesis_input: PubsubTopicIngestionDataSourceSettingsAwsKinesis
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsKinesis">PubsubTopicIngestionDataSourceSettingsAwsKinesis</a>

---

##### `aws_msk_input`<sup>Optional</sup> <a name="aws_msk_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.awsMskInput"></a>

```python
aws_msk_input: PubsubTopicIngestionDataSourceSettingsAwsMsk
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAwsMsk">PubsubTopicIngestionDataSourceSettingsAwsMsk</a>

---

##### `azure_event_hubs_input`<sup>Optional</sup> <a name="azure_event_hubs_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.azureEventHubsInput"></a>

```python
azure_event_hubs_input: PubsubTopicIngestionDataSourceSettingsAzureEventHubs
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsAzureEventHubs">PubsubTopicIngestionDataSourceSettingsAzureEventHubs</a>

---

##### `cloud_storage_input`<sup>Optional</sup> <a name="cloud_storage_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.cloudStorageInput"></a>

```python
cloud_storage_input: PubsubTopicIngestionDataSourceSettingsCloudStorage
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsCloudStorage">PubsubTopicIngestionDataSourceSettingsCloudStorage</a>

---

##### `confluent_cloud_input`<sup>Optional</sup> <a name="confluent_cloud_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.confluentCloudInput"></a>

```python
confluent_cloud_input: PubsubTopicIngestionDataSourceSettingsConfluentCloud
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsConfluentCloud">PubsubTopicIngestionDataSourceSettingsConfluentCloud</a>

---

##### `platform_logs_settings_input`<sup>Optional</sup> <a name="platform_logs_settings_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.platformLogsSettingsInput"></a>

```python
platform_logs_settings_input: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettings
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettings">PubsubTopicIngestionDataSourceSettings</a>

---


### PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference <a name="PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity">reset_severity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.resetSeverity"></a>

```python
def reset_severity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings">PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings</a>

---


### PubsubTopicMessageStoragePolicyOutputReference <a name="PubsubTopicMessageStoragePolicyOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resetEnforceInTransit">reset_enforce_in_transit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enforce_in_transit` <a name="reset_enforce_in_transit" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.resetEnforceInTransit"></a>

```python
def reset_enforce_in_transit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput">allowed_persistence_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransitInput">enforce_in_transit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions">allowed_persistence_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit">enforce_in_transit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_persistence_regions_input`<sup>Optional</sup> <a name="allowed_persistence_regions_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegionsInput"></a>

```python
allowed_persistence_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforce_in_transit_input`<sup>Optional</sup> <a name="enforce_in_transit_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransitInput"></a>

```python
enforce_in_transit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_persistence_regions`<sup>Required</sup> <a name="allowed_persistence_regions" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.allowedPersistenceRegions"></a>

```python
allowed_persistence_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforce_in_transit`<sup>Required</sup> <a name="enforce_in_transit" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.enforceInTransit"></a>

```python
enforce_in_transit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicyOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicMessageStoragePolicy
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageStoragePolicy">PubsubTopicMessageStoragePolicy</a>

---


### PubsubTopicMessageTransformsJavascriptUdfOutputReference <a name="PubsubTopicMessageTransformsJavascriptUdfOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicMessageTransformsJavascriptUdf
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

---


### PubsubTopicMessageTransformsList <a name="PubsubTopicMessageTransformsList" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicMessageTransformsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PubsubTopicMessageTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PubsubTopicMessageTransforms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]]

---


### PubsubTopicMessageTransformsOutputReference <a name="PubsubTopicMessageTransformsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicMessageTransformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf">put_javascript_udf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetJavascriptUdf">reset_javascript_udf</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_javascript_udf` <a name="put_javascript_udf" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf"></a>

```python
def put_javascript_udf(
  code: str,
  function_name: str
) -> None
```

###### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf.parameter.code"></a>

- *Type:* str

JavaScript code that contains a function 'function_name' with the following signature: ```   /**   * Transforms a Pub/Sub message.

* *

---

###### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.putJavascriptUdf.parameter.functionName"></a>

- *Type:* str

Name of the JavaScript function that should be applied to Pub/Sub messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/pubsub_topic#function_name PubsubTopic#function_name}

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_javascript_udf` <a name="reset_javascript_udf" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.resetJavascriptUdf"></a>

```python
def reset_javascript_udf() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdf">javascript_udf</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference">PubsubTopicMessageTransformsJavascriptUdfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdfInput">javascript_udf_input</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `javascript_udf`<sup>Required</sup> <a name="javascript_udf" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdf"></a>

```python
javascript_udf: PubsubTopicMessageTransformsJavascriptUdfOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdfOutputReference">PubsubTopicMessageTransformsJavascriptUdfOutputReference</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `javascript_udf_input`<sup>Optional</sup> <a name="javascript_udf_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.javascriptUdfInput"></a>

```python
javascript_udf_input: PubsubTopicMessageTransformsJavascriptUdf
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsJavascriptUdf">PubsubTopicMessageTransformsJavascriptUdf</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransformsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PubsubTopicMessageTransforms]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicMessageTransforms">PubsubTopicMessageTransforms</a>]

---


### PubsubTopicSchemaSettingsOutputReference <a name="PubsubTopicSchemaSettingsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicSchemaSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettingsOutputReference.property.internalValue"></a>

```python
internal_value: PubsubTopicSchemaSettings
```

- *Type:* <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicSchemaSettings">PubsubTopicSchemaSettings</a>

---


### PubsubTopicTimeoutsOutputReference <a name="PubsubTopicTimeoutsOutputReference" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import pubsub_topic

pubsubTopic.PubsubTopicTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.pubsubTopic.PubsubTopicTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PubsubTopicTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.pubsubTopic.PubsubTopicTimeouts">PubsubTopicTimeouts</a>]

---



