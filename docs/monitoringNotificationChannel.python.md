# `google_monitoring_notification_channel`

Refer to the Terraform Registory for docs: [`google_monitoring_notification_channel`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel).

# `monitoringNotificationChannel` Submodule <a name="`monitoringNotificationChannel` Submodule" id="@cdktf/provider-google.monitoringNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringNotificationChannel <a name="MonitoringNotificationChannel" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel google_monitoring_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_notification_channel

monitoringNotificationChannel.MonitoringNotificationChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  description: str = None,
  display_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  sensitive_labels: MonitoringNotificationChannelSensitiveLabels = None,
  timeouts: MonitoringNotificationChannelTimeouts = None,
  user_labels: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional human-readable description of this notification channel. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether notifications are forwarded to the described channel. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#id MonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#project MonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.sensitiveLabels">sensitive_labels</a></code> | <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a></code> | sensitive_labels block. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.type"></a>

- *Type:* str

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#type MonitoringNotificationChannel#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.description"></a>

- *Type:* str

An optional human-readable description of this notification channel.

This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#description MonitoringNotificationChannel#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.displayName"></a>

- *Type:* str

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#display_name MonitoringNotificationChannel#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether notifications are forwarded to the described channel.

This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#enabled MonitoringNotificationChannel#enabled}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel).

If false, channels that are still
referenced by an existing alerting policy will fail to be
deleted in a delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#force_delete MonitoringNotificationChannel#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#id MonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#labels MonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#project MonitoringNotificationChannel#project}.

---

##### `sensitive_labels`<sup>Optional</sup> <a name="sensitive_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.sensitiveLabels"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a>

sensitive_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#sensitive_labels MonitoringNotificationChannel#sensitive_labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#timeouts MonitoringNotificationChannel#timeouts}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.Initializer.parameter.userLabels"></a>

- *Type:* typing.Mapping[str]

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#user_labels MonitoringNotificationChannel#user_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putSensitiveLabels">put_sensitive_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetSensitiveLabels">reset_sensitive_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetUserLabels">reset_user_labels</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_sensitive_labels` <a name="put_sensitive_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putSensitiveLabels"></a>

```python
def put_sensitive_labels(
  auth_token: str = None,
  password: str = None,
  service_key: str = None
) -> None
```

###### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putSensitiveLabels.parameter.authToken"></a>

- *Type:* str

An authorization token for a notification channel. Channel types that support this field include: slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#auth_token MonitoringNotificationChannel#auth_token}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putSensitiveLabels.parameter.password"></a>

- *Type:* str

An password for a notification channel. Channel types that support this field include: webhook_basicauth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#password MonitoringNotificationChannel#password}

---

###### `service_key`<sup>Optional</sup> <a name="service_key" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putSensitiveLabels.parameter.serviceKey"></a>

- *Type:* str

An servicekey token for a notification channel. Channel types that support this field include: pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#service_key MonitoringNotificationChannel#service_key}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#create MonitoringNotificationChannel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#delete MonitoringNotificationChannel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#update MonitoringNotificationChannel#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_sensitive_labels` <a name="reset_sensitive_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetSensitiveLabels"></a>

```python
def reset_sensitive_labels() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_labels` <a name="reset_user_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.resetUserLabels"></a>

```python
def reset_user_labels() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import monitoring_notification_channel

monitoringNotificationChannel.MonitoringNotificationChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import monitoring_notification_channel

monitoringNotificationChannel.MonitoringNotificationChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import monitoring_notification_channel

monitoringNotificationChannel.MonitoringNotificationChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.sensitiveLabels">sensitive_labels</a></code> | <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference">MonitoringNotificationChannelSensitiveLabelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference">MonitoringNotificationChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.verificationStatus">verification_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.sensitiveLabelsInput">sensitive_labels_input</a></code> | <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.userLabelsInput">user_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitive_labels`<sup>Required</sup> <a name="sensitive_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.sensitiveLabels"></a>

```python
sensitive_labels: MonitoringNotificationChannelSensitiveLabelsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference">MonitoringNotificationChannelSensitiveLabelsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.timeouts"></a>

```python
timeouts: MonitoringNotificationChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference">MonitoringNotificationChannelTimeoutsOutputReference</a>

---

##### `verification_status`<sup>Required</sup> <a name="verification_status" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.verificationStatus"></a>

```python
verification_status: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sensitive_labels_input`<sup>Optional</sup> <a name="sensitive_labels_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.sensitiveLabelsInput"></a>

```python
sensitive_labels_input: MonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MonitoringNotificationChannelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_labels_input`<sup>Optional</sup> <a name="user_labels_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.userLabelsInput"></a>

```python
user_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringNotificationChannelConfig <a name="MonitoringNotificationChannelConfig" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_notification_channel

monitoringNotificationChannel.MonitoringNotificationChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  description: str = None,
  display_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  sensitive_labels: MonitoringNotificationChannelSensitiveLabels = None,
  timeouts: MonitoringNotificationChannelTimeouts = None,
  user_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.type">type</a></code> | <code>str</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.description">description</a></code> | <code>str</code> | An optional human-readable description of this notification channel. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.displayName">display_name</a></code> | <code>str</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether notifications are forwarded to the described channel. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#id MonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#project MonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.sensitiveLabels">sensitive_labels</a></code> | <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a></code> | sensitive_labels block. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#type MonitoringNotificationChannel#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional human-readable description of this notification channel.

This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#description MonitoringNotificationChannel#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#display_name MonitoringNotificationChannel#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether notifications are forwarded to the described channel.

This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#enabled MonitoringNotificationChannel#enabled}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel).

If false, channels that are still
referenced by an existing alerting policy will fail to be
deleted in a delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#force_delete MonitoringNotificationChannel#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#id MonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#labels MonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#project MonitoringNotificationChannel#project}.

---

##### `sensitive_labels`<sup>Optional</sup> <a name="sensitive_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.sensitiveLabels"></a>

```python
sensitive_labels: MonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a>

sensitive_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#sensitive_labels MonitoringNotificationChannel#sensitive_labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.timeouts"></a>

```python
timeouts: MonitoringNotificationChannelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#timeouts MonitoringNotificationChannel#timeouts}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelConfig.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#user_labels MonitoringNotificationChannel#user_labels}

---

### MonitoringNotificationChannelSensitiveLabels <a name="MonitoringNotificationChannelSensitiveLabels" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_notification_channel

monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels(
  auth_token: str = None,
  password: str = None,
  service_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.authToken">auth_token</a></code> | <code>str</code> | An authorization token for a notification channel. Channel types that support this field include: slack. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.password">password</a></code> | <code>str</code> | An password for a notification channel. Channel types that support this field include: webhook_basicauth. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.serviceKey">service_key</a></code> | <code>str</code> | An servicekey token for a notification channel. Channel types that support this field include: pagerduty. |

---

##### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

An authorization token for a notification channel. Channel types that support this field include: slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#auth_token MonitoringNotificationChannel#auth_token}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.password"></a>

```python
password: str
```

- *Type:* str

An password for a notification channel. Channel types that support this field include: webhook_basicauth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#password MonitoringNotificationChannel#password}

---

##### `service_key`<sup>Optional</sup> <a name="service_key" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

An servicekey token for a notification channel. Channel types that support this field include: pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#service_key MonitoringNotificationChannel#service_key}

---

### MonitoringNotificationChannelTimeouts <a name="MonitoringNotificationChannelTimeouts" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_notification_channel

monitoringNotificationChannel.MonitoringNotificationChannelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#create MonitoringNotificationChannel#create}. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#delete MonitoringNotificationChannel#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#update MonitoringNotificationChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#create MonitoringNotificationChannel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#delete MonitoringNotificationChannel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/monitoring_notification_channel#update MonitoringNotificationChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringNotificationChannelSensitiveLabelsOutputReference <a name="MonitoringNotificationChannelSensitiveLabelsOutputReference" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_notification_channel

monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken">reset_auth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey">reset_service_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_token` <a name="reset_auth_token" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken"></a>

```python
def reset_auth_token() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_service_key` <a name="reset_service_key" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey"></a>

```python
def reset_service_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput">auth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput">service_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken">auth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_token_input`<sup>Optional</sup> <a name="auth_token_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput"></a>

```python
auth_token_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `service_key_input`<sup>Optional</sup> <a name="service_key_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput"></a>

```python
service_key_input: str
```

- *Type:* str

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue"></a>

```python
internal_value: MonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelSensitiveLabels">MonitoringNotificationChannelSensitiveLabels</a>

---


### MonitoringNotificationChannelTimeoutsOutputReference <a name="MonitoringNotificationChannelTimeoutsOutputReference" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import monitoring_notification_channel

monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitoringNotificationChannelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.monitoringNotificationChannel.MonitoringNotificationChannelTimeouts">MonitoringNotificationChannelTimeouts</a>]

---



