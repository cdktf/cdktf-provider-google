# `dataGoogleMonitoringNotificationChannel` Submodule <a name="`dataGoogleMonitoringNotificationChannel` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringNotificationChannel <a name="DataGoogleMonitoringNotificationChannel" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel google_monitoring_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_notification_channel

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  type: str = None,
  user_labels: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.displayName"></a>

- *Type:* str

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#display_name DataGoogleMonitoringNotificationChannel#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#labels DataGoogleMonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.type"></a>

- *Type:* str

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#type DataGoogleMonitoringNotificationChannel#type}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.userLabels"></a>

- *Type:* typing.Mapping[str]

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#user_labels DataGoogleMonitoringNotificationChannel#user_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetUserLabels">reset_user_labels</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_user_labels` <a name="reset_user_labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetUserLabels"></a>

```python
def reset_user_labels() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_notification_channel

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_notification_channel

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_notification_channel

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_notification_channel

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleMonitoringNotificationChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleMonitoringNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forceDelete">force_delete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.sensitiveLabels">sensitive_labels</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList">DataGoogleMonitoringNotificationChannelSensitiveLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.verificationStatus">verification_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabelsInput">user_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forceDelete"></a>

```python
force_delete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitive_labels`<sup>Required</sup> <a name="sensitive_labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.sensitiveLabels"></a>

```python
sensitive_labels: DataGoogleMonitoringNotificationChannelSensitiveLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList">DataGoogleMonitoringNotificationChannelSensitiveLabelsList</a>

---

##### `verification_status`<sup>Required</sup> <a name="verification_status" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.verificationStatus"></a>

```python
verification_status: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_labels_input`<sup>Optional</sup> <a name="user_labels_input" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabelsInput"></a>

```python
user_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringNotificationChannelConfig <a name="DataGoogleMonitoringNotificationChannelConfig" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_notification_channel

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  type: str = None,
  user_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.displayName">display_name</a></code> | <code>str</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.type">type</a></code> | <code>str</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#display_name DataGoogleMonitoringNotificationChannel#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.labels"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#labels DataGoogleMonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#type DataGoogleMonitoringNotificationChannel#type}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/monitoring_notification_channel#user_labels DataGoogleMonitoringNotificationChannel#user_labels}

---

### DataGoogleMonitoringNotificationChannelSensitiveLabels <a name="DataGoogleMonitoringNotificationChannelSensitiveLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_notification_channel

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringNotificationChannelSensitiveLabelsList <a name="DataGoogleMonitoringNotificationChannelSensitiveLabelsList" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_notification_channel

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference <a name="DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_notification_channel

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken">auth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels">DataGoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels">DataGoogleMonitoringNotificationChannelSensitiveLabels</a>

---



